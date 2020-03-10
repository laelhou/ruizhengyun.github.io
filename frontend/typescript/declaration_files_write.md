通常，常用的声明文件，社区都帮我们做好了。在此作为笔记分享，还是要了解下当第三方库没有时，自己该如何书写。在动手前，先分析下场景：

# 全局变量

- 最简单直接，通过标签 `<script>` 引入，注入全局变量 `xxx`；
- `npm install @types/xxx --save-dev` 安装，不许任何配置；
- 声明文件 `xxx.d.ts` 存放当前项目中，建议和其他 `*.ts` 都存放在 src 目录下（没有生效，可检查 `tsconfig.json` 中的 `file、include、exclude` 等配置）；
 
| 声明语句                                      | 含义              | 举例                                  |
| :-------------------------------------------- | :---------------- | :------------------------------------ |
| `declare var`、`declare const`、`declare let` | 声明 全局变量     | declareVar.ts                         |
| `declare function`                            | 声明 全局方法     | declareFunction.ts                    |
| `declare class`                               | 声明 全局类       | declareClass.ts                       |
| `declare enum`                                | 声明 全局枚举类型 | declareEnum.ts                        |
| `declare namespace`                           | 声明 全局对象     | declareNamespace.ts                   |
| `interface`、`type`                           | 声明 全局类型     | declareInterface.ts 和 declareType.ts |

## `declare var`、`declare const`、`declare let`

```typescript
// jQuery2.d.ts
declare const jQuery2: (selector: string) => any;
```

```typescript
// declareVar2.ts
jQuery2('#root');
```

## `declare function`

```typescript
// declareFunction.d.ts
declare function declareFunc(selector: string): any;
```

```typescript
// declareFunction.ts
declareFunc('#root');
```

## `declare class`

```typescript
// declareClass.d.ts
declare class DeclareClass {
    name: string;
    constructor(name: string);
    showName(): string;
}
```

```typescript
// declareClass.ts
let declareClass = new DeclareClass('class');
```

`declare class` 只定义类型，不具体实现（ 例子中 `showName2` 是具体实现所以报错了）。


## `declare enum`

```typescript
// declareEnum.d.ts
declare enum DeclareEnum {
    man,
    woman
}
```

```typescript
// declareEnum.d.ts
let person = [ DeclareEnum.woman, DeclareEnum.man ];
```

## `declare namespace`

`namespace` 第一次见，是 ts 早期为了解决模块化造的关键字，顾名思义是命名空间的意思。

> 由来：前面说了 ts 用 `namespace` 解决模块化，那模块化单词是 `module`，可后来 ES6 也是用了 `module`，由于 ts 要兼容 ES6，不得已将 `module` 改为 `namespace`。

> 不建议用：ES6 的出现，ts 不建议再用 `namespace` 来解决模块化问题，而是推荐使用 ES6 的模块化方案（ts 还是很包容的，一切为了程序员的便利）。

> 了解其原理：虽然 `namespace` 不建议用了，但 `declare namespace` 还是常用的，表示全局变量的一个对象，所以就有子属性。


```typescript
// declareNamespace.d.ts
declare namespace declareNamespace {
    const name: string;
    function showName(name: string): void;
    class Gender {
        showGender(gender: string): void;
    }
    enum Direction { up, right, down, left } 
    namespace ns {
        function showNs(name: string): void;
    }
}
```

```typescript
// declareNamespace.ts
declareNamespace.showName('declareNamespace');
declareNamespace.ns.showNs('ns');
```

> 注：在声明对象中可继续嵌入声明对象。

## `interface` 和 `type`

```typescript
// interface.d.ts
interface Options {
    position?: 'TOP' | 'BOTTOM';
    data?: any;
}

declare namespace modal {
    function open(title: string, options?: Options): void;
}
```

```typescript
// interface.ts
let options: Options = {
    position: 'top',
    data: {
        width: 200
    }
}

modal.open('新增', options);
```

上面 `interface` 没什么问题，但是它是暴露在全局类型中的，所以最好存放在 `namespace` 中，可改写为

```typescript
// interface2.d.ts
declare namespace modal {
    interface Options {
        position?: 'top' | 'bottom';
        data?: any;
    }
    function open(title: string, options?: Options): void;
}
```

```typescript
// interface2.ts
let options: modal.Options = {
    position: 'top',
    data: {
        width: 200
    }
}

modal.open('新增', options);
```


# npm 包

通过 `import xxx from 'xxx'` 导入，符合 ES6 模块规范。知道怎么引入 npm 包，还得知道怎么去创建 npm 包。

## 声明文件存放位置

### 和 npm 包绑定在一起（npm 发布者也提供了声明文件，良心发布者）

场景是当接手一个项目，一是查找其 npm 包可看 `package.json` 中的 `types`，二是查看有无 `xxx/index.d.ts` 声明文件。为了便于自己和他人，请将声明文件和 npm 包绑定在一起（如果以后自己发布 npm 包）。

### 在社区的 `@types`（没有和 npm 包绑定在一起，由其他人发布）

由于种种情况，有的 npm 包并没有声明文件，这个时候试着安装 xxx（`npm install @types/xxx -S`）来判断 `@types` 是否存在声明文件（为了在 ts 便利使用，其他人补足了对应的声明文件，但只能发布到 `@types` 里）。

