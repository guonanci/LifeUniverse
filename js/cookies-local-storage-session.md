*相同点是，都存储在浏览器本地。而区别的话，三者有数据存储位置、生命周期、存储大小、写入方式、数据共享、发送请求时是否携带、应用场景这些方面的区别，具体如下*：

*1.cookie由服务器写入，sessionStorage以及localStorage是前端写入。2.cookie的生命周期由服务器端写入时设置好，localStorage是写入后就一直存在，除非手动清除，sessionStorage是页面关闭时自动清除；3.cookie存储空间大小约4kb，sessionStorage及localStorage比较大约5M*。

*4.三者的数据共享都遵循同源原则，sessionStorage还限制必须是同一个页面。5.前端给后端发请求时，自动携带cookie, 不携带sessionStorage和localStorage。6.cookie一般存储登录验证信息或token;localStorage常用于存储不易变动的数据，减轻服务器压力;sessionStorage可用来监测用户是否为刷新进入页面，如音乐播放器恢复进度条功能*。


https://www.30secondsofcode.org/blog/s/cookies-local-storage-session

# cookies

store sml amounts of data that has to be sent back to the server with subsequent requests and their expiration can be set
from either server or client. primarily used for server-side rendering

- capacity:4KB
- Accessible from: any window
- Expiration: Manually set
- Storage location: Browser and server
- Sent with requests: yes
- Blockable by users:yes
- Editable by users:yes

# local storage
## clear
清除机制问题。

stores a larger amount of data on the client's computer in a k-v pair format and has no expiration date. is never
transferred to the server and is accessible via JS and HTML5.

- 10MB
- Any window
- Never
- Browser only
- no
- yes
- yes

# session

a larger amount ... for the curSession, expiring the data on tab close. is never transferred ... accessible client-side
from the some tab.

- 5MB
- some tab
- on tab close
- Browser only
- no
- yes
- yes


https://www.nowcoder.com/exam/interview/detail?questionClassifyId=0&questionId=2412474&questionJobId=156&type=1

