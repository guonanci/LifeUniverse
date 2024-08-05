24. declare，declare global是什么？

declare 用来定义全局变量、全局函数、全局命名空间、js modules、class等。

declare global 为全局对象 window 增加新的属性。

declare global {
   interface Window {
      csrf: string;
   }
}

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
