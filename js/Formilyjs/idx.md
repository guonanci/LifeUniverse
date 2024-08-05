有一些场景，我们的表单页面是非常动态化的，某一些字段是否存在，前端完全感知不到，是由后端建表，右不同职业属性的用户手工录入的字段信息，比如电商购物车的表单页面，交易下单页面，系统需要千人千面的能力，这样就需要前端拥有动态化渲染表单的能力

https://zhuanlan.zhihu.com/p/62927004

在大量搜索并研究各种表单解决方案之后，本人总算找到一个能从根本上解决性能问题的表单解决方案，就是 final-form，这个组件是原来 redux-form 的作者重新开发的新型表单解决方案，该方案的思路非常明确，就是每个字段自己管理状态，自己做渲染更新，分布式状态管理，完全于 redux-form 的单向数据流理念背道而驰。

但是，收益一下子就上来了，表单的整体渲染次数大大降低，react 的 CPU 渲染压力也大大降低。所以 final-form 就像他的名字一样，终结了表单的性能问题。同样，对于代码可维护性而言，final-form 也有自己的亮点，就是它将表单字段的联动逻辑做了抽离，在一个独立的 calculate 里处理，

总结一下 final-form 的问题： 1.联动不能一处编写，单纯 calculator 不能处理状态的联动，比如字段 A 的值变化会控制字段 B 的 disabled 状态，必须结合 jsx 层的 Field subscription 才能做状态联动，用户需要不停的切换写法，开发体验较差，比如：https://codesandbox.io/s/jj94wojl95
嵌套数据结构需要手动拼接字段路径，比如 https://codesandbox.io/s/8z5jm6x80
组件内外通讯机制过于 Hack，比如在外部调用 Submit 函数 https://codesandbox.io/s/1y7noyrlmq
组件外部不能精确控制表单内部的某个字段的状态更新，除非使用全局 rerender 的单向数据流机制。
不支持动态化表单渲染，还是需要在上层建立一个动态渲染引擎

主要有三种开发模式：

- JSON Schema 开发表单
  - 该方案主要用于后端动态渲染表单

- JSX Schema 开发表单
  - 该方案主要用于后端动态渲染表单的过渡形态，Schema 在前端维护，方便未来迁移后端动态渲染模式。是一种对前端更友好的前端维护 Scheme 的开发模式。主要是使用了 SchemaForm 组件和 SchemaMarkupField 组件（是一个描述型标签，不是实际 UI 组件，只能在 ShcemaForm 内部使用，这个标签属性与 JSON Schema 中的 Field 对象是等价的）**注意：SchemaForm 的子节点不能随意插入任何 div 之类的实际 UI 节点，否则他会被推到 Form 底部去渲染**
- 纯 JSX（源码）开发表单
  - 该方案主要用于纯前端开发方式，或者在前两个方案的自定义组件内部的开发以复合形态来开发。纯源码开发，没有任何 Schema 束缚，它更简单，更直接，对于一些简单页面，或者 Schema 开发中的自定义组建中，使用纯 JSX 开发模式会更高效。Form 组件内部可以随便插入 UI 元素了。

@formily/antd 主要是作为 Form 核心库，@formily/antd-components 主要作为 Form 的 antd 扩展组件库，我们可以不使用@formily/antd-components，他只是作为扩展包。

> 如果你是用的是 Fusion Next
> `yarn add next @formily/next @formily/next-components`

```js
import React from "react"
import ReactDOM from "react-dom"
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset,
} from "@formily/antd" // @formily/next. SchemaForm用于Schema渲染表单，
// SchemaMarkupField用于渲染Schema节点
import { Input } from "@formily/antd-components"
```

因为 final-form 已经解决了我们的大部分问题，所以可以在核心理念层借鉴 final-form，比如字段状态分布式管理，基于 pub/sub 的方式做字段间通讯，但是对于 final-form 所存在的问题，我们可以大致梳理出几个抓手：

副作用独立管理，主要是对表单字段状态管理逻辑，独立带来的收益是 View 层的可维护性提升，同时统一收敛到一处维护，对用户而言更加友好
嵌套数据结构路径自动拼接
更加优雅的组件内外通讯方式，外部也能精确控制字段的更新
基于标准 JSON Schema 数据结构做扩展，构建动态表单渲染引擎
最终，我们可以推导出解决方案的雏形：JSON Schema + 字段分布式管理 + 面向复杂通用组件的通讯管理方案

JSON Schema 描述表单数据结构
为什么采用 JSON Schema？我们主要有几方面的考虑：

标准化协议，不管是对前端，还是对后端都是易于理解的通用协议
JSON Schema 更侧重于数据的描述，而非 UI 的描述，因为表单，它就是数据的输入，我们希望，用户关心的,更多是数据，而非 UI
JSON Schema 可以用在各种数据驱动场景，比如可视化搭建引擎中的组件配置器等
什么是 JSchema？

JSchema 相当于是在 jsx 中的 json schema 描述，因为考虑到纯 json schema 形式对机器友好，但对人类不够友好，所以，为了方便用户更高效的描述表单的结构，我们在 jsx 层构建了一个 JSchema 的描述语言，其实很简单：

<Field type="Object" name="aaa">
   <Field type="string" name="bbb"/>
   <Field type="array" name="ccc">
      <Field type="object">
          <Field type="string" name="ddd"/>
       </Field>
   </Field>
</Field>
​
//========转换后===========
{
   "type":"object",
    "properties":{
        "aaa":{
            "type":"object",
            "properties":{
                "bbb":{
                    "type":"string"
                },
                "ccc":{
                    "type":"array",
                    "items":{
                        "type":"object",
                        "properties":{
                            "ddd":{
                                "type":"string"
                            }
                        }
                    }
                }
            }
        }
    }

}
