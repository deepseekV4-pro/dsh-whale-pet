# 🐳 dsh-whale-pet

DeepSeek 鲸鱼桌宠 —— 一个给 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) Web GUI 用的客户端插件：在页面右下角漂浮一只 DeepSeek 官方 logo 形状的蓝色鲸鱼，可拖动、会漂浮/摇摆/喷水、点击吐气泡、悬停收起成小鲸鱼徽章。

## ✨ 功能

- **官方 logo 形状**：直接使用 DeepSeek 官方鲸鱼 favicon 的精确 SVG path（`viewBox 0 0 50 50`，`fill-rule:nonzero`），品牌蓝渐变
- **动画**：上下漂浮 + 轻微摇摆 + 周期性喷水
- **可拖动**：按住拖到页面任意位置（pointer capture，不依赖全局 `window`）
- **点击吐气泡**：随机一句友好问候，2.4s 后自动消失
- **收起/展开**：悬停出现「—」按钮，收起成右下角小鲸鱼徽章，点徽章再展开

## 📦 安装

### 前置

- 已初始化目标 profile（如 `web`）
- 已安装 pnpm

### 从源码安装

```sh
# 1. 克隆仓库
git clone https://github.com/<your-name>/dsh-whale-pet.git
cd dsh-whale-pet

# 2. 安装到 profile
dsh plugin --profile web add .
```

### 手工安装（无 pnpm 时）

把仓库放进 profile 的 node_modules 并加一行 composition：

```sh
PROFILE="$HOME/.dsh/profiles/web"
mkdir -p "$PROFILE/node_modules/@dsh-local/dsh-whale-pet"
cp -r package.json lib "$PROFILE/node_modules/@dsh-local/dsh-whale-pet/"
```

然后在 `$PROFILE/cordis.patch.yml` 末尾加：

```yaml
- insert:
    - id: dsh-whale-pet
      name: '@dsh-local/dsh-whale-pet'
```

重启 `dsh web` 后刷新页面即可看到鲸鱼。

## 📁 项目结构

```
dsh-whale-pet/
├── package.json          # bundle 清单（dsh.client 声明）
├── cordis.patch.yml      # composition 插入行（安装参考）
├── lib/
│   ├── index.js          # Host 空半区（浏览器插件无需宿主逻辑）
│   └── client.js         # Client 半区：鲸鱼 SVG + 动画 + 拖动 + 气泡
└── README.md
```

## ⚙️ 工作原理

| 端 | 职责 |
|---|---|
| Client | `ctx.slots.inject('shell.overlay', …)` 把鲸鱼注册进帧级浮动层；`React` 来自模块表 `require("react")`；样式经 `ctx.effect` 注入 `<style>` 并在卸载时清理 |

## 🔁 更新

- 改 `lib/client.js` 后重新构建（本仓库客户端无需构建，直接改文件），刷新页面即可（client bundle 按 rev 重新拉取）
- 改 `package.json` / composition 后需重启 `dsh web`

## ⚠️ 商标说明

鲸鱼形状取自 DeepSeek 官方 logo，是 DeepSeek 的商标。本仓库仅作为个人桌面宠物用途的致敬实现，请勿用于商业用途或冒用品牌。

## 📄 License

MIT（代码部分）。DeepSeek 鲸鱼 logo 形状的商标权利归 DeepSeek 所有。
