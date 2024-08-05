// https://zhuanlan.zhihu.com/p/25585910
const obj = observable({
  a: 1,
  b: 2
})

autoRun(() => {
  console.log(obj.a)
})

obj.b = 3 // 什么都没有发生
obj.a = 2 // observe 函数的回调触发了，控制台输出：2
