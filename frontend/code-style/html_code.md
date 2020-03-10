# 代码规范


## DOCTYPE 声明
### 约定
HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：
```html
<!DOCTYPE html>
```
[更多关于 DOCTYPE声明](https://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#the-doctype)



## 页面语言LANG
### 约定
Lang属性的取值应该遵循互联网工程任务组–IETF（The Internet Engineering Task Force）制定的关于语言标签的文档

推荐使用属性值 cmn-Hans-CN（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 zh-CN 属性值
```html
<html lang="zh-CN">
```

更多地区语言参考：
```html
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
```


## CHARSET
因为 ISO-8859 中字符集大小是有限的，且在多语言环境中不兼容，所以 Unicode 联盟开发了 Unicode 标准。
Unicode 标准覆盖了（几乎）所有的字符、标点符号和符号。
Unicode 使文本的处理、存储和运输，独立于平台和语言。
HTML-5 中默认的字符编码是 UTF-8。

### 约定
一般情况下统一使用 “UTF-8” 编码
```html
<meta charset="UTF-8">
```
由于历史原因，有些业务可能会使用 “GBK” 编码
```html
<meta charset="GBK">
```
注：请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 IETF对UTF-8的定义，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。



## 元素及标签闭合
HTML元素共有以下5种：
- 空元素：`area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr`

- 原始文本元素：`script、style`

- RCDATA元素：`textarea、title`

- 外来元素：来自MathML命名空间和SVG命名空间的元素。

- 常规元素：其他HTML允许的元素都称为常规元素。

注解:
- 原始文本元素、RCDATA元素 以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。
- 某些元素 的开始和结束标签是可以省略的，如果规定标签不能被省略，那么就绝对不能省略它。
- 空元素 只有一个开始标签，且不能为空元素设置结束标签。
- 外来元素 可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

### 约定
为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都 --不加-- `“/”` 字符

```html
// bad
<div>
    <h1>h1标题</h1>
    <p>段落，有始有终，浏览器能正确解析
</div>	
<br/>

// good
<div>
    <h1>h1标题</h1>
    <p>段落，有始有终，浏览器能正确解析</p>
</div>
<br>
```


## 书写风格
### HTML代码大小写
HTML标签名、类名、标签属性和大部分属性值统一用小写

```html
// bad
<div class="DEMO"></div>

// good
<div class="demo"></div>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
	
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

### 类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

```html
// bad
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>

// good
<link rel="stylesheet" href="" >
<script src=""></script>
```

### 元素属性
- 元素属性值使用--双引号--语法
- 元素属性值--可以写上的都写上--

```html
// bad
<input type=text>	
<input type='text'>
<input type="radio" name="name" checked >

// good
<input type="text">
<input type="radio" name="name" checked="checked" >
```

### 特殊字符引用
文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

```html
// bad
<a href="#">more>></a>

// good
<a href="#">more&gt;&gt;</a>
```


### 代码缩进
统一使用--4个或2个--空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```html
// good
<div>
    <h1>标题</h1>
</div>
```

### 纯数字输入框
使用 type="tel" 而不是 type="number"

```html
<input type="tel">
```

### 代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选

```html
// bad
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>

// good
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```

段落元素与标题元素只能嵌套内联元素

```html
// bad
<h1><div></div></h1>
<p><div></div><div></div></p>

// good
<h1><span></span></h1>
<p><span></span><span></span></p>

```
