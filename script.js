/* ============================================================
 * redpig315.github.io —— script.js
 * 数据来源：仓库列表为手动维护；AI热点通过 rss2json 实时抓取 RSS。
 * ============================================================ */

/* ---------- 仓库数据（手动维护，可自行增删） ---------- */
const repositories = [
  { name: "redpig315.github.io", description: "我的个人主页与博客，展示项目、动态与关于我。", language: "HTML", url: "https://github.com/redpig315/redpig315.github.io" },
  { name: "traefik", description: "The Cloud Native Application Proxy", language: "Go", url: "https://github.com/redpig315/traefik" },
  { name: "op-note", description: "该仓库已迁移至我的博客 https://github.com/shfshanyue/blog/tree/master/op", language: "未注明", url: "https://github.com/redpig315/op-note" },
  { name: "manba", description: "HTTP API Gateway", language: "Go", url: "https://github.com/redpig315/manba" },
  { name: "jidandan", description: "我的脚本库", language: "Python", url: "https://github.com/redpig315/jidandan" },
  { name: "retailbook", description: "暂时还没有什么想法，我只是想做点和微信和银行相关的应用而已", language: "C", url: "https://github.com/redpig315/retailbook" },
  { name: "Hyperledger-Fabric", description: "Hyperledger Fabric 中文文档，翻译自官方 release-1.1 文档。", language: "未注明", url: "https://github.com/redpig315/Hyperledger-Fabric" },
  { name: "webshell", description: "This is a webshell open source project", language: "PHP", url: "https://github.com/redpig315/webshell" },
  { name: "CTF2019", description: "use this repository to save ctf info", language: "未注明", url: "https://github.com/redpig315/CTF2019" },
  { name: "useGit", description: "Git 学习及关联 GitHub 网站实践手册", language: "未注明", url: "https://github.com/redpig315/useGit" }
];

/* ---------- AI 热点：RSS 抓取配置 ----------
 * 通过免费的 rss2json 服务把 RSS 转成 JSON（无需注册，有频率限制）。
 * 如需增删信息源，改 FEEDS 数组即可。抓取失败时展示 fallbackNews。
 */
const FEEDS = [
  { name: "量子位", url: "https://www.qbitai.com/feed" },
  { name: "Solidot", url: "https://www.solidot.org/index.rss" },
  { name: "少数派", url: "https://sspai.com/feed" }
];

const AI_PATTERN = /AI|人工智能|大模型|LLM|GPT|AGI|智能体|Agent|机器学习|深度学习|神经网络|多模态|扩散模型|OpenAI|Claude|Gemini|DeepSeek|文心|通义/i;

const fallbackNews = [
  { title: "机器之心：人工智能领域前沿资讯与研究解读", source: "兜底推荐", date: "", url: "https://www.jiqizhixin.com/" },
  { title: "HuggingFace：开源大模型、数据集与 AI 社区动态", source: "兜底推荐", date: "", url: "https://huggingface.co/" },
  { title: "arXiv cs.AI：最新人工智能学术论文", source: "兜底推荐", date: "", url: "https://arxiv.org/list/cs.AI/recent" },
  { title: "36氪：AI 与科技行业商业资讯", source: "兜底推荐", date: "", url: "https://36kr.com/" },
  { title: "Solidot：科技与开源社区新闻", source: "兜底推荐", date: "", url: "https://www.solidot.org/" },
  { title: "量子位：AI 行业动态与产品评测", source: "兜底推荐", date: "", url: "https://www.qbitai.com/" }
];

