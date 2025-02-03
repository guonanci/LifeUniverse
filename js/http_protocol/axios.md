<https://juejin.cn/post/7173670666326474783>?

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

上面代码中对method为post的请求方法进行封装，用于解决*原生的axios API中在处理报错时需要用try-catch包裹*。但这种封装有一个缺点：整个post方法只暴露了URL，data，params三个参数，通常这三个参数可以满足大多数简单请求。但是如果我们遇到一个特殊的post接口，它的*响应时间较慢，需设置较长的超时时间*，那上面的post方法就立马嗝屁。`axios.post('/submit',form,{timeout:15000})`*

类似的特殊场景还有很多：

- 需要上传表单，表单中不仅含有数据还有文件，只能设置*headers['Content-Type']为‘multipart/form-data’*，如果要显示上传文件的进度条，则还要设置*onUploadProgress*属性

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
链接：<https://juejin.cn/post/7173670666326474783>
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
  // 请求报错时，response为null
  response:AxiosResponse<T>|null
}
```

# 拦截器的使用

在使用 `axios` 时，拦截器（Interceptors）是一个很强大的功能，可用来处理请求或响应前的统一处理，比如修改请求头、添加认证 token、统一处理错误等。

### 1. **请求拦截器**（Request Interceptor）

请求拦截器允许你在请求发送到服务器之前，对请求做些修改或处理。比如*在每个请求头中加入认证 token，或者修改请求的 URL*。

### 2. **响应拦截器**（Response Interceptor）

响应拦截器允许你在接收到响应数据后进行一些操作，比如*统一处理错误信息、修改响应数据*等。

### 拦截器的基本使用

#### 1. 安装 `axios`

如果你还没有安装 `axios`，可以通过 npm 安装：

```bash
npm install axios
```

#### 2. 配置请求和响应拦截器

下面是 `axios` 拦截器的实现示例：

```javascript
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'https://api.example.com',  // 设置请求基础路径
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求前做些什么
    // 例如，添加认证 token 到请求头
    const token = localStorage.getItem('token');  // 假设 token 存储在 localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('请求发送前:', config);
    return config; // 必须返回 config 否则请求不会发送
  },
  (error) => {
    // 请求错误时做些什么
    console.error('请求错误:', error);
    return Promise.reject(error); // 返回错误以便后续的错误处理
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    console.log('响应数据:', response);
    return response.data; // 直接返回响应数据，方便后续处理
  },
  (error) => {
    // 对响应错误做些什么
    console.error('响应错误:', error);

    // 统一处理网络错误、权限错误等
    if (error.response) {
      // 服务器返回的错误
      switch (error.response.status) {
        case 401:
          // 401 未授权，可能需要重新登录
          alert('授权失败，请重新登录');
          break;
        case 500:
          // 服务器内部错误
          alert('服务器出错，请稍后再试');
          break;
        default:
          alert(`请求错误：${error.response.status}`);
          break;
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      alert('请求超时，请检查网络');
    } else {
      // 其他错误
      alert('请求失败，请稍后再试');
    }

    return Promise.reject(error); // 继续返回错误，后续可以用 catch 捕获
  }
);

// 使用 axios 实例进行请求
instance.get('/user/profile')
  .then((data) => {
    console.log('用户资料:', data);
  })
  .catch((error) => {
    console.error('请求失败:', error);
  });
```

### 3. **详细解释**

#### 请求拦截器

- **请求拦截器** (`instance.interceptors.request.use`) 会在请求被发送之前进行处理。常见的用途包括：
  - 设置认证信息（如 token）。
  - 配置请求头。
  - 修改请求数据（例如，添加一些默认的查询参数）。

#### 响应拦截器

- **响应拦截器** (`instance.interceptors.response.use`) 会在收到响应后进行处理。常见用途包括：
  - 根据服务器返回的状态码处理错误。
  - 对响应数据进行统一格式化（例如，提取出我们需要的字段）。

### 4. **拦截器的错误处理**

拦截器中的错误处理必须使用 `Promise.reject(error)` 来将错误传递下去，这样可以确保错误被后续的 `catch` 语句捕获。

#### 示例：Token 失效时刷新 Token

有时我们需要在请求失败时，处理 token 失效的场景，下面是一个简单的例子：

```javascript
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // 如果是401错误，表示 token 可能失效
    if (error.response && error.response.status === 401) {
      try {
        // 刷新 token 或者重新登录
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await axios.post('/auth/refresh-token', { refreshToken });
        const newToken = res.data.token;

        // 更新本地 token
        localStorage.setItem('token', newToken);

        // 将失败的请求重新发送
        error.config.headers['Authorization'] = `Bearer ${newToken}`;
        return axios(error.config);  // 使用相同的配置重新发起请求
      } catch (err) {
        console.error('刷新 token 失败', err);
        // 如果刷新 token 失败，跳转到登录页
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);
```

### 5. **移除拦截器**

有时你可能希望在某些情况下移除拦截器，`axios` 提供了 `eject` 方法来移除拦截器：

```javascript
// 请求拦截器的引用
const requestInterceptor = instance.interceptors.request.use((config) => {
  // 请求前的处理
  return config;
});

// 响应拦截器的引用
const responseInterceptor = instance.interceptors.response.use((response) => {
  // 响应后的处理
  return response;
});

// 移除请求拦截器
instance.interceptors.request.eject(requestInterceptor);

// 移除响应拦截器
instance.interceptors.response.eject(responseInterceptor);
```

### 总结

通过 `axios` 拦截器，我们可以在*请求发送前或响应返回后，统一处理一些逻辑*，比如*添加认证信息、处理错误、格式化响应数据*等。*拦截器是提升开发效率和增强代码一致性的强大工具*。

# 拦截器的原理-源码
