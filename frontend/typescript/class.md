# ECMAScript 往事

在 ES6 之前是没有**类**这个概念的，都是通过构造函数来实现同等效果的，继承的实现通过原型链。

Typescript 除了实现 ES6 类 class 的功能外还有其他特性。一起看看。

# 概念串讲扫盲

- 类（class），定义事物的抽象特性（属性和方法）；
- 抽象类（Abstract class），可以让其他类继承的基类（不允许实例化），抽象方法必须在子类中实现；
- 接口（interface）：不同类公有属性或方法，可抽象成一个接口，接口可以被类实现（implements）。类的继承只能是一个，但可以被实现多次；
- 存取器（setter and getter）：属性的赋值与读取；
- 修饰符（modifiers）：是一些关键字，限定成员或类型的性质（public、protect、private）,Typescript 支持；
- 对象（object），类的实例，通过 `new` 生成实现； 
- 面向对象（OOP）特性：封装、继承和多态；
- 封装（encapsulation）：将对数据属性的处理细节隐藏起来，对外只暴露接口。外部调用不需要知道细节，就能访问该对象，这也保证了外部无法改变内部数据属性；
- 继承（inheritance）：子类继承父类，子类拥有父类所有特性，还可以有自己具体的特性；
- 多态（polymorphism）：由继承产生不同的类，对同一方法有不同的响应；


# ES6 类的使用

ES6 我们都很熟悉。使用 `new` 生成实例，会自动调用构造函数，而构造函数用 `constructor` 定义。

## 实例、构造函数、属性和方法

```javascript
// es6.js
class Animal {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `我是${this.name}`
    }
}

let animal = new Animal('动物');
console.log(animal.showName()); // 我是动物
```

## 继承与多态

派生类使用 `extends` 实现继承，用 `super` 来执行基类的构造函数。

- 基类即超类或父类；
- 派生类即子类；


```javascript
// es6.js
class Cat extends Animal {
    // constructor 没有自己的属性，可不写
    constructor(name) {
        super(name);
    }

    showName() {
        return `我是一只${this.name}`
    }
}

let cat = new Cat('猫');
console.log(cat.showName()); // 我是一只猫
```

## 存取器

```javascript
// es62.js
class Animal {
    constructor(name) {
        this.name = name;
    }
    get newName() {
        return `获取: ${this.name}`;
    }
    set newName(value) {
        this.name = `新的${value}`
    }
}

let animal = new Animal('动物');
animal.newName = '大动物';
console.log(animal.newName);
```

## 静态方法

就是使用 `static` 定义方法，仅供自己使用，所以无需实例化，实例不能调用。

```javascript
// es63.js
class Animal {
    static isAnimal(animal) {
        return animal instanceof Animal;
    }
}

let animal = new Animal('动物');
console.log(Animal.isAnimal(animal)); // true
console.log(animal.isAnimal(animal)); // TypeError: animal.isAnimal is not a function
```

# ES7 类的用法

## 实例属性

ES6 中实例属性都是在构造函数 `construction` 中定义，在 ES7 中直接在类里面写就可以了。

```javascript
// es64.js
class Animal {
    name = '动物';

    constructor() {
        // ...
    }
}

let animal = new Animal();
console.log(animal.name); // 动物
```

## 静态属性

既然实例属性可以直接在类中直接定义，那静态属性也可以这样

```javascript
// es65.js
class Animal {
    static name = '动物';

    constructor() {
        // ...
    }
}

let animal = new Animal();
console.log(Animal.name); // 动物
console.log(animal.name); // undefined
```

# Typescript 类的用法

新增了显眼并不新鲜的修饰符 `public`、`private`、`protected` 和 `readonly`。

- `public` 所修饰的属性和方法是公共的，任意使用；
- `private` 所修饰的属性和方法是私有的，仅供类自身使用；
- `protected` 所修饰的属性和方法是受保护的，仅供类自身和子类使用；
- `readonly` 所修饰的属性是只读的，必须在声明时或构造函数里被初始化；

