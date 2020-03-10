在 [Typescript 数组类型](./array.md) 这篇文章末我们提及到了 Typescripe 一种[内置对象][]。

在 Typescript 中内置对象是**作为已经定义好（内置）的类型去使用的**，很显然它是**存在全局作用域（Global）上**。

# ECMAScript 内置对象

拿 `Boolean` 这个内置对象来说吧，这样的对象在 ECMAScript 中有很多。

```typescript
// buildInObjects.ts
let b1: boolean = new Boolean(1);
let b2: Boolean = new Boolean(1);

// 0.0.7/buildInObjects.ts:1:5 - error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
    //   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
    // 1 let b1: boolean = new Boolean(1);
```

第 1 行报错，我们在 [Typescript 基础类型](./basic.md) 就分析过了，不能将 `Boolean` 分配给 `boolean`，前者是包装器对象，后者是基本类型。这也间接说明第 2 行能正常运行的原因了。


# DOM 与 BOM 内置对象

```typescript
// buildInObjects2.ts
const body: HTMLElement = document.body;
const divList: NodeList = document.querySelectorAll('div');
document.addEventListener('click', (e: MouseEvent) => {
    // do something
});
```

示例中 `HTMLElement`、`NodeList` 和 `MouseEvent` 就是 DOM 与 BOM 内置对象。

总结：不管 ECMAScript 内置对象还是 DOM 与 BOM 的内置对象，其文件定义在 [TypeScript 核心库的文件][] 中。下面就说说它。

# 在 Node.js 中应用

是不是也内置了呀？这个，这个不是了。你得引入第三方声明文件。这里牵扯到声明文件，下一篇内容我们来说说。

```
npm install @types/node --save-dev
```

# TypeScript 核心库的文件

它定义了浏览器环境所有类型，预置在 Typescript 中，所以我们能随手拿来用。而这些文件都帮我们做了很多判断工作了（一个字省心）。

```typescript
// buildInObjects3.ts
Math.pow(10, '3');

// 0.0.7/buildInObjects3.ts:1:14 - error TS2345: Argument of type '"3"' is not assignable to parameter of type 'number'.
    // 1 Math.pow(10, '3');
```

通过错误提示我们可以推断出 `Math.pow` 是这么定义的

```typescript
// buildInObjects4.ts
interface Math {
    pow(x:number, y:number): number;
    join(x:string, y:string): string;
}

Math.join('1', '2');
Math.join('1', 2);

// 0.0.7/buildInObjects4.ts:7:16 - error TS2345: Argument of type '2' is not assignable to parameter of type 'string'.
    // 7 Math.join('1', 2);
```

在推断 `Math.pow` 类型定义的同时，顺便造了一个 `Math.join`，其输入类型和输出类型都是字符串，随后调用这个方法时参数传了数字类型，因而同 `Math.pow(10, '3')` 错误类似。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.7_20190625/notes/0.0.7)


[内置对象]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

[ TypeScript 核心库的文件]: https://github.com/Microsoft/TypeScript/tree/master/src/lib


