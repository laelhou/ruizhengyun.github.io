# 消息封装

在上节，我们稍稍尝到了点甜头（订阅后自动回复），本章将实现更多有用的消息功能，如文本、图文、语音和音乐等。


1.启动项文件

- 抽离出公共配置文件 `app-5/config/default.config.js`；
- 新增公共方法库-消息模块 `app-5/util/message`； 
- `weChatMiddleWare` 中间件添加第二个参数，即消息回复方法；

```js
const Koa = require('koa');
const weChatMiddleWare = require('./app-5/middleWare/weChat');
const config = require('./app-5/config/default.config');
const message = require('./app-5/util/message');

const app = new Koa();

// 中间件
app.use(weChatMiddleWare(config.wechat, message.reply));

app.listen(config.PORT);
console.log(`正在监听：${config.PORT}`);
```

2.公共配置文件 `app-5/config/default.config.js`

```js
const path = require('path');
const util = require('../util');
const wechat_file = path.join(__dirname, './access-token.txt');

// 配置文件
const config = {
  wechat: {
    appID: 'wxb284d7a53fa2da16',
    appSecret: '24af419d8f6c997b5582fd46eafb377c',
    token: 'ruizhengyunpr840690384',
    getAccessToken: () => {
      // 读取文件
      return util.readFileAsync(wechat_file);
    },
    saveAccessToken: data => {
      // 写入文件
      return util.writeFileAsync(wechat_file, JSON.stringify(data));
    }
  },
  PORT: 1989
};

module.exports = config;
```

3.公共方法库-消息模块 `app-5/util/message`
