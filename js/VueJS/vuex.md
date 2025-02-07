1）*vuex中的store本质就是一个没有template模板的隐藏式的vue组件*
2）vuex是利用vue的mixin混入机制，在beforeCreate钩子前混入vuexInit方法
3）vuexInit方法实现将vuex store注册到当前组件的$store属性上
4）vuex的state作为一个隐藏的vue组件的data，定义在state上面的变量，相当于这个vue实例的data属性，凡是定义在data上的数据都是响应式的
5）当页面中使用了vuex state中的数据，就是依赖收集的过程，当vuex中state中的数据发生变化，就通过调用对应属性的dep对象的notify方法，去修改视图变化

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

<https://juejin.cn/post/7021019423310331941>

//准备actions---用于响应组件中的动作
const actions={
}
//准备mutations---用于操作数据（state）
const mutations={
}
//准备state---相当于data，用于存储数据
const state={

}

作者：浪漫主义码农
链接：<https://juejin.cn/post/7021019423310331941>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 说一说Vuex是什么，每个属性是干嘛的，如何使用 ？

*Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则，保证状态以一种可预测的方式发生变化*。

简单点来说（说人话），就是实现任意组件中通信，并可以检测数据的变化。

*Vuex是集中于MVC模式中的Model层，规定所有的数据操作必须通过 action - mutation - state 的流程来进行，再结合Vue的数据视图v-moder等双向绑定特性来实现页面的展示更新*。

简述主要方法详情：

Vue Components：Vue组件。展示页面，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
dispatch：操作行为触发方法。是唯一能执行action的方法。
actions：操作行为处理模块。处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
mutations：状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。
state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。

总的一句话简述就是：
Vue组件接收交互行为，调用dispatch方法触发action相关处理，若页面状态需要改变，则调用commit方法提交mutation修改state，通过getters获取到state新值，响应数据或状态给Vue 组件，界面随之更新。

解题思路
得分点
state、mutations、getters、actions、module、store.commit、store.dispatch

标准回答
*Vuex是集中管理项目公共数据的。Vuex 有state、mutations 、getters、actions、module属性*。 *state 属性用来存储公共管理的数据。 mutations 属性定义改变state中数据的方法*， 注意：*不要在mutation中的方法中写异步方法ajax，那样数据就不可跟踪了* 。

*getters 属性可以认为是定义 store 的计算属性*。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。 action属性类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 moudle属性是将store分割成模块。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块，从上至下进行同样方式的分割 使用方法： state ：直接以对象方式添加属性 mutations ：通过`store.commit`调用 action：通过 `store.dispatch` 方法触发 getters：直接通过store.getters.调用 加分回答 可以使用mapState、mapMutations、mapAction、mapGetters一次性获取每个属性下对应的多个方法。 VueX在大型项目中比较常用，非关系组件传递数据比较方便。

# .缺点

刷新浏览器，vuex中的state会重新变为初始状态

解决办法

1. 插件vuex-persistedstate（我个人没用过）

2. 在刷新前将vuex中的数据直接保存到浏览器缓存中，页面刷新时再次请求远程数据，使之动态更新vuex数据。

具体步骤：监听页面刷新事件，在页面刷新之前，将vuex里的数据存到sessionStorage里，然后在页面刷新后，调取获取数据的接口，在接口还没返回数据时，先用sessionStorage里的数据，等接口返回数据后，就使用接口返回的，顺便更新vuex里的数据

作者：lixing123456
链接：<https://juejin.cn/post/7109839988027555877>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
