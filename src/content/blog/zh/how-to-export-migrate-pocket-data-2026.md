---
title: "2026 年如何导出并迁移 Pocket 数据（详细实操步骤）"
seoTitle: "Pocket 数据导出与迁移完全指南（2026）— Marqly"
description: "Pocket 已停运，你的收藏正面临风险。本文手把手教你导出备份文件，并在几分钟内迁移到新的稍后读工具，含格式避坑细节。"
pubDate: 2026-05-08
updatedDate: 2026-10-06
category: "使用指南"
targetKeyword: "Pocket 数据 导出 迁移"
tags:
  - "Pocket 迁移"
  - "Pocket 导出"
  - "Pocket 替代品"
  - "书签导入"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "免费开始使用 Marqly"
lang: "zh"
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Pocket数据导出与迁移指南插图"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
faqs:
  - q: "现在还能直接从 Pocket 导出数据吗？"
    a: "不能。Pocket 于 2025 年 7 月 8 日正式停运，Mozilla 在 2025 年 11 月 12 日关闭了导出通道，剩余数据已排入删除队列。本指南帮助已下载过导出压缩包（内含 list.csv）的用户，把收藏迁移到 Marqly，或找回曾同步到浏览器书签里的内容。"
  - q: "从 Pocket 迁移会丢失我的标签（Tags）吗？"
    a: "不会。Pocket 导出文件包含标签，合格的导入器会完整保留。Marqly 会自动映射标签，你的收藏带着原标题和标签出现。导入耗时取决于文件大小与处理量；请保留原始压缩包，并核对导入后的条目数量。"
  - q: "迁移 Pocket 文库需要绑定信用卡吗？"
    a: "用提供免费方案的工具就不需要。Marqly 的免费账户可存 100 条收藏并支持关键词搜索；语义搜索、摘要以及导入时的自动打标签属于 Pro，导入前请根据文库规模确认方案。"
  - q: "如果错过了 Pocket 的导出截止日期怎么办？"
    a: "错过 2025 年 11 月 12 日的期限后，Mozilla 服务器已无法再生成导出。但如果你当时用 Firefox 同步过 Pocket，或此前导出过浏览器书签，就可以把那份浏览器 HTML 直接导入 Marqly。"
---

Mozilla 于 2025 年 7 月 8 日正式关停 Pocket，并在 2025 年 11 月 12 日关闭导出通道。只要你在服务器下线前下载过导出文件，你的收藏就是安全的——只差一个现代的新家。本指南带你把 Pocket 文库迁移进 Marqly：免费方案提供关键词搜索，Pro 提供语义搜索。

## 第 1 步：找到你的 Pocket 导出压缩包

由于 Mozilla 的导出入口已关闭，你需要使用此前下载过的备份文件：

1. 在**下载**或**文档**文件夹里找 `ril_export.html`、`pocket-export.html`，或一个 `pocket-export.zip` 压缩包。
2. 如果拿到的是 ZIP，先解压——里面是你的 Pocket 收藏，HTML 或 CSV 两种格式。
3. 如果 2025 年 11 月 12 日之前你从未下载过，检查 Pocket 是否曾同步进浏览器书签（例如 Firefox）。你可以把浏览器书签导出为 HTML 文件，用这份文件替代。

> **隐私说明：** 你的 Pocket 文件会被安全处理。你也可以用免费的浏览器工具在本地检查或转换它：[Pocket 导出转换器](/tools/pocket-export-converter)。

Pocket 历史上的 HTML 预览是一份普通列表，而不是浏览器书签 HTML。给 Marqly 请用 list.csv，或先用转换器处理后再走浏览器 HTML 导入器。想知道[导出文件里到底有什么](/zh/blog/what-is-in-your-pocket-export-file-2026)——以及它丢下了什么——导入前值得一读。

## 第 2 步：选择迁移目的地

导出文件是便携的，真正的问题是它应该住在哪里。2026 年 Pocket 难民最常见的三个去处：

- **Marqly**——希望文库可以按含义搜索（Pro 的 AI 搜索）、并拥有 Pro 自动打标签与摘要。导入你的 Pocket 文件且标签完整保留。（想看它如何与 Pocket 正面对比，见 [Pocket vs Marqly](/zh/compare/marqly-vs-pocket)。）
- **Raindrop.io**——想要一个免费、通用的书签管理器。
- **Instapaper**——只想要一款极简、无附加功能的[稍后读应用](/zh/blog/shaohou-yuedu-app-2026)。

（完整分析见[2026 年 8 款最佳 Pocket 替代品](/zh/blog/pocket-tidai-2026)。）

## 第 3 步：导入你的文库

先说格式，因为这是最容易踩的坑：Pocket 的 `ril_export.html` 是一份简单的 `<ul>` 列表，并非标准浏览器书签格式，所以绝大多数导入器——**包括 Marqly**——都无法读取它。可靠的文件是导出包里的 `list.csv`——我们[拿一份真实的 261 条 Pocket HTML 导出喂给自家导入器，结果解析为零条收藏](/research/bookmark-import-fidelity)。拿到了 CSV（或整个 ZIP）就万事俱备；如果手里只有 HTML，请先用免费的 [Pocket 导出转换器](/tools/pocket-export-converter)与[书签文件查看器](/tools/bookmark-file-viewer)转换或检查。需要含故障排查的深度教程，请跟 [Pocket 到 Marqly 迁移指南](/migrate/pocket)，或直接进入[迁移中心](/migrate)。

以 **Marqly** 为例：

1. 创建免费账户。
2. 在引导流程中（或设置 → 导入）选择**导入书签**。
3. 打开 Pocket 导出 ZIP，把 `list.csv` 拖入导入区（不要拖 `.html` 预览——Marqly 读的是 CSV）。
4. 收藏随即出现——标题与标签完整保留——免费方案提供关键词搜索，Pro 提供语义搜索。（导入时自动打标签是 Pro 功能；免费方案的链接照样带着文件自带的标签进入文库。）

导入耗时取决于文件大小与处理量；请保留原始压缩包，并核对导入条数。

## 第 4 步：重新接上收藏的习惯

导出带走的是*历史*。现在重建*习惯*：

- **安装浏览器扩展**，让保存回到一键，就像 Pocket 当年那个按钮。
- **装上移动端应用**，从手机分享菜单直接收藏。
- **配置顺手的集成**（部分工具支持 Raycast、iOS 快捷指令等）。

一天之内，保存的手感就和 Pocket 时代一模一样——只是现在一切都可搜索。

## 多数人错过的升级

迁移是修正 Pocket 从未解决的问题的机会：**我们收藏的东西，远远多于一朝能再找回的。**文件夹与关键词搜索撑不过几百条。

搬家时，考虑把文库安在一个有**语义搜索**的地方——输入你*记得*的内容（「讲远程办公与信任的那篇」），即使标题早已忘记也能取回原文。这正是 [Marqly](https://app.marqly.com/lp/replace-pocket) 的核心：导入你的 Pocket 历史，然后真正找回其中任何一条。并排细看全部差异，见 [Pocket vs Marqly 完整对比](/zh/compare/marqly-vs-pocket)。免费开始，可存 100 条；语义搜索需要 Pro。

---

*提示：无论选择哪个工具，都请保留原始 Pocket 导出包（含 `list.csv`）作为备份。它是你跨供应商的可携带副本——这正是 Pocket 教训的全部意义。*

来源：[Mozilla 的 Pocket 关停公告](https://support.mozilla.org/en-US/kb/future-of-pocket)，2026 年 10 月 6 日核对。导出通道于 2025 年 11 月 12 日关闭；Mozilla 表示删除随即启动。
