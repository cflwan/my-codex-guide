---
description: "CLI 安装 - 在终端里装 Codex CLI"
---

# 安装 CLI

## 为什么要用 CLI

桌面 App 好用，但 CLI 有它的优势：

- 快。终端里直接敲命令，不用切窗口
- 能写脚本，自动化
- 可以集成到 CI/CD 里
- 更适合服务器环境

## 前提条件

- Node.js 22+（推荐 22.12 以上）
- npm 或其他包管理器

::: tip 检查 Node 版本
```bash
node --version
```
如果低于 22，先升级 Node。
:::

## 安装

::: tip 官方为准
安装方式可能随版本变化，以 [Codex CLI 官方仓库](https://github.com/openai/codex) 为准。
:::

```bash
npm install -g @openai/codex
```

或者用 npx 直接跑（不全局安装）：

```bash
npx @openai/codex
```

## 验证安装

```bash
codex --version
```

看到版本号就说明装好了。

## 登录

第一次用需要登录：

```bash
codex login
```

会打开浏览器，用你的 ChatGPT 账号登录。

或者用 API Key：

```bash
export OPENAI_API_KEY="你的key"
```

## 常见问题

**权限不够？**
```bash
sudo npm install -g @openai/codex
```

**网络问题？**
国内可能需要配代理或用 npm 镜像。

## 下一步

装好了，[第一次跑 CLI](./11-cli-first-run.md)。
