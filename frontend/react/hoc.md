# 高阶组件 HOC

> 高阶组件（HOC）是react中的高级技术，用来重用组件逻辑。但高阶组件本身并不是React API。它只是一种模式，这种模式是由react自身的组合性质必然产生的。

具体而言，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。

## 语法

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

通常我们写的都是对比组件，那什么是对比组件呢？对比组件将 `props` 属性转变成 UI，高阶组件则是将一个组件转换成另一个组件。

## 应用场景

高阶组件在 React 第三方库中很常见，比如 **Redux** 的 `connect` 方法和 **Relay** 的 `createContainer`。

### 意义何在

> 之前用混入（mixins）技术来解决横切关注点。可是混入（mixins）技术产生的问题要比带来的价值大。所以就移除混入（mixins）技术，对于如何转换你已经使用了混入（mixins）技术的组件，可查看[更多资料]()。显然，横切关注点就用高阶组件（HOC）来解决了。

### 示例

1.假设有一个评论组件（CommentList），该组件从外部数据源订阅数据并渲染

```js
// CommentList.js
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```

2.然后，有一个订阅单个博客文章的组件（BlogPost）

```js
// BlogPost.js
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    }
  }

  conponentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```

3.以上，评论组件 `CommentList` 和 文章订阅组件 `BlogPost` 有以下不同

- 调用 `DataSource` 的方法不同
- 渲染的输出不同
  
可是，它们也有相同点

- 挂载组件时，向 `DataSource` 添加一个改变的监听器;
- 在监听器内，当数据源改变时，就调用 `setState`;
- 卸载组件时，移除改变监听器;

一个大型应用中，从 `DataSource` 订阅数据并调用 `setState` 的模式会多次使用，这个时候作为前端就会嗅出代码要整理一下，能够抽出相同的地方作为一个抽象，然后许多组件可共享它，这就是高阶组件产生的背景。


4.我们使用个函数 `withSubscription` 让它完成以下功能

