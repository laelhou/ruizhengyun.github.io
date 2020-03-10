元祖与数组结构上类似，待会你就知道了。

# 举个例子

```typescript
// tuple.ts
let tuple: [string, number];
tuple = ['pr', 30];

let tuple1_1: [string, number] = ['pr', 30];

let tuple1_2: [string, number] = ['pr'];

let tuple1_3: [string, number];
tuple1_3 = ['pr', 30, 18];


// 0.0.8/tuple.ts:6:5 - error TS2741: Property '1' is missing in type '[string]' but required in type '[string, number]'.
    // 6 let tuple1_2: [string, number] = ['pr'];
     
// 0.0.8/tuple.ts:9:1 - error TS2322: Type '[string, number, number]' is not assignable to type '[string, number]'.
    // Types of property 'length' are incompatible.
    // Type '3' is not assignable to type '2'.
    // 9 tuple1_3 = ['pr', 30, 18];
```

通过例子，可以发现**直接对变量类型定义并赋值的时候，不能多也不能少（挺熟悉的吧）**

> 问：多传肯定是不可能的了，如果少传可以么？

本文开篇我们不是说元祖和数组结构类似么，试下下标赋值

```typescript
// tuple2.ts
let tuple2: [string, number];
tuple2[0] = 'pr';

let tuple2_1: [string, number];
tuple2_1[1] = 30;
```

这波操作 666。

# 新增元素

```typescript
// tuple3.ts
let tuple3: [string, number] = ['pr', 30];
tuple3.push(18);
tuple3.push('pr 18');

tuple3.pop();
tuple3.unshift('pr is a jser');
tuple3.unshift(null);
tuple3.unshift(undefined);

tuple3.unshift(false);

// 0.0.8/tuple3.ts:10:16 - error TS2345: Argument of type 'false' is not assignable to parameter of type 'string | number'.
    // 10 tuple3.unshift(false);
```

可以发现，添加元素的类型只能是 `string | number`（添加 `false` 报错了），下个定论**元祖添加元素的类型只能是元祖类型的联合类型**。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.8_20190626/notes/0.0.8)


# You can

[上一篇：Typescript 内置对象](../basic/built_in_objects.md)

[下一篇：Typescript 枚举](./enum.md)
