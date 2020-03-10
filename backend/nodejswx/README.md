# 前言

> 本小书通过观看 scoot 视频课程《Node.js7天开发微信公众号》，经过学习并结合感受写下的，希望对正在学习这块知识的你能有所帮助。如果你也收益多多，请 --> star <--。若是有建议或文中有误部分请轻喷。

## 目标

- 交互流程
- Nodejs 使用技巧
- 架构项目方式
- Koa 框架使用
- ES2015 新特性

## 实现功能

- 获取用户地理位置信息
- js sdk 的接入
- 菜单功能
- 文字回复
- 扫二维码、拍照和相册等
- 查询：文字和语音

## 设计技术栈及技术点

- **js sdk**，公众号开发需要与公众号后台有交互，需要在后台网页进行配置，比如通信的域名地址，js sdk 授权地址等；
- **yield**，ES6 一些特性；
- **koa**，web 框架，用来处理服务器之间的应用初始化、接口调用及数据响应；
- **bluebird**，尽管 Promise 在高版本 nodejs 里已经提供，但还是引用 bluebird 处理和封装异步请求；
- **request**，网络请求，对原生 http request 的封装；
- **ejs**，微信的数据包装方式是 xml，借助 ejs 模板库，把数据作为变量替换到 xml 字符中；
- **lodash**，工具方法集，比如 heredoc 是一个黑科技，把函数体里面的多行注释作为字符串提取出来主要用来降低拼接字符串的成本;
- **raw-body**，用来获取一个 http 请求返回的可读流的内容实体；
- **sha1**，加密哈希算法库；
- **xml2js**，微信服务器返回的数据依然是 xml 格式，没发直接在 js 函数中使用，借助 xml2js 模块把 xml 数据解析为 js 对象，方便我们使用；

## 注意点

- 配置接入流程；
- 加密认证环节；
- access_token（凭据）的获取；

## 需具备

- javascript 基础；
- 利用 Nodejs 开发一些网页或爬虫工具，来对 Nodejs API 和它的技术特点有一些基本的认知；
- 有一些其他的后端语言经验，无论是PHP/Java/Ruby 均可，主要整明白网络 http 请求从开始到结束中间所经过的环节；
  
## 文档和示例地址

- [github 地址](https://github.com/ruizhengyun/nodejs-weixin)
- [欢迎评论](https://github.com/ruizhengyun/nodejs-weixin/issues/1)