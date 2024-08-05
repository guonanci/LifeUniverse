super.md
```js
问题 8：在构造函数调用 super 并将 props 作为参数传入的作用是啥？
主题: React
难度: ⭐⭐
在调用 super() 方法之前，子类构造函数无法使用this引用，ES6 子类也是如此。将 props 参数传递给 super() 调用的主要原因是在子构造函数中能够通过this.props来获取传入的 props。

传递 props

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);  // { name: 'sudheer',age: 30 }
  }
}
没传递 props

class MyComponent extends React.Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
    // 但是 Props 参数仍然可用
    console.log(props); // Prints { name: 'sudheer',age: 30 }
  }

  render() {
    // 构造函数外部不受影响
    console.log(this.props) // { name: 'sudheer',age: 30 }
  }
}
上面示例揭示了一点。props 的行为只有在构造函数中是不同的，在构造函数之外也是一样的。


1.在构造函数没有将 props 传递给 super，它应该包括以下行

constructor(props) {
  super(props);
  // ...
}
2.事件监听器(通过addEventListener()分配时)的作用域不正确，因为 ES6 不提供自动绑定。因此，开发人员可以在构造函数中重新分配clickHandler来包含正确的绑定:

constructor(props) {
  super(props);
  this.clickHandler = this.clickHandler.bind(this);
  // ...
}


```
