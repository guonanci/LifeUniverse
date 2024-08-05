vuex.md

1）vuex中的store本质就是一个没有template模板的隐藏式的vue组件
2）vuex是利用vue的mixin混入机制，在beforeCreate钩子前混入vuexInit方法
3）vuexInit方法实现将vuex store注册到当前组件的$store属性上
4）vuex的state作为一个隐藏的vue组件的data，定义在state上面的变量，相当于这个vue实例的data属性，凡是定义在data上的数据都是响应式的
5）当页面中使用了vuex state中的数据，就是依赖收集的过程，当vuex中state中的数据发生变化，就通过调用对应属性的dep对象的notify方法，去修改视图变化


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


说一说Vuex是什么，每个属性是干嘛的，如何使用 ？
解题思路
得分点 state、mutations、getters、actions、module、store.commit、store.dispatch 标准回答 Vuex是集中管理项目公共数据的。Vuex 有state、mutations 、getters、actions、module属性。 state 属性用来存储公共管理的数据。 mutations 属性定义改变state中数据的方法， 注意：不要在mutation中的方法中写异步方法ajax，那样数据就不可跟踪了 。 getters 属性可以认为是定义 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。 action属性类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 moudle属性是将store分割成模块。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块，从上至下进行同样方式的分割 使用方法： state ：直接以对象方式添加属性 mutations ：通过`store.commit`调用 action：通过 `store.dispatch` 方法触发 getters：直接通过store.getters.调用 加分回答 可以使用mapState、mapMutations、mapAction、mapGetters一次性获取每个属性下对应的多个方法。 VueX在大型项目中比较常用，非关系组件传递数据比较方便。
