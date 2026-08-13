---
description: "config.toml - Codex 核心配置文件"
---

# 配置文件 config.toml

## 这是啥

`config.toml` 是 Codex CLI 的配置文件。放在 `~/.codex/config.toml`。

用桌面 App 的话大部分配置在界面里设就行。用 CLI 的话需要手动编辑这个文件。

## 常用配置

::: tip 官方为准
完整配置项以 [Codex 配置文档](https://developers.openai.com/codex/config-reference) 为准。
:::

```toml
# 默认模型
model = "o4-mini"

# 审批模式：always（每次审批）/ auto（自动）
approval_mode = "always"

# 项目规则文件最大大小
project_doc_max_bytes = 32768

# 备用规则文件名（AGENTS.md 找不到时尝试这些）
project_doc_fallback_filenames = ["CLAUDE.md", ".cursorrules"]
```

## 怎么改

直接用编辑器打开 `~/.codex/config.toml`：

```bash
vim ~/.codex/config.toml
```

改完保存，下次启动 Codex 生效。

## 我的建议

::: tip
新手不用动配置文件。等你有具体需求了再改。
:::

## 下一步

看看 [团队实践](./10-team-playbook.md)。
