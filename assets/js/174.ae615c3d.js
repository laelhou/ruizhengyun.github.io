(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{547:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-js-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-问题"}},[t._v("#")]),t._v(" Node.js 问题")]),t._v(" "),a("h2",{attrs:{id:"如何实现方法-console-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现方法-console-log"}},[t._v("#")]),t._v(" 如何实现方法 console.log")]),t._v(" "),a("p",[t._v("实现在控制台的打印，利用 "),a("code",[t._v("process.stdout")]),t._v(" 将输入流数据输出到输出流(即输出到终端)，比如")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，Node.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"console-是同步的还是异步的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console-是同步的还是异步的"}},[t._v("#")]),t._v(" console 是同步的还是异步的?")]),t._v(" "),a("p",[t._v("怎么说呢，console 并不总是同步的，也不总是异步的。同步还是异步取决于链接的是什么流以及操作系统是 Windows 还是 POSIX。")]),t._v(" "),a("blockquote",[a("p",[t._v("POSIX，Portable Operating System Interface of UNIX，缩写为 POSIX，可移植操作系统接口。")])]),t._v(" "),a("blockquote",[a("p",[t._v("同步写可能会阻塞事件循环直到写的过程完成。可能一瞬间就能写到一个文件，但当系统处于高负载时，管道的接收端可能不会被读取缓慢的终端或文件系统，因为事件循环被阻塞的足够频繁且足够长的时间，这些可能会给系统性能带来消极的影响。当你向一个交互终端会话写时这可能不是个问题，但当生产日志到进程的输出流时要特别留心。")])]),t._v(" "),a("ul",[a("li",[t._v("文件(files): 两个平台下都是同步；")]),t._v(" "),a("li",[t._v("终端(TTYs): Windows 平台下同步，POSIX 平台下异步；")]),t._v(" "),a("li",[t._v("管道(pipes): Windows 平台下同步，POSIX 平台下异步；")])]),t._v(" "),a("h2",{attrs:{id:"为什么-console-log-执行完后就退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-console-log-执行完后就退出"}},[t._v("#")]),t._v(" 为什么 "),a("code",[t._v("console.log()")]),t._v(" 执行完后就退出")]),t._v(" "),a("p",[t._v("比如下面一段，进程等待 3 秒后输出 "),a("code",[t._v("你好，Node.js!")]),t._v("，接着等待 3 秒后输出 "),a("code",[t._v("你好，Node.js2!")]),t._v("，然后退出。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，Node.js!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，Node.js2!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里就要牵扯到 Node.js 事件队列。Node.js 会追踪所有异步请求，当使用文件异步读写、socket 读写、定时器等异步操作时，所有的请求都会在事件队列中。")]),t._v(" "),a("ul",[a("li",[t._v("http 请求、数据库请求等 IO 请求操作；")]),t._v(" "),a("li",[a("code",[t._v("net.Server.listen()")]),t._v(" 或者 "),a("code",[t._v("http.Server.listen()")]),t._v(" 等端口监听；")]),t._v(" "),a("li",[a("code",[t._v("fs.write()")]),t._v(" 类型的文件 IO 操作；")]),t._v(" "),a("li",[a("code",[t._v("console.log()")]),t._v(" 输出日志；")]),t._v(" "),a("li",[a("code",[t._v("setTimeout()")]),t._v("、"),a("code",[t._v("setInterval()")]),t._v(" 等定时器操作；")]),t._v(" "),a("li",[a("code",[t._v("process.send()")]),t._v(" 等异步请求发送；")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意：当所有异步操作都结束时，Node.js 的进程才会退出。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);