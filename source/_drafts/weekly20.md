---
layout: post
title: 'weekly20'
date: 2018-08-20 08:00:00 +0800
categories: blog
tags: '知识周报'
---

str.repeat(num) // 重复生成指定次数的字符串

超过0xFFFF的字符的支持 将对应字符传唤为unicode值 str.codePointAt(index) 
                      将对应unicode转换为utf8编码字符 String.fromCodePoint(unicode)

查询对应字符串是否在指定字符串的对应位置 str.startWith(searchstr, beginindex) // 从头部的指定index开始

新的二进制和八进制表示方法 ==> 二进制0bxx||0Bxx  八进制0oxxx||0Oxxx

尾调用 函数结尾 return一个其他函数 进行执行
尾递归 函数结尾 return函数本身 递归调用本身一般用于树状结构等遍历

深度拷贝 数组的扩展重新赋值对象，赋值出来的新对象也是深度拷贝对象

Array.of(num[,num1,num2...]) ==> [num,num1,num2....] // 可以生成一个或多个不连续字符串构成的数组 与new Array(num) //生成num个空数组 不同

对象中的函数名可以进行简写，对象中的函数方法可以简写省略function字段