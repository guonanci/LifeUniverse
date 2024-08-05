# Prop 定义尽量详细。
prop 的定义应该尽量详细，至少需要指定其类型。
复制代码// bad
props: ['status']

// good
props: {
  status: String
}

// better
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return ['syncing','synced','version-conflict','error'].indexOf(value) !== -1
    }
  }
}


作者：lzg9527
链接：https://juejin.cn/post/6846687599281569800
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# v-for 遍历必须添加 key
在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。
复制代码<!-- bad -->
<ul>
  <li v-for="todo in todos">{{ todo.text }}</li>
</ul>

<!-- good -->
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>

# v-if 和 v-for 不要用在同一个元素上。
v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当需要渲染很小一部分的时候。
<!-- bad -->
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">{{ user.name }}</li>
</ul>

<!-- good -->
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">{{ user.name }}</li>
</ul>


作者：lzg9527
链接：https://juejin.cn/post/6846687599281569800
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

