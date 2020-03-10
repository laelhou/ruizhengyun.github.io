前面章节 [Typescript 对象类型-接口](basic/object_interfaces.md)，主要讲接口对对象属性的类型描述。

本章说道另一作用，可以说当对象遇到接口，给你不一样的精彩。

# 类接口的实现

通常，一个类只继承另一个类。有时，不同类之间有一些共有的特性，把这些特性提取出来可以提高效率，提取出来的就是接口，用关键字 `implements` 标识。

举个例子如下

- 手机是一个类；
- 华为是手机的子类；
- 拍照是华为手机的一个功能（方法）；
- 数码相机也有拍照功能；
- 拍照可以抽取出来作为一个接口，华为手机和数码相机都去实现它；

```typescript
// classInterfaces.ts
// 拍照
interface Photo {
    photo(): string;
}

// 闪光灯
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

// 手机超类
class Phone {}

// 手机派生类
class HuaweiPhone extends Phone implements Photo, Lamp {
    photo(): string {
        return '华为拍照';
    }
    lampOff(){}
    lampOn() {}
}

// 数码相机
class DigitalCamera implements Photo, Lamp {
    photo(): string {
        console.log('数码拍照')
    }
}

// 0.1.0/classInterfaces.ts:25:7 - error TS2420: Class 'DigitalCamera' incorrectly implements interface 'Lamp'.
    //   Type 'DigitalCamera' is missing the following properties from type 'Lamp': lampOn, lampOff
    // 25 class DigitalCamera implements Photo, Lamp {

// 0.1.0/classInterfaces.ts:26:14 - error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
    // 26     photo(): string {
```

上面报错在于

- `DigitalCamera` 实现了接口 `Lamp`，可却没有定义里面的方法；
- 接口 `Phone` 中 `photo` 需要返回 `string`，可是类 `DigitalCamera` 中的 `phone` 没有返回值；

你会发现
- **一个类可以实现多个接口**;
- 类 `HuaweiPhone` 中 `lampOff` 和 `lampOn` 并没有按照接口 `Lamp` 按顺序定义，这说明类型检查器不会检查属性或方法的顺序，只要有相应的属性或方法且类型也是对的就可以了；

# 接口继承接口

我们知道类可以继承类，其实接口也可以传承接口。这种方式可以灵活地将接口分割到可重用的模块里。

```typescript
// classInterfaces2.ts
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

interface wx {
    wxNumber: number;
    showWxNumber(): string;
}

// 拍照
interface Photo extends Lamp, Tel {
    photo(): string;
}

// 华为手机
class HuaweiPhone2 implements Photo {
    public wxNumber: number;
    photo(): string {
        return '华为手机 mate20 pro 拍照就是酷儿';
    }
    lampOn() {};
    lampOff() {};
    constructor(wxNumber: number) {
        this.wxNumber = wxNumber;
    };

    showWxNumber(){
        return `我的微信号：liferzy`;
    }
}

let huaweiPhone = new HuaweiPhone2(13701833766);
console.log(huaweiPhone.showWxNumber()); // 我的微信号：liferzy
console.log(huaweiPhone.photo()); // 华为手机 mate20 pro 拍照就是酷儿
```

你还会发现：一个接口可以继承多个接口，创建出多个接口的合成接口。

> 注：类 `DigitalCamera` 要记得把方法 `lampOn`、`lampOff`、`photo` 和 `showWxNumber` 加上。

# 接口继承类

我们看过类实现接口，接口继承接口，那接口能继承类吗？

```typescript
// classInterfaces3.ts
class Xy {
    x: number;
    y: number;
}

interface Xyz extends Xy {
    z: number;
}

let xyz: Xyz = { x: 1, y: 2, z: 3 };
```

# 函数类型
在 [Typescript 函数类型](../basic/function.md) 文章中，函数类型表示的招式之一就是接口，其例子是

```typescript
// function5.ts
interface Function5 {
    (x: string, y: string): boolean
}

let function5: Function5 = (x: string, y: string) => {
    return x.search(y) > -1;
}
```

这里补充下：对于函数类型的类型检查，函数的参数名可以不与接口里定义的参数名一致，比如

```typescript
// function5_2.ts
interface Function5_2 {
    (x: string, y: string): boolean
}

let function5_2: Function5_2 = (name: string, firstName: string) => {
    return name.search(firstName) > -1;
}

console.log(function5_2('pr is a  boy', 'pr')); // true
```

# 混合（丰富）类型

接口牛逼之处可以描述 JavaScript 里丰富的类型。需求场景有时需要一个对象可以同时具有多种类型。

```typescript
// classInterfaces5.ts
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = <Counter>function(start: number) {};
    counter.interval = 1;
    counter.reset = () => {};
    return counter;
}

let c = getCounter();
c(1);
c.interval = 2;
c.reset();
```

[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.1.0_20190701/notes/0.1.0)
