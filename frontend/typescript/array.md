数组类型定义方式有多种，可见灵活性很强，一起来看看吧。

# 招式一和招式二

```javascript
// 招式一
类型[]

// 招式二：泛型
Array<number>
```

用熟悉的斐波那契数列（Fibonacci sequence）举例

```typescript
// arrayFibonacci.ts
let arrayFibonacci: number[] = [1, 1, 2, 3, 5, 8];
```

> 问：上面赋值的数组中有多种类型会怎样？

```typescript
// arrayFibonacci2.ts
let arrayFibonacci2: number[] = [1, 1, '2', false, 5, 8];

// array.ts:1:5 - error TS2322: Type '(string | number | boolean)[]' is not assignable to type 'number'.
```

错误 ❌ 原因在于 `'2', false` 是不能分配给纯数字类型，要想兼容得用联合类型（错误提示中已给出）？

```typescript
// arrayFibonacci3.ts
let arrayFibonacci3: (number | string | boolean)[] = [1, 1, '2', false, 5, 8];
```

> 问：给数组定义数字类型，我们知道数组有很多方法，那 `push` 一个字符串行不行？
 
```typescript
// arrayPush.ts
let arrayPush: Array<number> = [1, 2, 3];
arrayPush.push(5);
arrayPush.push('1');

// 0.0.5/arrayPush.ts:3:16 - error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
    // 3 arrayPush.push('1');
```

看来，必须的传入数字。


# 招式三：接口

```typescript
// arrayInterface.ts
interface ArrayNumber {
    [index: number]: number
}

let arrayNumberInterface: ArrayNumber = [1, 1, 2, 3, 5];
```
上面的例子所要表达的是，只要 `index` 的类型是 `number`，那么值的类型必须是 `number`。

# 问：如果数组中想要存放多种类型怎么办？

```typescript
// arrayAny.ts
let arrayAny: any[] = [1, '1', false, { name: 'ts' }, [1, 1, 2]];

// 或
let arrayAny2: Array<any> = [1, '1', false, { name: 'ts' }, [1, 1, 2]];
```

# 问：对于类数组怎么处理？

不就是在赋值时给变量加上 `: Type[]` 嘛，可以试下

```typescript
// arrayArguments.ts
function arrayArguments(){
    let args: number[] = arguments;
    let args2: Array<number> = arguments;
}

// 0.0.5/arrayArguments.ts:2:9 - error TS2740: Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
    // 2     let args: number[] = arguments;
          
// 0.0.5/arrayArguments.ts:3:9 - error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
    // 3     let args2: Array<number> = arguments;
```

看来类数组不是像上面想的那么简单，还需要专门的类型 `IArguments` 来定义，`IArguments` 是内置对象，这个下篇单独说说它。

```typescript
// arrayArguments2.ts
function arrayArguments2(){
    let args: IArguments = arguments;
}
```
 
[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.5_20190623/notes/0.0.5)
