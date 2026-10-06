// push-via-api.mjs — 通过 api.github.com 的 git data API 推仓库，绕过 github.com 的 git 端口封锁。
// 用法：GH_TOKEN=ghp_xxx node push-via-api.mjs [repo] [dir]
// 需要 GH_TOKEN（必填）。用户名从 /user 自动取。
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const TOKEN = process.env.GH_TOKEN
const REPO = process.argv[2] || 'dsh-whale-pet'
const DIR = resolve(process.argv[3] || '.')
const API = 'https://api.github.com'

if (!TOKEN) { console.error('缺少 GH_TOKEN 环境变量'); process.exit(1) }

const headers = {
  Authorization: `token ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'dsh-whale-pet',
  'X-GitHub-Api-Version': '2022-11-28',
}

async function req(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { ...headers, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (res.status >= 400) throw new Error(`${method} ${path} -> ${res.status}: ${text.slice(0, 600)}`)
  return text ? JSON.parse(text) : null
}

function collectFiles(dir, base = dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...collectFiles(p, base))
    else out.push(relative(base, p))
  }
  return out
}

// 0. 取用户名
const me = await req('GET', '/user')
const OWNER = me.login
console.log(`[push] 身份: ${OWNER} (${me.name || ''})`)

// 1. 建仓库（公开）
try {
  await req('POST', '/user/repos', {
    name: REPO, private: false,
    description: 'DeepSeek whale desktop pet for DSH Web GUI — official logo path',
    homepage: '',
  })
  console.log(`[push] 已创建仓库 ${OWNER}/${REPO}`)
} catch (e) {
  if (/already exists/i.test(e.message)) console.log(`[push] 仓库 ${OWNER}/${REPO} 已存在，复用`)
  else throw e
}

// 2. 上传 blob
const files = collectFiles(DIR).sort()
const tree = []
for (const f of files) {
  const content = readFileSync(join(DIR, f))
  const blob = await req('POST', `/repos/${OWNER}/${REPO}/git/blobs`, {
    content: content.toString('base64'), encoding: 'base64',
  })
  tree.push({ path: f, mode: '100644', type: 'blob', sha: blob.sha })
  console.log(`[push] blob ${f}  ${blob.sha.slice(0, 7)}`)
}

// 3. 建 tree
const tr = await req('POST', `/repos/${OWNER}/${REPO}/git/trees`, { tree })
console.log(`[push] tree ${tr.sha.slice(0, 7)} (${files.length} files)`)

// 4. 建 commit
const commit = await req('POST', `/repos/${OWNER}/${REPO}/git/commits`, {
  message: 'feat: DeepSeek whale desktop pet for DSH Web GUI (official logo path)',
  tree: tr.sha,
})
console.log(`[push] commit ${commit.sha.slice(0, 7)}`)

// 5. 指到 main
await req('PATCH', `/repos/${OWNER}/${REPO}/git/refs/heads/main`, { sha: commit.sha, force: true })

console.log(`\n✅ 已推送: https://github.com/${OWNER}/${REPO}`)
