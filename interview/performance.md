# 性能提升

## 图片

### 对于非纯色图【2X】图适配

- 媒体查询、srcset属性、image-set属性匹配的基本都是高端浏览器，兼容性略差；
- 脚本控制脚本兼容性更佳；
- 目前很多用户使用的还是 windows 的普清屏，mac os 系统的高清屏用的不是很多。基于这类情况，比媒体查询更为方便的**srcset属性**和**image-set属性**方案，即内容图使用 **srcset 属性**适配，背景图使用 **image-set 属性**适配。

```html
<img src="images/img@1x.png" srcset="images/img_@1x.png 1x, images/img@2x.png 2x" alt="">
```

```css
.bg_icon{
    background-image: -webkit-image-set(url("images/bg@1x.png") 1x, url("images/bg@2x.png") 2x);
    background-image: image-set(url("images/bg@1x.png") 1x, url("images/bg@2x.png") 2x);
}
```

### 正确使用图片

- 使用 WebP 格式图片。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好；
  

## CDN

Content Delivery Network，即内容分发网络。通过在现有的 Internet 中增加一层新的网络架构，将网站的内容发布到最接近用户的 cache 服务器内，通过 DNS 负载均衡的技术，判断用户来源就近访问 cache 服务器取得所需的内容；

### 静态资源缓存，移动端离线缓存

1.配置 ETag, If-None-Match，上次 ETag 的内容。浏览器发出请求询问服务端，某某资源是否过期。服务端发现没有过期，就直接返回一个状态码 304、正文为空的响应，告知浏览器使用本地缓存；如果资源有更新，服务端返回状态码 200、Etag 和正文。这个过程被称之为 HTTP 的协商缓存，通常也叫做**弱缓存**。

2.添加 Expires 头：服务端通过响应头告诉浏览器，在什么时间之前（Expires）或在多长时间之内（Cache-Control: Max-age=xxx），不要再请求服务器了。这个机制称之为 HTTP 的**强缓存**（有明确的失效期）。一般会对 CSS、JS、图片等资源使用强缓存，而入口文件（HTML）一般使用协商缓存或不缓存。

3.AppCache：主要利用 manifest 文本文件，告知浏览器被缓存的内容以及不缓存的内容。manifest 文件可分为三个部分：
- `CACHE MANIFEST` 在此标题下列出的文件将在首次下载后进行缓存，等价于 CACHE；
- `NETWORK` 在此标题下列出的文件需要与服务器的连接，且不会被缓存；
- `FALLBACK` 在此标题下列出的文件规定当页面无法访问时的回退页面；

4.localStorage：用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的;

## 开启Gzip

Gzip 的思想就是把文件先在服务器端进行压缩，且压缩率达到 85%，然后再传输，传输完毕后浏览器会重新对压缩过的内容进行解压缩，并执行。好处在于 Gzip 的支持已经很好，且爬虫可识别，压缩率达到 66%-85% 显著减少了文件传输的大小。另外，Gzip 对pdf 文件的压缩效果不大，而且会浪费 CPU。

