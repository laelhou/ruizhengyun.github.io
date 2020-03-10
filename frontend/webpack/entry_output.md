# 从哪儿来到哪儿去

## 流程

指定一个或多个入口（源码目录文件） `entry`，将各个模块打包封装为一个或多个代码块 `chunk`，并生成文件一个或多个 `bundle`。

## entry

确定入口模块的位置，定义 chunk name，默认为 `main`。其形式可以是：**字符串、对象、数组或函数**，字符串和数组其 chunk name 无法改变，只能是默认值。

### 字符串入口

```js
module.exports = {
  entry: './src/index.js'
};
```

### 数组入口

将多个资源先合并，建过最后一个元素作为实际的入口路径。

```js
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ]
};
```

上面等同于在 `./src/index.js` 中 `import 'babel-polyfill'`。

### 对象入口

定义多个入口时必须使用的形式。其中

- 对象的属性名 key 就是 chunk name;
- 对象的属性值 value 就是入口路径，可以是字符串，也可以为数组；

```js
module.exports = {
  entry: {
    'index': ['babel-polyfill', './src/index.js'],
    'lib': './src/lib.js'
  }
};
```

### 函数式入口

只要返回**字符串、数组和对象**，可以动态配置，支持返回一个 Promise 对象进行一步操作，自由度很大。

```js
module.exports = {
  entry: new Promise((resolve) => {
    // 模拟异步操作
    setTimeout(() => {
      resolve('./src/index.js');
    }, 1000)
  })
};
```


## context

资源入口的路径前缀，务必使用绝对路径。其作用是为了让 `entry` 编写更加简洁。

```js
module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js'
}
```


## 提取 vendor

通常，都是由 `app.js` 单一入口进行引用，这样就会产生一个 `bundle.js` 文件，随着业务扩展，资源体积越发增大，从而降低用户的页面渲染速度。另外，也是由于只产生一个 `bundle.js`，所以编码稍作改动更新，就用重新打包，用户也要跟着重新下载，友好度不理想。

我们都知道：库、框架等第三方模块（只要是非业务模块）这些几百年不会变化（夸张手法，意在说明不常改动更新），可集中打包。然后客户端缓存起来，从而提高用户界面的渲染速度。

```js
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: ['react', 'react-dom', 'react-router']
  }
};
```

上面 `entry` 增加了 chunk name 为 vendor 这个 key，其 value 是个数组，但是数组中的值路径并指出，这到底怎么回事？这个就需要 `optimization.splitChunks`（webpack4 之前是 `CommonsChunkPlugin`），将 app 和 vendor 这两个 chunk 中的模块提取出来。

- app，含业务模块和第三方依赖模块；
- vendor，第三方模块；

## 多页应用

我们希望的是一个页面对应一个独立的 bundle，而不是将所有页面打包到一个 bundle 中。

```js
module.exports = {
  entry: {
    home: './src/home.js',
    shopCar: './src/shopCar.js',
    order: './src/order.js',
    vendor: ['react', 'react-dom', 'react-router']
  }
}
```

## output

说了这么多，都是在说资源入口，对于资源出口使用配置 `output` 对象，其配置项有很多，在此只举例说明高频使用的一些属性配置。

### 单入口和多入口

1.单入口

```js
module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'assets'),
    publicPath: '/dist'
  }
};
```

2.多入口

```js
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js'
  }
};
```

### filename

打包后的 bundle 名字，可配合 path，也可以是一个相对路径 `filename: './src/bundle.js'`，对于多入口场景可以 `filename: [name].js`;
| 变量名称    | 描述                                     | 说明                                                    |
| :---------- | :--------------------------------------- | :------------------------------------------------------ |
| [hash]      | 指代 webpack 此次打包所有资源生成的 hash | 只要 chunk 内容发生变化，就会改变，影响其他资源         |
| [chunkhash] | 指代当前 chunk 内容的 hash               | 只有当前 chunk 内容发生变化，才会改变，使用缓存推荐使用 |
| [name]      | 指代当前 chunk 的 name                   | 无                                                      |
| [id]        | 指代当前 chunk 的 id                     | 无                                                      |
| [query]     | 指代 filename 配置项中的 query           | 与 chunk 内容无关，需开发者手动指定                     |

所以上面配置可以稍作改动

```js
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].[chunkhash].js'
  }
};
```

通常，只有**生产环境才配置 `[chunkhash]`**，原因是为了更新缓存，开发环境无需配置。

### path

指定资源文件**输出位置**，其**值须为绝对路径**，默认为 dist 目录。如果不更改它，可不必配置；

### publicPath

指定资源**请求位置**，容易与上面 path 的输出位置弄混。请求一种来自 HTML 页面，比如 script 标签加载，一种来自 js 或 css 请求，加载 js、图片或字体等。主要有 3 中形式

1.HTML 形式
相对路径。假设当前 HTML 地址是 `http://xxx.com/page/index.html`，现在加载 `index.js` 文件

- 若 `publicPath： ''`，则 `http://xxx.com/page/index.js`;
- 若 `publicPath： './js'`，则 `http://xxx.com/page/js/index.js`;
- 若 `publicPath： '../assets'`，则 `http://xxx.com/assets/index.js`;

2.HOST 形式
相对路径。设置的值若是以 `/` 开始，就是基于页面地址 host name 为基础路径的。假设当前 HTML 地址是 `http://xxx.com/page/index.html`，现在加载 `index.js` 文件

- 若 `publicPath： '/'`，则 `http://xxx.com/index.js`;
- 若 `publicPath： '/js/'`，则 `http://xxx.com/js/index.js`;
- 若 `publicPath： '/assets/'`，则 `http://xxx.com/assets/index.js`;

3.CDN
绝对路径。通常这类资源都是静态的，由于静态资源的域名与当前页面域名不一致，所以才设置指定绝对路径。若 public 值以协议头或相对协议的形式开始，那就说明是与 CDN 相关。

假设当前 HTML 地址是 `http://xxx.com/page/index.html`，现在加载 `index.js` 文件

- 若 `publicPath： 'https://cdn.com/'`，则 `https://cdn.com/index.js`;
- 若 `publicPath： 'http://cdn.com/'`，则 `http://cdn.com/index.js`;
- 若 `publicPath： '//cdn.com/assets/'`，则 `//cdn.com/assets/index.js`;

**注意**，前面我们介绍的 webpack-dev-server 中也有个 `publicPath`，比较容易弄混的是 webpack-dev-server 的 `publicPath` 与 output 的 `publicPath`没有关系，却与 output 的 `path` 有关系。可看

```js
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    publicPath: '/assets/',
    port: 1989
  }
};
```

启动 `webpack-dev-server` 服务后，访问 `localhost:1989/dist/bundle.js` 则会返回 404，因为 devServer.publicPath 此时设置的路径是 `localhost:1989/assets/`，所以访问 `localhost:1989/assets/bundle.js` 才是有效路径。为了不必要引起这类麻烦问题，可将两者输出默认设置一致。
