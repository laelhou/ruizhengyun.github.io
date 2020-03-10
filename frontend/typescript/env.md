# 安装
说到如何使用我了，这个很简单，因为和安装其他 npm 包一样，请看

```
// 全局安装我
sudo npm install -g typescript
```

命令行输入 `tsc -v` 查看成功安装好我，然后就是你可以在任何地方执行 `tsc` 命令了。



# 开发工具首推 Visual Studio Code（没给我广告费）

我的精彩履历中就提过，我的一个优势是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等，好用到不要不要的。

主流的编辑器都支持我，这里推荐 [Visual Studio Code](https://code.visualstudio.com/)，一款开源、跨终端、轻量级编辑器，同时内置就支持我。

还有就是它本身也是用[我编写](https://github.com/Microsoft/vscode/)。

下载安装：https://code.visualstudio.com/


# 第一个例子

## 写个 `hello.ts` 来试试。

```javascript
// hello.ts
const hello = str => {
    return `Hello, ${str}`;
}

hello('typescript');
```

输入 `tsc hello.ts`，你会看到和 `hello.ts` 同级目录多出一个 `hello.js` 文件

```javascript
// hello.js
var hello = function (str) {
    return "Hello, " + str;
};
hello('typescript');
```


## 加点语法

上面，也没看出和 javascript 有什么不同，不急，咱看 `hello2.ts`

```javascript
// hello2.ts
const hello2 = (str: string) => {
    return `Hello, ${str}`;
}

hello2('typescript');
hello2(99);
```

这里，给参数 `string` 添加了 `: string` 类型注解，指定变量的类型为字符串，`:` 的前后有没有空格都可以。你会发现编辑器中会提示错误

![](./assets/introduction/hello2-01.png)

然后执行 `tsc hello2.ts`，编译也会出错。说 99 不能作为类型需要是字符串的参数，这是我希望看到的，这波操作 **666**。但是 `hello2.js` 还是编译出来了生成 js 文件了（尽管 `hello2.ts` 书写有问题，但是前面说过我是有包容心的）

![](./assets/introduction/hello2-02.png)


```javascript
// hello2.js
var hello2 = function (str) {
    return "Hello, " + str;
};
hello2('typescript');
hello2(99);
```

上述例子中，编译出来的 js 并没有什么检查的代码被插入进来，这是因为**我只会进行静态检查，如果发现有错误，编译的时候就会报错（但是我还是生成编译结果）**。


# 接下来

接下来，就要开始**无聊的接口讲解、代码编写和示例测试**。希望你能熬过这段艰难期（也希望你能打心底接受我-Typescript）。

[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v.0.0.1_20190619/note)