/* ---------- 茶歇：吉卜力经典台词 ---------- */
const quotes = [
  { text: "生活坏到一定程度就会好起来，因为它无法更坏。努力过后，才知道许多事情，坚持坚持，就过来了。", from: "——《龙猫》 宫崎骏" },
  { text: "只有心里怀着纯真的人，才能看见龙猫。", from: "——《龙猫》 宫崎骏" },
  { text: "我们总在最深的红尘里相遇，又在最浅的告别里离散。但不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。", from: "——《千与千寻》 宫崎骏" },
  { text: "我曾经以为，世上最安稳的是大地，最辽阔的是天空。后来才知道，最辽阔的是人的心。", from: "——《哈尔的移动城堡》 宫崎骏" },
  { text: "起风了，唯有努力生存。", from: "——《起风了》 宫崎骏" },
  { text: "不管你曾经被伤害得有多深，总会有一个人的出现，让你原谅之前生活对你所有的刁难。", from: "——《幽灵公主》 宫崎骏" },
  { text: "不要对外表过分在意，最重要是心灵。即使再艰难，也要像风一样继续飞翔。", from: "——《魔女宅急便》 宫崎骏" },
  { text: "根要扎在土壤里，和风一起生存，和种子一起过冬，和鸟儿一起歌颂春天。", from: "——《天空之城》 宫崎骏" }
];

/* ============================================================
 * 渲染：项目卡片
 * ============================================================ */
const projectGrid = document.querySelector("#project-grid");
if (projectGrid) {
  projectGrid.innerHTML = repositories.map((repo) => `
    <article class="project-card">
      <div class="project-meta"><span>GitHub 仓库</span><span>${repo.language}</span></div>
      <h3>${repo.name}</h3>
      <p>${repo.description}</p>
      <div class="tags"><span>${repo.language}</span></div>
      <a href="${repo.url}" target="_blank" rel="noreferrer">查看仓库 ↗</a>
    </article>
  `).join("");
}

/* ============================================================
 * 渲染：AI 热点
 * ============================================================ */
const newsGrid = document.querySelector("#news-grid");
const newsMeta = document.querySelector("#news-meta");

function formatDate(str) {
  if (!str) return "";
  const d = new Date(str.replace(" ", "T"));
  if (isNaN(d)) return "";
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

function renderNews(items, note) {
  if (!newsGrid) return;
  if (!items.length) {
    newsGrid.innerHTML = `<div class="news-loading">🍃 暂时没有抓到资讯，先去茶歇喝杯茶吧～</div>`;
    return;
  }
  newsGrid.innerHTML = items.map((item) => `
    <article class="news-card">
      <div class="news-card-top">
        <span class="news-source">${item.source}</span>
        ${AI_PATTERN.test(item.title) ? '<span class="news-badge-ai">AI</span>' : ""}
      </div>
      <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
      <time>${formatDate(item.date)}</time>
    </article>
  `).join("");
  if (newsMeta) newsMeta.textContent = note;
}

async function fetchOneFeed(feed) {
  const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=6`;
  const res = await fetch(api, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== "ok") throw new Error("rss2json 返回异常");
  return data.items.map((it) => ({
    title: it.title,
    url: it.link,
    date: it.pubDate || "",
    source: feed.name
  }));
}

async function loadNews() {
  const results = await Promise.allSettled(FEEDS.map(fetchOneFeed));
  const items = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  if (items.length === 0) {
    // 全部抓取失败 → 兜底静态推荐
    renderNews(fallbackNews, "实时抓取失败，已展示常用 AI 资讯入口");
    return;
  }

  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  const okCount = results.filter((r) => r.status === "fulfilled").length;
  renderNews(items.slice(0, 9), `已抓取 ${items.length} 条 · 来源 ${okCount}/${FEEDS.length} 个 · 更新于 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`);
}

loadNews();

/* ============================================================
 * 渲染：茶歇语录（支持换一句）
 * ============================================================ */
const quoteText = document.querySelector("#quote-text");
const quoteFrom = document.querySelector("#quote-from");
const quoteCard = document.querySelector("#quote-card");
const quoteBtn = document.querySelector("#quote-btn");
let quoteIndex = Math.floor(Math.random() * quotes.length);

function showQuote(index) {
  quoteText.textContent = quotes[index].text;
  quoteFrom.textContent = quotes[index].from;
}

showQuote(quoteIndex);

if (quoteBtn) {
  quoteBtn.addEventListener("click", () => {
    let next;
    do {
      next = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && next === quoteIndex);
    quoteIndex = next;
    quoteCard.classList.add("switching");
    setTimeout(() => {
      showQuote(quoteIndex);
      quoteCard.classList.remove("switching");
    }, 250);
  });
}

/* ============================================================
 * 导航栏滚动状态
 * ============================================================ */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });
