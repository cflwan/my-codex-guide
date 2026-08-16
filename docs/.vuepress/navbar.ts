import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "学习路线", icon: "map", link: "/guide/" },
  { text: "快速上手", icon: "rocket", link: "/start/" },
  { text: "进阶教程", icon: "book", link: "/advanced/" },
  { text: "实战案例", icon: "lightbulb", link: "/recipes/" },
  { text: "参考手册", icon: "gear", link: "/manual/" },
  { text: "关于", icon: "info", link: "/contact.html" },
]);
