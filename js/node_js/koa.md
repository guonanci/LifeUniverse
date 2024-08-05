// https://segmentfault.com/a/1190000013981513
// koa被认为是第二代node web framework，它最大的特点就是独特的中间件流程控制，是一个典型的洋葱模型。koa和koa2中间件的思路是一样的，但是实现方式有所区别，koa2在node7.6之后更是可以直接用
// async / await来替代generator使用中间件，本文以最后一种情况举例。
// Registry Manager, Status Code Redirect, Error Handler, Cache Middleware, Session Middleware, Route Middleware, Pylons App

// https://zhuanlan.zhihu.com/p/35040744

koa是异步compose
