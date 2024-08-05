用 js 写一个倒计时，不局限于性能，效率，展示形式，扩展性，API 设计等等

# 基本实现

基本原理：使用 setTimeout 或者 setInterval 来对一个函数进行递归或者重复调用，然后对 DOM 节点做对应的 render 处理，并对时间做倒计时的格式化处理。

```js
// 使用setInterval 实现一个5的倒计时
(function () {
    var time = 5;
    var p = document.getElementsById('time');
    var set = setInterval(function () {
        time--;
        p.innnerHTML = '';
        clearInterval(set);
    })
})();
```

上面的写法定义仅仅考虑实现功能，完全面向过程，操作都放到了匿名函数中处理，而且没有对时间做格式化处理，但是原理简单：使用 setInterval 不断地改变 DOM 节点，然后对 time 变量做--操作

稍微好一点的写法：

```js
window.onload = function () {
    showTime();
    function addZero(i) {
        i < 10 && i = '0' + i;
        return i;
    }
    function showTime() {
        var nowTime = new Date();
        var endTime = new Date('2016/12/14,11:11:11');
        var leftTime = paraseInt((endTime.getTime() - nowTime.getTime()) / 1000);
        var d = parseInt(lefTime / (24 * 60 * 60));
        var h = parseInt(lefTime / (60 * 60) % 24);
        h = addZero(h);
        m = addZero(m);
        s = addZero(s);
        var countDownEleHTML = document.getElementById('countdown').innerHTML;
         countDownEleHTML = '倒计时   ' + d + ':' + h + ':' + m + ':' + s;
        if (leftTime <= 0) {
            countDownEleHTML = '倒计时   ' + d + ':' + h + ':' + m + ':' + s;
            return;
        }
        setTimeout(showTime, 1000);
    }
}
```

这种思想犯也比上面的写法好一些，但是也面向过程，无法扩展，实现上首先定义了一个 showTime 方法，然后作为入口函数执行，有一个辅助方法 addZero，作用是对数字补位比如 9 补成 09。然后 showRime 函数中，对时间做了一个差值计算，然后换算了对应的倒计时天，时，分，秒。最后又对 DOM 做了渲染，这次不一样的地方是使用了 setTimeout 来进行递归渲染，没有使用 setInterval

那么有两点值得思考：

- 补 0 操作的实现方法，怎么写比较好一点
- 为什么用 setTimeout，又为什么使用 setInterval，选哪个好一点。

leftPad 操作的扩展
这里有几个同学不同的补零实现方法

```js
function leftPad(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function leftPad(i) {
    return i < 10 ? '0' + i : i + '';
}

function leftPad(n) {
    var n = parseInt(n, 10);
    return n > 0 ? n <= 9 ? ('0' + n) : (n + '') : '00';
}

function leftPad(n, len) {
    len = len || 2;
    n = n + '';
    var diff = len - n.length;
    if (diff > 0) {
        n = new Array(diff + 1).join('0') + n;
    }
    return n;
}
```

最后咱们说一下 npm 的 leftpad 模板的实现：

```js
function leftpad(str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) {
        ch = ' ';
    }
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}
```

现在咱们对比一下我们自己写的和老外写的有何区别：
第一种写法返回值有 bug，大于 10 的返回 number 类型，一个 js 类型未转换的坑；
第二种写法弥补了这个 bug，知道转换类型，但是只考虑了一个参数，功能仅仅为补 0；
第三种写法考虑了负数的情况，会自动转换成 00；
第四种方法终于考虑到了，可能会补更多的 0，用了一个创建指定长度数组的方法，来避免了了一次循环的使用。
第五种，npm 的 leftpad 模块，有 3 个传入参数（个人觉得，参数是 3-6 个比较合适，既能达到简单的目的，又有一定的可扩展性，如果还想要实现更全更复杂的功能，就最好传入一个 options 对象参数），而且命名都特别规范（str-string,比前面的仅考虑数字补 0 的方法要好；len - length,这个长度是最终要达到的字符串长度，因为补 0 是肯定有一个最终位数标准的;ch-char，可见，补的不一定是 0，可以指定其他要左补的字符）。

## setTimeout vs setInterval
分两点来说明：

- 这 2 个函数的功能区别
- js 单线程的理解

