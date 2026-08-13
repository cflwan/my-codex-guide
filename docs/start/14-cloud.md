---
description: "Codex Cloud - 在云端跑任务"
---

# 使用 Codex Cloud

## 什么是 Cloud

Cloud 就是把 Codex 跑在 OpenAI 的服务器上，不占你本地资源。

适合：
- 跑时间长的大任务
- 需要并行的任务
- 不想开电脑也想跑任务

## 怎么用

::: tip 官方为准
Cloud 功能和可用性请以 [Codex Cloud 官方文档](https://platform.openai.com/docs/codex) 为准。
:::

1. 打开 [ChatGPT](https://chatgpt.com/) 或 Codex Cloud 页面
2. 连接你的 GitHub 仓库
3. 创建任务，描述你要干啥
4. Codex 在云端执行
5. 完成后查看结果、审查 PR

## 跟桌面/CLI 的区别

| 特性 | 桌面 App | CLI | Cloud |
| --- | --- | --- | --- |
| 跑在哪 | 你的电脑 | 你的电脑 | OpenAI 服务器 |
| 占用本地资源 | 是 | 是 | 否 |
| 能跑大任务 | 一般 | 一般 | 强 |
| 能并行 | 有限 | 有限 | 强 |
| 生成 PR | 不能 | 不能 | 能 |
| 适合场景 | 日常 | 终端党 | 团队/大任务 |

## 适合什么时候用

- 任务跑起来要好几个小时
- 需要同时跑多个任务
- 想让 Codex 直接提 PR
- 你的电脑配置不够跑本地 Codex

## 下一步

入门到这里就完了。接下来可以看 [进阶教程](/advanced/) 深入了解。
