```js
在 React 中使用构造函数和 getInitialState 有什么区别？
主题: React
难度: ⭐⭐⭐⭐
构造函数和getInitialState之间的区别就是ES6和ES5本身的区别。在使用ES6类时，应该在构造函数中初始化state，并在使用React.createClass时定义getInitialState方法。

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }
}
等价于：

var MyComponent = React.createClass({
  getInitialState() {
    return { /* initial state */ };
  },
});

```
