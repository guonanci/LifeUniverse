https://www.runoob.com/jsp/jsp-syntax.html

JSP 支持九个自动定义的变量，江湖人称隐含对象，它们是在 JSP 页面中自动可用的对象，无需额外的声明或初始化。

这九个隐含对象的简介见下表：

对象	描述
request	HttpServletRequest类的实例，代表 HTTP 请求的对象，包含客户端发送到服务器的信息，如表单数据、URL参数等。
response	HttpServletResponse类的实例，代表 HTTP 响应的对象，用于向客户端发送数据和响应。
out	JspWriter类的实例，用于向客户端输出文本内容的对象，通常用于生成HTML。
session	HttpSession类的实例，代表用户会话的对象，可用于存储和检索用户特定的数据，跨多个页面。
application	ServletContext类的实例，代表 Web 应用程序的上下文，可以用于存储和检索全局应用程序数据。
config	ServletConfig类的实例，包含有关当前 JSP 页面的配置信息，例如初始化参数。
pageContext	PageContext类的实例，提供对JSP页面所有对象以及命名空间的访问
page	类似于 Java 类中的 this 关键字，代表当前 JSP 页面的实例，可以用于调用页面的方法。
exception	exception 类的对象，代表发生错误的 JSP 页面中对应的异常对象，用于处理 JSP 页面中的异常情况，可用于捕获和处理页面中发生的异常。


https://zh.wikipedia.org/wiki/JSP

