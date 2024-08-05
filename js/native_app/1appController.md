    - 首先，第一点，之前看了挺多有关技术方面的书，应该说有了一定功底的时候，现在我急需做的一件事，就是把我以前看来的东西好好回顾一下，现在好好研究一下公司各个前端项目架构的合理与不合理的地方，终于有点东西可以写了，，，我要为自己负责。。。我要做一个优秀的工程师。

    - 其次，第二点，我多看看别人写的代码，很快，慢慢地，，，是不是这句话有点小矛盾。。。我自己写业务代码就不用上网自己抄 API 了，因为我再熟悉更底层的代码时已经查阅了许许多多 API。

    首先，我先看 m-site 的，yangji 是谁呀，在app 中的操作，不是 APP 环境什么都不做。。。1000行左右

```
define(function (requre, exports) {
    'use strict';

    var store = require('common/store');
    var util = require('common/util');

    ...
});
```
首先我们来讲讲 appController 的两个依赖：

store.js 有关前端的数据存储（从 PHP smarty tpl,html模板文件到 js 文件之间的数据传递）：
define(function (require, exports) {

    'use strict';

    // 这两个对象用来对比新老数据是否相同
    // 不同则会触发事件
    var newPool = {};
    var oldPool = {};

    var handlers = {};

    // set new val, and can be group-setted
    // wokao,js 函数注释的快捷键找不到，刚刚安装的 jsDocs 插件没找到想逛 settings 的目录，所以我就只好这样喽。。。
    // param1:key 键值或者对象
    // param2:val 如果需要质控，传入null，禁止传入 undefined。。。如果传入了呢。。。嘿嘿嘿
    exports.set = function (key, val) {
        // 佳璐CC 里面的好多源码都用上了 jQuery 的$.type()，对 jQuery 大爱呀。。。
        if ($.type(key) === 'string') {
            // 如果已经存在，需要先在 oldPool 存一份
            if (newPool[key] !== undefined) {
                oldPool[key] = newPool[key];
            }
            newPool[key] = val;
        }
        else if ($.isPlainObject(key)) {
            // key 内还有子对象的话继续做遍历
            $.each(key, function (name, val) {
                exports.set(name, val);
            });
        }
    }

    // 获取数据
    exports.get = function (key) {
        return key ? newPool[key]: newPool;
    };

    // 数据是否发生改变
    exports.isChange = function (key) {
        var newVal = newPool[key];
        var oldVal = oldPool[key];

        return oldVal !== undefined && newVal !== oldVal;
    };

    // 监听数据的变换
    // 业务 js 文件的话你会发现用不上 store.onChange 但是用 gulp bui一下你会发现 `/Users/bjhl/pro/m-site/output/asset/apollo/common/appController_820c64915a.js`里面有他俩的存在。

    // gulp 编译会把一个所以 js 文件的AMD 的依赖全给暴露，罗列出来

    exports.onChange = function (name, handler) {
        var list = handlers[name];

        if (!$.isArray(list)) {
            list = [];
            handlers[name] = list;
        }

        list.push(handler);
    }

    // 触发数据变化事件

    exports.fireChange = function () {
        $.each(newPool, function (key, val) {
            if (exports.isChange(key)) {
                var handlerList = handlers[key];
                if (handlerList) {
                    $.each(handlerList, function (ind, handler) {
                        if ($.isFunction(handler)) {
                            handler();
                        }
                    });
                }
                oldPool[key] = undefined;
            }
        }
    }
});
```
util.js 400多行，许峥（徐峥）写的，output 目录下没有相应的 util.js 文件，但是有appController和 store,而且都有两份，一个带随机字符串后缀，一个没带。。。以后我琢磨 gulp 的时候再来搞这个问题吧。。。

exports 出去的对象有 string，object，array,lang,number,math，browser，platform，fun，timer。。。_bp 是(function () {
    var userAgent = navigator.userAgent;
    var ua = userAgent.toLowerCase()p
    var i = 0;
    var n;
    var str;
    var arr;
    var browser = 0;
    var browserVersion;
    var platform;

    // 0-null, 1-opera, 2-msie, 3-chrome, 4-applewebkit, 5-firefox, 6-mozilla

    var browser_arr = ['opera', 'msie', 'chrome', 'applewebkit', 'firefox', 'mozilla'];

    // 0-null, 1-xll, 2-mac, 3-windows, 4-android, 5-iphone, 6-ipad
    var platform_arr = ['xll', 'macintosh, 'windows', 'android', 'iphone', 'ipad'];
    for (n = browser_arr.length; i < n; i++) {
        str = browser_arr[i];
        if (-1 !=ua.indexOf(str)) {
            browser = i + 1;
            arr = new RegExp(str + '[ /]?([0-9]+)?)').exec(ua);
        }
    }
})();

number.equals 还有 lang.isString 还有lang.isNumber, lang.isNull, lang.isFunction, lang.isjQuery, isDom, union, argsToArray...

比较有意思的是：
// 把字符串首字母变成大写
string.initcap = (function () {
    var cache = {};
    return function (str) {
        // 传参为空的情况，用 || 运算符巧妙纠正
        return cache[str] || (cache[str] = str.substr(0,1).toUpperCase() + str.substr(1));
    }
})();
// 判断是不是空对象
object.isEmpty = function (object) {
    for (var p in object) {
        // 判断 object 里面的每一项子属性是不是有不是继承来的
        if (object.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}

计算两个经纬度之间的距离，单位米：exports.computeDistance;
精确到小数点若干位
number.round = function (number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
};
现在我们来看看 appController 的主体：

exports.version2Number = function (strVersion) {
    if (!strVersion) {
        return 0;
    }
    var arr = strVersion.split('.');
    var num = 0;
    num += Number(arr[0]) * 1E4;
    num += Number(arr[1]) * 1E2;
    num += Number(arr[2]);
    return isNaN(num) ? 0 : num;
};

// 判断是否是 app，根据 PHP 传过来的值会被塞带 HTML 元素里
exports.isApp = function () {
    // 原来 appController 的isApp 是这样判断出的
    return store.get('isApp');
};

exports.isOrgApp = function () {
    // 还没有做过机构方面的业务呢，好想接触接触 angular 呀
    return store.get('isOrgApp');
};

exports.isBaiduZhidahao = function () {
    // 不是说负责过百度直达号业务的李明远已经引咎辞职了嘛。。。
    return store.get('isBaiduZhidahao');
};

// 获取当前 app 的版本，我看没怎么用过
exports.getAppVersion = function () {
    return store.get('appVersion');
};

exports.isTeacherApp = function () {
    return store.get('isTeacherApp');
};

exports.isStudentApp = function () {
    return store.get('isStudentApp');
};

exports.isWeixin = function () {
    return store.get('isWeixin');
};

// 设置页面的 title
// 我想起来了，之前碰到过一个Android 系统返回键按下后网页 title（app 的 bar-title） 不刷新 bug，原来还有这么个 Jockey。不过下面的 goBack 好像更有用吧。。。(应该说我当初碰到的 bug 还只是有关页面 title 不刷新的问题，还有可能会有许多其他问题，比如 cache 相关)，所以还是 goBack 强制后退 webview 更好些。
exports.setPageTitle = function (title) {
    Jockey.send('setPageTitle', {
        title: title
    });
};

// 控制 app 顶部导航条的显示与隐藏
// param: display-boolean
exports.setTitleBar = function(display) {
    Jockey.send('setTitleBar', {
        display: display
    });
};

// 在 app 中强制后退 webview
// param: force{booblean}, default val is false
exports.goBack = function (force) {
    Jockey.send('goBack', {
        force: force
    });
};

// 跳转到 app 里面的老师详情页
// param: number(教师)
exports.redirectTeacherDetail = function (number) {
    Jockey.send(
        'toTeacherDetail', {
            numbers: '' + number
        }
    );
};

// 打开新的 webview param: url
exports.openNewWindow = (function () {
    var lastTime = +new Date;
    return function (url) {
        var now = +new Date;
        if (now - lastTime > 2000) {
            lastTime = now；
            Jockey.send('toNewWindow', {
                // 不太清楚这两个参数的具体区别，用的时候我都设置成一样的了。。。
                url: url,
                web_url: url
            });
        }
    };
})();

// app2.6.0之后的版本，进入教室需要调用该函数
// param: url
exports.openNewOnlineWindow = (function () {
    var lastTime = +new Date;
    return function (url) {
        var now = +new Date;
        if (now - lastTime > 2000) {
            lastTime = now;
            Jockey.send('toNewOnlineWindow', {
                url: url,
                web_url: url
            });
        }
    };
})();

// 获取用户信息，会注册一个事件，尽量不要重复调用
exports.getUserInfo = function (callback) {
    // 第一次看到 Jockey-off，之前了解到过 jockey-on 事件绑定
    Jockey.off('setUserInfo');
    Jockey.on('setUserInfo', function (res) {
        callback(res);
    });
    // 为什么在 getUserInfo 之前会有
    JOckey.send('getUserInfo');
};

// 获取当前登录用户的 auth_token
// 'auth_token': 'xxx'
exports.getAuthToken = function (callback) {
    Jockey.on('setAuthToken', function (res) {
        callback(res);
    });
    Jockey.send('getAuthToken');
};

// 设置分享后，设置后，右上角出现 app 的分享按钮
exports.setShareInfo = function (param) {

    param = param || {};

    var url = param.url || location.href;

    var imgUrl = param.img || param.pic_url;

    var option = {
        url: url,
        content: param.content || '',
        title: param.title || $('title').text().trim(),
        img: imgUrl
    };
    option.pic_url = imgUrl;
    option.pic = imgUrl;

    // 自定义各个渠道的分享，某个 type 没有设置的话app 就会使用默认参数
    var mergeOptions = function () {
        var type = [
            'share_sms', 'share_weibo', 'share_weixin', 'share_pyq', 'share_qq', 'share_qzone'];

        for (var k in type) {
            var item = type[k];
            if (param[item]) {
                option[item] = param[item];
            }
        }
    };

    if ((exports.getPlatForm() ==== 'android') && (!exports.isTeacherApp()) && (exports.getAppVersion() < '1.5.0')) {
        Jockey.send('setShareInfo', option);
    }
    else {
        mergeOptions();
        Jockey.send('setSahreInfo', option);
    }
};

// 检测登录状态
exports.checkLogin = funciton (callback) {
    Jockey.off('setCheckLogin');
    Jockey.on('setCheckLogin', function (res) {
        // return isLogin: 0|1
        callback(res);
    });
    Jockey.send('getCheckLogin');
}

// 跳转到班课列表页 param.teacher_number 老师号 param.teacher_title 老师名字
exports.redirectClassCourseList = function (param) {
    param = param || {};
    Jockey.send('toClassCourseMoreList', param);
};

// 判断是哪个 app 端 这个看起来好像挺管用的 return 'teacher' | 'student'。。。不过可以用 isTeacherApp() 和 isStudentApp() 替代了吧。。。应该还有 isOrgApp()，isKaoyanApp() 什么的
exports.getEnd = function () {
    var ua = window.navigator.userAgent;
    var end = 'student';

    if (ua.indexOf('teacher') != -1) {
        end = 'teacher';
    }

    return end;
};

//joinQQGroup 是我加上的。。。

exports.toPayCoursePurchase 还有 toThirdPaytyPayment, getVersionInfo，getAddress, setAddress, toSelectAddress, toResume, toCase, toPhotos, toViewImage, toAndwerDetailWindow, toPayResult, showIntergral, getPlatForm, makePhoneCall, toPlayAudio, toChat, imChat, setFavouriteInfo, landscape, portrait, toMyVideoCourse, toBannerVideocourse, toVideoCourse, toClassCourse, orderControlComment, toClassCourseDetail, toThreeSlideCall, uploadImage, onUploadImageComplete, uploadAudio, uploadAudioCallback, toMap, toQuestionDetail, toAnswerPage...  send Jockey 的时候有的带了参数有的没带参数，都是比较简单的东西。。。

exports 出去的东西之外，比较有意思的东西是 pageConfig 还有 runDataApp, findDataApp, findLink, getAbsoluteLink, moderatorRequest, addThread, init 里面用上了这几个 function。。。


output 目录下的 /Users/bjhl/pro/m-site/output/asset/apollo/common/appController_820c64915a.js:

907行，比实际的 appController 要短(我看了看， required-modules 都给具体化了，而且注释行消去了，还有中文标点转码了：
```
define('common/appController_820c64915a', [
    'require',
    'exports',
    'common/store_759f15c2e8',
    'common/util'
], function (require, exports) {
    'user strict';
    var store = require('common/store_759f15c2e8');
    var util = require('common/util');
    exports.version2Number = function (strVersion) {
        if (!strVersion) {
            return 0;
        }
        var arr = strVersion.split('.');
        var num = 0;
        // 1E4 === 10000
        num += Number(arr[0]) * 10000;
        num += Number(arr[1]) * 100;
        num += Number(arr[2]);
        return isNaN(num) ? 0 : num;
    };
    exports.isApp = function () {
        return store.get('isApp');
    };
    exports.isOrgApp = function () {
        return store.get('isOrgApp');
    };
    exports.isBaiduZhidahao = function () {
        return store.get('isBaiduZhidahao');
    };
    exports.getAppVersion = function () {
        return store.get('appVersion');
    };
    exports.isTeacherApp = function () {
        return store.get('isTeacherApp');
    };
    exports.isStudentApp = function () {
        return store.get('isStudentApp');
    };
    exports.isWeixin = function () {
        return store.get('isWeixin');
    };
    exports.setPageTitle = function (title) {
        return Jockey.send('setPageTitle', {title: title});
    };
    exports.setTitleBar = function (display) {
        return Jockey.send('setTitleBar', {display: display});
    };
    exports.goBack = function (force) {
        return Jockey.send('goBack', {force: force});
    };

});

和 appController 并列，之后是 store, util的 define 部分。。。
#拓展部分

- $.type()
 隶属于 jQuery-Utilities，返回一个 js 对象的内在类（翻译的不太好，应该叫做基本类型吧）

egs：


jQuery.type(undefined) === 'undefined'
jQuery.type() === 'undefined' // 不传 param 也可以？
jQuery.type(window.notDefined) === 'undefined'
jQuery.type(null) === 'null'
type（）方法所传参数可以是一个原始值，也可以是一个内建 es 对象的实例

jQuery.type(true); // 'boolean'
jQuery.type(new Boolean()); // 'boolean'
jQuery.type(3); // 'number'
jQuery.type(new Number(3)); // 'number'
jQuery.type('test'); // 'string'
jQuery.type(new String('test')); // 'string'
jQuery.type(function () {}); // 'function'
jQuery.type([]); // 'array'
jQuery.type(new Array()); // 'array'
jQuery.type(new Date()); // 'date'，我靠，date 居然被我给忘了
jQuery.type(new Error()); // 'error'，我靠，居然还有 error。。。jQuery 1.9版本新增。。。get
jquery.type(/test/); // 'regexp', 注意第二个 e 没有大写哈。。。

- $.isPlainObject
check to see if an object is a plain object(created using '{}' or 'new Object')

jQuery.isPlainObject({}); // true
jQuery.isPlainObject('test'); // false

- $.each(arr, function(val, ind) {});用于数组的遍历，而$('ele').each(function (ele, ind))用于每一个jQuery eles-selector-arr

不过也挺好记，保证键值对顺序就不会把 name和 val 的顺序记反。。。