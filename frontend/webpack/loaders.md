# 预处理器

工程中，我们需要和 HTML、CSS、模板、图片和字体等打交道，那如何处理这些这类静态资源呢？

其实在 webpack 的眼中，这些静态资源都是模块。webpack 本身只认识 js，其他类型资源必须预先定义一个或多个 loader 转译，输出为 webpack 能接收的形式在继续进行处理，所以说 loader 做的就是预处理工作。

比如组件 js 中加载该组件需要的 css 文件（实现高内聚，如果都在全局引入组件css 文件，哪天去掉这个组件 js，还要同时去掉组件 css 文件），其实只是表达两者之间的依赖关系，因为 css 最终还是会打包到输出资源目录下，对 js 没有任何实质性影响。

## loader 概述

每个 loader 本质都是一个函数，`output = loader(input)`。在 webpack4 之前，input 和 output 都必须为字符串，而 webpack4 之后，也支持**抽象语法树（AST）**的传递，那 loader 就可以是链式的了，即 `output = loaderA(loaderB(input))`。

- input，可能是工程源文件字符串，可能是上一个loader 的转化结果（字符串、source map 或 AST 对象）；
- output，同 input 一样，如果是最后一个 loader 就将结果给 webpack 后续处理；

> **注意**，第一个 loader 的输入时源文件，之后所有 loader 的输入是上一个 loader 的输出，最后一个 loader 输出给 webpack。

## loader 结构解读

```js
module.exports = function loader(content, map, meta) {
  var callback = this.async();
  var result = handler(content, map, meta);
  callback(
    null, // err
    result.content, // 转换后的 内容
    result.map, // 转换后的 source-map
    result.meta // 转换后的 AST
  );
};
```

从上面可看出，本质是个函数，功能是将收到后的内容进行转换，然后返回转换后的结果，可能有 source-map 和 AST 对象。

## loader 配置

## css-loader

一个组件中会 `import './index.css'`，那 webpack 怎么处理呢？这就需要 `css-loader` 这个包来转译。

1.安装包

```node
npm install css-loader -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['css-loader'] }
    ]
  }
};
```

- rules，模块处理规则；
- test，可接收一个正则表达式或一个元素为正则表达式的数组；
- use，字符串或数组，配置使用的 loader;

## style-loader

css-loader 处理 css 的各类加载语法，然后可交给 style-loader 来将样式字符串包装成 style 标签插入页面。

1.安装包

```node
npm install style-loader -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
```

style-loader 放在 css-loader 后面是因为 webpack 打包机制是按照数组从后往前的顺序将资源交个 loader 处理。



## exclude 与 include

- `exclude` 用来排除指定目录下的模块，即下面 `node_modules` 中的模块不会执行这条规则，**该配置项通常是必加的，否则会拖慢整体打包速度**；
- `include` 用来包含指定目录下的模块；

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
```

>**注意**，exclude 和 include 都存在时，exclude 优先级高。

## resource 和 issuer

两者都是用于更加精确地确定模块规则的作用范围。使用频率不高。两者关系如下：

比如组件 `import './index.css'`，可以这么理解：被加载模块是 resource，加载方就是 issuer。通常 css 配置的加载方是全局的，现在我们要限定配置。

```js
module.exports = {
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        resource: {
          test: /\.css$/,
          exclude: /node_modules/
        },
        issuer: {
          test: /\.js$/,
          exclude: '/node_modules/',
          include: '/src/pages/'
        }
      }
    ]
  }
};
```

## enforce

用来指定一个 loader 的种类，其默认值为 normal，可选值为

- pre，在 use 配置的所有 loader 之前执行，比如下面就是保证检测的代码不是其他 loader 更改过来的；
- post，在 use 配置的所有 loader 之后执行；
- inline，官方不推荐使用；

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader'
      }
    ]
  }
}
```

## babel-loader

其功能是用来将 ES6+ 编译为 ES5，从而不必关注 ES6+ 特性在各平台不兼容问题。

