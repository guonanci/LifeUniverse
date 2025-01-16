# useDebounceFn
防抖
```js
const [search, setSearch] = useState < string > ''
const debouncedSearch = useDebounce(search, { wait: 300 })

const { run: debounceSetState } = useDebounceFn(
  (newValue: number) => {
    setState({ ...state, scale: clamp(newValue, MIN_SCALE, MAX_SCALE) })
  },
  {
    wait: 200,
  }
)
```

。。。.run

[防抖和节流应用场景区别](https://juejin.cn/post/6844903669389885453)

debounce：在事件被触发 n 秒后再执行回调，如果 n 秒内又被触发，则重新计时
https://juejin.cn/post/6844903888978444296

# searchID

前端检索

后端检索，仅做节流还不够，需要注意请求的先后，可以理解过队列，始终是最后一个生效

如果接口请求较慢，可能同时存在两个正在 pending 状态的请求，谁先返回不是定数
就造成 检索的关键字和结果不对应
前端检索就没这些问题了，因为是同步
不是要你做前端检索，只是和你说明隐患问题
所以可能存在 前一次搜索的请求在后一次搜索的请求返回之后

关键是否要处理这个问题，要做加个 searchID 标记状态即可

处理响应回调时，判断 本次请求 searchID 是否等于最新 searchID；不等，就忽略本次响应；NLQ 语义分析搜索框中是这样做的；
searchID 是前端自己加的；可以解为 请求锁的概念；保证最后一个请求的响应在最后显示；

我这边用的是 防抖；感觉只要用户不停止输入就没必要请求；在咱们项目中的场景 防抖比较好；个人感觉；

https://blog.csdn.net/m0_37508531/article/details/105176126

[lodash 的 debounce、throttle](https://www.jianshu.com/p/bd5f59d42f70)

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5

[JavaScript 专题之跟着 underscore 学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
[JavaScript 专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)

你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 毫秒内又触发了这个事件，那我就以新的事件的时间为准，n 毫秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

window的resize，scroll；mousedown，mousemove，keyup，keydown

从左边滑到右边就触发了 165 次 getUserAction 函数！

因为这个例子很简单，所以浏览器完全反应的过来，可是如果是复杂的回调函数或是 ajax 请求呢？假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现。

为了解决这个问题，一般有两种解决方案：

debounce 防抖
throttle 节流


```js
// 第三版
function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
function debounce(fn, wait) {
  var timeout
  return function() {
    var context = this
    var args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }
}
```
到此为止，我们修复了两个小问题：

this 指向
event 对象
立刻执行
这个时候，代码已经很是完善了，但是为了让这个函数更加完善，我们接下来思考一个新的需求。

这个需求就是：

我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。

想想这个需求也是很有道理的嘛，那我们加个 immediate 参数判断是否是立刻执行。
```js
// 第四版
function debounce(func, wait, immediate) {

    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
```

函数防抖
应用场景：搜索框输入文字后调用对应搜索接口

利用闭包，不管触发频率多高，在停止触发n秒后才会执行，如果重复触发，会清空之前的定时器，重新计时，直到最后一次n秒后执行

```js
/*
 * @param {function} fn - 需要防抖的函数
 * @param {number} time - 多长时间执行一次
 * @param {boolean} flag - 第一次是否执行
 */
function debounce(fn, time, flag) {
  let timer;
  return function(...args) {
    // 在time时间段内重复执行，会清空之前的定时器，然后重新计时
    timer && clearTimeout(timer);
    if (flag && !timer) {
      // flag为true 第一次默认执行
      fn.apply(this, args);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}

function fn(a) {
  console.log("执行:", a);
}
let debounceFn = debounce(fn, 3000, true);
debounceFn(1);
debounceFn(2);
debounceFn(3);

// 先打印：执行: 1
// 3s后打印: 执行: 3
```

# 搜索时发起请求
