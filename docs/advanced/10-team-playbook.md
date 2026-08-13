---
description: "团队实践 - 带着团队一起用 Codex"
---

# 团队实践

## 从一个人开始

别上来就全团队推。先自己用熟，摸清适合的场景，再推广。

## 团队用 Codex 的关键

### 1. AGENTS.md 是团队契约

把团队规则写进 AGENTS.md，提交到仓库。每个人用 Codex 都遵守同样的规则。

### 2. 权限边界要明确

- 谁能用 auto 模式
- 哪些操作需要审批
- 生产环境怎么处理

### 3. Code Review 不能省

Codex 写的代码必须人工 Review。AI 是助手不是替代。

### 4. 案例库

把团队成功的 Codex 使用案例整理起来，新人照着学。

## 团队 Playbook 模板

```markdown
## Codex 使用规范

### 能用 Codex 做什么
- 写单元测试
- 修复 bug（需 Review）
- 代码重构（需 Review）
- 写文档

### 不能用 Codex 做什么
- 改生产配置
- 直接提交到 main
- 处理用户数据

### 审批规则
- 非交互模式：只能改 test/ 和 docs/
- 交互模式：所有改动需人工确认
- PR 必须人工 Review

### AGENTS.md 管理
- 由 tech lead 维护
- 每次发版后更新
- PR 修改 AGENTS.md 需要 2 人 approve
```

## 下一步

遇到问题看 [排障手册](./11-troubleshooting.md)。
