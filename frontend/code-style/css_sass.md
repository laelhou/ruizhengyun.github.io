# SASS 模版

## 语法选用

SASS 有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。

#### SCSS

SCSS 语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 `.scss` 作为扩展名。

#### Sass

Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式。这种格式以 `.sass` 作为拓展名。

#### 约定

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，在使用 SASS 编写样式的时候，统一使用 SCSS 语法

## 编码格式

当在 Ruby1.9 或更新的版本运行的时候，SASS 能识辨文档的字符编码。SASS 遵循 CSS 规范去确定样式文件的编码，进而转回 Ruby 字符串编码。这意味着 SASS 编译的时候会首先检测 BOM，然后到 @charset 声明，再到 Ruby 字符串编码，如果以上都没有设置，SASS 会认为文档的编码为 UTF-8

#### 约定

严格遵守上面 “CSS 规范” 中的 [“编码规范”](http://ruizhengyun.cn/tutorial/code-note/doc/css/css-code.html)

更多关于 SASS 编码：[SASS Encodings](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## SASS 注释规范

SASS 支持 CSS 标准的多行注释 `/\- \*/`，同时也支持单行注释 `//`。

- 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
- 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
- 当多行注释内容第一个字符是感叹号 `“!”` 的时候，即 `/*! */`，SASS 无论用哪一种编译方式编译注释都会保留
- 注释内容可以加入 SASS 变量

## 约定

SCSS 文件内

- 全部遵循 CSS 注释规范
- 不使用 `/_! _/` 注释方式
- 注释内不放 SASS 变量
  标准的注释规范如下：

```css
@charset "UTF-8";

/**
 * @desc File Info
 * @author pangrui
 * @date 2017-12-12
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {
}

/* module A logo */
.mod_a_logo {
}

/* module A nav */
.mod_a_nav {
}

/* Module B
----------------------------------------------------------------*/
.mod_b {
}

/* module B logo */
.mod_b_logo {
}

/* module B nav */
.mod_b_nav {
}
```

## 嵌套规范

#### 选择器嵌套

```scss
//css
.tf { }
body .tf { }

//scss
.tf {
  body & { }
}
```

```scss
//css
.tf { }
.tf_cover { }
.tf_info { }
.tf_info_name { }

//scss
.tf {
  &_cover { }
  &_info {
    &_name { }
  }
}
```

#### 属性嵌套

```scss
//css
.tf {
  background-color: red;
  background-repeat: no-repeat;
  background-image: url(/img/icon.png);
  background-position: 0 0;
}

//scss
.tf {
  background: {
    color: red;
    repeat: no-repeat;
    image: url(/img/icon.png);
    position: 0 0;
  }
}
```

## 变量

可复用属性尽量抽离为页面变量，易于统一维护

```scss
//css
.tf {
  color: red;
  border-color: red;
}

//scss
$color: red;
.tf {
  color: $color;
  border-color: $color;
}
```

## 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```scss
//css
.tf_1 {
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.tf_2 {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

//scss
@mixin radius($radius: 5px) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.tf_1 {
  @include radius; //参数使用默认值
}
.tf_2 {
  @include radius(10px);
}

//css
.tf_1 {
  background: url(/img/icon.png) no-repeat -10px 0;
}
.tf_2 {
  background: url(/img/icon.png) no-repeat -20px 0;
}

//scss
@mixin icon($x: 0, $y: 0) {
  background: url(/img/icon.png) no-repeat $x, $y;
}
.tf_1 {
  @include icon(-10px, 0);
}
.tf_2 {
  @include icon(-20px, 0);
}
```

## 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```scss
//scss
%borderbox {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tf {
  @extend %borderbox;
}
```

## extend 继承

```scss
// CSS
.tf_1 {
  font-size: 12px;
  color: red;
}
.tf_2 {
  font-size: 12px;
  color: red;
  font-weight: bold;
}

// SCSS
.tf_1 {
  font-size: 12px;
  color: red;
}
.tf_2 {
  @extend .tf_1;
  font-weight: bold;
}

// 或者
%font_red {
  font-size: 12px;
  color: red;
}
.tf_1 {
  @extend %font_red;
}
.tf_2 {
  @extend %font_red;
  font-weight: bold;
}
```

## for 循环

```scss
// CSS
.tf_1 {
  background-position: 0 -20px;
}
.tf_2 {
  background-position: 0 -40px;
}
.tf_3 {
  background-position: 0 -60px;
}

// SCSS
@for $i from 1 through 3 {
  .tf_#{$i} {
    background-position: 0 (-20px) * $i;
  }
}
```

注意：`#{}` 是连接符，变量连接使用时需要依赖

## each 循环

```scss
// CSS
.tf_list {
  background-image: url(/img/tf_list.png);
}
.tf_detail {
  background-image: url(/img/tf_detail.png);
}

// SCSS
@each $name in list, detail {
  .tf_#{$name} {
    background-image: url(/img/tf_#{$name}.png);
  }
}

// CSS
.tf_list {
  background-image: url(/img/tf_list.png);
  background-color: red;
}
.tf_detail {
  background-image: url(/img/tf_detail.png);
  background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
  .tf_#{$name} {
    background-image: url(/img/tf_#{$name}.png);
    background-color: $color;
  }
}
```

## function 函数

```scss
@function pxToRem($px) {
  @return $px / 10px * 1rem;
}
.tf {
  font-size: pxToRem(12px);
}
```

## 运算规范

运算符之间空出一个空格

```scss
.tf {
  width: 100px - 50px;
  height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 `10px` 不等于 `10`，乘除运算时需要特别注意

```scss
// 正确的运算格式
.tf {
  width: 100px - 50px;
  width: 100px + 50px;
  width: 100px * 2;
  width: 100px / 2;
}
```
