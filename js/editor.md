# wangeditor

<https://www.wangeditor.com/>

开源 Web 富文本编辑器，开箱即用，配置简单

## 快速开始

用于 Vue React 参考这里。

### 创建空白编辑器

可直接参考 demo 示例的网页源码。

#### 引入 CSS 定义样式

可自定义编辑器、工具栏的尺寸、边框、z-index 等样式。

```html
<link
  href="https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css"
  rel="stylesheet"
/>
<style>
  #editor—wrapper {
    border: 1px solid #ccc;
    z-index: 100; /* 按需定义 */
  }
  #toolbar-container {
    border-bottom: 1px solid #ccc;
  }
  #editor-container {
    height: 500px;
  }
</style>
```

#### 定义 HTML 结构

```html
<div id="editor—wrapper">
  <div id="toolbar-container"><!-- 工具栏 --></div>
  <div id="editor-container"><!-- 编辑器 --></div>
</div>
```

TIP

如果想要“全屏”功能，则要求工具栏、编辑器 DOM 节点必须是同一层级
当然，工具栏、编辑器 DOM 节点也可自由组合，例如 仿腾讯文档 demo

#### 引入 JS 创建编辑器

```html
<script src="https://unpkg.com/@wangeditor/editor@latest/dist/index.js"></script>
<script>
  const { createEditor, createToolbar } = window.wangEditor

  const editorConfig = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      console.log('editor content', html)
      // 也可以同步到 <textarea>
    },
  }

  const editor = createEditor({
    selector: '#editor-container',
    html: '<p><br></p>',
    config: editorConfig,
    mode: 'default', // or 'simple'
  })

  const toolbarConfig = {}

  const toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default', // or 'simple'
  })
</script>
```

TIP

不同 mode 可参考 demo

mode: 'default' 默认模式 - 集成了 wangEditor 所有功能
mode: 'simple' 简洁模式 - 仅有部分常见功能，但更加简洁易用
这样就创建出了一个最基本的编辑器。

### 接下来

要实现一个完整的富文本编辑器功能，你可能还需要以下功能：

- 内容处理 - 获取内容，设置内容，展示内容
- 工具栏配置 - 插入新菜单，屏蔽某个菜单等
- 编辑器配置 - 兼听各个生命周期，自定义粘贴
- 菜单配置 - 配置颜色、字体、字号、链接校验、上传图片、上传视频等
- 编辑器 API - 控制编辑器内容和选区
- 扩展新功能 - 扩展菜单、元素、插件等

## 用于 Vue React

### Vue2

#### Demo

Demo 源码
在线 demo

#### 安装

```sh

yarn add @wangeditor/editor

# 或者 npm install @wangeditor/editor --save

yarn add @wangeditor/editor-for-vue

# 或者 npm install @wangeditor/editor-for-vue --save
```

#### 使用

模板

<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
        />
    </div>
</template>
script

<script>
  import Vue from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

  export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
      return {
        editor: null,
        html: '<p>hello</p>',
        toolbarConfig: {},
        editorConfig: { placeholder: '请输入内容...' },
        mode: 'default', // or 'simple'
      }
    },
    methods: {
      onCreated(editor) {
        this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      },
    },
    mounted() {
      // 模拟 ajax 请求，异步渲染编辑器
      setTimeout(() => {
        this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
      }, 1500)
    },
    beforeDestroy() {
      const editor = this.editor
      if (editor == null) return
      editor.destroy() // 组件销毁时，及时销毁编辑器
    },
  })
</script>
TIP

赋值 this.editor 时要用 Object.seal()
组件销毁时，要及时销毁编辑器
记得引入 style

<style src="@wangeditor/editor/dist/css/style.css"></style>

#### 配置

可通过 toolbarConfig 和 editorConfig 来修改菜单栏和编辑器的配置，详细文档参考

工具栏配置 - 插入新菜单，屏蔽某个菜单等
编辑器配置 - 兼听各个生命周期，自定义粘贴
菜单配置 - 配置颜色、字体、字号、链接校验、上传图片、视频等

【注意】编辑器配置中 onXxx 格式的生命周期函数，必须通过 Vue 事件来传递，不可以放在 editorConfig 中，例如：

<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar ... />
        <Editor
            @onCreated="onCreated"
            @onChange="onChange"
            @onDestroyed="onDestroyed"
            @onMaxLength="onMaxLength"
            @onFocus="onFocus"
            @onBlur="onBlur"
            @customAlert="customAlert"
            @customPaste="customPaste"
        />
    </div>
</template>

