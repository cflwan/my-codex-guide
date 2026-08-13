---
description: "用 Figma MCP 读取设计稿"
---

# 用 Figma MCP 读取设计稿

## 这案例干啥的

就是让 Codex 直接读你 Figma 里的设计稿,提取颜色、字体、组件信息,甚至生成代码。不用你一个个截图、手动抄参数了。

设计师交付设计稿,你让 AI 看一眼就能开干。

## 啥时候用

- 还原设计稿成代码,不想手抄颜色值、间距
- 检查前端实现跟设计稿一不一样
- 提取设计 token(颜色、字体、间距)做主题
- 设计稿改了,想快速知道改了哪儿

## 准备工作

- Figma 账号,有要读的文件权限
- Codex 配好 Figma MCP
- 拿到设计稿的 file key 或者链接
- 知道你想读哪个 frame/page

## 怎么搞

### 第一步:确认 MCP 连上

跟 Codex 说:"你能读 Figma 吗?"它说能就行。

### 第二步:给链接

把 Figma 设计稿链接给它:

> 读一下这个设计稿:https://www.figma.com/file/xxx/yyy?node-id=1:2。我需要这个 frame 里所有组件的颜色、字体、圆角信息,整理成一份设计 token 表。

### 第三步:AI 读稿

Codex 通过 MCP 调 Figma API,把设计稿数据拉下来,解析成结构化信息。

### 第四步:输出你要的格式

跟它说你要啥格式:

> 把这些 token 写成 CSS 变量,放到 src/styles/tokens.css 里。同时生成一份 markdown 文档,列清楚每个 token 用在哪个组件。

### 第五步:生成组件代码(可选)

更进一步:

> 照着这个 frame 的布局,用 React + Tailwind 写个组件,放到 src/components/Header.tsx 里。

## 验证结果

- 设计 token 文件生成,内容跟设计稿一致
- 颜色值、字体大小、间距这些参数对得上
- 生成的组件代码能跑,样式还原度高
- Figma 里改了设计,重新跑一遍能拿到新数据

## 注意事项

::: tip
给 AI 指定具体的 node-id(就是链接里 `node-id=1:2` 那部分),别让它读整个文件。大文件读起来慢,信息也杂。
:::

::: warning
Figma API 有调用限制,别频繁读同一个文件。设计稿没改就别重新拉。
:::

## 我的经验

我一般这么搞:设计稿定稿后,让 AI 提取一份"设计 token"存到代码库里。后面写组件直接引用这些 token,不用每次回 Figma 抄颜色。设计改了,重新跑一遍覆盖 token 文件,全局生效。

还有个好用的——让 AI 对比"设计稿 vs 我的实现",它能告诉你哪儿还原得不到位。

## 下一步

- 配合 [Playwright MCP](./03-playwright-mcp.md) 自动截图对比设计稿
- 把组件代码塞到 [DKFile](./10-dkfile-deploy-codex.md) 里预览
- 试试 Figma 的 Dev Mode,跟 MCP 配合更好