1.安装包

```node
npm install babel-loader @babel/core @babel/preset-env -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [ 'env', { modules: false } ]
            ]
          }
        }
      }
    ]
  }
};
```

- exclude，排除了目录 node_modules，可不编译 node_modules 目录中的模块，提高打包速度；
- babel-loader，转译 ES6+;
- @babel/core，babel 编译器核心模块；
- @babel/preset-env，预置器，根据用户配置的目标环境自动添加需要的插件和补丁来编译 ES6+；
- cacheDirectory，缓存机制，这里设为 `true`，在重复打包未改变的模块时防止二次编译，提高打包速度，指向 `node_modules/.cache/babel-loader`；
- presets 的 modules 设置为 `false`，意思是禁止让 @babel/preset-env 将模块语句转换，让 ES6 Module 语法给 webpack 处理，若是为 `true`，会将 ES6 Module 模块转化为 CommonJS 形式，这将会导致 tree-shaking 特性失效；

> **注意**，babel-loader 支持从 `.babelrc` 文件读取 babel 配置，可将 presets 和 plugins 从配置中提取出来。


## html-loader

将 HTML 文件转化为字符串并进行格式化，然后将 HTML 片段通过 JS 加载进来。

1.安装包

```node
npm install html-loader -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
};
```

## ts-loader

1.安装包

```node
npm install ts-loader typescript -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
};
```

> **注意**，typescript 的配置不是在 ts-loader 中，而是在工程目录的 tsconfig.json 中，类似

```json
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true
  }
}
```


## file-loader

打包文件类型文件，并返回到 output.publicPath 中。

1.安装包

```node
npm install file-loader -D
```

2.配置

```js
module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './assets/'
  },
  rules: [
    {
      test: /\.(png|jpg|jpeg|webp|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          // publicPath: './new-assets/'
        }
      }
    }
  ]
};
```

3.组件

```js
import avatar from './assets/avatar.jpg';
console.log(avatar); // ./assets/xxxxxxx.jpg
```

> **注意**，配置中 file-loader 的 options.publicPath 会覆盖 output.publicPath，优先级高些。


## url-loader

和 file-loader 作用类似，区别在于 url-loader 用户可以设置一个文件大小的阈值，若大于阈值其返回和 file-loader 一样，若小于阈值返回文件以 base64 形式编码。

1.安装包

```node
npm install url-loader -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: '[name].[ext]',
            publicPath: './assets/'
          }
        }
      }
    ]
  }
};
```

> **注意**，options 参数多了 limit 。

## vue-loader

我们知道 vue 组件包含**模板、js 和样式**。vue-loader 用来将模板、JS 和样式拆分。所以还得额外安装另外的预加载器。

- `vue-template-compiler` 来编译模板；
- `css-loader` 处理样式；

1.安装包

```node
npm install vue vue-loader vue-template-compiler css-loader -D
```

2.配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
};
```

## 自定义 loader

说了有代表性的几个 xxx-loader，有时候我们需要改写或新建自己的 loader 来实现自己的一些愿望或目的。比如现在要实现给所有 JS 文件启动严格模式。

### 简单版本

1.新建目录 `abc-strict-loader`，为什么是这么名称？后面安装这个包后，从node_modules 中方便找，就在前面嘛；
2.进入 `abc-strict-loader` 目录；
3.npm 初始化 `npm init -y`
4.新建文件 `index.js`;

```js
module.exports = function(content) {
  // 处理 content
  var useStrict = "// 这是 abc-strict-loader \n'use strict';\n\n";
  return useStrict + content;
};
```

5.按说我们应该先发布到 npm 这样的社区，然后在项目中在安装这个包，可是每当更改下就要重复上面 2 步，着实不是好办法。这时可以使用 npm 或 yarn 的软链功能进行本地调试，等到符合我们的预期需求后再发布到 npm 或 yarn 社区；
6.在项目工程目录安装 `abc-strict-loader`，`npm install ./abc-strict-loader`，此时项目的 node_modules 中会创建一个指向实际 `abc-strict-loader` 目录的软链，也就是说后面直接修改 `abc-strict-loader`，那项目中的依赖 `abc-strict-loader` 也会有效；
7.更改 webpack.config.js 配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'abc-strict-loader'
      }
    ]
  }
};
```

