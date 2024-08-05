PM2可以根据cpu核数，开启多个进程，充分利用cpu的多核性能
如pm2 start app.js -i 8 该命令可以开启8个进程
主要作用：
1）内建负载均衡（使用Node cluster集群模块）
2）线程守护，keep alive
3）0秒停机重载，维护升级的时候不需要停机
4）停止不稳定的进程（避免无限循环）


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


使用PM2将Node.js的集群变得更加容易 :https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fjaxu%2Fp%2F5193643.html
PM2入门指南:https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fjaxu%2Fp%2F5193643.html