### 上面两种情况都没有找到声明文件，那就得自己动手写声明文件了（靠人不如靠己）

一是创建在 `node_modules/@types/xxx/index.d.ts`，这种方式不需要额外配置（好处），但是 `node_modules` 是不稳定的，因为 `node_modules` 目录不会发布到仓库、无法版本回溯、有删除风险、多人团队应用乱等问题，所以不建议使用；二是创建 `types` 目录，专门存放自己写的声明文件，如 `@types/xxx/index.d.ts`，此刻需要 `tsconfig.json` 配合，成功规避掉第一种方法产生的问题；

### 目录如下（最简单清爽但实用）

```javascript
project
├── src
|  └── index.ts
├── types
|  └── xxx
|     └── index.d.ts
└── tsconfig.json
```

### `tsconfig.json` 内容

```javascript
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}
```

## 声明文件语法

| 语法              | 含义                  | 示例                                                     |
| :---------------- | :-------------------- | :------------------------------------------------------- |
| export            | 导出变量              | `types/export/index.d.ts` 和 `0.1.3/export.ts`           |
| export namespace  | 导出对象(含子属性)    | `types/export/index.d.ts` 和 `0.1.3/export.ts`           |
| export default    | 导出默认(ES6)（推荐） | `types/exportDefault/*.d.ts` 和 `0.1.3/exportDefault.ts` |
| export = commonjs | 导出模块（不推荐）    |                                                          |

### `export` 导出变量

前面谈到过全局变量的声明文件方式，npm 包声明文件和其有一定区别。
- 不使用 `declare` 声明全局变量，就只是声明一个普通变量（局部变量）；
- 声明文件中使用 `export` 导出；
- 使用文件用 `import` 导入然后使用，这个和 ES6 一样（无学习成本）；

下面就自己创建声明文件，推荐写在 `types` 目录下，后续也是如此。

```typescript
// types/export/index.d.ts
export const name: string;
export function showName(): string;
export class Star {
    constructor(name: string);
    say(): string;
}
export enum Gender {
    woman, 
    man
}
export interface Options {
    position?: 'TOP' | 'BOTTOM';
    data?: any;
}
export namespace declareNamespace {
    const name: string;
    namespace ns {
        function showNs(name: string): string;
    }
}
```

```typescript
// 0.1.3/export.ts
import { name, showName, Star, Gender, Options, declareNamespace } from '../types/export';

console.log(name);
let myName = showName();
let newStar = new Star('pr');
let gender = [Gender.woman, Gender.man];
let options: Options = {
    position: 'TOP',
    data: { name: 'pr', age: 18 }
}
console.log(declareNamespace.name);
declareNamespace.ns.showNs('ns');
```

### `export default` 导出默认（ES6）

`export default` 无论是 ES6 还是 Typescript 都是直接默认导出。在 Typescript 中可直接导出 `function`、`class` 和 `interface`。


```typescript
// types/exportDefault/function.d.ts
export default function showName(): string;
```

```typescript
// types/exportDefault/class.d.ts
export default class Star {
    constructor(name: string);
    say(): string;
}
```

```typescript
// types/exportDefault/interface.d.ts
export default interface Options {
    position?: 'TOP' | 'BOTTOM';
    data?: any;
}
```

```typescript
// types/exportDefault/enum.d.ts
declare enum Gender {
    woman, 
    man
}

export default Gender;
```

```typescript
// types/exportDefault/namespace.d.ts
declare namespace declareNamespace {
    const name: string;
    namespace ns {
        function showNs(name: string): string;
    }
}

export default declareNamespace;
```


### `export =` 导出模块

commonjs 规范中，导出一个模块可以

```javascript
// 导出整体
module.exports = xxx;

// 导出单个
exports.xxx = xxx;
```

在 Typescript 中，对于 commonjs 模块导出，有多种导入方式

```typescript
// 导入整体
const xxx = require('xxx');
import * as xxx from 'xxx';
import xxx = require('xxx');

// 导入单个
const fn = require('xxx').fn;
import { fn } from 'xxx';
import fn = xxx.fn;
```
> 注：`import ... require` 和 `export =` 都是 Typescript 为了兼容 AMD 规范和 commonjs 规范创建的语法，由于不常用所以也不推荐用。而是推荐使用 ES6 标准的 `export default` 和 `export`(大家都这么用)。

# UMD 库

通用模块定义（Universal Module Definition），UMD 库指那些可以通过 `<script>` 标签引入，又可以通过 `import` 导入的库。和 npm 包的声明文件不同的是，需要额外声明一个全局变量。

```typescript
// types/umd/index.d.ts
export as namespace umd;
export default umd;
// export = umd;

declare function umd(): string;
declare namespace umd {
    let ns: string;
    function showNs(ns: number): string;
}
```

```typescript
// 0.1.3/umd.ts
import umd from '../types/umd';

umd();
umd.ns = '18';
umd.showNs(18);
```

# 扩展全局变量

```typescript
// extendVar.ts
interface String {
    prefixName(): string;
}

'pr'.prefixName();
```

可见，通过声明，`String` 也可添加属性和方法。

对于来自 npm 包或 UMD 库的声明文件，需要 `export` 导出类型声明。如果希望 npm 包或 UMD 库本身导入后扩张全局变量，可用 `declare global`。

```typescript
// declareGlobal.ts
```


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.1.3_20190709/notes/0.1.3)
