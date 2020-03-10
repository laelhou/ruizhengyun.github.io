# 状态提升

> 使用 react 经常会遇到几个组件需要共用状态数据的情况。这种情况下，我们最好将这部分共享的状态提升至他们最近的父组件当中进行管理。

这部分内容当中，我们会创建一个温度计算器来计算水是否会在给定的温度下烧开。

## 简单实现

我们先创建一个名为 `BoilingVerdict` 的组件。它会接受 `celsius` 这个温度变量作为它的 `props` 属性，最后根据温度判断返回内容：

```js
const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}
```

再写一个名为 `Calculator` 的组件，它渲染一个 `<input>` 来接受用户输入，然后将输入的温度值保存在 `this.state.temperature` 当中，同时根据输入的值渲染出 `BoilingVerdict` 组件。

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = e => {
    this.setState({temperature: e.target.value});
  }

  render() {
    const { temperature } = this.state;
    return (
      <fieldset>
        <legend>输入一个摄氏温度</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

## 添加第二个输入框

现在有了一个新的需求，在提供摄氏度输入的基础之上，再提供一个华氏温度输入，并且它们能保持同步。

可以通过从 `Calculator` 组件中抽离一个 `TemperatureInput` 组件出来。我们也会给它添加一个值为 `c` 或 `f` 的表示温度单位的 `scale` 属性。

```js
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }

  handleChange = e => {
    this.setState({
      temperature: e.target.value
    })
  }

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>输入温度（{scaleNames[scale]}）:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

对 `Calculator` 稍作修改，来渲染两个不同的温度输入框。

```js
const Calculator = () => {
  return (
    <>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </>
  );
}
```

我们现在有了两个输入框，但是当你在其中一个输入时，另一个并不会更新。这显然是不符合我们的需求的。

另外，我们此时也不能从 `Calculator` 组件中展示 `BoilingVerdict` 的渲染结果。因为现在表示温度的状态数据只存在于 `TemperatureInput` 组件当中。

## 写出转换函数

我们写两个可以将摄氏度和华氏度互相转换的函数。

```js
const toCelsius = fahrenheit => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = celsius => {
  return (celsius * 9 / 5) + 32;
}
```

这两个函数只是单纯转换数字。我们还需要另外一个函数，它接受两个参数，第一个接受字符串 `temperature` 变量，第二个参数则是上面编写的单位转换函数。最后会返回一个字符串。我们会使用它来根据一个输入框的输入计算出另一个输入框的值。

我们最后取到输出的小数点后三位，而 `temperature` 输入不合法的时候，这个函数则会返回空字符串。

```js
const tryConvert = (temperature, convertFn) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertFn(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

举两个例子:

- `tryConvert('abc', toCelsius)` 会返回**空字符串**;
- `tryConvert('10.22', toFahrenheit)` 会返回 **'50.396'**;

## 状态提升说明

现在，两个 `TemperatureInput` 组件都是在自己的 `state` 中独立保存数据。但是，我们想要的是这两个输入能保持同步。当我们更新摄氏输入（Celsius）时，华氏度（Fahrenheit ）这个框应该能显示转换后的的温度数值，反之亦然。

在React中，状态分享是通过将 `state` 数据提升至离需要这些数据的组件最近的父组件来完成的。这就是所谓的**状态提升**。我们会将 `TemperatureInput` 组件自身保存的 `state` 移到 `Calculator` 中。

如果 `Calculator` 组件拥有了提升上来共享的状态数据，那它就会成为**两个温度输入组件的“数据源”**。它会传递给下面温度输入组件一致的数据。由于两个 `TemperatureInput` 温度组件的 `props` 属性都是来源于共同的父组件 `Calculator`，它们的数据也会保持同步。

那还等什么，动起来

TemperatureInput 组件

```js
const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange
}) => {
  handleChange = e => {
    onTemperatureChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>在{scaleNames[scale]}:中输入温度数值</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

现在，无论你编辑哪一个输入框，Calculator 组件中 this.state.temperature 和 this.state.scale 都会更新。向其中一个输入框输入值，另一个输入框总是基于这个值显示计算结果。

让我们梳理下编辑输入框时所发生的一系列事情：

- React在DOM的 `<input>` 上调用被指定为 `onChange` 的函数。在本例中，是 `TemperatureInput` 组件上的`handleChange` 函数。
  
- `TemperatureInput` 组件的 `handleChange` 函数会用新输入值调用 `this.props.onTemperatureChange()` 函数。输入框组件的属性，包括 `onTemperatureChange` 都是由父组件 `Calculator` 提供的。
  
- 当最开始渲染时，`Calculator` 组件的 `handleCelsiusChange` 方法被指定给摄氏温度输入组件 `TemperatureInput` 的 `onTemperatureChange` 方法，同时把 `handleFahrenheitChange` 方法指定给华氏输入组件 `TemperatureInput` 的 `onTemperatureChange` 方法。所以 `Calculator` 组件的两个方法都会在相应输入框被编辑时被调用。

- 在这些方法内部，`Calculator` 组件会使用编辑输入的新值和当前输入框的温度单位来让React调用 `this.setState()` 方法来重渲染自身。

- React调用 `Calculator` 组件的render方法来识别UI界面的样子。基于当前值和激活的温度单位，两个输入框的值会被重新计算。温度转换就是在这里被执行的。

- React使用由 `Calculator` 指定的**新 `props`** 来调用各个 `TemperatureInput` 组件的 `render` 方法，React也会识别出子组件的UI界面。

- React调用 `BoilingVerdict` 组件的 `render` 方法，传递摄氏温度作为它的属性。

- React DOM 会用沸腾裁决更新DOM来匹配渴望的输入值。我们编辑的输入框获取新值，而另一个输入框则用经过转换的温度值进行更新。

一切更新都是经过同样的步骤，因而输入框能保持同步的。

## 总结

在React应用中，对应任何可变数据理应只有一个单一“数据源”。通常，状态都是首先添加在需要渲染数据的组件中。然后，如果另一个组件也需要这些数据，你可以将数据提升至离它们最近的共同祖先中。你应该依赖**自上而下的数据流**，而不是尝试在不同组件中同步状态。

状态提升要写更多的“炉墙代码”，比起双向绑定方式，但带来的好处是，你也可以花更少的工作量找到和隔离bug。因为任何生活在某些组件中的状态数据，也只有该组件它自己能够操作这些数据，发生bug的表面积就被大大地减小了。此外，你也可以使用自定义逻辑来**拒绝（reject）或转换（transform）**用户的输入。

如果某些数据可以由 `props` 或者 `state` 推导出来，那么它很有可能不应该在 `state` 中出现。举个例子，我们没有同时保存 `celsiusValue` 和 `fahrenheitValue`，而只是保存最新编辑的 `temperature` 和它的 `scale` 值。另一个输入框中的值总是可以在 `render()` 函数中由这些保存的数据计算出来。**这样我们在不损失任何用户输入精度的情况下，可以对另一字段清除或应用四舍五入**。

当你在开发UI界面遇到问题时，你可以使用 **React 开发者工具来检查 `props` 属性**，并且可以点击查看组件树，直到你找到负责目前状态更新的组件。这能让你到追踪到产生 bug 的源头。

![状态提升总结](./assets/react-devtools-state.gif)