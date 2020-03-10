# 前言

<img src="./assets/logo.png" style="display: block; width: 200px; margin: 0 auto;" />

Vue 是一套用于构建用户界面的渐进式框架，是自底向上逐层应用。其目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。可以[视频了解一下][]。

## 需要掌握

- HTML
- CSS
- JavaScript

## 声明式渲染

文件 basic/01/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>声明式渲染</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p>{{ message }}</p>
    </div>

    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue.js!'
        }
      });
    </script>
  </body>
</html>
```

除了文本插值，还可以绑定元素 attribute 。

文件 basic/02/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>绑定元素 attribute</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
    </div>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '页面加载于 ' + new Date().toLocaleString()
        }
      });
    </script>
  </body>
</html>
```

`v-bind` attribute 被称为指令。指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊 attribute。该指令的意思是：“将这个元素节点的 title attribute 和 Vue 实例的 message 属性保持一致”。

打开浏览器的 JavaScript 控制台，输入 app.message = '一次就好'，就会再一次看到这个绑定了 title attribute 的 HTML 已经进行了更新。

## 条件

文件 basic/03/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>条件</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p v-if="seen">你看不见我</p>
    </div>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          seen: Math.floor(Math.random() * 10) > 5
        }
      });
    </script>
  </body>
</html>
```

不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构。

## 循环

文件 basic/04/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>循环</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <ol>
        <li v-for="todo in todoList">{{ todo.text }}</li>
      </ol>
    </div>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          todoList: [{ text: 'React' }, { text: 'Vue' }, { text: 'Angular' }]
        }
      });
    </script>
  </body>
</html>
```

打开浏览器控制台，输入 `app.todoList.push({ text:'Node.js' });`，就会发现列表最后添加了一个新项目。

## 监听方法

为了让用户和应用进行交互，可以用 `v-on` 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>监听方法</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p v-on:click="reverseMessage">{{ message }}</p>
    </div>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '来来去去'
        },
        methods: {
          reverseMessage: function() {
            this.message = this.message
              .split('')
              .reverse()
              .join('');
          }
        }
      });
    </script>
  </body>
</html>
```

## 双向绑定

Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定。

文件 basic/06/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>双向绑定</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p>{{ message }}</p>
      <input v-model="message" />
    </div>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '来来去去'
        }
      });
    </script>
  </body>
</html>
```

## 组件化应用构建

组件系统是一种抽象，即使用小型、独立和通常可复用的组件构建大型应用。

<img src="./assets/components-tree.png" />

在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。在 Vue 中注册组件很简单：





[视频了解一下]: http://58.218.215.96/697507685C73171423617443B/03000801005A5363DACB5F514325B374AA7AD2-A907-FA33-56CC-816DF163E3B6.mp4?ccode=0512&duration=344&expire=18000&psid=1d27afc479e4d52d40a11cd6cfb36acb&ups_client_netip=73ec4744&ups_ts=1583732935&ups_userid=&utid=FVXeFmyXL1UCAXWTBSBHMhEh&vid=XMzMwMTYyODMyNA&vkey=B012f3758f686e4a813e374e316b8b4d7&eo=0&bc=2&dre=u21&si=42&dst=1&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=ea192e134b57006afabdeb3eab8f52e153deee1bced3dc49&ali_redirect_ex_tmining_ts=1583732944&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0