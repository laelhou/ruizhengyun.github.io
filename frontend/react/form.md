# 表单

HTML表单元素与React中的其他DOM元素有所不同,因为表单元素生来就保留一些内部状态。例如，下面这个表单只接受一个唯一的name。

```html
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

当用户提交表单时，HTML的默认行为会使这个表单跳转到一个新页面。在React中亦是如此。但大多数情况下，我们都会构造一个处理提交表单并可访问用户输入表单数据的函数。实现这一点的标准方法是使用一种称为“受控组件”的技术。

## 受控组件

在HTML当中，像 `<input>,<textarea>, 和 <select>` 这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 `setState()` 方法进行更新。

我们通过使react变成一种单一数据源的状态来结合二者。React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件”。

例如，我们想要使上个例子中在提交表单时输出name,我们可以写成“受控组件”的形式:

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value: value
    })
  }

  handleSubmit = e => {
    alert('提交了名字: ' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange}
            placeholder="请输入名字"
            style={{
              border: '1px solid #ddd',
              resize: 'none',
              width: '100%',
              marginTop: 12
            }}
          />
        </label>
        <p style={{ textAlign: 'center', marginTop: 24 }}>
          <input type="submit" value="提交" />
        </p>
      </form>
    );
  }
}
```

由于 `value` 属性是在我们的表单元素上设置的，因此显示的值将始终为 React数据源上 `this.state.value` 的值。由于每次按键都会触发 `handleChange` 来更新当前React的 `state`，所展示的值也会随着不同用户的输入而更新。

使用”受控组件”，每个状态的改变都有一个与之相关的处理函数。这样就可以直接修改或验证用户输入。例如，我们如果想限制输入全部是**大写字母**，我们可以将 `handleChange` 写为如下：

```js
handleChange = e => {
  // const value = e.target.value;
  const value = e.target.value.toUpperCase();
  this.setState({
    value: value
  })
}
```

## textarea 标签

在HTML当中，`<textarea>` 元素通过子节点来定义它的文本内容

```html
<textarea>
  你好，这是文本区域中的一些文本
</textarea>
```

在React中，`<textarea>` 会用 `value` 属性来代替。这样的话，表单中的 `<textarea>` 非常类似于使用单行输入的表单：

```js
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请写一篇关于你最喜欢的DOM元素的文章'
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    alert('提交了一篇文章: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <textarea rows={3} value={this.state.value} onChange={this.handleChange}
            style={{
              border: '1px solid #ddd',
              resize: 'none',
              width: '100%',
              marginTop: 12
            }}
          />
        </label>
        <p style={{ textAlign: 'center', marginTop: 24 }}>
          <input type="submit" value="提交" />
        </p>
      </form>
    );
  }
}
```

注意 `this.state.value` 是在构造函数中初始化，这样文本区域就能获取到其中的文本。

## select 标签

在HTML当中，`<select>`会创建一个下拉列表。例如这个HTML就创建了一个下拉列表的原型。

```html
<select>
  <option value="grape">葡萄</option>
  <option value="orange">橙子</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
```

请注意，**椰子**选项最初由于 `selected` 属性是被选中的。在React中，并不使用之前的 `selected` 属性，而在根**select 标签上**用 `value` 属性来表示选中项。这在受控组件中更为方便，因为你只需要在一个地方来更新组件。例如：

```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    alert('你最喜欢: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你最喜欢的:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grape">葡萄</option>
            <option value="orange">橙子</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <p style={{ textAlign: 'center', marginTop: 24 }}>
          <input type="submit" value="提交" />
        </p>
      </form>
    );
  }
}
```

总之，`<input type="text">, <textarea>, 和 <select>` 都十分类似 - 他们都通过传入一个 **`value` 属性** 来实现对组件的控制。

## file input 标签

在HTML当中，`<input type="file">` 允许用户从他们的存储设备中选择一个或多个文件以提交表单的方式上传到服务器上, 或者通过 Javascript 的 File API 对文件进行操作。

```js
<input type="file" />
```

由于该标签的 value 属性是只读的， 所以它是 React 中的一个非受控组件。我们会把它和其他非受控组件一起在[后面的章节](/advanced/uncontrolled_components.html)进行详细的介绍。

## 多个输入的解决方法

当你有处理多个受控的input元素时，你可以通过给每个元素添加一个name属性，来让处理函数根据 event.target.name的值来选择做什么。

```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const types = {
      'checkbox': target.checked,
      'inputNumber': target.value,
      'input': target.value
    }
    const value = types[target.type];
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          要走了:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          客人数量:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

注意我们如何使用ES6当中的计算属性名语法来更新与给定输入名称相对应的状态键：

```js
this.setState({
  [name]: value
});
```

相当于如下ES5语法


```js
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

同样由于 `setState()` **自动将部分状态合并到当前状态**，因此我们只需要使用发生变化的部分调用它。

## 受控组件的替代方法

有时使用受控组件可能很繁琐，因为您要为数据可能发生变化的每一种方式都编写一个事件处理程序，并通过一个组件来管理全部的状态。当您将预先存在的代码库转换为React或将React应用程序与非React库集成时，这可能变得特别烦人。在以上情况下，你或许应该看看非受控组件，这是一种表单的替代技术。
