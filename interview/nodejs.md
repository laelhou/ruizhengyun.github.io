# Node.js 问题

## 如何实现方法 console.log

实现在控制台的打印，利用 `process.stdout` 将输入流数据输出到输出流(即输出到终端)，比如

```javascript
process.stdout.write('你好，Node.js');
```

## console 是同步的还是异步的?

怎么说呢，console 并不总是同步的，也不总是异步的。同步还是异步取决于链接的是什么流以及操作系统是 Windows 还是 POSIX。

> POSIX，Portable Operating System Interface of UNIX，缩写为 POSIX，可移植操作系统接口。

> 同步写可能会阻塞事件循环直到写的过程完成。可能一瞬间就能写到一个文件，但当系统处于高负载时，管道的接收端可能不会被读取缓慢的终端或文件系统，因为事件循环被阻塞的足够频繁且足够长的时间，这些可能会给系统性能带来消极的影响。当你向一个交互终端会话写时这可能不是个问题，但当生产日志到进程的输出流时要特别留心。

- 文件(files): 两个平台下都是同步；
- 终端(TTYs): Windows 平台下同步，POSIX 平台下异步；
- 管道(pipes): Windows 平台下同步，POSIX 平台下异步；

## 为什么 `console.log()` 执行完后就退出

比如下面一段，进程等待 3 秒后输出 `你好，Node.js!`，接着等待 3 秒后输出 `你好，Node.js2!`，然后退出。

```javascript
setTimeout(() => {
    console.log('你好，Node.js!');
}, 3000);

setTimeout(() => {
    console.log('你好，Node.js2!');
}, 6000);
```

这里就要牵扯到 Node.js 事件队列。Node.js 会追踪所有异步请求，当使用文件异步读写、socket 读写、定时器等异步操作时，所有的请求都会在事件队列中。

- http 请求、数据库请求等 IO 请求操作；
- `net.Server.listen()` 或者 `http.Server.listen()` 等端口监听；
- `fs.write()` 类型的文件 IO 操作；
- `console.log()` 输出日志；
- `setTimeout()`、`setInterval()` 等定时器操作；
- `process.send()` 等异步请求发送；

> 注意：当所有异步操作都结束时，Node.js 的进程才会退出。
