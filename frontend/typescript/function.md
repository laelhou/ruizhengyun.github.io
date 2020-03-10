函数，一等公民（满满的自豪感）。

# 招式一：函数声明（function declaration）

```typescript
// function.ts
function sum(x: number, y: number): number {
    return x + y;
}
```

通过对接口定义的认识，函数的参数多一个和少一个（没有对参数做可选操作）应该也不行。试一下

```typescript
// function2.ts
function sum2(x: number, y: number): number {
    return x + y;
}

sum2(1, 2);

sum2(1, 2, 3);

sum2(1);

// 0.0.6/function2.ts:7:12 - error TS2554: Expected 2 arguments, but got 3.
    // 7 sum2(1, 2, 3);

// 0.0.6/function2.ts:9:1 - error TS2554: Expected 2 arguments, but got 1.
    // 9 sum2(1);
  
// 0.0.6/function2.ts:1:26
    // 1 function sum2(x: number, y: number): number {
    // An argument for 'y' was not provided.
```

提示很明显了，就是说我们参数多了一个，参数少了一个。总结，**函数对于参数的个数是不容修改的**。


# 招式二：函数表达式（function expression）

```typescript
// function3.ts
const sum3 = function(x: number, y: number): number {
    return x + y;
}
```

从函数表达式的结构分析，`=` 右边（→_→）大家都懂的，但是👈左边我们发现有点空，是不是得有个类型定义下呢？那又该如何定义？

```typescript
// function4.ts
const sum4: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}
```

来看 `=` 左边，多了 `: (x: number, y: number) => number`，这里的 `=>` 不是我们熟悉的 ES6 箭头函数中的 `=>`。Typescript 中的 `=>` 是用来定义函数的，函数左边是是输入类型（用 `()` 括起来），右侧是输出类型。其实，多出的内容也可以不用手动添加的（晦涩难懂），因为通过赋值操作也可以将类型推论出来（有种若不自宫亦可成功的意味，哈哈）。


# 招式三：接口定义（interfaces）

```typescript
// function5.ts
interface Function5 {
    (x: string, y: string): boolean
}

let function5: Function5 = (x: string, y: string) => {
    return x.search(y) > -1;
}
```

上面例子是用接口的形式来加持 ES6 的箭头函数，棒棒的。


# 可选参数

这个和上篇接口类型一样的方式

```typescript
// function6.ts
const showMyName = (firstName: string, lastName?: string): string => {
    if(lastName) {
        return `${firstName}${lastName}`;
    } else {
        return firstName;
    }
}
console.log(showMyName('pr'));
console.log(showMyName('江湖', '再见'));
```

编译后

```javascript
// function6.js
var showMyName = function (firstName, lastName) {
    if (lastName) {
        return "" + firstName + lastName;
    }
    else {
        return firstName;
    }
};
console.log(showMyName('pr'));
console.log(showMyName('江湖', '再见'));
```

> 问：可选参数后面还能加参数（必选参数）么？

```typescript
// function7.ts
const showMyName7 = (firstName?: string, lastName: string): string => {
    if(firstName) {
        return `${firstName}${lastName}`;
    } else {
        return lastName;
    }
}

// 0.0.6/function7.ts:1:42 - error TS1016: A required parameter cannot follow an optional parameter.
    // 1 const showMyName7 = (firstName?: string, lastName: string): string => {
```

报错的原因是**可选参数后面不能再放参数（必选）**。

# 剩余参数

我们知道 ES6 有 `rest` 参数（形式是 `...rest` ）, 用于获取函数的多余参数，这样就不需要使用arguments对象了。那 Typescript 中的 `rest` 是否也是如此呢？

```typescript
// function8.ts
// function8.ts
const push = (array: any[], ...rest: any[]) => {
    rest.forEach(r => {
        array.push(r);
    });
}

let arr = [false];
push(arr, '1', 2, 3);

const push1 = (array: any[], ...rest: any[], x: number) => {
    rest.forEach(r => {
        array.push(r);
    });
    rest.push(x);
}

// 0.0.6/function8.ts:11:30 - error TS1014: A rest parameter must be last in a parameter list.
    // 11 const push1 = (array: any[], ...rest: any[], x: number) => {
```

参数 `array` 和 `..rest` 我们都定义了类型，`...rest` 其实就是一个数组。另外，**剩余参数和可选参数后面都不能再有参数**。

# 默认值

ES6 中有给函数参数添加默认值的操作，那 Typescript 如果也有此等操作，那是怎样的？设置默认值的参数可以再有参数么（是不是被不能再有参数吓怕了）？

```typescript
// function9.ts
const showMyNameAgain = (firstName: string = 'pr', lastName?: string, ...rest: any[]): string => {
    let tmp: string = '';
    if(rest.length) {
        tmp = rest.join(' ');
    }
    if(lastName) {
        return `${firstName}${lastName}${tmp}`;
    } else {
        return `${firstName}${tmp}`;
    }
}

console.log(showMyNameAgain());
console.log(showMyNameAgain('胖芮','，男', '今年', 30));
```

编译后

```javascript
// function9.js
var showMyNameAgain = function (firstName, lastName) {
    if (firstName === void 0) { firstName = 'pr'; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var tmp = '';
    if (rest.length) {
        tmp = rest.join(' ');
    }
    if (lastName) {
        return "" + firstName + lastName + tmp;
    }
    else {
        return "" + firstName + tmp;
    }
};
console.log(showMyNameAgain()); // pr
console.log(showMyNameAgain('胖芮', '，男', '今年', 30)); // 胖芮，男今年 30
```

通过上面例子可见，默认值与 ES6 赋值方式无异。同时，我们发现**剩余参数可放在可选参数后**。



# 重载

重载的意思不是重新载入，这儿不可望文生义。实际意思是根据不同数量或类型的参数，做出不同的处理。

比如有这个一个场景：传入数字就乘以10并返回数字，传入字符串就在它前面加上 `hello`并返回字符串。

我们先分析下注意点

- 输出值类型需同输入参数类型一致（用到联合类型）；
- 根据参数类型做不同操作处理（用到类型判断）；

```typescript
// function10.ts
const chongzai = (x: number | string): number | string => {
    if(typeof x === 'string') {
        return `hello, ${x}`;
    } else if (typeof x === 'number') {
        return x * 10;
    }
}
```

以上例子这么写没有问题，可是，有一点似乎没严格约束就是第一点（**输出值类型需同输入参数类型一致（用到联合类型）**），上面代码 `return x * 10;` 改为 `x * 10 + '';` 也不会报错，但是并不符合我们的要求。所以得手动给函数定义类型

```typescript
// function11.ts
function chongzai2(x: string): string;
function chongzai2(x: number): number;
function chongzai2(x: number | string): number | string {
    if(typeof x === 'string') {
        return `hello, ${x}`;
    } else if (typeof x === 'number') {
        return x * 10;
    }
}
```

咋一看，怎么函数 `chongzai2` 声明了 3 次。其实不然，前 2 次是函数定义，第 3 次是函数实现。

[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.6_20190624)
