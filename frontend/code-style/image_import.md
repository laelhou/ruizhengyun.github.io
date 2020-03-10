# 图片引入
测试内容图应该写上表明图片尺寸的占位图，可以用线上占位图生成服务，如：

```
http://placeholder.qiniudn.com/300x200
```
<img src="http://placeholder.qiniudn.com/300x200
">

HTML 中图片引入不需添加 width、height 属性，alt 属性应该写上

```
// bad
<img src="" width="" height="" >


// good
<img src="" alt="" >
```

CSS 中图片引入不需要引号

```
// good
.bg {
    background-image: url(icon.png);
}
```


## CSS Sprites VS Data URIs
### CSS Sprites特点
- 减少请求数
- 加速图片的显示
- 维护更新成本大
- 更多的内存消耗，特别是大体积或有过多空白的 Sprites 图
- 图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上

### Data URIs（base64编码）
- 减少请求数
- 转换文件体积大，大约比原始的二进制大33%
- IE6 / IE7 不支持
- 图片显示相对较慢，需要更多的CPU消耗

更多关于 CSS Sprites 和 Data URIs 可以阅读：
[《Data URI&MHTML: 用还是不用？》](http://www.99css.com/492/)


## 约定
### CSS Sprites 使用建议
- 适合使用频率高更新频率低的小图标
- 尽量不留太多的空白
- 体积较大的图片不合并
- 确保要合并的小图坐标数值和合并后的 Sprites 图尺寸均为偶数

### Data URIs（base64编码）使用建议
- 适合更新频率高的小图片，如某些具备自定义功能的标题icon等
- 转换成 Base64 编码的图片应小于 2KB
- 移动端不使用 Base64 编码
- 要兼容 IE6/IE7 的不使用