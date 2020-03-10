泛型，字面上看就是宽泛的类型约束。是指在定义函数、接口或类的时，不指定类型，在使用时指定类型（runtime）。

# 使用场景
考虑到重用性和扩展性，因为组件除了支持当前数据类型，还要考虑未来需要支持新的类型，这是一个合格程序员应有的素养和一个好系统的衡量标准之一（功能的灵活性）。

# 泛型变量

设计一个函数：输入什么类型，输出也是什么类型

```typescript
// generics.ts
function same(arg: number): number {
    return arg;
}
console.log(same(18)); // 18
```

这个只适合数字类型，换成字符串就得再写一个，无重复性可言，那就得改造

```typescript
// generics2.ts
function same2(arg: any): any {
    return '十八';
}
console.log(same2(18)); // 十八
```

没报错，但是违背了**输入类型和输出类型相同**这个要求。

**重点来了**，我们需要

```typescript
// generics3.ts
function same3<T>(arg: T): T {
    return '十八';
}
console.log(same3(18));

function same3_1<T>(arg: T): T {
    return arg;
}
console.log(same3_1<number>(18));
console.log(same3_1('十八'));


// 0.1.2/generics3.ts:2:5 - error TS2322: Type '"十八"' is not assignable to type 'T'.
    //   '"十八"' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint '{}'.
    // 2     return '十八';
```

剖析下
- 例子中在函数名 `same3` 后面添加 `<T>`（可理解为定义类型变量，你也可以叫 `S`）；
- `T` 本身理解为类型变量，输入类型（`18` 和 `十八`）时就是赋值这个类型变量是什么类型（对应 `number` 和 `string`）；
- 后面可以继续使用这个类型变量 `T` 来约束输出类型；
- 函数使用时，可在函数名后强制定义输入类型 `same3_1<number>(18)`;
- 函数使用时，也可以不强制定义输入类型 `same3_1('十八')`，这是利用类型推论（编译器根据输入类型自动帮助捕获 `T`的类型），很显然这个使用简单，推荐使用;
- 最后，函数 `same3_1` 可以适合任何类型，管它叫泛型也是实至名归，恭喜你 `same3_1`;


# 多个类型变量

有时，参数也不止一个，多个情况下

```typescript
// generics4.ts
function info<S, N>(name: S, age: N): [S, N] {
    return [name, age];
}

console.log(info('pr', 18)); // [ 'pr', 18 ]
```

# 泛型类型

```typescript
// generics4_1.ts
const generics4_1 = <T>(arg: T): T => {
    return arg;
}

let generics4_1_1: <S>(arg: S) => S = generics4_1;

console.log(generics4_1(18)); // 18
console.log(generics4_1_1('十八')); // 十八
```

- 泛型函数的类型与非泛型函数的类型区别在于：是否有一个类型参数在最前面 `<T>、<S>`；
- 可以使用不同的泛型参数名 `T、S`，只要数量上和使用方式上对应上就好了；

# 泛型接口

```typescript
// generics4_2.ts
interface Generics4_2 {
    <S>(arg: S): S;
} 

const generics4_2 = <T>(arg: T): T => {
    return arg;
}

let generics4_2_1: <T>(arg: T) => T = generics4_2;
let generics4_2_2: { <S>(arg: S): S } = generics4_2; // 对象字面量
let generics4_2_3: Generics4_2 = generics4_2; // 泛型接口

console.log(generics4_2(18)); // 18
console.log(generics4_2_2('十八')); // 十八
console.log(generics4_2_2('pr')); // pr
```

- 可以使用带有调用签名的对象字面量 `{ <S>(arg: S): S }` 来定义泛型函数;
- 可以使用泛型接口 `Generics4_2` 来定义泛型函数;

# 泛型类

其实和泛型接口很像，一起看看，顺便对比下

```typescript
// genericsClass.ts
class Sum <T>{
    zero: T;
    add: (x: T, y: T) => T
}

const sum = new Sum<number>();
sum.zero = 0;
sum.add = (x, y) => (x + y);
console.log(sum.add(5, 6)); // 11

const sum1 = new Sum<string>();
sum1.zero = '0';
sum1.add = (x, y) => (x + y);
console.log(sum1.add('5', '6')); // 56
```

- 通过 `sum` 和 `sum1` 你会发现不仅仅限为 `number`，`string` 也可以；
- 与接口一样，泛型类型放在类后面，可以直观地确认类的属性都在用相同类型；


# 泛型约束

上面例子的函数体过于简单，对于参数的属性或方法并没有使用。由于我们事先并不知道输入参数是什么类型，不能贸然使用参数的属性，比如输入参数是数字，我们知道数字没有 `length` 属性，看看 Typescript 给我们报什么错（有点找茬的意思哈）。

```typescript
// generics5.ts
function same5<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(same5(18));
console.log(same5('十八'));

// 0.1.2/generics5.ts:2:21 - error TS2339: Property 'length' does not exist on type 'T'.
    // 2     console.log(arg.length);
```

如我们推测的一样，泛型 `T` 在不知道什么类型的情况下不知道是否包含属性 `length`，所以编译报错了。

> 那如何解决呢？万能的接口可以帮助我们

```typescript
// generics6.ts
interface Length {
    length: number;
}

function same6<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(same6(18));
console.log(same6('十八'));
console.log(same6(['pr', '30', 'boy']));

// 0.1.2/generics6.ts:9:19 - error TS2345: Argument of type '18' is not assignable to parameter of type 'Length'.
    // 9 console.log(same6(18));
```

解释下
- 使用 `extends` 继承接口 `Length` 来约束泛型 `T` 符合接口属性，说人话就是输入的类型必须包含 `length` 属性了
- 字符串 `十八` 和数组 `['pr', '30', 'boy']` 符合要求，数字 `18` 明显不符合要求了；

> 那多个参数的泛型约束怎么处理？

```typescript
// generics7.ts
function info2<S extends N, N>(name: S, age: N): [S, N] {
    return [name, age];
}

console.log(info2('pr', 18));
console.log(info2(30, 18));


// 0.1.2/generics7.ts:5:19 - error TS2345: Argument of type '"pr"' is not assignable to parameter of type 'number'.
    // 5 console.log(info2('pr', 18));
```

报错原因在于，参数 `pr` 不能分配给类型 `number` 的参数。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.1.2_20190703/notes/0.1.2)
