# 页面渲染

## 条件渲染

在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后还可以根据应用的状态变化只渲染其中的一部分。

React 中的条件渲染和 JavaScript 中的一致，使用 JavaScript 操作符 if 或条件运算符来创建表示当前状态的元素，然后让 React 根据它们来更新 UI。

就比如：

```js
const UserGreeting = () => {
  return <h1>欢迎回来!</h1>;
}

const GuestGreeting = () => {
  return <h1>请先注册</h1>;
}
```

创建一个 `Greeting` 组件，它会根据用户是否登录来显示其中之一：

```js
const Greeting = {
  isLoggedIn
} => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

export default Greeting;
```

此示例根据 isLoggedIn 的值渲染不同的问候语。

### 元素变量

我们可以使用变量来储存元素。它可以帮助我们有条件的渲染组件的一部分，而输出的其他部分不会更改。

登录和退出展示问题：

```js
const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      登录
    </button>
  );
}

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      退出
    </button>
  );
}
```

我们将要创建一个名为 `LoginControl` 的**有状态的组件**。它会根据当前的状态来渲染 `<LoginButton />` 或 `<LogoutButton />`，它也将渲染前面例子中的 `<Greeting />`。

```js
class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: 'no'
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: 'yes'
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: 'no'
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    let button = null; 
    if(isLoggedIn === 'yes'){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    } 

    let button2 = {
      'yes': <LogoutButton onClick={this.handleLogoutClick} />,
      'no': <LoginButton onClick={this.handleLoginClick} />
    };

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn === 'yes' ? true : false} />
        {button}
        <br />
        {button2[isLoggedIn]}
      </div>
    );
  }
}
```

声明变量并使用 `if` 语句是条件渲染组件的不错的方式，但有时你也想使用更简洁的语法，在 JSX 中有如下几种方法。

### 与运算符 &&

你可以通过用花括号包裹代码在 JSX 中嵌入任何表达式 ，也包括 **JavaScript 的逻辑与 `&&`**，它可以方便地条件渲染一个元素。

```js
class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: 'no',
      messages: []
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: 'yes',
      messages: ['react发布了最新版本', '有人加你了', '最近您的一只股票又涨了', '...']
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: 'no',
      messages: []
    });
  }

  render() {
    const { isLoggedIn, messages } = this.state;
    let button = null;
    if(isLoggedIn === 'yes'){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    let button2 = {
      'yes': <LogoutButton onClick={this.handleLogoutClick} />,
      'no': <LoginButton onClick={this.handleLoginClick} />
    };

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn === 'yes' ? true : false} />
        {messages.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h2>几日不见，如隔三秋，想死你了！有 {messages.length} 条消息需要您处理下</h2>
            <ul>{messages.map((item, index) => (<li key={index}>{item}</li>))}</ul>
          </div>
        )}
        <div style={{ marginBottom: 24 }}>
          {button}
        </div>
        <div>
          {button2[isLoggedIn]}
        </div>
      </div>
    );
  }
}
```

之所以能这样做，是因为在 JavaScript 中，`true && expression` 总是返回 `expression`，而 `false && expression` 总是返回 `false`。

可见，如果条件是 `true`，**&& 右侧的元素就会被渲染**，如果是 `false`，**React 会忽略并跳过它**。

### 三目运算符

条件渲染的另一种方法是使用 JavaScript 的条件运算符 `condition ? true : false`。

还是之前的例子:

```js
class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: 'no',
      messages: []
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: 'yes',
      messages: ['react发布了最新版本', '有人加你了', '最近您的一只股票又涨了', '...']
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: 'no',
      messages: []
    });
  }

  render() {
    const { isLoggedIn, messages } = this.state;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn === 'yes' ? true : false} />
        {messages.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h2>几日不见，如隔三秋，想死你了！有 {messages.length} 条消息需要您处理下</h2>
            <ul>{messages.map((item, index) => (<li key={index}>{item}</li>))}</ul>
          </div>
        )}
        <div>
          {isLoggedIn === 'yes' ?
            (<LogoutButton onClick={this.handleLogoutClick} />) :
            (<LoginButton onClick={this.handleLoginClick} />)
          }
        </div>
      </div>
    );
  }
}
```

像在 JavaScript 中一样，你可以根据团队的习惯选择更易读的方式。还要记住如果条件变得过于复杂，可能就是提取组件的好时机了。

### 阻止组件渲染

在极少数情况下，你可能希望隐藏组件，即使它被其他组件渲染。让 render 方法返回 null 而不是它的渲染结果即可实现。

```js
const ShowMessage = ({
  messages = []
}) => {
  if(messages.length < 1) {
    return null
  }
  return (
    <div style={{ marginBottom: 24 }}>
      <h2>几日不见，如隔三秋，想死你了！有 {messages.length} 条消息需要您处理下</h2>
      <ul>{messages.map((item, index) => (<li key={index}>{item}</li>))}</ul>
    </div>
  )
}
```