setTimeout 是延迟一定毫秒后执行，setInterval 每隔一定毫秒后执行，但是真相并非如此。在这个地方倒计时的例子该选择那个作为定时调用呢？

js 单线程执行，所以以上 2 个方法都会被线程阻塞。

好，现在我们来讲讲主要问题，setInterval 延迟设置为 1000，如果内部的执行是一个耗时超过 1s 的炒作，那么每次重复执行的时候会造成 2 个问题：

- 是执行被阻塞，预期是 1000 毫秒执行一次，实际上必须在阻塞结束后才执行；

- 阻塞时，setInterval 回调会被堆积，当阻塞结束后，堆积只会被消费一个，那么之后的堆积等于浪费了性能和内存；

如何解决堆积问题呢，会不会被阻塞这东西带有很大的不可预测性（就算回调内部的语句比较简单也会带有比较大的不确定性），所以说阻塞是不可能被解决的，那么改善性能最简单的方法就是把 setInterval 换成 setTimeout，使用一个递归来造成每隔多久执行一次的功能。

忘了说了，阻塞之所以无法被解决，是因为这里的阻塞不仅仅有回调中的，还有浏览器中的方方面面的阻塞，如用户的一些操作行为，其他定时器等外部的阻塞，所以说无论我们如何做，打开页面久了的话，定时器都会不准，有时候变慢有时候变快，上次我就碰到一个定时器偶尔会持续几次变快，然后累计到一次变慢了许多。

现在我们考虑如何编写一个高性能可扩展的定时器：

以下几个进化过程，组内实现都一一包含了，希望通过分析可以提高一些你对设计模式在 js 中的应用能力：

```js
var Countdown = {
    // id 选择器
    $: function (id) {
    },
    // 执行定时器入口，使用 setTimeout 调用_timer
    init: function (startTime, endTime, ele) {

    },
    // 私有方法，处理事件参数等具体业务
    _timer: function (startTime, endTime, ele) {

    }
},
Countdown.init("", "2016,12,19 17:34:44", "countdown1");
```

单例模式，简单方便，缺点就是每次 init 都会拿一个新定时器，性能不好，继承和扩展能力一般，无法获取实例属性，导致执行状态不可见。

```js
fucntion Countdown(startTime, endTime, ele) {
    this.ele = ele;
    this.startTime = (new Date(startTime).getTime()) ? (new Date(startTime).getTime()) : (new Date().getTime());
    this.endTime = new Date(endTime).getTime();
}
Countdown.prototype = {
    SetTime: function () {},
    leftPad: function (n) {},
    DownTime: function () {}
},
var test = new Countdown("2016/12/19,12:20:12", "2017/1/30,12:30:30", "time");
test.setTime();
```

上面是标准的原型构造器写法，简单也方便，缺点是每次都拿一个新定时器，实例增多后性能同样不好，按道理 setTime，leftPad 等方法都可以通过继承来实现，方便扩展和复用，prototype 上的方法都是辅助方法，按理来说不应该被外部调用，这里应该封装为私有方法或者前缀+\_。优点是可以通过实例拿到相关倒计时属性，可以对实例再做扩展操作。

```js
var countdown = {};
coutndown.leftPad = function (n, len) {};
countdown.timeToSecond = function (t) {};
// 倒计时工厂
// @param {[object]} obj 倒计时配置信息
// @return {[object]} 返回一个倒计时对象
countdown.create = function (obj) {
    var o = {};
    o.dom = document.getElementById(obj.id);
    o.startMS = +new Date(obj.startTime || 0);
    o.endMS = +new Date(obj.endTime || 0);
    obj.totalTime && (o.totalTime = countdown.timeToSecond(obj.totalTime));

    var newCountdown = new countdown.style[obj.style](o);

    newCountdown.go = function (callback) {
        callback && (newCountdown.callback = callback);
        newCountdown.render();
        clearInterval(newCountdown.timer);
        newCountdown.timer = setInterval(newCountdown.timer);
    };
    return newCountdown;
};
countdown.style.style1 = function (obj) {
    this.dom = obj.dom;
    this.startMS = obj.startMS;
    this.endMS = obj.endMS;
    var _this = this;
    this.render= function () {
        var currMS = +new Date();
        var diff = (_this.endMS - currMS) / 1000;
        var d = parseInt(diff / 60 / 60 / 24);
        d = countdown.leftPad(d, 3);
        d = d.replace(/(\d)/g, '<sapn>$1</sapn>');
        _this.dom.innerHTML = '距离国庆节还有：' + d + '天';
        if (currMS > _this.endMS) {
            clearInterval(_this.timer);
            if (_this.callback) {
                _this.callback();
            }
            else {
                _this.dom.innerHTML = '国庆节倒计时结束';
            }
        }
    };
};
countdown.style.style2 = function (obj) {};
countdown.style.style3 = function (obj) {};
countdown.create({id: 'clock3', totalTime: '82:23', style: 'style1'}).go(function () {alert('This countdown is over!');});
```

