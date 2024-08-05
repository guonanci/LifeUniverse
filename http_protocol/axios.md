https://juejin.cn/post/7173670666326474783?

这些看似高级的二次封装，是否会把Axios的调用方式弄的更复杂？优秀的二次封装有以下特点：
1. 能改善原生框架的不足：明确原生框架的缺点，且在二次封装后能彻底杜绝这些缺点，与此同时不会引入新缺点
2. 保持原有的功能：二次封装时，新框架的API可能会更改原生框架的API调用方式，例如传参方式，但我们要保证能通过新API调用原生API上的所有功能。
3. 理解成本低：有原生框架使用经验的开发者在面对二次封装的框架和API时能迅速理解且上手。

# 盘点那些低级的Axios二次封装方式
1. 对特定method封装成新API，却暴露极少的参数
```js
export const post=(url,data,params)=>{
  return new Promise((resolve)=>{
    axios
      .post(url,data,{params})
      .then((result)=>{
        resolve([null,result.data])
      })
      .catch((er)=>{
        resolve([er])
      })
  })
}
```
*上面代码中对method为post的请求方法进行封装，用于解决原生API中在处理报错时需要用try-catch包裹。但这种封装有一个缺点：整个post方法只暴露了URL，data，params三个参数，通常这三个参数可以满足大多数简单请求。但是如果我们遇到一个特殊的post接口，它的响应时间较慢，需要设置较长的超时时间，那上面的post方法就立马嗝屁。`axios.post('/submit',form,{timeout:15000})`*

类似的特殊场景还有很多：
- *需要上传表单，表单中不仅含有数据还有文件，只能设置headers['Content-Type']为‘multipart/form-data’，如果要显示上传文件的进度条，则还要设置onUploadProgress属性*
- *存在需要防止数据竞态的接口，那只能设置cancelToken为signal。可以再通过拦截器interceptors统一处理以避免竟态并发*

2. *多个拦截器下的处理方式*
*如果有两种或以上不同的拦截器，这些拦截器中各被一部分接口使用。那么，我们可以把这些拦截器都挂载到全局唯一的axios实例上，然后通过以下两种方式来让拦截器选择性执行*：


推荐：*在config中新加一个自定义属性以决定拦截器是否执行*
，调用请求时，写法如下所示：
```js
instance.get("/api", {
  //新增自定义参数enableIcp来决定是否执行拦截器
  enableIcp: true,
});

// 在拦截器中，我们这么编写逻辑
// 请求拦截器写法
instance.interceptors.request.use(
  // onFulfilled写法
  (config: RequestConfig) => {
    // 从config取出enableIcp
    const { enableIcp } = config;
    if (enableIcp) {
      //...执行逻辑
    }
    return config;
  },

  // onRejected写法
  (error) => {
    // 从error中取出config配置
    const { config } = error;
    // 从config取出enableIcp
    const { enableIcp } = config;
    if (enableIcp) {
      //...执行逻辑
    }
    return error;
  }
);

// 响应拦截器写法
instance.interceptors.response.use(
  // onFulfilled写法
  (response) => {
    // 从response中取出config配置
    const { config } = response;
    // 从config取出enableIcp
    const { enableIcp } = config;
    if (enableIcp) {
      //...执行逻辑
    }
    return response;
  },

  // onRejected写法
  (error) => {
    // 从error中取出config配置
    const { config } = error;
    // 从config取出enableIcp
    const { enableIcp } = config;
    if (enableIcp) {
      //...执行逻辑
    }
    return error;
  }
);
```
通过以上写法，我们就可以通过config.enableIcp来决定注册的拦截器是否执行。举一反三来说，我们可以通过往config塞自定义属性，同时在编写拦截器时配合，就可以完美的控制单个或多个拦截器的执行与否。


次要推荐：使用axios官方提供的runWhen属性来决定拦截器是否执行，注意该属性只能决定请求拦截器的执行与否，不能决定响应拦截器的执行与否。用法如下所示：
function onGetCall(config) {
  return config.method === "get";
}
axios.interceptors.request.use(
  function (config) {
    config.headers.test = "special get headers";
    return config;
  },
  null,
  // onGetCall的执行结果为false时，表示不执行该拦截器
  { runWhen: onGetCall }
);
复制代码
关于runWhen更多用法可看axios#interceptors




作者：村上小树
链接：https://juejin.cn/post/7173670666326474783
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# axios目前的缺点
1. 不能智能推导params
2. *处理错误需要用try-catch*
3. 不支持路径转换 RESTful风格接口 /api/member/{member_id}

鉴权登录和错误码映射。
`apis[method][url](config)` AxiosConfig,

```ts
{
  // 请求报错时，data为null值
  data: null | T,
  // 请求报错时，err为AxiosError类型的错误实例
  err:AxiosError|null,
  // 当请求报错时，response为null值
  response:AxiosResponse<T>|null
}
```
