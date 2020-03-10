# 错误信息

过去，组件内的 JavaScript 错误常常会破坏 React 内部状态并在下一次渲染时产生 加密的 错误信息。这些错误总会在应用代码的早期触发，但 React 并没有提供一种方式能够在组件内部优雅地来处理，也不能从错误中恢复。

## 错误边界介绍

部分 UI 的异常不应该破坏了整个应用。为了解决 React 用户的这一问题，React 16 引入了一种称为 “错误边界” 的新概念。

错误边界是用于捕获其子组件树 JavaScript 异常，记录错误并展示一个回退的 UI 的 React 组件，而不是整个组件树的异常。错误边界在渲染期间、生命周期方法内、以及整个组件树构造函数内捕获错误。

> **注意**
>
> 错误边界**无法**捕获如下错误:
>
> 事件处理 （了解更多）
>
> 异步代码 （例如 setTimeout 或 requestAnimationFrame 回调函数）
>
> 服务端渲染
>
> 错误边界自身抛出来的错误 （而不是其子组件）

一个类组件变成一个错误边界。如果它定义了生命周期方法 static getDerivedStateFromError()或者componentDidCatch()中的任意一个或两个。当一个错误被扔出后，使用static getDerivedStateFromError()渲染一个退路UI。使用componentDidCatch()去记录错误信息。

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

而后你可以像一个普通的组件一样使用：

```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

错误边界工作机制类似于JavaScript catch {}，只是应用于组件。仅有类组件可以成为错误边界。实践中，大多数时间，你希望定义一个错误边界组件一次并将它贯穿你的整个应用。

注意错误边界仅可以捕获组件在树中比他低的组件的错误。错误边界无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会向上冒泡至最接近的错误边界。这也类似于 JavaScript 中 catch {} 的工作机制。