```js
const CommentListWithSubscription = withSubscription(
  CommentList, 
  DataSource => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

上面函数 `withSubscription` 的第一个参数是我们之前写的两个组件，第二个参数检索所需要的数据（DataSource 和 props）。

那这个函数 `withSubscription` 该怎么写呢？

```js
const withSubscription = (TargetComponent, selectData) => {
  return class extends React.Component {
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount(){
      DataSource.addChangeListener(this.handleChange);
    }

    componentDidMount(){
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render(){
      return <TargetComponent data={this.state.data} {...this.props} />
    }
  }
}
```

5.总结下

- 高阶组件既不会修改参数组件，也不使用继承拷贝它的行为，简单来说就是**一个没有副作用的纯函数**。
- 被包裹组件接收容器的所有 `props` 属性以及新的数据 `data` 用于渲染输出。高阶组件并不关心数据的使用方式，被包裹组件不关心数据来源。
- 高阶组件和被包裹组件的合约在于 `props` 属性。这就是可以替换另一个高阶组件，只要他们提供相同的 `props` 属性给被包裹组件即可。你可以把高阶组件当成一套主题皮肤。


## 不改变原始组件，使用组合

现在，我们对高阶组件已经有了初步认识，可是实际业务当中，我们写高阶组件时，容易写着写着就修改了组件的内容，千万要抵住诱惑。比如

```js
const logProps = (WrappedComponent) => {
  WrappedComponent.prototype.componentWillReceiveProps = function(nextProps) {
    console.log('CurrentProps', this.props);
    console.log('NextProps', nextProps);
  }
  return WrappedComponent;
}

const EnhancedComponent = logProps(WrappedComponent);
```

### 上面高阶组件 `logProps` 有几个问题

- 被包裹组件 `WrappedComponent` 不能独立于增强型组件（enhanced component）被重用。
- 如果你在 `EnhancedComponent` 上应用另一个高阶组件 `logProps2`，同样也会改去改变 `componentWillReceiveProps`，高阶组件 `logProps` 的功能就会被覆盖。
- 这样的高阶组件对没有生命周期的函数式组件是**无效的**

### 针对以上问题，要想达到同等效果，可使用组合方式

```js
const logProps = (WrappedComponent) => {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      // 用容器包裹输入组件，不要修改它，漂亮！
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

### 联想

不知道你发现没有，高阶组件和容器组件模式有相同之处。

- 容器组件专注于在高层和低层之间进行责任分离策略的一部分，传递 `props` 属性给子组件；
- 高阶组件使用容器作为它们实现的一部分，可理解高阶组件就是参数化的容器组件定义。


## 约定：贯穿传递不相关props属性给被包裹的组件

高阶组件返回的那个组件与被包裹的组件具有类似的接口。

```js
render(){
  // 过滤掉专用于这个高阶组件的 props 属性，丢弃 extraProps
  const { extraProps, ...restProps } = this.props;

  // 向被包裹的组件注入 injectedProps 属性，这些一般都是状态值或实例方法
  const injectedProps = {
    // someStateOrInstanceMethod
  };

  return (
    <WrappedComponent injectedProps={injectedProps} {...restProps} />
  )
}
```

约定帮助确保高阶组件最大程度的灵活性和可重用性。

## 约定：最大化的组合性

并不是所有的高阶组件看起来都是一样的。有时，它们仅接收单独一个参数，即被包裹的组件：

```js
const NavbarWithRouter = withRouter(Navbar);
```

一般而言，高阶组件会接收额外的参数。在下面这个来自 **Relay** 的示例中，一个 `config` 对象用于指定组件的数据依赖：

```js
const CommentWithRelay = Relay.createContainer(Comment, config);
```

高阶组件最常见签名如下所示：

```js
const ConnectedComment = connect(commentSelector, commentActions)(Comment);
```

可以这么理解

```js
// connect 返回一个函数（高阶组件）
const enhanced = connect(commentSelector, commentActions);
const ConnectedComment = enhanced(Comment);
```

换句话说，`connect` 是一个返回高阶组件的高阶函数！但是这种形式多少让人有点迷惑，但是它有一个性质，只有一个参数的高阶函数（`connect` 函数返回的），返回是 `Component => Component`，这样就可以让输入和输出类型相同的函数组合在一起，在一起，在一起

```js
// 反模式
const EnhancedComponent = withRouter(connect(commentSelector, commentActions)(Comment));

// 正确模式
// 你可以使用一个函数组合工具
// compose(f, g, h) 和 (...args) => f(g(h(...args)))是一样的
const enhanced = compose(
  withRouter,
  connect(commentSelector, commentActions)
);
const EnhancedComponent = enhanced(Comment);
```

包括 **lodash（比如说 `lodash.flowRight`）, Redux 和 Ramda** 在内的许多第三方库都提供了类似 `compose` 功能的函数。

## 约定：包装显示名字以便于调试

如果你的高阶组件名字是 `withSubscription`，且被包裹的组件的显示名字是 `CommentList`，那么就是用 `WithSubscription(CommentList)` 这样的显示名字：

```js
const withSubscription = (WrappedComponent) => {
  // return class extends React.Component { /* ... */ };

  class WithSubscription extends React.Component { /* ... */ };
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`
  return WithSubscription;
}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```

## 有几个不要做的事

### 1.不要在render方法内使用高阶组件

**React的差分算法（称为协调）**使用组件标识确定是否更新现有的子树或扔掉它并重新挂载一个新的。如果 `render` 方法返回的组件和前一次渲染返回的组件是完全相同的(===)，React就递归地更新子树，这是通过差分它和新的那个完成。如果它们不相等，前一个子树被完全卸载掉。

一般而言，你不需要考虑差分算法的原理。但是它和高阶函数有关。因为它意味着你不能在组件的 `render` 方法之内应用高阶函数到组件：

```js
render() {
  // 每一次渲染，都会创建一个新的EnhancedComponent版本
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 就会引起每一次都会使子对象树完全被卸载/重新加载
  return <EnhancedComponent />;
}
```

上面代码会导致的问题

- 性能问题
- 重新加载一个组件会引起原有组件的状态和它的所有子组件丢失

### 2.必须将静态方法做拷贝

问题：当你应用一个高阶组件到一个组件时，尽管，原始组件被包裹于一个容器组件内，也就意味着新组件会没有原始组件的任何静态方法。

```js
// 定义静态方法
WrappedComponent.staticMethod = function() {/*...*/}
// 使用高阶组件
const EnhancedComponent = enhance(WrappedComponent);

// 增强型组件没有静态方法
typeof EnhancedComponent.staticMethod === 'undefined' // true
```

解决方案：
（1）可以将原始组件的方法拷贝给容器

```js
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // 必须得知道要拷贝的方法 :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
```

（2）这样做，就需要你清楚的知道都有哪些静态方法需要拷贝。你可以使用 [hoist-non-react-statics][] 来帮你自动处理，它会自动拷贝所有非React的静态方法：

```js
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```

（3）另外一个可能的解决方案就是分别导出组件自身的静态方法。

```js
// Instead of...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...export the method separately...
export { someFunction };

// ...and in the consuming module, import both
import MyComponent, { someFunction } from './MyComponent.js';
```

### 3.Refs属性不能贯穿传递

一般来说，高阶组件可以传递所有的 `props` 属性给包裹的组件，但是不能传递 `refs` 引用。因为并不是像 `key` 一样，`refs` 是一个伪属性，React 对它进行了特殊处理。如果你向一个由高阶组件创建的组件的元素添加 `ref` 应用，那么 `ref` 指向的是最外层容器组件实例的，而不是被包裹的组件。

React16版本提供了 `React.forwardRef` 的 API 来解决这一问题，可在 `refs` 传递章节中了解下。

[hoist-non-react-statics]: https://github.com/mridgway/hoist-non-react-statics