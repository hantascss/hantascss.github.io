---
layout: page
title: 关于
permalink: /about/
---

CSS 有些值的设定方位感很明显，例如 `margin-top`, `margin-left` 等，在一般情况下，这没什么问题。但是如果设定了 `writing-mode: vertical-lr;`时，很多问题就会出现了。为了解决这些问题，CSS 新设定了一些逻辑值——不设定绝对方位，而是使用逻辑判断或者相对值——例如 `margin-top` 转换为 `margin-block-start` ，`margin-left` 转换为 `margin-inline-start` ，这样对于不同的文字布局就不需要进行特殊设定了。

基于这些逻辑值的 CSS 框架——Hantas在这里：
[hantas](https://github.com/hantascss/hantas)
