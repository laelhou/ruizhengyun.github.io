# JS命名

## 文件资源命名
### 约定
一般都采用小驼峰式，组件采用大驼峰式，index除外 

```
// utils方法
arrayUniq.js

// 组件
Loading.js[x]
index.js[x]
```

###文件资源引用
引入资源使用相对路径，不要指定资源所带的具体协议 ( http:, https: ) ，除非这两者协议都不可用。

```html
// bad
<script src="http://cdn.com/file.min.js"></script>

// good
<script src="//cdn.com/file.min.js"></script>
```


### 变量命名
方式：小驼峰式命名方法
规范：**类型+对象描述**的方式，如果没有明确的类型，就可以使前缀为名词

|类型|小写字母|
|:-|:-|
|array|a|
|boolean|b|
|function|fn|
|int|i|
|regular|r|
|string|s|

```javascript
// bad
const getTitle = "表格标题";

// good
const tableTitle = "表格标题";
```


### 函数
方式: 小驼峰方式 ( 构造函数使用大驼峰命名法 )
规则: 前缀为动词

|动词|含义|返回值|
|:-|:-|:-|
|can|判断是否可执行某个动作（权限）|布尔值|
|has|判断是否含有某个值|布尔值|
|is|判断是否为某个值|布尔值|
|get|获取某个值|非布尔值|
|set|设置某个值|无返回值|

```javascript
// good
const canRead = () => {
  return true;
}

const getName = (name) => {
  return name;
}
```

### 类的成员
私有属性和方法 : 前缀为下划线(_)

```javascript
function Student(name) {
    var _name = name; // 私有成员
 
    // 公共方法
    this.getName = function () {
        return _name;
    }
 
    // 公共方式
    this.setName = function (value) {
        _name = value;
    }
}
var st = new Student('tom');
st.setName('jack');
console.log(st.getName()); // => jack：输出_name私有变量的值
```


### 常量
方法: 全部大写
规范: 使用大写字母和下划线来组合命名，下划线用以分割单词。

```javascript
// good
const MAX_COUNT = 10;
const URL = 'http://www.ruizhengyun.cn/';
```