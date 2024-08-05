    上周开发优惠券分享落地页时碰到一个小问题,搞了挺久的...想想如果走了捷径其实当时可以更快速解决的,,,下面我总结一下吧:


`/view/common/script.html`, 大家肯定每次写模板文件时都会把它引入,下面的分析会很快解开为什么我当初在 js 文件里面谢任何语句都运行不了的原因,而且 jQuery 没有加载进去:


```
{{ *

@file 加载脚本
@author zhujialu

* }}

{{ strip }}
<script src="{{ $static_origin }}/dep/base/0.0.3/base.js"></script>
<script src="{{ $static_origin }}/dep/base/jockey.js?v=0.3"></script>
<script>

require.config({
    'baseUrl': '{{ $static_origin }}/src',
    'packages': [
        {
            'name': 'weixin',
            'location': 'https://res.wx.qq.com/open/js',
            'main': 'jweixin-1.0.0'
        },
        {
            'name': 'highcharts',
            'location': '../dep/highcharts',
            'main': 'highcharts'
        },
        {
            'name': 'highmaps',
            'location': '../dep/highmaps',
            'main': 'highmaps'
        },
        {
            'name': 'swiper',
            'location': '../dep/swiper/js',
            'main': 'swiper_min'
        },
        {
            'name': 'cobble',
            'location': '../dep/cobble/0.3.13/src',
            'main': 'main'
        },
        {
            'name': 'video-player',
            'location': '../dep/video-player/0.0.2/src',
            'main': 'letv'
        },
        {
            'name': 'artTemplate',
            'location': '../dep/artTemplate',
            'main': 'artTemplate'
        }
    ]
});


{{ * $env 必须是 test beta www 之中的某个值，不是的话表示有页面覆盖了它，这时要果断报错 * }}

{{ if !$env_map[$env] }}
    alert('请不要覆盖 $env 变量！');
{{ /if }}


{{ *

js 初始化，通常只有两步：

1. 模块需要用到的数据（可选）
2. 模块路径

所以在 data block 中定义 $script_path $script_data 即可

* }}

{{ $amd_modules = [ ] }}

{{ if isset($amd_more) }}
    {{ if is_array($amd_more) }}
        {{ foreach $amd_more as $path }}
            {{ $amd_modules[] = $path }}
        {{ /foreach }}
    {{ else if is_string($amd_more) }}
        {{ $amd_modules[] = $amd_more }}
    {{ /if }}
{{ /if }}

{{ if isset($script_path) }}
    {{ $amd_modules[] = $script_path }}
{{ /if }}

if (ua.is_app) {
    require(
        [
            'cobble/util/cookie',
            'common/appController'
        ],
        function (cookie, appController) {

            var originToken = '';

            {{ if not empty($smarty.cookies.AUTH_TOKEN) }}
            originToken = '{{ $smarty.cookies.AUTH_TOKEN }}';
            {{ /if }}
            appController.getAuthToken(function (response) {
                if (originToken !== response.auth_token) {
                    cookie.set('AUTH_TOKEN', response.auth_token);
                }
            });

            var title = document.title;
            $('title').data('title', title);

            title = title.replace(' - 跟谁学', '');

            appController.setPageTitle(
                title.trim()
            );
        }
    );
}

{{ * 将store放在第一位, 为了在其他模块呗require的时候就能找到store中的变量 * }}

require(
    ['common/store'].concat({{ json_encode($amd_modules, 77) }})
    , function (store) {

        store.set({
            user:
            {
                id: {{ if isset($user_data.user_id) }}{{ $user_data.user_id }}{{ else }}0{{ /if }},
                type: {{ if isset($user_data.user_type) }}{{ $user_data.user_type }}{{ else }}-1{{ /if }},
                name: '{{ if isset($user_data.user_name) }}{{ $user_data.user_name }}{{ /if }}',
                mobile: '{{ if isset($user_data.mobile) }}{{ $user_data.mobile }}{{ /if }}',
                number: '{{ if isset($user_data.user_number) }}{{ $user_data.user_number }}{{ /if }}',
                avatar: '{{ if isset($user_data.avatar) }}{{ $user_data.avatar }}{{ /if }}'
            },
            isWifi: {{ if $is_wifi }}true{{ else }}false{{ /if }},
            netType: '{{ if not empty($smarty.get.net) }}{{ $smarty.get.net|escape }}{{ /if }}',
            serverTime: new Date({{ $ts * 1000 }}),
            env: '{{ $env }}',
            platform: ua.platform,
            isWeixin: ua.is_weixin,
            isTeacherApp: ua.is_tapp,
            isStudentApp: ua.is_sapp,
            appVersion: ua.app_version,
            isOrgApp: ua.is_iapp,
            isApp: ua.is_app,
            noDownload: '{{ if not empty($smarty.get.no_download) }}1{{ /if }}',
            isBaiduZhidahao: window.isZhidaohao,
            'current_city': {
                'id' : '{{ $ext_data.curr_city.id }}',
                'name': '{{ $ext_data.curr_city.name }}'
            }
        });

        {{ if isset($script_data) }}

        var data = {{ json_encode($script_data) }};
        if (data.user || data.env) {
            alert('store 已占用 user 和 env！');
            return;
        }

        store.set(data);

        {{ /if }}

        for (var i = 1, len = arguments.length; i < len; i++) {
            var module = arguments[i];
            if (module && $.isFunction(module.init)) {
                module.init();
            }
        }
});
</script>
<script>
    window.gsx_ready && window.gsx_ready(function(config){
        var dialog = config.dialog;
        if (dialog) {
            if (dialog.type == 'act') {
                require(['ad-dialog/types/ditui'], function (mod) {
                    mod.init(config.dialog);
                });
            }
        }

    });
</script>
{{ /strip }}
```

