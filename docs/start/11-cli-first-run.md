---
description: "第一次跑 CLI - 在终端里用 Codex 改代码"
---

# 第一次跑 CLI

## 进入项目

```bash
cd 你的项目目录
codex
```

Codex 会自动读取当前目录作为工作区。

## 基本操作

进入 Codex 后，你可以直接打字跟它对话：

```
> 看看这个项目的结构，告诉我它是干嘛的
```

它会读文件、分析结构，然后回答你。

## 让它改代码

```
> 在 src/main/java/com/example/controller/ 下新建 UserController，
提供增删改查接口，用 MyBatis-Plus 的 IService。
```

Codex 会：
1. 读取项目结构
2. 分析现有代码风格
3. 生成代码并写入文件
4. 告诉你它做了什么

## 交互模式 vs 非交互模式

**交互模式**（默认）：你跟它对话，它问你要不要执行，你确认。

```bash
codex
```

**非交互模式**：直接执行，不问。适合脚本。

```bash
codex exec "修复 src/test 下的编译错误"
```

## 审批

Codex 要执行命令时会问你：

```text
Codex wants to run: mvn compile
Allow? [y/n]
```

看清楚再按 y。

## 退出

```bash
exit
# 或 Ctrl+C 两次
```

## 下一步

会用基本操作了，看看 [CLI 选项速查](./12-cli-options.md)。
