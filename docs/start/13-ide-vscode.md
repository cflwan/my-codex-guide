---
description: "在 VS Code 里用 Codex - 编辑器集成"
---

# 在 VS Code 中使用 Codex

## 为啥要集成到 IDE

桌面 App 和 CLI 都能用，但如果你一直在 VS Code 里写代码，切来切去麻烦。

集成到 IDE 里，直接在编辑器里跟 Codex 对话，不用切窗口。

## 怎么装

::: tip 官方为准
插件安装方式可能变化，以 [Codex 官方文档](https://developers.openai.com/codex/) 为准。
:::

1. 打开 VS Code
2. 进扩展商店（Ctrl+Shift+X / Cmd+Shift+X）
3. 搜索 "Codex" 或 "OpenAI Codex"
4. 安装官方插件
5. 登录（跟 CLI 登录一样）

## 怎么用

安装后，VS Code 侧边栏会多一个 Codex 图标：

1. 点图标打开 Codex 面板
2. 在面板里跟 Codex 对话
3. 它能读取你当前打开的文件
4. 可以直接在编辑器里看到改动

## 跟桌面 App 的区别

| 特性 | 桌面 App | VS Code 插件 |
| --- | --- | --- |
| 文件操作 | 完整 | 完整 |
| 多线程 | 支持 | 支持 |
| Skills | 支持 | 支持 |
| 上下文 | 手动选目录 | 自动知道你打开的文件 |
| 适合场景 | 多任务管理 | 快速修改、代码审查 |

## 我的用法

我平时在 VS Code 里写代码，遇到要改的地方直接在侧边栏跟 Codex 说"把这个方法重构一下"、"加个参数校验"、"写个单元测试"。

大任务还是用桌面 App，小修改用插件更方便。

## 下一步

想了解云端版本？看 [Codex Cloud](./14-cloud.md)。

或者跳到 [进阶教程](/advanced/)。
