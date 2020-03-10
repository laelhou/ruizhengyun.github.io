# curl 介绍

是一种命令行工具，主要用来发出网络请求，得到和提取数据，然后显示在**标准输出（stdout）**上。

## 查看

### 网页源码

直接在curl命令后加上网址，就可以看到网页源码。

```js
curl https://juejin.im/
```

### 下载网页

格式 `curl -o [文件名] [地址]`

```js
curl -o juejin.html https://juejin.im/
```

### 显示头信息

```js
curl -I https://juejin.im/
```

- `-I` 大写只展示 http response 头信息
- `-i` 小写除了会展示头信息，还会展示网页代码

### 显示通信过程

```js
curl -v https://juejin.im/
```

- `-v` 参数可以显示一次 http 通信的整个过程，包括端口连接和 http request 头信息。


## 自动跳转

```js
curl -L https://juejin.im/
```

## 发送

### 表单信息

我们知道发送表单信息常用的方式有 GET 和 POST 两种方法。

```js
# GET
curl example.com/login?username=ruizhengyun

# POST
curl -X POST --data "username=ruizhengyun" example.com/login
```

- GET 方法相对简单，只要把数据附在网址后面就行
- POST 方法必须把数据和网址分开，使用 `--data` 参数
  
### 表单编码

```js
# POST
curl -X POST --data-urlencode "username=ruizhengyun" example.com/login
```