以上代码尽量减少了无用的干扰，留下最关键的部分。
这里的 countdown 是一个比较简单的工厂模式实现，实现了一个统一的 create 方法，create 方法上调用了 style 这个属性上扩展的样式（style1-3）实现，create 方法返回的是一个独立的新实例，并统一扩展了 go 方法，go 方法里面统一穿了定时器并挂载到 timer 属性，在这里我们也就等同拥有了修改和控制每个工厂造出来的单例的能力，样式可扩展，leftPad, timeToSend 也可以同一个 utils 对象来继承
缺点：没有考虑到 setTimeout 和 setInterval 的区别，也没有时间校验机制，在性能方面考虑不多。

```js
var EventNotifys = [];
var Event = {
    notify: function (eveName, data) {},
    subscribe: function (eveName, callback) {},
    unsubscribe: function (eveName, callback) {}
};
var timer = null;

$.countdown = function (deadline, domParam) {
    var that = this;
    var MILLS_OFFSET = 15;
    function Countdown () {
        this.deadline = deadline;
        this.domParam = domParam;
    };
    Countdown.prototype = {
        leftPad: function (n) {},
        // 计算差
        // @return {{sec: str, mini: str, hour: str, day: str, month: str, year: str}}
        caculate: function () {},
        // 刷新 dom
        refresh: function () {}
    };
    var countdown = new Countdown();

    function startTimer(first) {
        !first && Event.notify('TIMER');
        // 若是首次进入，则根据当前时间的毫秒数进行纠偏， 延迟1000-当前毫秒数达到整数秒后开始更新 UI
        // 否则直接1秒后更新 UI
        // 若当前毫秒数大于 MILLS_OFFSET 15，则修正延时数值与系统时间同步
        mills = new Date().getMilliseconds();
        timer = setTimeout(arguments.callee, first? (1000 - mills) : (mills > MILLS_OFFSET ? (1000 - mills) : 1000));
        console.log(new Date().getMillseconds());
    }

    // dom 结构和样式与 js 分离，这里指定倒计时的 dom 节点信息作为配置
    $.countDown('20160517 220451', {
        sec: $('#seconds6'),
        mini: $('#minute6'),
        hour: $('#hour'),
        day: $('#day6'),
        month: $('#month6'),
        year: $('#year6')
    });
}
```

这里也是因为篇幅问题，去掉了多余代码，只留下了核心思路实现。首先是实现了一个 jquery 的 countdown 的扩展方法，传入倒计时时间，和需要操作的 dom 节点信息配置，然后实现了一个 Event 对象，俗称 sub/pub 观察者的实现，可以广播、和订阅、以及取消订阅。所有订阅回调存在 EventNotifys 数组中，之后每个 $.countdown 方法返回的都是一个标准的单例实例，原型上有一系列的辅助方法，这里的 calculate 返回的是格式化的时间，方便渲染时的分离操作。

但是这个实例和上面实例不一样的地方是，不包含定时器部分，定时器部分的实现使用了一个 timer，然后通过广播形式，让所有产生的实例共享一个定时器。这里就考虑到性能，页面无论多少个倒计时，都会保持最少的定时器实例。最后在每次订阅的回调中，刷新所有的实例 dom，消耗也最小。并且在每次递归后对阻塞进行了计算，如果误差超过一定阀值，则进行矫正，但是这里的矫正只是对阻塞时间进行矫正，并没有和系统时间矫正。

---------- 完美分割线 ----------
