# Personal Homepage

一个基于原生 HTML、CSS 和 JavaScript 的个人主页与博客。

## 本地预览

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 更新内容

### 修改个人信息

编辑 `index.html` 中的以下内容：

- 姓名或昵称
- 个人简介
- 联系方式
- 项目名称、描述、链接和标签

### 更新动态

编辑 `script.js` 顶部的 `updates` 数组，每条动态包含：

```js
{
  date: "2026.11.19",
  title: "动态标题",
  content: "动态正文"
}
```

## 部署到 GitHub Pages

在仓库的 **Settings → Pages** 中，将 Source 设置为 **Deploy from a branch**，Branch 选择 `main` 和 `/ (root)`，保存后等待部署完成。
