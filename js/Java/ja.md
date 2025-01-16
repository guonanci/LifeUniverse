要注意 exception 的种类别写错类型了，要不然进不去 catch

getInteger().equals()

int && integer
when you evaluate a expression, select the result and just copy
在 Spring Cloud Netflix 栈中，各个微服务都是以 http 接口的形式暴露自身服务的，因此在调用远程服务时，就必须使用 http 客户端。我们可以使用 JDK 原生的
URLConnection、Apache 的 Http Client，Netly 地异步 Http Client，Spring 的 RestTemplate。但是用起来最方便、最优雅的还是要属 Feign 了。

Feign 简介
FEign 是一种声明式、模板化的 HTTP 客户端。在 Spring Cloud 中使用 Feign，我们可以做到使用 HTTP 请求远程服务时，与调用本地方法一样的编码体验，开发者
完全感知不到这是远程方法，更感知不到这是个 HTTP 请求。

@Autowired
private AdvertGroupRemoteService service // 远程服务
public AdvertGroupVO foo(Integer groupId) {
  return service.findByGroupId(groupId); // 通过 HTTP 调用远程服务
}

Feign 的定义
为了让

# 类加载

插件

https://github.com/Snailclimb/JavaGuide?utm_source=gold_browser_extension
