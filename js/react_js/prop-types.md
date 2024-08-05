```js
如何在 ReactJS 的 Props上应用验证？
主题: React
难度: ⭐⭐⭐⭐
当应用程序在开发模式下运行时，React 将自动检查咱们在组件上设置的所有 props，以确保它们具有正确的数据类型。对于不正确的类型，开发模式下会在控制台中生成警告消息，而在生产模式中由于性能影响而禁用它。强制的 props 用 isRequired定义的。

下面是一组预定义的 prop 类型:

React.PropTypes.string
React.PropTypes.number
React.PropTypes.func
React.PropTypes.node
React.PropTypes.bool
例如，咱们为用户组件定义了如下的propTypes

import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h2>Age, {this.props.age}
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

```
