# HTML

如果没有 HTML，那就没有 Web。HTML 做的不好，你将要写出很多不必要的 CSS 和 Javascript 来弥补。当然，HTML 写的好，就能写出更具扩展性和可维护性的 CSS 和 Javascript。请重视 HTML。由于历史原因，前后后端都写过 HTML，于是就细分出：程序式和静态时。

## 程序式标记

> 自动化程度 100%，可控程度 0%

通常这类代码在前端团队参与之前，后端人员写出一堆标记和 CSS 类名，可能来自于与不同模板。后期后端开发人员又着手其他任务，没有时间来维护，前端团队就得来接手。

```html
<div id="header" class="chearfix">
    <div id="header-inner" class="container-12 chearfix">
        <div id="nav">
            <ul class="menu">
                <li class="menu-item"> 
                    <a href="http://ruizhengyun.cn/">Pr's blog</a>
                    <ul class="sub-menu">
                        <li class="sub-menu-item">
                            <a href="http://ruizhengyun.cn/tutorial">糖衣炮弹</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
```

一顿 div 乱轰，功能上没有任何问题，然而文档毫无语义化可言。

## 静态式标记

> 自动化程度 0%，可控程度 100%

为了简洁，“语义化”标记是首选，应用样式即视觉外观是依赖 HTML5 元素名称和层级关系，而不是考程序式标记用 Css 类名来维护。

```html
<header>
    <section>
        <nav>
            <ul>
                <li> 
                    <a href="http://ruizhengyun.cn/">Pr's blog</a>
                    <ul>
                        <li>
                            <a href="http://ruizhengyun.cn/tutorial">糖衣炮弹</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </section>
</header>
```
此时，css 可能会长这样

```css
header > section > nav > div > ul > li > a {}
header > section > nav > div > ul > li > ul > li > a {}
```

文档语义化是解决了，功能上也没问题，解决了程序式标记的问题，但在 css 的处理上过于复杂。

## 模块化标记，即平衡可控来标记

> 自动化程度 100%，可控程度 100%

```html
<header class="header">
    <section class="header__inner">
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a class="nav__link" href="http://ruizhengyun.cn/">Pr's blog</a>
                    <ul class="nav__list--sub">
                        <li class="nav__item--sub">
                            <a class="nav__link--sub" href="http://ruizhengyun.cn/tutorial">糖衣炮弹</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </section>
</header>
```
这段一看就是将上面两者结合一下，

- css 类名上有点乱乱的，有 `__`（双下划线）和 `--`（双横杠）。
- html 代码量上相对静态式标记冗余了

**观点**

- 代码确实冗余，解决了静态式标记 css 编写的复杂度
- 解决了程序式标记缺少语义化问题

> 对于 css 书写风格就涉及到 CSS 模块化了，上面采用的是 **BEM 命名规则**
