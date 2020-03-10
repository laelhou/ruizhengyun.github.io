# 类型别名
别名，顾名思义，就是给一个类型起个新名字便于记忆和使用。下面例子让你秒懂并应用

```typescript
// alias.ts
type Name = string;
type ShowName = () => string; // Typescript 中的 =>
type NameOrShowName = Name | ShowName; // 联合类型

const getName = (name: NameOrShowName) => { // ES6 中的 =>
    if(typeof name === 'string'){
        return name;
    } else {
        return name();
    }
}

let showName = () => 'pr is a boy';

console.log(getName('pr')); // pr
console.log(getName(showName())); // pr is a boy
```

> 注：不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`
>
> 在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型;
>
> 在 ES6 中，`=>` 叫做箭头函数;
>
> 当然，Typescript 有可以使用箭头函数，只不过上面是想说明两者的区别;

> 发现：
>
> 1.创建别名需要使用关键字 `type`；
>
> 2.使用别名通常用在有**联合类型**的场景下；

发现
- 创建别名需要使用关键字 `type`；
- 使用别名通常用在有**联合类型**的场景下；


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.1.1_20190702/notes/0.1.1)


# 字符串字面量类型

它是用来约束只能从定义的字段中取值。

```typescript
// string.ts
type EventNames = 'click' | 'scroll' | 'mousemove';
const handleEvent: (a: Element, b: EventNames) => string = (ele: Element, event: EventNames) => {
    return `${ele} ${event}`;
}

handleEvent(document.getElementById('header'), 'scroll');
handleEvent(document.getElementById('footer'), 'keyup');

// 0.1.1/string.ts:7:48 - error TS2345: Argument of type '"keyup"' is not assignable to parameter of type 'EventNames'.
    // 7 handleEvent(document.getElementById('footer'), 'keyup');  
```

上面报错是因为 `keyup` 不在 `EventNames` 中。

> 发现
>
> 定义**类型别名与字符串字面量类型**用的都是 `type`。