####这个文件通常位于`{{ block name="content" }}`里面的底部,这个文件是佳璐写的,许峥也写过一个类似的东西, 是view/v2_common 目录下,然后两者作用机制不一样,前者语法:
```
{{ block name="data" }}

    ...
    {{ $script_path="teacher/newClassDetail" }}
    ...

{{/block}}

{{ block name="content" }}

    ...
    {{ include file="common/script.html" }}

{{ /block }}
```
后者语法
```
{{ block name="content" }}
    ...
    {{ include file="v2_common/page-module.html" module_name="teacher/newClassDetail"}}
{{ /block }}
```
####引入 js 都位于body 底部..现在我们只看看佳璐写的script.html:
首先引入 jQuery, 遵循 AMD 的 ESL, 用于app 和 h5 之间通信的Jockey:
```
<script src="{{ $static_origin }}/dep/base/0.0.3/base.js"></script>
<script src="{{ $static_origin }}/dep/base/jockey.js?v=0.3"></script>
```
####接下来配置 AMD:
```
require.config({
    'baseUrl': '{{ $static_origin }}/src',
    'packages': [
        {
            'name': 'weixin',
            'location': 'https://res.wx.qq.com/open/js',
            'main': 'jweixin-1.0.0'
        },
        {
            'name': 'highcharts',
            'location': '../dep/highcharts',
            'main': 'highcharts'
        },
        {
            'name': 'highmaps',
            'location': '../dep/highmaps',
            'main': 'highmaps'
        },
        {
            'name': 'swiper',
            'location': '../dep/swiper/js',
            'main': 'swiper-min'
        },
        {
            'name': 'cobble',
            'location': '../dep/cobble/0.3.13/src',
            'main': 'main'
        },
        {
            'name': 'video-player',
            'location': '../dep/video-player/0.0.2/src',
            'main': 'letv'
        },
        {
            'name': 'artTemplate',
            'location': '../dep/artTemplate',
            'main': 'artTemplate'
        }
    ]
});
```
####再展开可以研究好多东西...我那天写的任何js 语句都不起作用,很明显是 jQuery 和 AMD 没有引入,如果当初尝试在模板文件新创建<script>标签,在里面写写 js...问题说不定一下就找出了...