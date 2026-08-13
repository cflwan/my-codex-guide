---
description: "CLI 选项速查 - 常用参数和命令"
---

# CLI 选项与命令

## 常用命令

| 命令 | 干啥的 |
| --- | --- |
| `codex` | 启动交互模式 |
| `codex exec "任务描述"` | 非交互模式，直接执行 |
| `codex login` | 登录 |
| `codex logout` | 登出 |
| `codex --version` | 看版本 |
| `codex --help` | 看帮助 |

## 交互模式里的命令

在交互模式里，以 `/` 开头的是特殊命令：

| 命令 | 干啥的 |
| --- | --- |
| `/help` | 看帮助 |
| `/clear` | 清空当前对话 |
| `/new` | 开新线程 |
| `/undo` | 撤销上一步 |
| `/diff` | 看改动 diff |
| `/exit` | 退出 |

::: tip 官方为准
斜杠命令可能随版本更新，以 [Codex CLI 官方仓库](https://github.com/openai/codex/blob/main/docs/slash_commands.md) 为准。
:::

## 常用参数

| 参数 | 干啥的 |
| --- | --- |
| `--model` | 指定模型（如 o3, o4-mini） |
| `--auto` | 自动模式，不审批 |
| `--no-auto` | 每步都要审批 |
| `--cwd` | 指定工作目录 |

## 实用技巧

### 指定模型

```bash
codex --model o4-mini
```

### 自动模式（谨慎）

```bash
codex --auto "跑一下测试，修复失败的"
```

::: warning 自动模式有风险
`--auto` 让 Codex 自主执行命令不经审批。只在安全环境用。
:::

### 非交互跑任务

```bash
codex exec "在 README.md 末尾加一个 License 章节"
```

## 下一步

CLI 基本会了。想在 VS Code 里用？看 [VS Code 集成](./13-ide-vscode.md)。
