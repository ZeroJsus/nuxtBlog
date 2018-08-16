---
layout: post
title: 'ubuntu中安装nodejs'
date: 2018-08-16 12:00:00 +0800
categories: blog
tags: '迭代'
---


# 在ubuntu中安装nodejs 并使用n进行版本管理

## 更新ubuntu软件源
```shell
sudo apt-get update #更新本地软件源
sudo apt-get install -y python-software-properties software-properties-common #安装两个公共软件包
sudo add-apt-repository ppa:chris-lea/node.js #安装ppa源 ppa：一个个人软件包集合
sudo apt-get update #安装依赖后重新更新软件包
```

## 安装nodejs
```shell
sudo apt-get install nodejs
sudo apt install nodejs-legacy #这里的apt是新版本系统的命令 以后老版本的命令apt-get将会被取代
sudo apt install npm 
```

## 替换npm镜像源地址
```shell
sudo npm config set registry https://registry.npm.taobao.org
sudo npm list #查看npm配置信息

sudo npm install n -g #使用n模块进行nodejs版本管理
sudo n stable #使用n安装nodejs最新标准版本
sudo node -v #查看node版本安装成功
```