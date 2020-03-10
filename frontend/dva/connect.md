# 作用
connect 是一个函数，起作用是绑定 State 到 View 上。使用格式如下

```js
import { connect } from 'dva';

function mapStateToProps(state) {
    return { todos: state.todos };
}
connect(mapStateToProps)(App);
```

很显然它要返回一个 React 组件，即容器组件或状态组件。

# 参数说明

|参数|说明|
|:-|:-|
|mapStateToProps|第一个参数，从变量名可看出将 State 转为 Props 然后应用到父组件及分发到其子组件|
|Component|容器组件|

