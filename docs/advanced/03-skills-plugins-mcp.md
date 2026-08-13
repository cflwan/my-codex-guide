---
description: "Skills 和 Plugins - 扩展 Codex 的能力"
---

# Skills 和 Plugins

## 通俗理解

- **AGENTS.md** = 项目通用规则（"在我们项目里代码要这么写"）
- **Skill** = 某类任务的专项流程（"写 PR Review 要按这个步骤来"）
- **Plugin** = 扩展工具（"让 Codex 能操作浏览器"）

## Skill 是什么

如果你经常重复某类任务，比如：
- 每次写完代码都要做 Code Review
- 每周要生成一份项目报告
- 经常要写单元测试

你可以把这些流程写成一个 Skill。下次你说"做个 Code Review"，Codex 就会按你定义的流程走。

## 怎么创建 Skill

::: tip 官方为准
Skill 的创建方式以 [Codex Skills 官方文档](https://developers.openai.com/codex/skills) 为准。
:::

大致步骤：
1. 在项目里创建 Skill 定义文件
2. 写清楚这个 Skill 做什么、怎么做
3. Codex 会自动识别并使用

## Plugin 是什么

Plugin 是更底层的扩展，让 Codex 能调用外部工具：

- **MCP（Model Context Protocol）**：连接外部服务
- **Playwright**：操作浏览器
- **Figma MCP**：读设计稿
- **Notion MCP**：连 Notion

## 常用 Plugin 举例

| Plugin | 干啥的 |
| --- | --- |
| Playwright MCP | 让 Codex 操作浏览器 |
| Figma MCP | 读取 Figma 设计稿 |
| Notion MCP | 读写 Notion 页面 |
| 飞书 CLI | 操作飞书文档 |

## 我的建议

::: tip 别贪多
先别急着装一堆 Plugin。先用 AGENTS.md 把基本流程理顺，等遇到具体需求再加。
:::

## 下一步

看看 [权限管理](./04-permissions-security.md)。
