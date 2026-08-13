# Codex 大白话指南

用大白话讲明白 Codex 怎么用 - 个人 Codex 学习笔记导航站。

## 技术栈

- VuePress 2 (rc.28)
- VuePress Theme Hope (rc.106)
- Vite bundler
- TypeScript

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build
```

开发服务器默认跑在 `http://localhost:8080`。

## 项目结构

```
my-codex-guide/
├── docs/
│   ├── index.md              # 首页
│   ├── guide/                # 学习路线
│   │   └── index.md
│   ├── start/                # 快速上手
│   │   ├── 00-index.md
│   │   ├── 01-what-is-codex.md
│   │   ├── 02-app-installation.md
│   │   ├── 03-account-plan.md
│   │   ├── 04-third-party-api.md
│   │   ├── 05-app-overview.md
│   │   ├── 06-first-task.md
│   │   ├── 07-task-design.md
│   │   ├── 08-task-execution.md
│   │   ├── 09-mobile-control.md
│   │   ├── 10-cli-installation.md
│   │   ├── 11-cli-first-run.md
│   │   ├── 12-cli-options.md
│   │   ├── 13-ide-vscode.md
│   │   └── 14-cloud.md
│   ├── advanced/             # 进阶教程
│   │   ├── 00-index.md
│   │   ├── 01-cost-context.md
│   │   ├── 02-agents-md.md
│   │   ├── 03-skills-plugins-mcp.md
│   │   ├── 04-permissions-security.md
│   │   ├── 05-automation.md
│   │   ├── 06-hooks.md
│   │   ├── 07-sandbox-approvals.md
│   │   ├── 08-thread-management.md
│   │   ├── 09-config-toml.md
│   │   ├── 10-team-playbook.md
│   │   └── 11-troubleshooting.md
│   ├── recipes/              # 实战案例
│   │   ├── 00-index.md
│   │   └── 01~17-*.md (17个案例)
│   ├── manual/               # 参考手册
│   │   └── 00-index.md
│   └── .vuepress/            # VuePress 配置
│       ├── config.ts
│       ├── theme.ts
│       ├── navbar.ts
│       ├── client.ts
│       ├── sidebar/
│       │   └── index.ts
│       ├── styles/
│       │   └── index.scss
│       └── public/
│           └── logo.svg
├── package.json
├── .nvmrc
├── .gitignore
├── LICENSE
└── README.md
```

## 部署

构建后 `docs/.vuepress/dist/` 目录是静态文件，可以部署到：
- Vercel
- GitHub Pages
- EdgeOne Pages
- 任何静态托管服务

## 致谢

参考了 [CodexGuide](https://github.com/freestylefly/CodexGuide) 的内容结构。

## License

MIT
