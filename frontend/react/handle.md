# 事件处理

## 语法

React 元素的事件处理和 DOM元素的很相似。但是有一点语法上的不同:

- React事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)

```js
<button onclick="hitMe()">
  戳我
</button>

// React
<button onClick={hitMe}>
  戳我
</button>
```

- 不能使用返回 `false` 的方式阻止默认行为，必须明确的使用 `preventDefault`

```js
// 传统 HTML
<a href="#" onclick="console.log('戳我'); return false;">
  戳我
</a>

// React
function hitMe() {
  function hitMe(e) {
    e.preventDefault(); // 很重要，别说我没提醒过你
    console.log('戳我');
  }

  return (
    <a href="#" onClick={hitMe}>
      戳我
    </a>
  );
}
```

在这里，`e` 是一个合成事件。React 根据 W3C spec 来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。

## 监听

使用 React 的时候通常你不需要使用 `addEventListener` 为一个已创建的 DOM 元素添加监听器。你仅仅需要在这个元素初始渲染的时候提供一个监听器。

当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法。例如，下面的 Toggle 组件渲染一个让用户切换开关状态的按钮：

```js
import React from 'react';
import { Button } from 'antd';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? '开' : '关'}
      </Button>
    );
  }
}

export default Toggle;
```

这里必须谨慎对待 JSX 回调函数中的 `this`，类的方法默认是**不会绑定 `this`** 的。如果你忘记绑定 `this.handleClick` 并把它传入 `onClick`, 当你调用这个函数的时候 `this` 的值会是 `undefined`。

这并不是 React 的特殊行为；它是函数如何在 JavaScript 中运行的一部分。通常情况下，如果你没有在方法后面添加 `()` ，例如 `onClick={this.handleClick}`，你应该为这个方法绑定 `this`。

如果使用 `bind` 让你很烦：

- 你可以在回调函数中使用 **箭头函数**:

```js
import React from 'react';
import { Button } from 'antd';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? '开' : '关'}
      </Button>
    );
  }
}

export default Toggle;
```

- 反模式: 每次创建一个不同的回调函数

使用这个语法有个问题就是每次 Toggle 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定来避免这类性能问题。

## 向事件处理程序传递参数

通常我们会为事件处理程序传递额外的参数。例如，若是 `id` 是你要删除那一行的 id，以下两种方式都可以向事件处理程序传递参数：

```js
<button onClick={(e) => this.deleteRow(id, e)}>删除</button>
<button onClick={this.deleteRow.bind(this, id)}>删除</button>
```

上述两种方式是等价的，分别通过 `arrow functions` 和 `Function.prototype.bind` 来为事件处理函数传递参数。

上面两个例子中，参数 `e` 作为 React 事件对象将会被作为第二个参数进行传递。通过**箭头函数**的方式，事件对象必须**显式**的进行传递，但是通过 **`bind`** 的方式，事件对象以及更多的参数将会被**隐式**的进行传递。

值得注意的是，通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面，例如:

```js
import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'xxx'
    };
  }

  handleChangeName = (name, e) => {
    e.preventDefault();
    console.log('name', name)
  }

  render() {
    return (
      <div>
        <a 
          href="https://reactjs.org" 
          onClick={this.handleChangeName.bind(this, this.state.name)}
        >
          {this.state.name}
        </a>
      </div>
    );
  }
}

export default Toggle;
```