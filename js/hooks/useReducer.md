*某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state* 等。并且，使用 useReducer 还能给那些，会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。


https://cloud.tencent.com/developer/article/2136894


useReducer()，Action 钩子。*useReducer() 提供了状态管理，其基本原理是通过用户在页面中发起action, 从而通过reducer方法来改变state, 从而实现页面和状态的通信，使用起来很像redux*
