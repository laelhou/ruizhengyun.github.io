# 传递 refs

## 什么是Refs

我们在日常写React代码的时候，一般情况是用不到Refs这个东西，因为我们并不直接操作底层DOM元素，而是在render函数里去编写我们的页面结构，由React来组织DOM元素的更新。

凡事总有例外，总会有一些很奇葩的时候我们需要直接去操作页面的真实DOM，这就要求我们有直接访问真实DOM的能力，而Refs就是为我们提供了这样的能力。

看这个名字也知道，Refs其实是提供了一个对真实DOM（组件）的引用，我们可以通过这个引用直接去操作DOM（组件）

## 为什么会用到这个

上面有提到，我们一般情况下是不需要用到这个东西，那具体什么时候才会用到呢？ 看官方建议：

>
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

简单的来说就是处理DOM元素的focus，文本的选择或者媒体的播放等，以及处罚强制动画或者同第三方DOM库集成的时候。

也就是React无法控制局面的时候，就需要直接操作Refs了。

## 怎么用

### React V16版本之前

我们一般都是通过一个回调函数的方式，把当前组件的DOM绑定到一个实例变量上，像下面这样：

```js
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }

  componentDidMount() {
    this.textInput.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={ele => { this.textInput = ele}} />
    );
  }
}
```

在上面的代码中，我们先声明一个值为 `null` 的 `textInput` 变量，然后在 `ref` 中以回调的方式将组件DOM赋值给`textInput`。然后就可以通过 `this.textInput.focus()` 这样的性质来直接调用 `CustomTextInput` 这个组件的实例方法。

**但是这个方式有以下两个不太好：**

- 每次组件重新渲染的时候，行内函数都会执行两次，第一次的 `ele` 的值为空，第二次才为真正的DOM对象。因为在每次渲染中React都会创建一个新的函数实例。因此，React 需要清理旧的 `ref` 并且设置新的。通过将 `ref` 的回调函数定义成类的绑定函数的方式可以避免上述问题；
- 如果我们想要将一个子组件的 `ref` 传递给父组件，可能会有点麻烦，虽然通过一个特殊的 `prop` 属性可以做到，但是感觉有点不太正规；

#### React V16 版本后

React V16版本新增一个API：`React.createRef()`; 通过这个API，我们可以先创建一个ref变量，然后再将这个变量赋值给组件声明中 `ref` 属性就好了。

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

在上面的代码中，我们先通过 `React.createRef();` 创建一个 `ref`，并赋值给组件属性 `textInput（this.textInput）`，然后在 `render` 函数中通过 `ref={this.textInput}` 的方式将 `ref` 和 `input` 这个真实DOM联系起来， 这样就可以通过  `this.textInput.current.focus();` 的方式来直接操作 `input` 元素的方法。


#### 不同之处

在V16版本前，我们可以直接通过变量访问元素的方法，在V16后，我们需要通过 `this.textInput.current`，即**真实的DOM是通过current属性来引用的**。

如果通过 `createRef（）` 这个API赋值给组件的ref，那么引用的就是组件实例；如果是DOM元素，那引用的自然的就是DOM元素了。。

## 传递Refs

前面我们说到，在V16版本之前，我们想要父组件拿到子组件的ref，需要通过一些特殊的方法，V16版本之后，React提供了一种原生的方式来完成这种操作。

这就涉及到React新增的另一个API： `React.forwardRef()`， 通过接受一个函数，来传递 `refs`，具体如下：

```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

- 首先我们通过 `React.createRef();` 创建一个 `ref` 变量，然后在 `FancyButton` 属性中通过 `ref={ref}` 的方式把这个 `ref` 和组件关联起来。
- 目前为止，如果 `FancyButton` 是一个通过 `class` 或者函数声明的组件，那么就到此为止，我们可以说 `ref` 变量的 `current` 属性持有对 `FancyButton` 组件实例的引用。
- 不幸的是，`FancyButton` 经过了 `React.forwardRef` 的处理， 这个API接受两个参数，第二个参数就是 `ref`，然后通过 `<button ref={ref}>` 把 `ref` 绑定到 `button` 元素上，这样 `ref.current` 的引用就是 `button` 元素这个DOM对象了。。。

上面的有点绕，简单来说，就是我们创建一个引用，本来是给外面的 `FancyButton` 组件的，但是因为 `React.forwardRef` 的处理，这个引用被传递给了内部的 `button` 元素。这样 `ref.current` 的引用由本来的 `FancyButton` 实例传递到了 `button` 元素本身。


## 在HOC组件中的应用

HOC（higher-order components）高阶组件，简单的说，就是通过组件包裹的方式来提到代码复用，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。

以下是一个生成高阶组件的函数：

```js
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
```

`logProps` 是函数，接受一个组件参数，返回一个包裹参数组件的 `logProps` 组件。

下面是用法：

```js
class FancyButton extends React.Component {
  focus = () =>  {
    // ...
  }
  render(){
    // ...
  }
}

export default logProps(FancyButton);
```

我们先声明一个 `FancyButton` 的组件，然后将其作为参数传入 `logProps` 函数，最后得到的其实是一个 `LogProps` 组件。

接下来我们使用 `refs`：

```js
import FancyButton from './FancyButton';

const ref = React.createRef();

<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}
/>;
```

我们通过文件引入 `FancyButton（其实引入的是LogProps组件）` 然后 `createRef` 并指向 `FancyButton`。 本意是希望引入真正的`FancyButton` 组件，实际上引用的是外层包裹组件 `LogProps` 组件。

我们可以通过以下改造来完善代码：

```js
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }
  
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 非必须
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
```

如面的代码所示，我们修改了高阶组件 `logProps` 函数的实现方式，在内部组件 `LogProps` 的 `render` 方法中，给被包裹组件（作为参数传入的组件）添加了来自 `props` 的 `ref`。

最终返回的也是一个 `React.forwardRef` 处理过的组件，这个组件将 `ref` 传递到内部的 `props` 中去。

这样，但我们通过 `logProps(FancyButton)` 函数调用的时候，其实返回的是一个经过 `React.forwardRef` 处理的组件， 当通过

```js
<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}
/>;
```

去添加 `ref` 的时候， 这个 `ref` 其实直接添加到了内部的 `LogProps` 组件的 `forwardedRef` 属性上，然后在 `LogProps` 组件内部，又通过 `props` 属性的方式被赋值了被包裹组件（作为参数的组件，也就是 `FancyButton` 组件）。这个传递其实经过了三次。

总的来说，高阶组件的 `ref` 其实是通过 `React.forwardRef` 技术将 `ref` 传递到包裹组件 `logProps` 上，然后有通过属性传递到真正的 `FancyButton` 组件上，两次传递才完成。

[](https://segmentfault.com/a/1190000015113359)
