# Big File download

https://juejin.cn/post/6954868879034155022?utm_source=gold_browser_extension#heading-13

async-pool
Promise.all,Promise.race 异步任务的并发控制
asyncPool 函数 实现大文件的并行下载

大文件上传 Blob.slice() 按指定大小切割，开启多线程分块上传，等所有分块都成功上传后，再通知服务端进行分块合并

服务端支持 Range 请求首部的条件下，实现多线程分块下载的功能（206 请求）

http 范围请求：允许服务器只发送 http 消息的一部分到客户端。传送大媒体文件，文件下载的断点续传
Accept-Ranges 响应首部不为 none，表示该服务器支持范围请求

一个 Range 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回。如果服务器返回范围响应，需要使用 206Partial Content 状态码。
所请求的范围不合法，服务器就会返回 416Range Not Satisfiable，表示客户端错误。服务器允许忽略 Range 首部，从而返回整个文件，状态码 200

## Range 语法

```http
Range: <unit>=<range-start>
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
```

- unit:范围请求所采用的单位，通常是字节 bytes
- <range-start>: 一个整数，表示在特定单位下，范围的起始值
- <range-end> 可选，如果不存在表示此范围一直延伸到文档结束

```
<!-- 单一范围； -->
$ curl http://i.imgur.com/z4.jpg -i -H "Range: bytes=0-1023"
<!-- 多重范围； -->
$ curl http://i.imgur.com/z4.jpg -i -H "Range: bytes=0-50, 100-150"
```

开始=》发送 head 请求，获取文件大小=》计算文件分块数=》使用 asyncPool 执行并发下载=》分块下载完成后，转换为 Unit8Array=>执行合并操作=》利用 BlobURL，执行保存操作=》结束

辅助函数：

- getContentLen

```tsx
// 发送head请求，然后从响应头中读取Content-Length的信息，进而获取当前URL对应文件的内容长度
function getContentLen(url)
```

# download-attr

https://segmentfault.com/a/1190000005863250
我们先看看 download 的使用方法：

<a href="http://somehost/somefile.zip" download="filename.zip">Download file</a>

# document.createElement('a') a.download=fileName a.click()

# blob

if requestCfg set responseType-option's value to 'blob', then there is no need to revoke `.then(res=>res.blob())`

```js
.then((res) => {
      downloadFile(URL.createObjectURL(res.blob()), `${data.taskName}.gz`)
    })
```
