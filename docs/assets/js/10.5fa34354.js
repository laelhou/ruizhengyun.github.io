(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(t,s,a){t.exports=a.p+"assets/img/center-transform.ad7ce4f3.png"},367:function(t,s,a){t.exports=a.p+"assets/img/float-01.c166298a.png"},368:function(t,s,a){t.exports=a.p+"assets/img/float-02.69282280.png"},369:function(t,s,a){t.exports=a.p+"assets/img/center-flex.002eb9ab.png"},370:function(t,s,a){t.exports=a.p+"assets/img/center-margin.b9732776.png"},371:function(t,s,a){t.exports=a.p+"assets/img/three-column-float.6b4ff6a9.png"},372:function(t,s,a){t.exports=a.p+"assets/img/three-column-absolute.e9342912.png"},545:function(t,s,a){"use strict";a.r(s);var n=a(28),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),n("h2",{attrs:{id:"浮动（float）知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮动（float）知识点"}},[t._v("#")]),t._v(" 浮动（float）知识点")]),t._v(" "),n("p",[t._v("浮动主要考察为什么清除浮动和如何清除浮动的问题。")]),t._v(" "),n("p",[t._v("浮动场景：通常对于块级元素我们是不设置高度的（天知道以后会不会加内容，另外设置了高度会带来显示问题），块级元素的高度是靠子元素内容撑开的。这时，子元素设置浮动，子元素就会脱离文档流，此时父元素的高度就不能靠子元素内容撑开了，就会出现显示（体验）问题。")]),t._v(" "),n("p",[t._v("清除浮动是为了解决页面父元素高度塌陷的问题。如何清除呢，这才是我关心的")]),t._v(" "),n("h3",{attrs:{id:"使用-overflow-hidden（在父元素操作）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-overflow-hidden（在父元素操作）"}},[t._v("#")]),t._v(" 使用 "),n("code",[t._v("overflow: hidden")]),t._v("（在父元素操作）")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("副作用是"),n("strong",[t._v("离开了这个元素所在的区域以后会被隐藏（ "),n("code",[t._v("overflow:hidden")]),t._v(" 会将超出的部分隐藏起来）")]),t._v("，不推荐。。")]),t._v(" "),n("h3",{attrs:{id:"添加一个标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加一个标签"}},[t._v("#")]),t._v(" 添加一个标签")]),t._v(" "),n("p",[t._v("在父元素里面加一个标签，标签样式")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clear")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("副作用就是添加了一个无用标签，不推荐。")]),t._v(" "),n("h3",{attrs:{id:"使用伪元素来清除浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用伪元素来清除浮动"}},[t._v("#")]),t._v(" 使用伪元素来清除浮动")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 为了兼容IE\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix: after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"使用双伪元素清除浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用双伪元素清除浮动"}},[t._v("#")]),t._v(" 使用双伪元素清除浮动")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 为了兼容IE\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:before,.clearfix:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("table",{staticStyle:{border:"0","background-color":"#fff"}},[n("tr",{staticStyle:{border:"0"}},[n("td",{staticStyle:{border:"0"}},[n("img",{attrs:{src:a(367)}}),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("清浮动前")])]),t._v(" "),n("td",{staticStyle:{border:"0"}},[n("img",{attrs:{src:a(368)}}),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("清浮动后")])])])]),t._v(" "),n("h2",{attrs:{id:"居中知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#居中知识点"}},[t._v("#")]),t._v(" 居中知识点")]),t._v(" "),n("h3",{attrs:{id:"使用-flex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-flex"}},[t._v("#")]),t._v(" 使用 flex")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 520px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 260px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"使用-transform（css3-属性）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-transform（css3-属性）"}},[t._v("#")]),t._v(" 使用 transform（css3 属性）")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent-transform")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 520px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 260px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child-transform")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"使用-margin-负值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-margin-负值"}},[t._v("#")]),t._v(" 使用 "),n("code",[t._v("margin")]),t._v(" 负值")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent-margin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 520px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 260px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child-margin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -75px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"使用-poaboute-和-margin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-poaboute-和-margin"}},[t._v("#")]),t._v(" 使用 "),n("code",[t._v("poaboute")]),t._v(" 和 "),n("code",[t._v("margin")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent-absolute-margin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 520px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 260px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child-absolute-margin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("table",{staticStyle:{border:"0","background-color":"#fff"}},[n("tr",{staticStyle:{border:"0"}},[n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(369),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("使用 flex")])]),t._v(" "),n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(164),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("使用 transform")])])]),t._v(" "),n("tr",{staticStyle:{border:"0"}},[n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(370),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("使用 margin 负值")])]),t._v(" "),n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(164),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("absoulte 和 margin")])])])]),t._v(" "),n("h2",{attrs:{id:"三栏布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三栏布局"}},[t._v("#")]),t._v(" 三栏布局")]),t._v(" "),n("h3",{attrs:{id:"浮动对策"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮动对策"}},[t._v("#")]),t._v(" 浮动对策")]),t._v(" "),n("p",[t._v("左右两栏浮动（脱离文档流），中间一栏通过 "),n("code",[t._v("margin")]),t._v(" 左右值（左右两栏的宽度以及栏外间距）,别忘了清浮动")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".three-column-float")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ddd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float-left")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deepskyblue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float-right")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float-center")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 320px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"绝对定位对策"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位对策"}},[t._v("#")]),t._v(" 绝对定位对策")]),t._v(" "),n("p",[t._v("左右两栏绝对定位（脱离文档流），中间一栏通过 "),n("code",[t._v("margin")]),t._v(" 左右值（左右两栏的宽度以及栏外间距）")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".three-column-absolute")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ddd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".absolute-left")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("deepskyblue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".absolute-right")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".absolute-center")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 320px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("table",{staticStyle:{border:"0","background-color":"#fff"}},[n("tr",{staticStyle:{border:"0"}},[n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(371),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("浮动对策")])]),t._v(" "),n("td",{staticStyle:{border:"0"}},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(372),width:"300"}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("绝对定位对策")])])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ruizhengyun/interview-note/tree/feature_20190704_0.0.1/notes/0.0.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("本次代码 Github"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);