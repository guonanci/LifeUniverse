Curry
只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。。。
function add (x) {
  return function (y) {
    return x + y
  }
}
调用add之后，返回的函数通过闭包的方式记住了add的第一个参数。一次性的调用它实在有些繁琐，我们可以使用一个特殊的Curry帮助函数使者类函数的定义和调用更加容易

高阶函数：参数或返回值位函数的函数

compose

ramda lodash-fp

DRY,loose coupling high cohesion, Principle of least surprise, single responsibility,

side effects: 更改文件系统，往数据库插入记录，发送一个http请求，可变数据，打印/log，获取用户输入，DOM查询，访问系统状态，

var compose = function (f, g) {
  return function (x) {
    return f(g(x))
  }
}


// pointfree

// 态射