```typescript
// class.ts
class Star {
    public name: string = 'pr';
    protected age: number = 18;
    private weight: number = 90;
    readonly gender: string = '女';

    public constructor(name: string, age: number, weight: number, gender: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
}

class ChinaStar extends Star {
    constructor(name: string, age: number, weight: number, gender: string) {
        super(name, age, weight, gender);
    }

    showName(){
        return `我是${this.name}`
    }

    showAge(){
        return `我实际年龄${this.age}`
    }

    showWeight(){
        return `我的体重${this.weight}`
    }

    showGender(){
        return `我的性别${this.gender}`
    }
}

let pr = new ChinaStar('pr', 30, 120, '男');
pr.name = '江湖再见';
pr.age = 18;
pr.weight = 100;
pr.gender = '女';

console.log(pr.name);
console.log(pr.age);
console.log(pr.weight);
console.log(pr.gender);

console.log(pr.showName());
console.log(pr.showAge());
console.log(pr.showWeight());
console.log(pr.showGender());

// 0.0.9/class.ts:29:28 - error TS2341: Property 'weight' is private and only accessible within class 'Star'.
    // 29         return `我的体重${this.weight}`

// 0.0.9/class.ts:39:4 - error TS2445: Property 'age' is protected and only accessible within class 'Star' and its subclasses.
    // 39 pr.age = 18;
      
// 0.0.9/class.ts:40:4 - error TS2341: Property 'weight' is private and only accessible within class 'Star'.
    // 40 pr.weight = 100;
      
// 0.0.9/class.ts:41:4 - error TS2540: Cannot assign to 'gender' because it is a read-only property.
    // 41 pr.gender = '女';
      
// 0.0.9/class.ts:44:16 - error TS2445: Property 'age' is protected and only accessible within class 'Star' and its subclasses.
    // 44 console.log(pr.age);
       
// 0.0.9/class.ts:45:16 - error TS2341: Property 'weight' is private and only accessible within class 'Star'.
    // 45 console.log(pr.weight);
```

从例子中可看到

- 只有属性 `name` 能在实例中使用；
- 只有属性 `name` 和 `age` 能在子类中使用；
- 无法分配给“gender”，因为它是只读属性；

> 注: 基类的构造函数使用 `this` 的属性之前必须调用 `super()`，这是 Typescript 的一项要求。

# 抽象类

不被实例化，只给基类使用。可用关键字 `Abstract` 定义抽象类和其内部定义的抽象方法。不同于接口，抽象类可以包含成员的实现细节。

```typescript
// abstract.ts
abstract class Animal2 {
    abstract say(): void;
    move(): void{
        console.log('移动');
    }
}
```

抽象类中的抽象方法不含具体实现（这点和接口很相似，都定义了方法签名不含方法体），但必须在派生类中实现。

```typescript
// abstract2.ts
// 抽象类
abstract class AbstractPerson {
    constructor(public name: string, public age: number, public weight: number) { }

    showName(): string {
        return `我的名字是${this.name}`;
    }

    abstract showAge(): void;
}

// 基类
class Person extends AbstractPerson {
    constructor(name: string, age: number, weight: number) {
        super(name, age, weight);
    }
    showAge(): void {
        console.log(`我的年龄${this.age}`)
    }
    showWeight(): void {
        console.log(`我的体重${this.weight}`)
    }
}


let person1: AbstractPerson;
let person2: AbstractPerson;

person1 = new AbstractPerson('pr', 30, 110);
person2 = new Person('pr', 30, 110);

console.log(person2.showName());
person2.showAge();
person2.showWeight();


// 0.0.9/abstract2.ts:29:11 - error TS2511: Cannot create an instance of an abstract class.
    // 29 person1 = new AbstractPerson('pr', 30, 110);
       
// 0.0.9/abstract2.ts:34:9 - error TS2339: Property 'showWeight' does not exist on type 'AbstractPerson'.
    // 34 person2.showWeight();
```
- 不能给抽象类生成实例；
- 方法 `showWeight` 在抽象类 `AbstractPerson` 中上不存在；


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.9_20190629/notes/0.0.9)
