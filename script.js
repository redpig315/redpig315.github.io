const repositories = [
  { name: "redpig315.github.io", description: "Personal homepage and blog for showcasing projects, profile, and updates.", language: "HTML", url: "https://github.com/redpig315/redpig315.github.io" },
  { name: "traefik", description: "The Cloud Native Application Proxy", language: "未注明", url: "https://github.com/redpig315/traefik" },
  { name: "op-note", description: "该仓库已迁移至我的博客 https://github.com/shfshanyue/blog/tree/master/op", language: "未注明", url: "https://github.com/redpig315/op-note" },
  { name: "manba", description: "HTTP API Gateway", language: "Go", url: "https://github.com/redpig315/manba" },
  { name: "redpig315", description: "Config files for my GitHub profile.", language: "未注明", url: "https://github.com/redpig315/redpig315" },
  { name: "jidandan", description: "我的脚本库", language: "Python", url: "https://github.com/redpig315/jidandan" },
  { name: "retailbook", description: "暂时还没有什么想法，我只是想做点和微信和银行相关的应用而已", language: "C", url: "https://github.com/redpig315/retailbook" },
  { name: "Hyperledger-Fabric", description: "Hyperledger Fabric 中文文档，翻译自 http://hyperledger-fabric.readthedocs.io/en/release-1.1/", language: "未注明", url: "https://github.com/redpig315/Hyperledger-Fabric" },
  { name: "webshell", description: "This is a webshell open source project", language: "PHP", url: "https://github.com/redpig315/webshell" },
  { name: "CTF2019", description: "use this repository to save ctf info", language: "未注明", url: "https://github.com/redpig315/CTF2019" },
  { name: "useGit", description: "Git学习及关联 github 网站实践手册", language: "未注明", url: "https://github.com/redpig315/useGit" }
];

const updates = [
  { date: "持续学习", title: "探索 Open API", content: "继续学习 Open API，积累编程实践。" },
  { date: "合作方向", title: "关注银行相关项目", content: "期待参与银行相关的项目合作。" }
];

const projectGrid = document.querySelector("#project-grid");
projectGrid.innerHTML = repositories.map((repository, index) => `
  <article class="project-card">
    <div class="project-art ${index % 2 === 0 ? "art-one" : "art-two"}" aria-hidden="true"><span>${String(index + 1).padStart(2, "0")}</span></div>
    <div class="project-content">
      <div class="project-meta"><span>GitHub 仓库</span><span>${repository.language}</span></div>
      <h3>${repository.name}</h3>
      <p>${repository.description}</p>
      <div class="tags"><span>${repository.language}</span></div>
      <a href="${repository.url}" target="_blank" rel="noreferrer">查看仓库 ↗</a>
    </div>
  </article>
`).join("");

const timeline = document.querySelector("#timeline");
timeline.innerHTML = updates.map((update) => `
  <article class="update">
    <time>${update.date}</time>
    <div>
      <h3>${update.title}</h3>
      <p>${update.content}</p>
    </div>
  </article>
`).join("");

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.borderBottomColor = window.scrollY > 20 ? "rgba(24, 33, 28, 0.12)" : "transparent";
}, { passive: true });
