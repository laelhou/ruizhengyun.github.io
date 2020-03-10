# Commander.js 指南

[Commander.js][] node.js命令行界面的完整解决方案,受 [Ruby Commander][] 启发。

## 搭建环境

1.新建 package.json

```js
{
  "name": "cci",
  "version": "0.0.1",
  "description": "cammander",
  "bin": {
    "cm": "./cm.js"
  }
}
```

2.安装 commander

```js
npm install commander -D
```

3.新建文件 cm.js

```js
#!/usr/bin/env node
const program = require('commander');

program.version('0.0.1', '-v --version');

program.parse(process.argv);
```

4.npm link 自定义命令

```js
npm link
```

此块知识点可查看 [npm link 实现自定义命令](http://ruizhengyun.cn/frontend/npm/link.html)

5.后面例子在文件 cm.js 修改即可

## API

### version

定义版本，这里可以获取 package.json 中的 version

1.文件如 cm.js
2.执行

```js
cm -v
```

### option

1.修改 cm.js

```js
const program = require('commander');

program
  .option('-d, --debug', '输出额外的调试')
  .option('-s, --small [type]', '小寸图片')
  .option('-S, --small-dev [type]', '开发小寸图片')
  .option('-l, --large [type]', '大寸图片')
  .parse(process.argv);

if (program.debug) {
  console.log(`输出额外的调试: ${program.debug}`);
}

if (program.small) {
  console.log(`小寸图片: ${program.small}`);
}

if (program.smallDev) {
  console.log(`开发小寸图片: ${program.smallDev}`);
}

if (program.large) {
  console.log(`大寸图片: ${program.large}`);
}

```

2.执行

```js
cm -S 日常微笑.jpg

// 开发小寸图片: 日常微笑.jpg
```

3.格式

- 使用 `.option()` 方法定义 commander 的选项 options;
- 示例：`.option('-n, --name <items1> [items2]', 'name description', 'default value')`;

4.说明

- 自定义标志<必须>：分为长短标识，中间用逗号、竖线或者空格分割；标志后面可跟必须参数或可选参数，前者用 <> 包含，后者用 [] 包含；
- 选项描述<省略不报错>：在使用 --help 命令时显示标志描述
- 默认值<可省略>
- 多个短标识可以组合为一个参数，如 `-a -b -c等价于 `-abc`;
- 多词选项如 `--template-engine` 会被转为驼峰法 `program.templateEngine`;

### command


[示例查看](https://github.com/ruizhengyun/cli-note/tree/master/notes/commander)

[Commander.js]: https://github.com/tj/commander.js
[Ruby Commander]: https://github.com/commander-rb/commander