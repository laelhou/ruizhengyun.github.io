新的一天，打卡签到。按照在 [Typescript 类型推论] 里的约定，我们将文件 `notes/package.json` 的 `version` 改为 `0.0.5`，然后 `npm run createDir`, 这个时候，`notes` 目录下就会新增文件夹 `0.0.5`，很简单是吧，后面章节，就忽略这些简单操作了，直接奔主题。

在学之前，自以为对象类型是用 `object` 来定义，其实不然，在 Typescript 的玩法里，是用接口（Interfaces）来定义。

# 玩法（介绍接口）

面向对象语言中，接口（Interfaces）是对行为的抽象（可以用事物的本质来辅助理解）。而具体如何行动由类（class）来实现（implement）（可以用事物的现象来辅助理解）。


# 上代码（举例子）

```typescript
// interfaces.ts
interface Person {
    name: string;
    age: number;
}

let pr: Person = {
    name: '胖芮',
    age: 30
}
```

根据玩法，上面例子中定义了一个接口 `Person`（行为的抽象，事物的本质），接着定义了一个变量 `pr`，其类型就是 `Person`（接口是类型，对象类型）。约束了定义的变量 `pr` 属性类型必须和接口 `Person` 一致。 

通常，接口**首字母大写（这个可以用 react 组件名称命令规则来辅助理解）**。

> 问：定义变量的属性个数比接口少可以么？多一个行不？

```typescript
// interfaces2.ts
interface Person2 {
    name: string;
    age: number;
}

let pr2: Person2 = {
    name: '胖芮'
}

// 0.0.5/interfaces2.ts:6:5 - error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Person2'.
    // 6 let pr2: Person2 = {

// 0.0.5/interfaces2.ts:3:5
    // 3     age: number;
    // 'age' is declared here.
```

```typescript
// interfaces3.ts
interface Person3 {
    name: string;
    age: number;
}

let pr3: Person3 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

// 0.0.5/interfaces3.ts:9:5 - error TS2322: Type '{ name: string; age: number; address: string; }' is not assignable to type 'Person3'.
    // Object literal may only specify known properties, and 'address' does not exist in type 'Person3'.
    // 9     address: '杭州'
```

可见，赋值的时候，多一个少一个都不行，变量的属性必须和接口的属性保持一致（前提对接口属性没做处理）。

# 可选属性

上面在对接口属性没做任何处理的情况下，赋值的时候，变量属性不能多也不能少。可是有时候我们还是希望有些属性是可选的，一起来看看

```typescript
// interfaces4.ts
interface Person4 {
    name: string;
    age?: number;
}

let pr4: Person4 = {
    name: '胖芮'
}

let pr4_1: Person4 = {
    name: '胖芮',
    address: '杭州'
}

// 0.0.5/interfaces4.ts:12:5 - error TS2322: Type '{ name: string; address: string; }' is not assignable to type 'Person4'.
    //   Object literal may only specify known properties, and 'address' does not exist in type 'Person4'.
    // 12     address: '杭州'
```

可选属性是在属性后面加上 `?`，这个很容易理解（结合正则）。而对于多余属性仍然会报错（不能睁只眼闭只眼，多么正直啊）。

# 任意属性

难道就没别的办法了，看看下面

```typescript
// interfaces5.ts
interface Person5 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let pr5: Person5 = {
    name: '胖芮',
    isMan: true,
    address: '杭州'
}
```

编译后

```javascript
// build/interfaces5.js
var pr5 = {
    name: '胖芮',
    isMan: true,
    address: '杭州'
};
```

真是天无绝人之路，Typescript 我爱你，你还是挺有人情味的嘛。

- `[propName: string]` 定义了任意属性，属性 key 类型为 `string`;
- 此时任意属性的类型我们设为 `any`，所以 `isMan` 和 `address` 都能通过；

> 思考：慢着慢着，任意属性如果设为 `string`，可选属性设为 `number`，两者有冲突么？

```typescript
// interfaces6.ts
interface Person6 {
    name: string;
    age?: number;
    [propName: string]: string;
}

let pr6: Person6 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

// 0.0.5/interfaces6.ts:3:5 - error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
    // 3     age?: number;

// 0.0.5/interfaces6.ts:7:5 - error TS2322: Type '{ name: string; age: number; address: string; }' is not assignable to type 'Person6'.
    // Property 'age' is incompatible with index signature.
    // Type 'number' is not assignable to type 'string'.
    // 7 let pr6: Person6 = {

// 0.0.5/interfaces6.ts:15:5 - error TS2322: Type 'string' is not assignable to type 'number'.
    // 15     age: '30',

//   0.0.5/interfaces6.ts:3:5
    // 3     age?: number;
    // The expected type comes from property 'age' which is declared here on type 'Person6'
```

从上面例子的报错及报错原因中，我们明白

- `age` 赋值既不能为数字也不能为字符串（到底闹哪样，让不让人活了）；
- `age` 的 `number` 类型不是任意属性的 `string` 的子集，所以 `age` 怎么赋值都不对；

所以，我们可以将任意属性改为 `any`。还有一种解决方式，只不过意义不大。

```typescript
// interfaces7.ts
interface Person7 {
    name: string;
    age?: number | string;
    [propName: string]: string | number;
}

let pr7: Person7 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

let pr7_1: Person7 = {
    name: '胖芮',
    age: '30',
    address: '杭州'
}
```

编译通过，通过变量的赋值，`age` 可为数字也可为字符串，那我们用联合类型 `number | string`，这里调整了，那任意属性也得调整，也至少得是 `string | number`，当然为 `any` 最好不过。


# 只读属性

说完了可选属性和任意属性，再看看另外一种场景只读属性。其使用场景是对象的某些字段只在创建时被赋值，后面不可更改。

```typescript
// interfaces8.ts
interface Person8 {
    readonly name: string;
    age?: number | string;
    [propName: string]: any;
}

let pr8: Person8 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

pr8.age = 18; // 永远18岁
pr8.name = '胖芮2代'; // 火影看多了


let pr8_1: Person8 = {
    address: '杭州'
}

pr8_1.age = 18;
pr8_1.name = '胖芮3代';

// 0.0.5/interfaces8.ts:14:5 - error TS2540: Cannot assign to 'name' because it is a read-only property.
    // 14 pr8.name = '胖芮2代'; // 火影看多了

// 0.0.5/interfaces8.ts:17:5 - error TS2741: Property 'name' is missing in type '{ address: string; }' but required in type 'Person8'.
    // 17 let pr8_1: Person8 = {

// 0.0.5/interfaces8.ts:2:14
    // 2     readonly name: string;
    // 'name' is declared here.

// 0.0.5/interfaces8.ts:22:7 - error TS2540: Cannot assign to 'name' because it is a read-only property.
    // 22 pr8_1.name = '胖芮3代';
```

上面例子中，我们可看出

- 接口定义时，我们在 `name` 属性前加了关键字 `readonly`，意指该属性只读；
- 变量赋值后，给变量的 `age` 和 `name` 重新赋值，给 `name` 赋值这行报错，这是我们希望看到的，666;
- 对变量 `pr8_1` 赋值时，可读属性 `name` 没有被赋值（这个错误我们容易理解），后面才给 `name` 赋值，又报错，因为是它是可读属性，哪怕之前给变量赋值时没给它赋值;

可见，**对只读属性的约束是第一次给只读属性的对象赋值，而不是第一次给只读属性赋值**。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.5_20190623)


[Typescript 类型推论]: ./inference.md
