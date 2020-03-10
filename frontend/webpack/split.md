# 代码的分片

Code splitting，这是 Webpack 特有技术之一，可以把代码按照特定的形式拆分，实现按需加载，不必一次全部加载。我们知道高性能应用的一个特征就是用户可以按需加载资源（即必要资源），实现之一可保证页面首屏的渲染速度。

## 通过入口划分代码

web 应用有一些库是不常变动的，可以将他们放在一个单独的入口中，利用客户端缓存，用户就可不必每次请求页面重新加载。

1.`webpack.config.js` 文件

```js
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['lib-1', 'lib-2', 'lib-3']
  },
}
```

2.html 文件

```html
<script src="dist/vendor.js"></script>
<script src="dist/app.js"></script>
```

这种方式适合直接将接口绑定在全局对象上的库。多页面应用中，也可以利用入口代码，将公共模块创建一个入口，每个页面都加载，但是有时候有些页面不需要这些公共模块。另外，有些页面只需要 `lib-1` 模块，有些页面只需要 `lib-2` 模块，有些页面才需要两者，如果通过手工方式去配置那太 low 了，不是我们想要的，那如何来解决呢？

## CommonsChunkPlugin

这是 Webpack4 之前自带的插件，之后才替换为 SplitChunks。功能就是将多个 chunk 的公共部分提取出来，其价值在于：

- 减少重复模块带包，提高打包速度和开发效率；
- 较小整体资源体积；
- 分片后的代码可以利用客户端缓存；

### 设置提取 vendor

1.组件文件

```js
// Dashboard.js
import React from 'react';

export default () => {
  return (<div>dashboard</div>)
}
```

```js
// Business.js
import React from 'react';

export default () => {
  return (<div>business</div>)
}
```

2.`webpack.config.js` 文件

```js
module.exports = {
  entry: {
    dashboard: './src/Dashboard',
    business: './src/Business',
  },
  output: {
    filename: '[name].js'
  }
}
```

你会发现，Dashboard.js 和 Business.js 两文件都有点大，那是都把 含 react 及其依赖模块都打包进去了，这...

3.更改 `webpack.config.js` 文件

```js
module.exports = {
  entry: {
    dashboard: './src/Dashboard',
    business: './src/Business',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
}
```

- name，指定公共 chunk 名字；
- filename，提取后资源文件名；

打包后，你就会发现 Dashboard.js 和 Business.js 没有之前那般大了，这个时候多出一个 vendor.js 文件（含 react 及其依赖模块）。

### 设置提取范围

假设，有 `Dashboard.js`、`Business.js` 和 `Report.js` 3 个文件，现在只想从 `Dashboard.js` 和 `Business.js` 提取公共模块，那怎么配置这个提取范围呢？

```js
module.exports = {
  entry: {
    dashboard: './src/Dashboard.js',
    business: './src/Business.js',
    report: './src/Report.js',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      chunk: ['dashboard', 'business']
    })
  ]
};
```

大型应用中，几十上百个页面都是有的，这就有可能配置多个 CommonsChunkPlugin，然后为每个插件设置提取范围。

### 设置提取规则

CommonsChunkPlugin 默认 1 个模块只要被 2 个入口的 chunk 使用就提取出来。这里被几个入口的 chunk 使用可以通过 minChunks 设置的。

1.数字

```js
module.exports = {
  entry: {
    dashboard: './src/Dashboard.js',
    business: './src/Business.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 3
    })
  ]
}
```

上面 minChunks 设置为 3，那意思就是只有被 3 个入口同时引用才会被提取。假如入页面 `Dashboard.js` 和 `Business.js` 都引入了 `util.js`，那 `util.js` 是不会提取到 vendor.js 中，但是 entry.ventor 中的 react 还是会被提取到 vendor.js 中。也就是说 【CommonsChunkPlugin 的设置不会影响数组形式入口的模块提取】。

2.infinity

猜的没错，所有模块都不会被提取。会不会这么设置没有意义呢？存在必有意义，意义何在呢？

- 要提取模块只能通过数组型入口传入，其益处就是模块是可控的；
- 会生成一个莫诶呦任何模块仅包含 webpack 初始化环境文件 manifest；
  
3.函数

可以更细粒度地控制公共模块。通过这个函数，webpack 打包过程中的每个模块都会处理，返回 true 才进行提取。

```js
module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function(module, coumt) {
        // 模块目录路径
        if(module.content && module.context.includes('node_modules')) {
          return true;
        }
        // 包含模块名的完整路径
        if(module.resource && module.resource.endsWith('util.js')){
          return true;
        }
        // 模块被引用的次数
        if(count >= 3){
          return true;
        }
      }
    })
  ]
};
```

- 可提取 node_modules 目录下的模块；
- 可提取名称 util.js 的模块；
- 模块被引用 3 次（含）及以上的模块；

### hash 与缓存

提取公共模块时，提取后的资源不仅有模块代码，还有 webpack 的运行时，即 runtime。运行时即初始化环境的代码，比如创建模块缓存对象、声明模块加载函数等等。

早期版本中，运行时内部也包含模块的 id，且是以数字的方式不断累加的，这就会导致运行时内部的代码发生变动，影响 chunk hash 的生成。通常我们会使用 chunk hash 作为资源的版本号来优化客户端的缓存，版本号改变会导致用户频繁地更新资源，哪怕内容没有变化。解决这个问题得【将这个运行时代码提取出来】。

```js
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].js
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
};
```

注意，manifest 的配置必须出现在最后，否则 webpack 无法正常提取模块。而页面中，manifest.js 最新被引入，用来初始化 webpack 环境。

```html
<script src="dist/manifest.js"></script>
<script src="dist/vendor.js"></script>
<script src="dist/app.js"></script>
```

业务代码比如 app.js 发生了改动，manifest.js 就会发生变化，用户重新加载也不会占用很多时间。而此时 vendor.js 的 hash 并没有变化，用户可从缓存读取，从而提高首屏加载速度。

### 不足之处

- 多请求一个资源 manifest.js，只是因为前端架构需要而让用户买单；
- 一个 CommonsChunkPlugin 只能提取一个 vendor，要是提取多个得配置多个插件，配置代码会增加；
- 提取公共模块时会破坏原有 chunk 中模块依赖关系，从而难以进行更多优化；

1.配置文件

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  plugins: {
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      file: 'vendor.js'
    })
  }
};
```

2.页面组件

1）组件 `./src/components/Search.js`

```js
import React from 'react';
export default () => {
  return <div>搜索</div>
}
```

2）页面 `./src/index.js`

```js
import React from 'react';
import Search from './components/Search.js';

export default () => {
  return <div>首页</div>
}
```

打包后，虽然有提取的公共模块 `vendor.js`，但页面 `./src/index.js` 仍含有 react 及依赖模块。


## SplitChunks

这是 webpack4 改进 CommonsChunkPlugin 重新设计和实现的代码分配方法，去其（CommonsChunkPlugin）糟粕（不足地方），还使得配置更加简单。

1.配置文件 `webpack.config.js`

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
```

2.页面组件

1）组件 `./src/components/Search.js`

```js
import React from 'react';
export default () => {
  return <div>搜索</div>
}
```˚º

2）页面 `./src/index.js`

```js
import React from 'react';
import Search from './components/Search.js';

export default () => {
  return <div>首页</div>
}
```

- optimization.splitChunks.chunk 设为 `all`，SplitChunks 会对所有 chunks 生效，【默认只对异步 chunk 生效】；