
# 前端性能优化的服务器方面：

- 尽可能减小 cookie 的大小，并且通过将静态资源分配到其他域名下，来避免对静态资源请求时携带不必要的 cookie；


ruoyi框架更改vue.config.js里面的target后，要清除掉cookie，才能重新登录，请求地址才能对上。不要用chrome，要用edge！
