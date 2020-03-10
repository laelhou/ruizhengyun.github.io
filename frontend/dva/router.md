路由指的是前端路由，因为是单页面应用，所以需要通过浏览器提供的 History API 监听浏览器 url 的变化，然后做相关的操作。

dva 使用的是 [react-router][]，来提供 router 方法来控制路由。

```js
import { Router, Route } from 'dva/router';
app.router(() => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Router>
    );
})
```

# Route Components
在 React 中页面组件即 Container Components，在 dva 中将其约束为 Route Components，需要 connect Model 的组件都是 Route Components，也就是在目录 `/routes/` 下，而目录 `/components/` 下则是纯组件（Presentational Components），所谓纯组件就是功能组件。

# 参考

[react-router]: https://github.com/reactjs/react-router
[redux]: http://redux.js.org/docs/Glossary.html
[redux 中文]: http://cn.redux.js.org/index.html