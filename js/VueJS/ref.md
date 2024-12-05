this.$refs介绍

this.$refs是一个对象，持有当前组件中注册过ref特性的所有DOM元素和子组件实例。

注意：$refs只有在组件渲染完成后才填充，在初始渲染的时候，不能访问它们，并且它是非响应式的，因此不能用它在模板中做数据绑定。

当ref和v-for一起使用的时候，你得到的ref将会是一个包含了对应的数据源的这些子组件的数组。


————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/qq_26780317/article/details/117930115



兄弟组件间通信方式：
https://blog.csdn.net/NineWaited/article/details/126334211


# ref&reactive

FormState
