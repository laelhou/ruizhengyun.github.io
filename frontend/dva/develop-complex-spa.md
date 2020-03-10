前面几个章节说的都是简单的开发场景，对于复杂的 SPA 并未涉及，接下来一起看看更具挑战的。

# model 动态加载
一个稍大型的项目就会定义出很多 model，我们并不希望应用启动时就全部加载，我们更加希望看到的是通过页面路由的切换来按需加载（即懒加载、动态加载），通常会使用 webpack 的 `require.ensure` 来完成。

```js
// 复杂 SPA
function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/', name: 'IndexPage', getComponent(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./routes/model.js'));
          cb(null, require('./routes/IndexPage.js'))
        })
      }
    },
    {
      path: '/dashboard', name: 'Dashboard', getComponent(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./routes/Dashboard/model.js'));
          cb(null, require('./routes/Dashboard/index.js'))
        })
      }
    }
  ];
  return <Router history={history} routes={routes} />
}
```

# 全局数据 state 的共享
通常一个 model 只管一个页面组件的视图，但是有些可以贯穿整个应用的声明周期，这类model 成为全局 model。具体页面组件除了能获取并修改自身 model，也可以获取和修改全局 model。

```js
*query(action, { select }) {
    const { global, dashboard } = yield select();
    // something
}
```

所以，不必将所有操作都放入一个 model，具体要根据视图设计结构和业务分类来设计多个 model，然后组合使用，达到更好的复用。

# model 动态扩展
项目开发中，**有些业务视图很相似，所以我们设计的 model 也很相似**，对于这类