8.启动服务，查看，然后改动 `abc-strict-loader`，然后再看下 `node_modules/abc-strict-loader` 是否发生变化；

### 加入缓存

如果文件和依赖包都没有更改，那 loader 就直接使用缓存，而不是重复转换。更改 `abc-strict-loader/index.js`

```js
module.exports = function(content) {
  // 判断缓存
  if (this.cacheable) {
    console.log('缓存');
    this.cacheable();
  }

  // 处理 content
  var useStrict = "// 这是 abc-strict-loader \n'use strict';\n\n";
  return useStrict + content;
};
```

### 获取配置 options

1.首先，更改配置文件 `webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'abc-strict-loader',
          options: {
            sourceMap: true
          }
        }
      }
    ]
  }
};
```

在 `options` 加入了 `sourceMap:true`

2.更改 `abc-strict-loader`，这里为了获取 `webpack.config.js` 中的配置，需要安装包 `loader-utils`。

```js
const loaderUtils = require('loader-utils');

module.exports = function(content) {
  // 判断缓存
  if (this.cacheable) {
    console.log('缓存');
    this.cacheable();
  }

  // source-map
  var options = loaderUtils.getOptions(this) || {};
  console.log('abc-strict-loader options: ', options);  // abc-strict-loader options:  { sourceMap: true }

  // 处理 content
  var useStrict = "// 这是 abc-strict-loader \n'use strict';\n\n";
  return useStrict + content;
};
```

控制台你会看到关于 webpack.config.js 文件中关于 options 的打印信息。

使用 `loaderUtils.getOptions` 获取配置对象，接下来就要展示真正 source-map 功能了。source-map 便于开发者在浏览器查看源代码。如果没有对 source-map 处理，最终也生成不了 map 文件，那在浏览器 devtool 中可能会看到错误的源码。

3.安装依赖包 source-map。进入 `abc-strict-loader` 目录。

```node
npm install source-map
```

4.继续更改 `abc-strict-loader` 文件。

```js
const loaderUtils = require('loader-utils');
const SourceNode = require('source-map').SourceNode;
const SourceMapConsumer = require('source-map').SourceMapConsumer;

module.exports = function(content, sourceMap) {
  const useStrict = "// 这是 abc-strict-loader \n'use strict';\n\n";

  // 判断缓存
  if (this.cacheable) {
    console.log('缓存');
    this.cacheable();
  }

  // 支持 source-map
  const options = loaderUtils.getOptions(this) || {};
  if (options.sourceMap && sourceMap) {
    const currentRequest = loaderUtils.getCurrentRequest(this);
    const node = SourceNode.fromStringWithSourceMap(
      content,
      new SourceMapConsumer(sourceMap)
    );
    node.prepend(useStrict);

    const result = node.toStringWithSourceMap({
      file: currentRequest
    });
    const callback = this.async();
    callback(null, result.code, result.map.toJSON());
  }

  // 不支持 source-map
  return useStrict + content;
};
```

- 参数中新增 sourceMap 对象，它是由 webpack 或上一个 loader 传递下来的，只有它存在 loader 才能继续向下处理；
- 通过依赖包 source-map 对 map 进行操作，接收和消费之前的文件内容和 source-map，对内容进行修改，然后产生新的 source-map；
- 使用 this.async 获取 callback 函数，callback 参数分别是抛出错误、处理后的源码和新的 source-map；

完整代码可[查看目录 09 =>O(∩_∩)O~](https://github.com/ruizhengyun/webpack-note/tree/master/myapp/09)
