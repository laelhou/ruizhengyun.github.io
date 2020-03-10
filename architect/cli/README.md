# 前言

> 作为前端开发人员，node-cli 也是必会知识点之一。

## 命令行参数

1.新建 01.js

```js
console.log(process.argv.slice(2));
```

2.执行

```js
`node 01.js --save-dev -n lodash`

// [ '--save-dev', '-name', 'lodash' ]
```

3.说明
虽然拿到参数了，但对于构建一个 cli 还远远不够，首先得考虑参数输入下面 3 种风格：

- GNU参数，前面加 --，例如 `npm --save-dev webpack`；
- Unix参数，前面加 -，不过后面跟的是单个字符。例如 -name 解析为 ['n', 'a', 'm', 'e']；
- BSD参数，前面不加修饰符；

那如何分别获取这 3 中参数呢？

## 命令行参数解析

通过正则表达式对 process.argv 进行处理

1.新建 02.js

```js
/**
 * 命令行参数解析 GNU、Unix 和 BSD 参数
 * @param {Array} argv
 * @return
 */
function parseArgv(argv) {
  const argvLen = argv.length;
  const res = {
    _: []
  };

  for (let i = 0; i < argvLen; i++) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (/^--.+/.test(arg)) {
      // GNU
      const key = arg.match(/^--(.+)/)[1];
      if (next !== null && !/^-.+$/.test(next)) {
        res[key] = next;
        i++;
      } else {
        res[key] = true;
      }
    } else if (/^-[^-]+/.test(arg)) {
      // Unix
      const keys = arg.match(/^-([^-]+)/)[1].split('');
      for (let j = 0, keysLen = keys.length; j < keysLen; j++) {
        const key = keys[j];
        // 不是字母跳过
        if (!/[a-zA-Z]/.test(key)) {
          continue;
        }
        if (next !== null && !/^-[^-]+/.test(next) && j === keysLen - 1) {
          res[key] = next;
          i++;
        } else {
          res[key] = true;
        }
      }
    } else {
      // BSD
      res._.push(arg);
    }
  }
  return res;
}

console.log('parseArgv', parseArgv(process.argv.slice(2)));
```

2.执行

```js
`node 02.js --save-dev -n lodash`

// parseArgv { _: [], 'save-dev': true, n: true, a: true, m: true, e: 'lodash' }
```

## 命令行支持交互

1.新建 03.js

```js
const readline = require('readline');
const question = ['昵称', '性别', '年龄'];
const questionLen = question.length;
const data = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `=> ${question[0]}: `
});
rl.prompt();

rl.on('line', res => {
  data.push(res.trim());
  const dataLen = data.length;
  if (dataLen === questionLen) {
    rl.close();
  }
  rl.setPrompt(`=> ${question[dataLen]}: `);
  rl.prompt();
});

rl.on('close', () => {
  console.log(`昵称 ${data[0]}，性别 ${data[1]}，年龄 ${data[2]}`);
  process.exit(0);
});
```

2.执行

```js
node 03.js
```

## 命令行支持方向键

1.新建 04.js

```js
const readline = require('readline');
let options = ['react', 'vue', 'angular'];
const optionsLen = options.length;
let selected = 0;
let selectedLine = 0;
const rl = readline.createInterface(process.stdin, process.stdout);

process.stdout.write('请选择框架：\r\n');
function selectRender() {
  let str = '';
  for (let i = 0; i < optionsLen; i++) {
    const option = options[i];
    selectedLine++;
    str += `${selected === i ? '[x]' : '[ ]'} ${option}\r\n`;
  }
  process.stdout.write(str);
}
selectRender();

// 监控键盘事件
process.stdin.on('keypress', (s, key) => {
  const { name } = key;
  if (name === 'up' && selected > 0) {
    selected--;
  } else if (name === 'up' && selected === 0) {
    selected = optionsLen - 1;
  } else if (name === 'down' && selected < optionsLen - 1) {
    selected++;
  } else if (name === 'down' && selected === optionsLen - 1) {
    selected = 0;
  } else {
    return true;
  }

  // 移动光标覆盖当前内容
  readline.moveCursor(process.stdout, 0, -selectedLine);
  selectedLine -= optionsLen;
  selectRender();
});

rl.on('line', () => {
  console.log(`你选择了 ${options[selected]} 框架。`);
  process.exit(0);
});

rl.on('close', () => {
  rl.close();
});
```

2.执行

```js
node 04.js
```

## 命令行支持颜色

1.新建 05.js

```js
// 添加字体背景色和字体颜色
const attr = '\x1b[46;3m 你 \x1b[41;4m 就是我的唯一 \n';
process.stdout.write(attr);
```

2.执行

```js
node 05.js
```

[示例查看](https://github.com/ruizhengyun/cli-note/tree/master/notes/basic)