

枚举标志性动作是使用关键字 `enum` 来定义类型。比如

```typescript
// enum.ts
enum Friends {张三, 李四, 王五};
```

## 

```typescript
// enum2.ts
enum Friends2 {张三, 李四, 王五};
console.log(Friends2[0] === '张三')
console.log(Friends2['张三'] === 0)
```

编译后

```javascript
// enum2.js
var Friends2;
(function (Friends2) {
    Friends2[Friends2["\u5F20\u4E09"] = 0] = "\u5F20\u4E09";
    Friends2[Friends2["\u674E\u56DB"] = 1] = "\u674E\u56DB";
    Friends2[Friends2["\u738B\u4E94"] = 2] = "\u738B\u4E94";
})(Friends2 || (Friends2 = {}));
;
console.log(Friends2[0] === '张三'); // true
console.log(Friends2['张三'] === 0); // true
```

可见，**枚举可以可用下标索引获取值，另外枚举的 key 和 value 可反向映射**。

## 手动赋值
```typescript
// enum3.ts
enum Friends3 { 张三 = 30, 李四 = 18, 王五 };
console.log(Friends3['张三'] === 30);
console.log(Friends3['李四'] === 18);
console.log(Friends3['王五'] === 19);

enum Friends3_1 { 张三 = '30', 李四 = '18', 王五 = '9' };
enum Friends3_2 { 张三 = '30', 李四 = '18', 王五 = 9 };
enum Friends3_3 { 张三 = '30', 李四, 王五 };

// 0.0.8/enum3.ts:8:30 - error TS1061: Enum member must have initializer.
    // 8 enum Friends3_3 { 张三 = '30', 李四, 王五 };
                               ~~
// 0.0.8/enum3.ts:8:34 - error TS1061: Enum member must have initializer.
    // 8 enum Friends3_3 { 张三 = '30', 李四, 王五 };
```

编译后

```typescript
// enum3.js
var Friends3;
(function (Friends3) {
    Friends3[Friends3["\u5F20\u4E09"] = 30] = "\u5F20\u4E09";
    Friends3[Friends3["\u674E\u56DB"] = 18] = "\u674E\u56DB";
    Friends3[Friends3["\u738B\u4E94"] = 19] = "\u738B\u4E94";
})(Friends3 || (Friends3 = {}));
;
console.log(Friends3['张三'] === 30);
console.log(Friends3['李四'] === 18);
console.log(Friends3['王五'] === 19);
var Friends3_1;
(function (Friends3_1) {
    Friends3_1["\u5F20\u4E09"] = "30";
    Friends3_1["\u674E\u56DB"] = "18";
    Friends3_1["\u738B\u4E94"] = "9";
})(Friends3_1 || (Friends3_1 = {}));
;
var Friends3_2;
(function (Friends3_2) {
    Friends3_2["\u5F20\u4E09"] = "30";
    Friends3_2["\u674E\u56DB"] = "18";
    Friends3_2[Friends3_2["\u738B\u4E94"] = 9] = "\u738B\u4E94";
})(Friends3_2 || (Friends3_2 = {}));
;
var Friends3_3;
(function (Friends3_3) {
    Friends3_3["\u5F20\u4E09"] = "30";
    Friends3_3[Friends3_3["\u674E\u56DB"] = void 0] = "\u674E\u56DB";
    Friends3_3[Friends3_3["\u738B\u4E94"] = void 0] = "\u738B\u4E94";
})(Friends3_3 || (Friends3_3 = {}));
;
```

说一下
- 赋值是数字，可以部分赋值；
- 赋值中有一个是字符串，得所有成员都赋值；

> 问：如果值手动赋值一个字符串怎么办？

```typescript
// enum4.ts
enum Friends4 { 张三 = '30', 李四, 王五 };
enum Friends4_1 { 张三 = <any>'30', 李四, 王五 };
enum Friends4_2 { 张三, 李四 = <any>'30', 王五 };
enum Friends4_3 { 张三, 李四 = <any>'30', 王五 = '30' };
enum Friends4_4 { 张三, 李四, 王五 = <any>'30' };
enum Friends4_5 { 张三, 李四 = <any>'30', 王五 = <any>'30' };
enum Friends4_6 { 张三, 李四 = <any>'30', 王五 = 30 };


// 0.0.8/enum4.ts:1:28 - error TS1061: Enum member must have initializer.
    // 1 enum Friends4 { 张三 = '30', 李四, 王五 };
// 0.0.8/enum4.ts:1:32 - error TS1061: Enum member must have initializer.
    // 1 enum Friends4 { 张三 = '30', 李四, 王五 };
                                 ~~

// 0.0.8/enum4.ts:2:35 - error TS1061: Enum member must have initializer.
    // 2 enum Friends4_1 { 张三 = <any>'30', 李四, 王五 };
// 0.0.8/enum4.ts:2:39 - error TS1061: Enum member must have initializer.
    // 2 enum Friends4_1 { 张三 = <any>'30', 李四, 王五 };
                                        ~~
// 0.0.8/enum4.ts:3:39 - error TS1061: Enum member must have initializer.
    // 3 enum Friends4_2 { 张三, 李四 = <any>'30', 王五 };
                                        ~~
// 0.0.8/enum4.ts:4:28 - error TS2553: Computed values are not permitted in an enum with string valued members.
    // 4 enum Friends4_3 { 张三, 李四 = <any>'30', 王五 = '30' };
```

上面，例子说明下
- 第 1 行报错，是因为只给第一个成员赋值字符串，其他成员没有赋值;
- 第 2-3 行报错，是因为类型断言`<any>` 后面还有成员赋值;
- 第 4 行报错，是因为类型断言`<any>` 后面赋值不是数字;
- 剩余几行没报错，是因为类型断言`<any>` 后面的成员都赋值了（而且）;

总结
- 赋值是字符串，得全部都赋值；
- 赋值部分为字符串，得用类型断言，类型断言后面不能有赋值为字符串的成员；


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.0.8_20190626/notes/0.0.8)
