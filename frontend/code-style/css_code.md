# 代码规范

CSS 样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译

## 文档内嵌样式表编码

当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 “style”，样式的编码由文档的决定。

## 文档外链样式表编码

文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：

- HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
- BOM（byte-order mark）和（或）@charset
- Link 中的元数据设置（如果有的话）
- 引用样式表字符集或文档编码（如果有的话）
- 假定为 UTF-8 编码

## 样式表编码

- `@charset`规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 `BOM` 设置生效（如果有设置 `BOM` 的话）而优于 `@charset` 作为样式表的编码
- `@charset "";` 一定要写上，并且用小写字母，不能出现转义符

## 约定

- 样式文件必须写上 `@charset` 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 `“UTF-8”`
  字符 `@charset “”;` 都用小写字母，不能出现转义符，编码名允许大小混写
  考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。

```less
// bad
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.tf {
}

// bad
@charset "UTF-8";
/* @charset规则没有用小写 */

.tf {
}

// bad
/* 无@charset规则 */
.tf {
}

// good
@charset "UTF-8";

.tf {
}
```

## 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```less
.tf {
  display: block;
  width: 50px;
}
```

一种是展开格式（Expanded）

```css
.tf {
  display: block;
  width: 50px;
}
```

#### 约定

统一使用展开格式书写样式

## 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```less
// bad
.TF {
  display: BLOCK;
}

// good
.tf {
  display: block;
}
```

## 选择器

- 尽量少用通用选择器 `-`
- 不使用 `ID` 选择器
- 不使用无具体语义定义的标签选择器

```less
// bad
* {}
#tf {}
.tf div {}

// good
.tf {}
.tf li {}
.tf li p {}
```

## 代码缩进

统一使用 **4 个或 2 个** 空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```less
.tf {
  width: 100%;
  height: 100%;
}

.tf-wrap {
  width: 100%;
  height: 100%;
}
```

## 分号

每个属性声明末尾都要加分号；

```less
.tf {
  width: 100%;
  height: 100%;
}
```

## 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

```less
// bad
.tf {
  width: 100%;
}
// good
.tf {
  width: 100%;
}
```

逗号分隔的取值，逗号之后一个空格

```less
// bad
.tf {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

// good
.tf {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

为单个 css 选择器或新申明开启新行

```less
// bad
.tf,
.tf_logo,
.tf_hd {
  color: #ff0;
}
.nav {
  color: #fff;
}

// good
.tf,
.tf_logo,
.tf_hd {
  color: #ff0;
}
.nav {
  color: #fff;
}
```

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0

```less
// bad
.tf {
  color: rgba(255, 255, 255, 0.5);
}

// good
.tf {
  color: rgba(255, 255, 255, 0.5);
}
```

属性值十六进制数值能用简写的尽量用简写

```less
// bad
.tf {
  color: #ffffff;
}

// good
.tf {
  color: #fff;
}
```

不要为 0 指明单位

```less
// bad
.tf {
  margin: 0px 10px;
}

// good
.tf {
  margin: 0 10px;
}
```

## 属性值引号

css 属性值需要用到引号时，统一使用单引号

```less
// bad
.tf {
  font-family: "Hiragino Sans GB";
}

// good
.tf {
  font-family: "Hiragino Sans GB";
}
```

## 属性书写顺序

建议遵循以下顺序：

- 布局定位属性：`display / position / float / clear / visibility / overflow`
- 自身属性：`width / height / margin / padding / border / background`
- 文本属性：`color / font / text-decoration / text-align / vertical-align / white- space / break-word`
- 其他属性（CSS3）：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …`

```less
.tf {
  display: block;
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #333;
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

[mozilla 官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

## CSS3 浏览器私有前缀写法

```less
.tf {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

更多关于浏览器私有前辍写法：[#Vendor-specific extensions](https://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)
