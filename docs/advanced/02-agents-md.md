---
description: "AGENTS.md - 让 Codex 记住你的项目规则"
---

# AGENTS.md

## 这是什么

每次跟 Codex 开一个新对话，它都是从零开始。它不知道你的项目用什么命令跑测试，不知道哪些文件不能改，不知道你们的代码风格。

你每次都得重复说一遍，烦不烦？

`AGENTS.md` 就是解决这个问题的。**它是一个放在项目根目录的文件，Codex 每次启动会自动读取它。**

## 通俗理解

- `README.md` 是给人看的：项目是啥、怎么跑
- `AGENTS.md` 是给 AI 看的：改代码前要遵守啥规矩

## 怎么用

在项目根目录创建 `AGENTS.md`，写上你的项目规则。就这样。

## 一个实际例子

```markdown
# AGENTS.md

## 项目概览
- Spring Boot 3.2 + MyBatis-Plus + MySQL
- IoT 数据采集监控系统
- 包结构：controller / service / mapper / entity

## 常用命令
- 编译：mvn compile
- 测试：mvn test
- 运行：mvn spring-boot:run

## 代码规范
- 实体类用 @TableName 注解
- Service 继承 IService
- Controller 用 @RestController
- 统一返回 Result<T>

## 不要做的事
- 不要修改 database/migration 下的文件
- 不要引入新依赖（除非我同意）
- 不要改 application.yml 的数据库配置

## 交付要求
- 改完告诉我改了哪些文件
- 跑一下 mvn compile 确认能编译
```

## 放在哪里

- **项目级**：项目根目录 `AGENTS.md`，只影响这个项目
- **全局级**：`~/.codex/AGENTS.md`，影响所有项目

## 注意事项

- 文件名必须是 `AGENTS.md`（大小写敏感）
- 别写太长，建议不超过 32KB
- 随项目更新，命令变了记得改

::: tip 其他 AI 工具
Claude Code 用的是 `CLAUDE.md`，不是 `AGENTS.md`。不同的 AI 工具可能用不同的文件名。
:::

## 下一步

规则写好了，看看 [Skills 和 Plugins](./03-skills-plugins-mcp.md)。
