https://github.com/alibaba/hooks/blob/master/packages/use-request/index.zh-CN.md#%E8%BD%AE%E8%AF%A2


useRequest 是一个强大的异步数据管理的 Hooks，React 项目中的网络请求场景使用 useRequest 就够了。

useRequest 通过插件式组织代码，核心代码极其简单，并且可以很方便的扩展出更高级的功能。目前已有能力包括：
- 自动请求，手动请求
- 轮询
- 防抖
- 节流
- 屏幕聚焦重新请求
- 错误重试
- loading delay
- SWR(stale-while-revalidate)
- 缓存

第一个参数是一个异步函数，组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的loading，data，error等状态
```js
const { data, error, loading } = useRequest(getUserName)
```

手动触发，如果设置了options.manual = true，则useRequest不会默认执行，需要通过run来触发执行
```js
const { loading, run,runAsync } = useRequest(changeUserName, {
  manual: true
})

// run是一个普通的同步函数，我们会自动捕获异常，可以通过options.onError来处理异常时的行为；runAsync是一个返回Promise的异步函数，需要自己捕获异常

// onError，onSuccess
runAsync().then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error)
})

import { message } from 'antd'
import React, {useState} from 'react'
import { useRequest } from 'ahooks'
function editUsername(username:string):Promise<void>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()>0.5){
        resolve()
      }else{
        reject(new Error('Failed to modify username'))
      }
    },1000)
  })
}
export default ()=>{
  const [ state, setState ] = useState(')
  const { loading, run } = useRequest(editUsername,{
    manual:true,
    onSuccess:(result,params)=>{
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError:error=>{
      message.error(error.message)
    }
  })
  reutrn (
    <div>
      <input
        onChange={(e)=>setState(e.target.value)}
        value={state}
        placeholder='Please enter username'
        style={{width:240,marginRight:16}}
      />
      <button disabled={loading} type='button' onClick={()=>run(state)}>
        {loading?'Loading':'Edit'}
      </button>
    </div>
  )
}
```