组件的 render 方法返回 `null` 并不会影响该组件生命周期方法的回调。例如，`componentWillUpdate` 和 `componentDidUpdate` 依然可以被调用。

## 列表

`map()` 函数可以让数组中的每一项翻倍,我们得到了一个新的数列 doubled

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

在React中，把数组转化为数列元素的过程是相似的

### 渲染多个组件
你可以通过使用{}在JSX内构建一个元素集合，即用 `map()` 方法**遍历 numbers 数组**。对数组中的每个元素返回 `<li>` 标签，最后我们得到**一个数组listItems**

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number =>
  <li>{number}</li>
);
```

然后把整个**listItems**插入到 `ul` 元素中，然后渲染进DOM:

```js
render(）{
  return (
    <ul>{listItems}</ul>
  )
}
```

这段代码生成了**一个1到5的数字列表**

### 基础列表组件

通常你需要渲染一个列表到组件中

我们可以把前面的例子重构成一个组件。这个组件接收 `numbers` 数组作为参数，输出一个无序列表。

```js
const NumberList = ({
  numbers = []
}) => {
  const listItems = numbers.map(number =>
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
export default () => {
  return (
    <NumberList numbers={numbers} />
  )
}
```

当我们运行这段代码，将会看到一个警告 `a key should be provided for list items`，意思是当你创建一个元素时，必须包括一个特殊的 `key` 属性。我们将在下一节讨论这是为什么。

让我们来给每个列表元素分配一个 `key` 来解决上面的那个警告：

```js
const NumberList = ({
  numbers = []
}) => {
  const listItems = numbers.map((number, index) =>
    <li key={index.toString()}>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
export default () => {
  return (
    <NumberList numbers={numbers} />
  )
}
```

## Keys

Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。

拿上个例子来说，虽然渲染出来了，但是是有问题的，应该如下：

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number, index) =>
  <li key={index.toString()}>{number}</li>
);
```

一个元素的**key**最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据的 `id` 作为元素的**key**（当元素没有确定的 `id` 时，你可以使用他的序列号索引 `index` 作为 **key**，见上面）

```js
const todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

如果列表项目的顺序可能会变化，我们不建议使用索引来用作键值，因为这样做会导致性能的负面影响，还可能引起组件状态问题。如果你想要了解更多，请点击[深度解析key的必要性](/advanced/reconciliation.html)。如果你选择不指定显式的键值，那么React将默认使用索引用作为列表项目的键值。

### 用 keys 提取组件

元素的key只有放在其环绕数组的上下文中才有意义。
比方说，如果你提取出一个ListItem组件，你应该把key保存在数组中的这个 `<ListItem />` 元素上，而不是放在 `ListItem` 组件中的 `<li>` 元素上。

反模式
  
```js
const ListItem = ({
  value
}) => {
  return (
    // 错啦！你不需要在这里指定key:
    <li key={value.toString()}>{value}</li>
  );
}

const numbers = [1, 2, 3, 4, 5];
export default () => {
  const listItems = numbers.map((number) =>
    //错啦！元素的key应该在这里指定：
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

应该是
  
```js
const ListItem = ({
  value
}) => {
  return (
    <li}>{value}</li>
  );
}

const numbers = [1, 2, 3, 4, 5];
export default () => {
  const listItems = numbers.map((number, index) =>
    //错啦！元素的key应该在这里指定：
    <ListItem key={index.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

一个好的大拇指法则：元素位于 `map()` 方法内时需要设置键属性。

### 键（key）只是在兄弟之间必须唯一

数组元素中使用的key在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键

```js
const posts = [
  {id: 1, title: '你好，世界，', content: '世界是美好的!'},
  {id: 2, title: '你好，react', content: 'react 让你的世界更美好'}
];
export default = () => {
  const sidebar = (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      <h2>sidebar</h2>
      <div>{sidebar}</div>
      <hr />
      <h2>content</h2>
      <div>{content}</div>
    </div>
  );
}
```

key会作为给React的提示，但不会传递给你的组件。如果您的组件中需要使用和key相同的值，请用其他属性名显式传递这个值：

```js
const content = posts.map(post => (
  <Post key={post.id} id={post.id} title={post.title} content={content} />
);
```

上面例子中，**Post组件**可以读出 `props.id`，但是不能读出 `props.key`。

### 在jsx中嵌入map()

在上面的例子中，我们声明了一个单独的 **listItems 变量**并将其包含在JSX中

```js
const NumberList = ({
  numbers
}) => {
  const listItems = numbers.map((number, index) =>
    <ListItem key={index.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX允许在大括号中嵌入任何表达式，所以我们可以在 `map()` 中这样使用：

```js
const NumberList = ({
  numbers
})  => {
  return (
    <ul>
      {numbers.map((number, index) => (
        <ListItem key={index.toString()} value={number} />
      ))}
    </ul>
  );
}
```

这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在JavaScript中一样，何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 `map()` 嵌套了太多层级，那可能就是你提取出组件的一个好时机。