```js

methods: {
    onCreated(editor) {
        this.editor = Object.seal(editor)
        console.log('onCreated', editor)
    },
    onChange(editor) { console.log('onChange', editor.children) },
    onDestroyed(editor) { console.log('onDestroyed', editor) },
    onMaxLength(editor) { console.log('onMaxLength', editor) },
    onFocus(editor) { console.log('onFocus', editor) },
    onBlur(editor) { console.log('onBlur', editor) },
    customAlert(info: string, type: string) { window.alert(`customAlert in Vue demo\n${type}:\n${info}`) },
    customPaste(editor, event, callback) {
        console.log('ClipboardEvent 粘贴事件对象', event)
        // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
        // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
        // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

        // 自定义插入内容
        editor.insertText('xxx')

        // 返回 false ，阻止默认粘贴行为
        event.preventDefault()
        callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

        // 返回 true ，继续默认的粘贴行为
        // callback(true)
    },
}
```

#### 调用 API

当编辑器渲染完成之后，通过 this.editor 获取 editor 实例，即可调用它的 API 。参考 编辑器 API 。

<template>
    <div>
        <button @click="insertText">insert text</button>
        <div style="border: 1px solid #ccc;">
            <Toolbar .../>
            <Editor .../>
        </div>
    </div>
</template>

```js

methods: {
    insertText() {
        const editor = this.editor // 获取 editor 实例
        if (editor == null) return

        // 调用 editor 属性和 API
        editor.insertText('一段文字')
        console.log(editor.children)
    },
},
```

### Vue3

#### Demo

Demo 源码
在线 demo

#### 安装

```sh

yarn add @wangeditor/editor

# 或者 npm install @wangeditor/editor --save

yarn add @wangeditor/editor-for-vue@next

# 或者 npm install @wangeditor/editor-for-vue@next --save
```

#### 使用

模板

<template>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
</template>
script

<script>
  import '@wangeditor/editor/dist/css/style.css' // 引入 css

  import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

  export default {
    components: { Editor, Toolbar },
    setup() {
      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef()

      // 内容 HTML
      const valueHtml = ref('<p>hello</p>')

      // 模拟 ajax 异步获取内容
      onMounted(() => {
        setTimeout(() => {
          valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        }, 1500)
      })

      const toolbarConfig = {}
      const editorConfig = { placeholder: '请输入内容...' }

      // 组件销毁时，也及时销毁编辑器
      onBeforeUnmount(() => {
        // editorRef.value?.destroy()
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
      })

      const handleCreated = (editor) => {
        editorRef.value = editor // 记录 editor 实例，重要！
      }

      return {
        editorRef,
        valueHtml,
        mode: 'default', // 或 'simple'
        toolbarConfig,
        editorConfig,
        handleCreated,
      }
    },
  }
</script>
TIP

editorRef 必须用 shallowRef
组件销毁时，要及时销毁编辑器

#### 配置

可通过 toolbarConfig 和 editorConfig 来修改菜单栏和编辑器的配置，详细文档参考

工具栏配置 - 插入新菜单，屏蔽某个菜单等
编辑器配置 - 兼听各个生命周期，自定义粘贴
菜单配置 - 配置颜色、字体、字号、链接校验、上传图片、视频等
【注意】编辑器配置中 onXxx 格式的生命周期函数，必须通过 Vue 事件来传递，不可以放在 editorConfig 中，例如：

<template>
    <div style="border: 1px solid #ccc">
      <Toolbar ... />
      <Editor
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
    </div>
</template>

```js

const handleCreated = (editor) => {
  editorRef.value = editor
  console.log('created', editor)
}
const handleChange = (editor) => {
  console.log('change:', editor.children)
}
const handleDestroyed = (editor) => {
  console.log('destroyed', editor)
}
const handleFocus = (editor) => {
  console.log('focus', editor)
}
const handleBlur = (editor) => {
  console.log('blur', editor)
}
const customAlert = (info, type) => {
  alert(`【自定义提示】${type} - ${info}`)
}
const customPaste = (editor, event, callback) => {
  console.log('ClipboardEvent 粘贴事件对象', event)
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  editor.insertText('xxx')

  // 返回 false ，阻止默认粘贴行为
  event.preventDefault()
  callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
}

return {
  // 省略其他 ...

  handleCreated,
  handleChange,
  handleDestroyed,
  handleFocus,
  handleBlur,
  customAlert,
  customPaste,
}
```

#### 调用 API

当编辑器渲染完成之后，通过 editorRef.value 获取 editor 实例，即可调用它的 API 。参考 编辑器 API 。

<template>
    <div>
        <button @click="insertText">insert text</button>
        <div style="border: 1px solid #ccc">
            <Toolbar ... />
            <Editor ... />
        </div>
    </div>
</template>

```js

const insertText = () => {
  const editor = editorRef.value // 获取 editor ，必须等待它渲染完之后
  if (editor == null) return

  editor.insertText('hello world') // 执行 editor API
}

return {
  // 省略其他 ...

  insertText,
}
```
