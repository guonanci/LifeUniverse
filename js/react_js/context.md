什么是 prop drilling，如何避免？
主题: React
难度: ⭐⭐⭐
在构建 React 应用程序时，在多层嵌套组件来使用另一个嵌套组件提供的数据。最简单的方法是将一个 prop 从每个组件一层层的传递下去，从源组件传递到深层嵌套组件，这叫做prop drilling。

prop drilling的主要缺点是原本不需要数据的组件变得不必要地复杂，并且难以维护。

为了避免prop drilling，一种常用的方法是使用React Context。通过定义提供数据的Provider组件，并允许嵌套的组件通过Consumer组件或useContext Hook 使用上下文数据。

