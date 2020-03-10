# 简单例子

联合类型（Union Types），其取值可以为多种类型中的一种，前提是**取值的类型之前定义过**。

```typescript
// union.ts
let stringAndNumber: string | number;
stringAndNumber = 'ts';
stringAndNumber = 7;
```

编译后

```javascript
// build/union.js
var stringAndNumber;
stringAndNumber = 'ts';
stringAndNumber = 7;
```

可见，联合类型使用 `|` 来分隔每种类型。

# 属性和方法

```typescript
// unionGetLength.ts
const unionGetLength = (something: string | number): number => {
    return something.length;
}

// 0.0.4/unionGetLength.ts:2:22 - error TS2339: Property 'length' does not exist on type 'string | number'.
    // Property 'length' does not exist on type 'number'.
    // 2     return something.length;
```

问题在于 `number` 类型没有 `length` 属性。

> 举一反三：换个共有的属性 `toString()` 试试
 
```typescript
// unionToString.ts
const unionToString = (something: string | number): string => {
    return something.toString();
}
```

编译后

 
```javascript
// build/unionToString.js
var unionToString = function (something) {
    return something.toString();
};
```

# 与类型推论的使用

```typescript
// unionInference.ts
let unionInference: string | number;
unionInference = 'ts';
console.log('unionInference string length: ', unionInference.length);

unionInference = 18; // 永远活在那 18 岁
console.log('unionInference number length: ', unionInference.length);

// 0.0.4/unionInference.ts:6:62 - error TS2339: Property 'length' does not exist on type 'number'.
    // 6 console.log('unionInference number length: ', unionInference.length);
```

上面例子中，第 2 行（基于这个文件 `unionInference.ts`）`unionInference` （因为 `ts`）被推断为 `string`，所以访问 `length` 属性没有问题；同理，第 6 行（因为 `18`）被推断为 `number`，访问 `length` 自然就报错了。

[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.4_20190622/notes/0.0.4)

# You can

[上一篇：Typescript 类型推论](./inference.md)
  
[下一篇：Typescript 类型断言](./assertion.md)
