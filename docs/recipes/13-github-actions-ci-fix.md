---
description: "CI 失败后自动触发 Codex 修复"
---

# CI 失败后自动触发 Codex 修复

## 这案例干啥的

就是你的 GitHub Actions 跑测试挂了,不用你手动去看日志、找原因、改代码。CI 挂了自动喊 Codex 来,它看日志、定位问题、提个 PR 修。

相当于给 CI 配了个"自动修理工"。

## 啥时候用

- 团队 CI 跑得频繁,经常有琐碎的失败(格式、依赖、测试断言)
- 半夜 push 代码,CI 挂了不想爬起来看
- 想让开发者专注写代码,琐碎修复自动处理
- 降低平均修复时间(MTTR)

## 准备工作

- 仓库在 GitHub,CI 用 GitHub Actions
- 配好 Codex 能被 Actions 调用(token、API key)
- 仓库里有 Codex 配置文件(告诉它项目怎么 build、test)
- 团队约定好:AI 提的 PR 谁来 review、合并

## 怎么搞

### 第一步:写个触发脚本

在 `.github/workflows/` 里加个 workflow,监听 CI 失败事件:

```yaml
# 简化版示意,实际看你的 CI 配置
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]
    branches: ["main", "develop"]

jobs:
  auto-fix:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Codex
        run: |
          # 调 Codex,把失败的 run id、日志传过去
          codex auto-fix --run-id ${{ github.event.workflow_run.id }}
```

### 第二步:Codex 接到任务干啥

Codex 被触发后会:
1. 拉失败的 CI 日志
2. 分析失败原因(测试挂?构建错?格式问题?)
3. checkout 代码,定位问题文件
4. 改代码
5. 跑一遍本地 CI 确认改对了
6. 提个 PR,标题写清楚"修复 CI: xxx"

### 第三步:PR 通知

Codex 提完 PR,可以在 PR 描述里写清楚:
- 失败原因
- 怎么改的
- 验证结果(本地 CI 跑过了)

### 第四步:人 review

人收到 PR 通知,看一眼,没问题合并。合并后主 CI 重跑,绿了就完事。

## 验证结果

- CI 失败后,Codex 自动被触发了(看 Actions 日志)
- Codex 提了 PR,不是手动开的
- PR 描述清晰,说清了问题和改法
- PR 合并后 CI 重跑,确实修好了(不是误改)

## 注意事项

::: tip
给 Codex 限制"只改某些类型的失败"。比如只让它处理 lint、测试断言失败这类琐碎的。复杂的逻辑 bug 让人来看,别让 AI 乱改。
:::

::: warning
务必让 AI 提 PR,别让它直接 push 到主分支。一定要有人 review,哪怕快速过一眼。AI 修复有时是"治标不治本",人得把关。
:::

## 我的经验

我们团队加了"白名单"--只有失败日志里出现特定关键词(如 `lint error`、`test timeout`、`dependency missing`)才触发自动修复。复杂失败还是人工处理。

还有,Codex 提的 PR 我让它自动 @ 当值同学,值班的人负责 review。这样责任明确,不会出现"AI 提的 PR 没人理"的情况。

## 下一步

- 配合 [远程 Bug 修复](./11-remote-bug-fix.md) 做线上问题排查
- 试试 [Playwright](./03-playwright-mcp.md) 跑 E2E 也纳入 CI
- 整理一份"AI 修复案例库",定期复盘它改得对不对
