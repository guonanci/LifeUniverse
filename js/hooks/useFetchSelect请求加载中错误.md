```js
// ant-design-vue
import { onMounted,reactive,ref } from 'vue'
// 定义下拉框接收的数据格式
export interface SelectOption{
  value:string
  label:string
  disabled?:boolean
  key?:string
}
// 定义入参格式
interface FetchSelectProps {
  apiFn:()=>Promise<any>[]
}
export function useFetchSelect(props:FetchSelectProps){
  const { apiFn,  } = props
  const options=ref<SelectOption>([])
  const loading=ref(false)

  const fetchData=()=>{
    loading.value=true
    options.value=[]
    return apiFn().then(data=>{
      loading.value=false
      options.value=data
      return data
    },er=>{
      // 未知错误，可能是代码抛出的错误，或者网络错误
      loading.value=false
      options.value=[
        {
          value:'-1',
          label:er.message,
          disabled:true
        }
      ]
      return Promise.reject(er)
    })
  }
  onMounted(()=>{
    fetchData()
  })
  return reactive({
    options,
    loading,
  })
}


```
组件中调用：
```html
<script setup name='demo' lang='ts'>
  import { useFetchSelect } from './hook'
  function getRemoteData(){
    return new Promise<any[]>((resolve,reject)=>{
      setTimeout(()=>{
        if(Math.random()>0.5){
          resolve([{key:1,name:'apple',value:1}])
        }else{
          reject(new Error('error'))
        }
      },2000)
    })
  }
  const selectBind=useFetchSelect({
    apiFn:getRemoteData,
  })
</script>
<template>
  <div>
    <!-- 将hook返回的接口，通过v-bind绑定给组件 -->
    <a-select v-bind='selectBind' />
  </div>
</template>
```
