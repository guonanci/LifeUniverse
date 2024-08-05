obj 内的 v 如果是 random（）类似的函数生成的

那么两个 obj 很有可能用 isEqual 会得到 FALSE(除非把 obj 定义在最外层的函数组件顶部上方)

JSON.st 比 isEqual 要靠谱些。 尽管 isEqual 是深比较。但是前者 true 时后者 FALSE 时怎么解释呢
