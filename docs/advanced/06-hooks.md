---
description: "Hooks - 在 Codex 执行过程中插入你的逻辑"
---

# Hooks

## 啥是 Hook

Hook 就是"钩子"。在 Codex 执行的某个时间点，自动执行你预设的逻辑。

比如：
- Codex 要执行命令前：先检查命令安不安全
- Codex 提交代码前：先跑 lint
- 对话开始时：加载本地规则

## 什么时候用 Hook

- 你想在 Codex 自动流程里加一个"检查点"
- 你有自定义的安全规则
- 你想让 Codex 读取本地的私有配置

## 跟 Automation 的区别

| 特性 | Automation | Hook |
| --- | --- | --- |
| 什么时候 | 定时或事件触发 | Codex 执行过程的某个点 |
| 干啥 | 执行一个完整任务 | 插入一小段逻辑 |
| 例子 | 每天跑测试 | 命令执行前检查安全性 |

## 怎么配

::: tip 官方为准
Hooks 的配置方式以 [Codex 官方文档](https://developers.openai.com/codex/) 为准。
:::

## 注意事项

::: warning 安全第一
Hook 会自动执行代码。安装社区 Hook 前先看清楚它干了啥，别装不明来源的。
:::

## 下一步

看看 [沙盒与审批](./07-sandbox-approvals.md)。
