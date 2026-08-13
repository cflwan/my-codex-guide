import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "docs/.vuepress/dist",
  lang: "zh-CN",
  title: "Codex 大白话指南",
  description: "用大白话讲明白 Codex 怎么用 - 一个普通开发者的 Codex 学习笔记",

  head: [
    ["meta", { name: "robots", content: "index,follow" }],
    ["meta", { name: "author", content: "cfl" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Codex 教程,Codex 中文,Codex 怎么用,OpenAI Codex,AI 编程,AGENTS.md,Codex CLI",
      },
    ],
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["meta", { name: "format-detection", content: "telephone=no" }],
  ],

  bundler: viteBundler(),

  theme,

  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
  shouldPreload: false,
});
