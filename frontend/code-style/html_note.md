# 注释规范

## 遵循标准

```html
// bad
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->

// good
<!--Comment Text-->
```

### 约定
一般用于简单的描述，如某些状态描述、属性描述等。
注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

```html
// bad
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>

// good
<!-- Comment Text -->
<div>...</div>
```



## 模块注释
一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符 
`<!-- begin Comment Text -->` 表示模块开始
`<!-- end Comment Text -->` 表示模块结束
模块与模块之间相隔一行

```html
// bad
<!-- begin Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- end Comment Text A -->
<!-- begin Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- end Comment Text B -->


// good
<!-- begin Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- end Comment Text A -->
	
<!-- begin Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- end Comment Text B -->
```


## 嵌套模块注释
当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用
```html
// good
<!-- begin Comment Text -->
<div class="container">
    <div class="mod_a">
        ...
    </div>
    <!-- /mod_a -->
    	
    <div class="mod_b">
    	...
    </div>
    <!-- /mod_b -->
</div>
<!-- end Comment Text -->
```