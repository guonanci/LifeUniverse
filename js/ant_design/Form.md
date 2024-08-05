# submit-btn-disabled&loading-prop

submit-btn 只在 loading 时置灰（这个逻辑不是很好理解嘛，为什么非得增加不必要的提示，增加一些 UI 代码和相关逻辑）

我应该养成能用 form 就用 form（Form.Item）的习惯，这样可以少写标红 tipDom 的代码。

表单不存在跨域问题：https://www.jianshu.com/p/0b10a4a0e754

https://www.zhihu.com/question/31592553

因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。所以浏览器认为这是安全的。而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。如果你细心的话你会发现，其实请求已经发送出去了，你只是拿不到响应而已。所以浏览器这个策略的本质是，一个域名的 JS ，在未经允许的情况下，不得读取另一个域名的内容。但浏览器并不阻止你向另一个域名发送请求。

作者：方应杭
链接：https://www.zhihu.com/question/31592553/answer/190789780
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

首先多嘴一句跨域的唯一标准，就是你能不能通过类似请求(eg:$.get)的方式拿到别人的内容。form 一般都是给别人发请求，而不是拿别人的数据。form 一般发完后，不需要别人反馈。或者说别人反馈了你也拿不到。 而 ajax 是一直在等别人的 done or faill 信息。 这就设计到上面拿别人信息了

作者：rambo
链接：https://www.zhihu.com/question/31592553/answer/190900150
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

要不要实时校验。

validate_txt is required

`await formRef.validateFieldsValue()`
