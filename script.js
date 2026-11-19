const updates = [
  {
    date: "2026.11.19",
    title: "个人主页上线",
    content: "创建了一个简洁、温暖的博客式个人主页，用来集中展示项目、动态和个人信息。"
  },
  {
    date: "2026.11",
    title: "整理项目与技术笔记",
    content: "开始梳理过往作品、使用的技术栈以及正在学习的方向，为后续更新做准备。"
  },
  {
    date: "长期在做",
    title: "持续学习和创造",
    content: "保持输入，快速做出原型；把每一次实践沉淀成可复用的经验和作品。"
  }
];

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
