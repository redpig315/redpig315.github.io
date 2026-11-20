# Personal Homepage

一个基于原生 HTML、CSS 和 JavaScript 的个人主页与博客，采用吉卜力（宫崎骏）风格设计，吉祥物为龙猫 🍃。

## 栏目

| 栏目 | 说明 |
| --- | --- |
| 首页 | 个人简介 + 龙猫主视觉（吉卜力官方剧照） |
| AI热点 | 通过 rss2json 实时抓取量子位 / Solidot / 少数派的 RSS，抓取失败时自动展示兜底资讯入口 |
| 项目 | GitHub 仓库卡片，数据在 `script.js` 的 `repositories` 数组中维护 |
| 茶歇 | 吉卜力电影经典台词语录，支持"换一句" |
| 关于 | 个人介绍 |

## 本地预览

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 更新内容

### 修改个人信息

编辑 `index.html` 中的姓名、简介、联系方式，以及 `script.js` 中 `repositories` 数组的项目信息。

### 更新 AI 热点信息源

编辑 `script.js` 顶部的 `FEEDS` 数组：

```js
const FEEDS = [
  { name: "量子位", url: "https://www.qbitai.com/feed" },
  { name: "Solidot", url: "https://www.solidot.org/index.rss" },
  { name: "少数派", url: "https://sspai.com/feed" }
];
```

### 更新茶歇语录

编辑 `script.js` 中的 `quotes` 数组。

### 更换龙猫图片

当前使用吉卜力官网公开的官方剧照（`https://www.ghibli.jp/gallery/totoro030.jpg`），吉卜力允许在合理范围内免费使用。如需换成其他图片，替换 `index.html` 中 `.portrait` 的 `src`，或把图片放进仓库 `assets/` 目录后引用本地路径。

## 部署到 GitHub Pages

在仓库的 **Settings → Pages** 中，将 Source 设置为 **Deploy from a branch**，Branch 选择 `main` 和 `/ (root)`，保存后等待部署完成。
