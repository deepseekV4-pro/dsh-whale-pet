window.__ModuleLoader__.load({
	id: "@dsh-local/dsh-whale-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let React = require("react");

		var PHRASES = [
			"你好呀，我是小鲸鱼 🐳",
			"今天也要加油哦～",
			"我在认真听你说",
			"需要帮忙就叫我",
			"咕噜咕噜，我在呢",
			"摸摸我，我会开心哦",
		];
		var bubbleSeq = 0;

		// DeepSeek 官方鲸鱼 logo 的精确 path（来自 deepseek-harness-desktop/build/favicon-official.svg）
		var LOGO_D = "M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z";

		var CSS = `
.dsh-pet-root{position:fixed;right:20px;bottom:20px;z-index:3000;user-select:none;-webkit-user-select:none;touch-action:none;cursor:grab;pointer-events:auto;}
.dsh-pet-root:active{cursor:grabbing;}
.dsh-pet-whale{display:block;width:128px;height:auto;filter:drop-shadow(0 8px 16px rgba(77,107,254,.38));animation:dsh-pet-float 4.6s ease-in-out infinite;transform-origin:center;}
@keyframes dsh-pet-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}
.dsh-pet-spout{transform-box:fill-box;transform-origin:center;opacity:0;animation:dsh-pet-spout 5.6s ease-in-out infinite;}
@keyframes dsh-pet-spout{0%,58%,100%{opacity:0;transform:translateY(4px) scale(.7)}68%{opacity:.95;transform:translateY(0) scale(1)}84%{opacity:0;transform:translateY(-9px) scale(1.15)}}
.dsh-pet-tools{position:absolute;top:-30px;right:2px;display:flex;gap:6px;opacity:0;transition:opacity .16s ease;}
.dsh-pet-root:hover .dsh-pet-tools{opacity:1;}
.dsh-pet-tool{width:24px;height:24px;border:none;border-radius:50%;background:rgba(29,43,85,.72);color:#fff;font-size:14px;line-height:1;cursor:pointer;display:grid;place-items:center;}
.dsh-pet-tool:hover{background:rgba(29,43,85,.92);}
.dsh-pet-bubble{position:absolute;left:50%;top:-56px;transform:translateX(-50%);max-width:180px;padding:8px 12px;border-radius:12px;background:#fff;color:#24304d;font-size:13px;line-height:18px;white-space:nowrap;box-shadow:0 6px 18px rgba(29,43,85,.18);animation:dsh-pet-bubble 2.4s ease forwards;}
@keyframes dsh-pet-bubble{0%{opacity:0;transform:translate(-50%,8px) scale(.8)}12%{opacity:1;transform:translate(-50%,0) scale(1)}78%{opacity:1}100%{opacity:0;transform:translate(-50%,-6px) scale(.96)}}
.dsh-pet-mini{position:fixed;right:20px;bottom:20px;z-index:3000;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#7C9BFF,#4D6BFE);box-shadow:0 8px 18px rgba(77,107,254,.4);display:grid;place-items:center;cursor:pointer;pointer-events:auto;transition:transform .15s ease;}
.dsh-pet-mini:hover{transform:scale(1.08);}
.dsh-pet-mini-emoji{font-size:24px;line-height:1;}
`;

		function WhaleSvg(props) {
			return React.createElement("svg", Object.assign({
				viewBox: "0 0 50 50",
				className: "dsh-pet-whale",
				role: "img",
				"aria-label": "DeepSeek 鲸鱼桌宠",
			}, props),
				React.createElement("defs", null,
					React.createElement("linearGradient", { id: "dsh-pet-body", x1: "0", y1: "0", x2: "0", y2: "1" },
						React.createElement("stop", { offset: "0%", stopColor: "#6D8DFF" }),
						React.createElement("stop", { offset: "100%", stopColor: "#4D6BFE" }),
					),
				),
				React.createElement("path", { d: LOGO_D, fill: "url(#dsh-pet-body)", fillRule: "nonzero" }),
				React.createElement("g", { className: "dsh-pet-spout" },
					React.createElement("circle", { cx: 24, cy: 9, r: 1.3, fill: "#A9C4FF" }),
					React.createElement("circle", { cx: 29, cy: 4, r: 1, fill: "#A9C4FF" }),
					React.createElement("circle", { cx: 35, cy: 7, r: 0.8, fill: "#A9C4FF" }),
				),
			);
		}

		function WhalePet() {
			var minimized = React.useState(false);
			var isMin = minimized[0];
			var setMin = minimized[1];
			var posState = React.useState(null);
			var pos = posState[0];
			var setPos = posState[1];
			var bubbleState = React.useState(null);
			var bubble = bubbleState[0];
			var setBubble = bubbleState[1];
			var drag = React.useRef(null);

			if (isMin) {
				return React.createElement("div", {
					className: "dsh-pet-mini",
					title: "展开鲸鱼桌宠",
					role: "button",
					tabIndex: 0,
					onClick: function () { setMin(false); },
				}, React.createElement("span", { className: "dsh-pet-mini-emoji" }, "🐳"));
			}

			function onPointerDown(e) {
				var el = e.currentTarget;
				var rect = el.getBoundingClientRect();
				drag.current = { sx: e.clientX, sy: e.clientY, left: rect.left, top: rect.top, moved: false };
				try { el.setPointerCapture(e.pointerId); } catch (err) {}
			}
			function onPointerMove(e) {
				var d = drag.current;
				if (!d) return;
				var dx = e.clientX - d.sx;
				var dy = e.clientY - d.sy;
				if (dx * dx + dy * dy > 16) d.moved = true;
				setPos({ left: d.left + dx, top: d.top + dy });
			}
			function onPointerUp() { drag.current = null; }
			function onClickBody() {
				var d = drag.current;
				if (d && d.moved) return;
				bubbleSeq += 1;
				setBubble({ text: PHRASES[Math.floor(Math.random() * PHRASES.length)], key: bubbleSeq });
			}
			function onMinimize(e) {
				e.stopPropagation();
				setMin(true);
			}

			var style = pos ? { left: pos.left, top: pos.top, right: "auto", bottom: "auto" } : undefined;

			return React.createElement("div", {
				className: "dsh-pet-root",
				style: style,
				onPointerDown: onPointerDown,
				onPointerMove: onPointerMove,
				onPointerUp: onPointerUp,
				onPointerCancel: onPointerUp,
				onClick: onClickBody,
			},
				React.createElement("div", { className: "dsh-pet-tools" },
					React.createElement("button", { type: "button", className: "dsh-pet-tool", title: "收起", "aria-label": "收起鲸鱼桌宠", onClick: onMinimize }, "—"),
				),
				bubble ? React.createElement("div", {
					className: "dsh-pet-bubble",
					key: bubble.key,
					onAnimationEnd: function () { setBubble(null); },
				}, bubble.text) : null,
				React.createElement(WhaleSvg, null),
			);
		}

		exports.inject = ["slots"];
		exports.apply = function apply(ctx) {
			ctx.effect(() => {
				var style = document.createElement("style");
				style.setAttribute("data-plugin", "dsh-whale-pet");
				style.textContent = CSS;
				document.head.appendChild(style);
				return () => { style.remove(); };
			}, "whale-pet: styles");

			ctx.slots.inject("shell.overlay", () => ctx.slots.register(
				{ name: "shell.overlay", id: "whale-pet", order: 0 },
				() => React.createElement(WhalePet, null),
			));
		};

		return module.exports;
	}
});
