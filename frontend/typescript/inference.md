> 说明：基于已经有一定基础了，接下来
> 
> 1.展示编译错误的结果会根据情况通过继续截图或贴在代码的后面；
> 
> 2.本章节及之后章节会以版本号递增方式来记录学习过程，之前是时间（年-月-日）的方式；
> 
> 3.加点工程化的东西，这个会逐渐优化，便于将精力专注于所学习内容上;
> 
> 4.对于提高学习效率这块，如果你有更好的思路或方法，还请在评论区分享下，帮助他人和我一起进步；

# 创建 `package.json`（notes 目录下）

```
npm init -y 
```

```javascript
// notes/package.json
{
  "name": "notes",
  "version": "0.0.4",
  "description": "辅助学习typescript",
  "main": "index.js",
  "scripts": {
    "build": "tsc --outDir $npm_package_version/build $npm_package_version/*.ts",
    "watch": "tsc -w $npm_package_version/*.ts",
    "createDir": "mkdir $npm_package_version"
  },
  "keywords": [],
  "author": "ruizhengyun <ruizhengyun@gmail.com> (https://github.com/ruizhengyun)",
  "license": "MIT"
}
```
- 新版本开始编写文章前，只需将 `version` 递增下即可;
- 操作完上一步，命令行输入 `npm run createDir` 来创建这个版本的示例文件夹;
- 输入 `npm run build` 可以实时监听当前版本目录下的 `*.ts` 文件并将其编译到当前版本 `build` 文件目录下（这里有个小问题就是之后新增文件不能监控到，你的重启下服务）;


要是没有明确的指定类型，那么 TS 会推断出一个类型，这是依照类型推论（Type Inference）的规则来的。

# 看个简单例子

```typescript
// inference.ts
let inference = 'ts';
inference = 18;

// 0.0.4/inference.ts:2:1 - error TS2322: Type '18' is not assignable to type 'string'.
    // 2 inference = 18;
```

有人问了，这段代码写法上没有任何问题啊？为什么有错？

不好意思，现在你在 TS 的世界里，就得按照这里的规则来。既然来学 TS，咱就得放下包袱（以往一些经验）。

出现这问题的原因在于**TS 在变量没有明确指定类型的情况下会推测出一个类型（类型推论）**。

可以通过下面这种方式来理解上面的写法

```typescript
// inference.ts
let inference: string = 'ts';
inference = 18;
// 0.0.4/inference.ts:2:1 - error TS2322: Type '18' is not assignable to type 'string'.
    // 2 inference = 18;
```

# 举一反三

刚刚在定义的时候就赋值了，那如果一开始就不定义。之前的经验告诉我们，类型是 `any`，那后面赋值字符串，然后再赋值数字都可以咯。Have a try ~

```typescript
// inference2.ts
let inference2;
inference2 = 'ts';
inference2 = 18;
```

编译后

```typescript
// build/inference2.js
var inference2;
inference2 = 'ts';
inference2 = 18;
```

[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.4_20190622/notes/0.0.4)
