类型断言（Type Assertion）就是手动指定一个值的类型。具体看看怎么做吧

# 招式一和招式二

```javascript
// 招式一
<类型>值

// 招式二
值 as 类型
```

推荐使用这种，因为在 tsx 语法中只认它。而 tsx 是 react 的 jsx 语法的 ts 版，后面实战篇幅天天见，别着急。

# 拿上篇联合类型例子作教材

```typescript
// unionGetLength.ts
const unionGetLength = (something: string | number): number => {
    return something.length;
}

// 0.0.4/unionGetLength.ts:2:22 - error TS2339: Property 'length' does not exist on type 'string | number'.
    // Property 'length' does not exist on type 'number'.
    // 2     return something.length;
```

于是想：如果有 `length` 属性就返回 `something.length`, 没有就转为字符串然后再返回 `something.length` 可不可以呢？

```typescript
// unionGetLength2.ts
const unionGetLength2 = (something: string | number): number => {
    if(something.length){
        return something.length;
    } else {
        return something.toString().length;
    }
}

// 0.0.4/unionGetLength2.ts:3:26 - error TS2339: Property 'length' does not exist on type 'string | number'.
    // Property 'length' does not exist on type 'number'.
    // 3         return something.length;
```

猜想失败，`unionGetLength2.ts` 与 `unionGetLength.ts` 还是一样的问题。然而到这里我们再往前进一步（就是加上类型断言），如


```typescript
// assertionGetLength.ts
const assertionGetLength = (something: string | number): number => {
    if((something as string).length){
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

// 或
const assertionGetLengthOther = (something: string | number): number => {
    if((<string>something).length){
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

编译后

```javascript
// assertionGetLength.js
var assertionGetLength = function (something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
};
// 或
var assertionGetLengthOther = function (something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
};
```

总结：类型断言的用法就是将断言的变量 `xx` 改为 `(xx as Type)` 或 `(<Type>xx)`。


# 思维发散

上篇联合类型的例子中，类型定义为 `string | number`，如果类型断言不是两者中其一会怎样？

```typescript
// assertionGetLength2.ts
const assertionGetLength2 = (something: string | number): boolean => {
    return (something as boolean);
}

const assertionGetLength21 = (something: string | boolean): string => {
    return (something as string);
}

const assertionGetLength22 = (something: string | boolean): boolean => {
    return (something as boolean);
}

const assertionGetLength23 = (something: string | boolean): number => {
    return (something as number);
}

// 0.0.4/assertionGetLength2.ts:2:13 - error TS2352: Conversion of type 'string | number' to type 'boolean' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
    // Type 'number' is not comparable to type 'boolean'.
    // 2     return (something as boolean);

// 0.0.4/assertionGetLength2.ts:14:13 - error TS2352: Conversion of type 'string | boolean' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
    // Type 'true' is not comparable to type 'number'.

    // 14     return (something as number);    
```

可见，**类型断言必须联合类型中的一种，类型断言只是做类型选择，而不是做类型转换**。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.4_20190622/notes/0.0.4)
