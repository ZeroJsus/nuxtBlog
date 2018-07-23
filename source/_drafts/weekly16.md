---
layout: post
title: 'weekly16'
date: 2018-07-22 08:00:00 +0800
categories: blog
tags: '知识周报'
---

本周工作外目标-->在renrentou数据分析之外 追加一个房地产数据收集的脚本
工作内-->抽时间完成threejs 第三方库的学习

html 中元素的[全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)
1. contextmenu --> 用于指定页面一个的id名为指定名称的元素
2. accesskey(注意 ie在linux和mac下不支持) --> 设置一个按键让可以获取焦点的元素在触发页面快捷键的时候快速定位(chrome/safari-->alt+key||mac下加control firefox-->shift+alt+key||mac control+alt+key)
3. contenteditable --> 可以对元素的content内容进行编译, 基础属性 兼容性完美 可编译元素自增 outline 可以使用border或其他元素 会响应页面的table跳转 但是不能响应accesskey的内容 可以修改自定义样式模拟input输入框的实现
4. tabindex --> 可以根据值定义input输入框按tab键切换焦点时候的顺序(移动端android兼容性不行，其他平台兼容性良好)
5. draggable --> 指定对应的属性能否被选中拖拽 dropzone(未实现) --> 指定拖拽到对应dropzone元素之后的操作

navigator.onLine --> 判断浏览器当前是离线还是在线状态

什么是渐进增强

渐进增强是指在web设计时强调可访问性、语义化HTML标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

所有浏览器都必须能访问基本内容
所有浏览器都必须能使用基本功能
所有内容都包含在语义化标签中
通过外部CSS提供增强的布局
通过非侵入式、外部javascript提供增强功能
end-user web browser preferences are respected


如何提高开发效率 --> 一个软件工程项目的正常流程
1、心中有大局：行业知识、交付/使用对象行业地位、用户特点、使用场景等 --> 项目初期调研
2、脑中有盘棋：系统功能地图、版本迭代安排、业务流程、操作流程
3、角色扮演的游戏：知晓各部门分工、上下游关键人员、自己的角色
4、赋予工作应有的意义：服务客户、服务公司、服务终端、服务产品
5、锻炼好身体，安排好作息
6、合理评估工作内容：任务量、难易度、里程碑、影响范围
7、做正确的事：需求理解透彻（杜绝想当然、杜绝不确认）
8、进入状态：预演、伪码、专注、验证（先写代码再调试）、自测、交付
9、拿来主义：他人经验、自有代码（于我好用）
10、复盘：查漏、优化、积累、反推（回看效果图和产品文档）
11、本质：解决的是问题、实现的是业务、交付的是人品、回报的是自己

page 92 计算的本质

flutter 构建接近原生的app