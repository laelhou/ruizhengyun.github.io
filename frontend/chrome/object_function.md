# 对象&方法

在我们调试 `Javascript` 的代码时，`对象` 和 `方法` 作为经常被我们调试的对象，所以这里介绍关于 `对象` 和 `方法` 的调试技巧。

## queryObjects （对象查询）方法

```javascript
class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

const zhangsan = new Person('zhangsan', 'student');

let tech = [
  new Person('lisi', 'tech'),
  new Person('wangwu', 'tech')
];

new Person('zhaoliu', 'student');

let techs = [
  new Person('lisi', 'techs'),
  new Person('wangwu', 'techs')
];

queryObjects(Person);

// 返回
[
  {
    "name": "zhangsan",
    "role": "student"
  },
  {
    "name": "lisi",
    "role": "tech"
  },
  {
    "name": "wangwu",
    "role": "tech"
  },
  {
    "name": "lisi",
    "role": "techs"
  },
  {
    "name": "wangwu",
    "role": "techs"
  }
]
```

## monitorEvents($0, 'click')

对 `events` 做一样的事情：

![](./assets/console/monitor.gif)

---

- [上一章：自定义格式转换器](custom_formatter.md)
- [下一章：骚操作](sao_operation.md)