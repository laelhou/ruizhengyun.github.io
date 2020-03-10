(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{163:function(s,t,a){s.exports=a.p+"assets/img/boolean2-01.42d62e46.png"},342:function(s,t,a){s.exports=a.p+"assets/img/void-01.4639028f.png"},343:function(s,t,a){s.exports=a.p+"assets/img/void-02.b61ec2b4.png"},344:function(s,t,a){s.exports=a.p+"assets/img/void3-01.5200871d.png"},345:function(s,t,a){s.exports=a.p+"assets/img/void3-02.bee12912.png"},515:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("基础类型是我自定义的，主要这章介绍的在 Javascript 中都有的类型。另外，也是区别于下章进阶类型（Javascript 没有或隐性的数据类型）。")]),s._v(" "),e("h1",{attrs:{id:"基础知识脑补下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础知识脑补下"}},[s._v("#")]),s._v(" 基础知识脑补下")]),s._v(" "),e("p",[s._v("在 JavaScript 的类型分为两种：")]),s._v(" "),e("ul",[e("li",[s._v("原始数据类型（Primitive data types）")]),s._v(" "),e("li",[s._v("对象类型（Object types）")])]),s._v(" "),e("p",[s._v("其中，原始数据类型包括："),e("strong",[s._v("布尔值、数字、字符串、null、undefined")]),s._v(" 以及 ES6 中的新类型 "),e("strong",[s._v("Symbol")]),s._v("。本章选择性讲前 5 种。")]),s._v(" "),e("h1",{attrs:{id:"布尔值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布尔值"}},[s._v("#")]),s._v(" 布尔值")]),s._v(" "),e("p",[s._v("它是最基础的数据类型，其值是 "),e("code",[s._v("true/false")]),s._v("。在 JavaScript 和 TypeScript 里都使用 "),e("code",[s._v("boolean")]),s._v(" 来定义（其它语言中也一样）。")]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// boolean.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isDone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译（"),e("code",[s._v("tsc boolean.ts")]),s._v("）后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// boolean.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isDone "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("问：使用构造函数 "),e("code",[s._v("Boolean")]),s._v(" 来创造可以么？比如")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// boolean2.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isDoneByNewBoolean"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译（编辑器里）前")]),s._v(" "),e("p",[e("img",{attrs:{src:a(163),alt:""}})]),s._v(" "),e("p",[s._v("编译后")]),s._v(" "),e("p",[e("img",{attrs:{src:a(163),alt:""}})]),s._v(" "),e("p",[s._v("问题在于 "),e("code",[s._v("new Boolean(1)")]),s._v(" 返回的是一个对象。")]),s._v(" "),e("blockquote",[e("p",[s._v("再问：直接使用 "),e("code",[s._v("Boolean(1)")]),s._v(" 怎样？")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// boolean3.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isDoneByBoolean"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// boolean3.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isDoneByBoolean "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[e("code",[s._v("Boolean(1)")]),s._v(" 返回的是个布尔值。")]),s._v(" "),e("h1",{attrs:{id:"数字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[s._v("#")]),s._v(" 数字")]),s._v(" "),e("p",[s._v("和 JavaScript 一样，TypeScript 里的所有数字都是浮点数，类型是 "),e("code",[s._v("number")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" decLiteral"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" hexLiteral"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xf00d")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" binaryLiteral"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b1010")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES6 中的二进制表示法")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" octalLiteral"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o744")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES6 中的八进制表示法")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" notANumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" infinityNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" decLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hexLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xf00d")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" binaryLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES6 中的二进制表示法")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" octalLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("484")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES6 中的八进制表示法")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" notANumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" infinityNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h1",{attrs:{id:"字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),e("p",[s._v("和 JavaScript 一样，使用 "),e("code",[s._v("string")]),s._v(" 表示文本数据类型，可以用**双引号（\"）或单引号（'）**表示字符串。")]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Typescript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" say"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("Hello, ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("str"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Typescript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" say "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, "')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h1",{attrs:{id:"null-和-undefined"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined"}},[s._v("#")]),s._v(" null 和 undefined")]),s._v(" "),e("p",[s._v("在 TypeScript 的世界里，"),e("code",[s._v("null")]),s._v(" 和 "),e("code",[s._v("undefined")]),s._v(" 可用自身来定义数据类型。不过其用处不大。")]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" u"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("问：那将值 "),e("code",[s._v("null")]),s._v(" 和 "),e("code",[s._v("undefined")]),s._v(" 换个位置会怎样呢？")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined2.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" u"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined2.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("问：那像下面这样呢？")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined3.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" nu"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" nn"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" su"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sn"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bu"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bn"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null-undefined3.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" nu "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" nn "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" su "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" sn "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bu "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bn "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("从上面 3 个例子，可基本判断，"),e("code",[s._v("null")]),s._v(" 和 "),e("code",[s._v("undefined")]),s._v(" 是所有类型的子类型(可以把 "),e("code",[s._v("null")]),s._v(" 和 "),e("code",[s._v("undefined")]),s._v(" 赋值给 "),e("code",[s._v("number")]),s._v(" 等所有类型的变量，也就是赋值没多大意义）。")]),s._v(" "),e("h1",{attrs:{id:"空值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空值"}},[s._v("#")]),s._v(" 空值")]),s._v(" "),e("p",[s._v("在 JavaScript 的世界里是没有"),e("strong",[s._v("空值")]),s._v("的概念，但在 TypeScript 中，可以用 "),e("code",[s._v("void")]),s._v(" 表示没有任何返回值的函数。")]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayTs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, Typescript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayTs2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, Typescript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("编译前")]),s._v(" "),e("p",[e("img",{attrs:{src:a(342),alt:""}})]),s._v(" "),e("p",[s._v("编译后")]),s._v(" "),e("p",[e("img",{attrs:{src:a(343),alt:""}})]),s._v(" "),e("p",[s._v("但还是编译出来了")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayTs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, Typescript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayTs2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, Typescript2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("问："),e("code",[s._v("void")]),s._v(" 与 "),e("code",[s._v("null")]),s._v("（或"),e("code",[s._v("undefined")]),s._v("）间关系如何？")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void2.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" u"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译后")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void2.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("问："),e("code",[s._v("void")]),s._v(" 与 "),e("code",[s._v("string")]),s._v("("),e("code",[s._v("number")]),s._v("、"),e("code",[s._v("boolean")]),s._v(")关系如何？")])]),s._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void3.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("编译前")]),s._v(" "),e("p",[e("img",{attrs:{src:a(344),alt:""}})]),s._v(" "),e("p",[s._v("编译后")]),s._v(" "),e("p",[e("img",{attrs:{src:a(345),alt:""}})]),s._v(" "),e("p",[s._v("但还是编译出来了")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// void3.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vn "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vb "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("总结下，只能将 "),e("code",[s._v("undefined")]),s._v("、"),e("code",[s._v("null")]),s._v(" 和没有返回值的函数赋值给 "),e("code",[s._v("void")]),s._v("（空值）类型。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ruizhengyun/typescript-note/tree/feature_v.0.0.2_20190620/notes/2019-06-20",target:"_blank",rel:"noopener noreferrer"}},[s._v("本次代码 Github"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);