---
description: "用 Notion MCP 打通知识空间"
---

# 用 Notion MCP 打通知识空间

## 这案例干啥的

就是让 Codex 直接读写你的 Notion 页面。不用导出、不用复制粘贴,让 AI 在 Notion 里建页面、写内容、查信息。

相当于给你的 Notion 装了个 AI 助手。

## 啥时候用

- 每周写周报,得翻好几个页面汇总
- 想批量整理 Notion 里的页面结构
- 跨多个 database 查信息
- 自动往 Notion 里记东西(比如会议纪要、读书笔记)

## 准备工作

- Notion 账号,创建了 integration 拿到 token
- Codex 配好 Notion MCP,token 填对
- 要操作的页面/database 已经"共享"给你的 integration
- 知道你想读写哪些内容

## 怎么搞

### 第一步:确认权限

在 Notion 里,把你让 AI 操作的页面/database,右上角"..."→"Connect to"→选你的 integration。没这步 AI 读不到。

### 第二步:描述任务

跟 Codex 说:

> 帮我从 Notion 的"会议纪要" database 里,筛出这周的所有条目,按项目分组,每个会议提取"决议"和"待办",整理成一份新页面放到"周报"database 里,标题叫"2026-08-12 这周"。

### 第三步:AI 干活

Codex 会:
1. 查 database,拿到本周会议条目
2. 解析每个条目的"决议""待办"字段
3. 按项目分组汇总
4. 在"周报" database 里新建页面,写入汇总内容

### 第四步:去 Notion 看

打开 Notion,找到新创建的页面,检查内容对不对。

### 第五步:存成可复用流程

跟 AI 说:"把这个流程写成脚本,以后每周五自动跑。"

## 验证结果

- Notion 里出现了新页面/新条目
- 内容跟你预期的一致,没漏没多
- 字段映射正确(比如"决议"对应正确字段)
- 如果是查询操作,AI 返回的结果跟 Notion 里手动看到的一致

## 注意事项

::: tip
Notion 的 integration 权限是"页面级"的。你让它访问新页面,记得手动把那个页面连上 integration,不然 AI 会报"无权限"。
:::

::: warning
Notion 的 database 结构复杂,字段类型多样(选填、日期、关联等)。让 AI 操作前,先让它"描述下这个 database 的字段结构",确认它理解对了再写。
:::

## 我的经验

我搭了个"读书笔记"流程:看到好书,跟 AI 说书名 + 我的零散想法,它自动在 Notion database 里建条目,填好书名、封面、分类,把我的想法整理成"核心观点""我的思考""行动项"三块。省了我大量排版时间。

还有,查询时让 AI 用 Notion 的 filter 语法,别让它拉全部数据再筛,慢且费 token。

## 下一步

- 配合 [飞书 CLI](./06-feishu-cli-codex.md) 做 Notion ↔ 飞书双向同步
- 把 Notion 内容生成 [PPT](./01-ppt-skill-walkthrough.md) 做汇报
- 试试 Notion 的"按钮"功能,跟 AI 配合做自动化
