# TinyMCE
```js
tinymce.init({
  selector: '#mytextarea',
  plugins: 'fontselect fontsizeselect', // 启用字体和字号插件
  toolbar: 'fontselect fontsizeselect', // 工具栏显示控件
  // 中文字体配置
  font_formats: "宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';标楷体='标楷体';华文仿宋='华文仿宋';华文宋体='华文宋体';新宋体='新宋体';华文楷体='华文楷体';新细明体='新细明体';华文行楷='华文行楷'",
  // 字号配置（含像素值和中文印刷字号）
  fontsize_formats: "10.5px 12px 15px 16px 18px 22px 24px 26px 36px 42px 64px 80px 96px 128px 五号=10.5px 小四=12px 小三=15px 三号=16px 小二=18px 二号=22px 小一=24px 一号=26px 小初=36px 初号=42px",
  // 设置编辑区默认样式
  content_style: "body { font-family: '宋体'; font-size: 12px; }",
  // 其他配置
  menubar: false,
  branding: false // 隐藏右下角品牌标识
});

const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

tinymce.init({language:'zh_CN',
  selector: 'textarea#open-source-plugins',
  plugins: 'autoresize preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
  editimage_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
  ],
  importcss_append: true,
  file_picker_callback: (callback, value, meta) => {
    /* Provide file and text for the link dialog */
    if (meta.filetype === 'file') {
      callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
    }

    /* Provide image and alt text for the image dialog */
    if (meta.filetype === 'image') {
      callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    }

    /* Provide alternative source and posted for the media dialog */
    if (meta.filetype === 'media') {
      callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
    }
  },
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  skin: useDarkMode ? 'oxide-dark' : 'oxide',
  content_css: useDarkMode ? 'dark' : 'default',
  content_style: 'body { writing-mode: vertical-rl !important; text-orientation: mixed; font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

https://codepen.io/pen?&prefill_data_id=602bdd2c-d6ee-4d87-9c7d-ef214fac498b https://www.tiny.cloud/docs/tinymce/latest/full-featured-open-source-demo/
```

TinyMCE 作为一款主流的富文本编辑器，对文本框的支持是基础功能，而工具栏的必要性则需结合具体场景（如谱文编辑）分析。以下是综合评估：

---

### 📝 **一、TinyMCE 对文本框的支持**
1. **原生文本框集成**
   TinyMCE 的核心功能是通过 `<textarea>` 元素实现的：
   - **初始化方式**：通过 `tinymce.init({ selector: '#id' })` 将指定 ID 的 `<textarea>` 转换为富文本编辑器。
   - **数据交互**：内容通过 `tinymce.activeEditor.getContent()` 获取，格式为 HTML。
   - **覆盖机制**：编辑器会覆盖原文本框的显示层，但底层仍保留 `<textarea>` 用于表单提交。

2. **多框架兼容性**
   TinyMCE 支持主流前端框架的文本框集成：
   - **React/Vue**：提供官方组件（如 `@tinymce/tinymce-react`、`@tinymce/tinymce-vue`），可直接绑定到文本框组件。
   - **动态 ID 处理**：在 Vue 中需用计算属性动态生成文本框 ID，避免切换页面时渲染冲突。

---

### 🎛️ **二、谱文编辑器工具栏的必要性分析**
工具栏是富文本编辑器的核心交互组件，其必要性需结合谱文编辑的特殊性判断：

| **场景**               | **工具栏价值**                                                                 | **潜在问题**                     |
|------------------------|-------------------------------------------------------------------------------|----------------------------------|
| **基础文本编辑**       | 必要（加粗、斜体、字号调整等高频操作需快捷入口）                     | 按钮过多可能干扰专注力           |
| **谱文符号插入**       | 高度必要（需定制工具栏按钮，如音符、节拍标记等专用符号）             | 需开发插件支持自定义图标         |
| **多格式排版**         | 必要（对齐、缩进、行距调整需直观操作）                               | 移动端空间有限，需折叠设计       |
| **协作与版本控制**     | 低必要性（工具栏对协作无直接影响，历史记录依赖后台功能）                 | ——                               |

#### **关键结论**：
- ✅ **必要场景**：
  - 高频操作（如格式调整）需减少操作路径；
  - 专业符号插入需定制工具栏提升效率。
- ⚠️ **非必要场景**：
  - 纯键盘操作优先的用户（可通过快捷键替代）；
  - 极简编辑需求（如仅需纯文本输入）。

---

### ⚙️ **三、优化工具栏设计的建议**
若确定需要工具栏，可通过以下方式提升谱文编辑体验：
1. **按需定制功能**
   - 隐藏低频按钮（如视频嵌入），通过 `toolbar` 参数仅保留谱文相关功能。
   - 示例：`toolbar: "undo redo | styleselect | bold italic | customSymbolMenu"`。

2. **开发专用插件**
   - 为谱文符号（如升降记号、反复记号）创建插件，绑定到工具栏按钮。
   - 参考：TinyMCE 插件开发支持自定义图标和事件。

3. **情境式显示优化**
   - 采用 **浮动面板**（Floating Panel）：仅在选中乐谱元素时显示相关工具，减少界面干扰。
   - 使用 **折叠菜单**：在移动端将低频功能收纳至二级菜单。

4. **快捷键互补**
   - 为谱文操作绑定快捷键（如 `Ctrl+♪` 插入音符），减少工具栏依赖。

---

### 💎 **总结**
1. **TinyMCE 支持文本框**：通过 `<textarea>` 原生集成，覆盖显示层但保留数据交互。
2. **工具栏必要性分场景**：
   - **推荐保留**：涉及格式调整、符号插入等高频操作时；
   - **可省略**：纯键盘操作或极简编辑需求。
3. **谱文编辑器优化方向**：定制工具栏按钮 + 专用插件开发 + 情境式面板设计，平衡功能与简洁性。

> 若需实现谱文符号的快速插入，可参考 TinyMCE 的[自定义按钮文档](https://www.tiny.cloud/docs/advanced/creating-a-custom-button/) 或结合插件库（如 `tinymce-special-characters`）扩展功能。


TinyMCE 原生不直接提供“文本框”工具栏按钮，但可通过自定义按钮或插件实现类似功能。对于谱文编辑器而言，是否添加该功能需结合具体需求权衡。以下是综合分析：

---

### 🔧 **一、TinyMCE 对文本框的支持方式**
1. **原生功能限制**
   TinyMCE 的核心是富文本编辑，其工具栏默认不包含“插入文本框”按钮。编辑区内容本质是流式布局的 HTML，而非独立文本框对象。

2. **自定义实现方案**
   - **自定义按钮 + 插件开发**：通过 `editor.ui.registry.addButton()` 创建按钮，点击时插入带样式的 `<div>` 或 `<span>` 模拟文本框，并绑定位置调整事件。
   - **使用浮动元素插件**：结合 `tinymce.dom` API 动态创建可拖拽的绝对定位元素，实现文本框的交互效果。
   - **扩展工具栏选项**：在工具栏配置中添加自定义按钮名称（如 `customtextbox`），关联插入逻辑。

---

### 🎼 **二、谱文编辑器添加文本框的必要性分析**
#### ✅ **推荐添加的场景**
1. **复杂排版需求**
   若谱文需在乐谱旁添加独立注释（如歌词标注、演奏提示），文本框可隔离内容布局，避免干扰乐符结构。
2. **视觉层次强化**
   文本框的边框、背景色可突出关键信息（如段落标题、特殊说明），提升可读性。
3. **多元素协同编辑**
   当谱文需混合乐谱图形与多段文字时，文本框支持自由拖拽和层叠，优于纯文本流式布局。

#### ⚠️ **非必要场景**
1. **基础文本编辑**
   若仅需在乐谱行间添加简单说明，直接输入文本更高效，无需额外封装为文本框。
2. **移动端优先设计**
   文本框拖拽在移动端体验较差，可能降低操作效率。

---

### ⚙️ **三、技术实现步骤（以自定义按钮为例）**
```javascript
tinymce.init({
  selector: "#editor",
  toolbar: "customtextbox", // 注册工具栏按钮
  setup: (editor) => {
    // 注册自定义按钮
    editor.ui.registry.addButton("customtextbox", {
      text: "插入文本框",
      onAction: () => {
        const textBox = editor.dom.add(editor.getBody(), "div", {
          class: "musical-textbox",
          contenteditable: "true",
          style: "border: 1px dashed #ccc; padding: 8px; margin: 10px;"
        });
        editor.dom.setHTML(textBox, "在此输入文本");
        // 添加拖拽逻辑（需配合第三方库如 interact.js）
        initDragElement(textBox);
      }
    });
  }
});
```
**关键点**：
- 使用 CSS 类（如 `.musical-textbox`）控制边框、背景等样式；
- 需引入拖拽库实现位置调整（如 `interact.js`）；
- 为兼容表单提交，需在保存时提取所有文本框的 HTML 内容。

---

### 💎 **四、总结与建议**
| **维度**         | **结论**                                                                 |
|------------------|-------------------------------------------------------------------------|
| **功能必要性**   | 仅当谱文需独立浮动文本区块时推荐添加，否则增加操作复杂度。             |
| **实现成本**     | 需开发自定义插件（约 1-2 人日），移动端需额外优化拖拽体验。            |
| **替代方案**     | 用 CSS 为普通文本添加背景色/边框，模拟文本框视觉效果（无需代码开发）。       |

**推荐决策**：
- **谱文工具专业版**：添加文本框功能，支持高级排版需求，提升专业性；
- **轻量版编辑器**：通过 CSS 样式模拟文本框，避免开发成本。

> 若需完整拖拽、缩放等交互，可参考 TinyMCE 官方案例：[自定义 UI 组件](https://www.tiny.cloud/docs/ui-components/custom-toolbar-button/)。



要在TinyMCE编辑器的**同一个`<textarea>`内实现标题和内容分区显示不同的placeholder**（如标题区提示"请输入标题"，内容区提示"请输入正文"），可通过以下两种方案实现：

---

### ⚙️ **方案一：使用`tinymce-placeholder`插件（推荐）**
此插件支持在编辑器内部创建独立占位符，需配合自定义内容结构实现分区效果。

#### **实现步骤：**
1. **安装插件**
   ```bash
   npm install tinymce-placeholder-attribute  # 或通过Bower/Yarn安装
   ```
   或直接引入插件脚本：
   ```html
   <script src="path/to/tinymce-placeholder-plugin.js"></script>
   ```

2. **初始化编辑器配置**
   在初始化时设置占位符文本和样式：
   ```javascript
   tinymce.init({
     selector: '#myeditor',
     plugins: 'placeholder',  // 启用插件
     // 初始内容：标题和正文分区结构
     init_instance_callback: (editor) => {
       editor.setContent(`
         <div class="title-placeholder" data-placeholder="请输入标题"></div>
         <div class="content-placeholder" data-placeholder="请输入正文"></div>
       `);
     },
     // 自定义占位符样式
     placeholder_attrs: {
       style: {
         color: '#999',
         'font-style': 'italic',
         padding: '10px'
       }
     }
   });
   ```

3. **CSS样式区分标题与正文**
   ```css
   /* 标题占位符 */
   .title-placeholder[data-placeholder]:empty::before {
     content: attr(data-placeholder);
     color: #333;
     font-weight: bold;
     font-size: 18px;
   }
   /* 正文占位符 */
   .content-placeholder[data-placeholder]:empty::before {
     content: attr(data-placeholder);
     color: #666;
     font-size: 14px;
   }
   ```

4. **事件处理（防误存占位符）**
   在提交前过滤占位符元素：
   ```javascript
   const content = editor.getContent().replace(/<div[^>]*data-placeholder[^>]*><\/div>/g, '');
   ```

---

### 🧩 **方案二：手动管理占位符（无插件）**
通过TinyMCE事件API动态控制分区占位符的显示/隐藏。

#### **实现步骤：**
1. **初始化内容结构**
   ```javascript
   tinymce.init({
     selector: '#myeditor',
     init_instance_callback: (editor) => {
       editor.setContent(`
         <div id="title-section" class="mce-placeholder">请输入标题</div>
         <div id="content-section" class="mce-placeholder">请输入正文</div>
       `);
     }
   });
   ```

2. **事件监听与切换逻辑**
   ```javascript
   setup: (editor) => {
     // 焦点事件：清空占位符
     editor.on('focus', (e) => {
       const target = e.target;
       if (target.id === 'title-section' && target.innerHTML === '请输入标题') {
         target.innerHTML = '';
         target.classList.remove('mce-placeholder');
       } else if (target.id === 'content-section' && target.innerHTML === '请输入正文') {
         target.innerHTML = '';
         target.classList.remove('mce-placeholder');
       }
     });

     // 失焦事件：恢复占位符
     editor.on('blur', (e) => {
       const titleSection = editor.dom.get('title-section');
       const contentSection = editor.dom.get('content-section');
       if (titleSection.innerHTML.trim() === '') {
         titleSection.innerHTML = '请输入标题';
         titleSection.classList.add('mce-placeholder');
       }
       if (contentSection.innerHTML.trim() === '') {
         contentSection.innerHTML = '请输入正文';
         contentSection.classList.add('mce-placeholder');
       }
     });
   }
   ```

3. **CSS样式定制**
   ```css
   #title-section.mce-placeholder {
     color: #333; font-weight: bold; border-bottom: 1px dashed #ddd; padding: 10px 0;
   }
   #content-section.mce-placeholder {
     color: #666; padding-top: 15px;
   }
   ```

---

### ⚠️ **关键注意事项**
1. **模式兼容性**
   `tinymce-placeholder`插件仅支持**经典模式**（非内联模式）[citation:6]，若使用内联模式需手动实现方案二。

2. **样式作用域**
   编辑器内部样式需通过`content_css`配置注入：
   ```javascript
   content_css: '/path/to/editor-styles.css'
   ```

3. **移动端适配**
   添加视口元标签确保移动端正常显示：
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

4. **内容安全过滤**
   提交前需移除占位符元素，避免存储无效数据：
   ```javascript
   const cleanContent = editor.getContent()
     .replace(/<div[^>]*class="mce-placeholder"[^>]*>.*?<\/div>/g, '');
   ```

---

### 💎 **两种方案对比**
| **特性**               | **插件方案**                          | **手动方案**                     |
|------------------------|-------------------------------------|--------------------------------|
| **开发复杂度**         | 低（配置即用）                       | 高（需自定义事件逻辑）            |
| **兼容性**             | 仅经典模式                          | 全模式支持                      |
| **维护性**             | 高（官方维护插件）                  | 中（需自行维护事件逻辑）          |
| **分区样式灵活性**     | 高（CSS直接控制）                   | 高（CSS直接控制）               |

---

**推荐场景**：
- 若项目使用**经典模式** → 优先选择**方案一**（插件），开发效率更高[citation:6][citation:8]。
- 若需**内联模式**或高度定制 → 选择**方案二**（手动管理），灵活性更强。

> 完整代码示例可参考 [GitHub - tinymce-placeholder](https://github.com/3014zhangshuo/tinymce-placeholder) 或 [TinyMCE官方文档](https://www.tiny.cloud/docs/)。



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

当编辑器渲染完成后，通过 editorRef.value 获取 editor 实例，即可调用它的 API 。参考 编辑器 API 。

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

### React

#### Demo

Demo 源码
在线 demo

#### 安装

```sh

yarn add @wangeditor/editor

# 或者 npm install @wangeditor/editor --save

yarn add @wangeditor/editor-for-react

# 或者 npm install @wangeditor/editor-for-react --save
```

#### 使用

```js

import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

function MyEditor() {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>')

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>')
    }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {} // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: '请输入内容...',
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>{html}</div>
    </>
  )
}

export default MyEditor
```

#### 配置

可通过 toolbarConfig 和 editorConfig 来修改菜单栏和编辑器的配置，详细文档参考

工具栏配置 - 插入新菜单，屏蔽某个菜单等
编辑器配置 - 兼听各个生命周期，自定义粘贴
菜单配置 - 配置颜色、字体、字号、链接校验、上传图片、视频等

#### 调用 API

当编辑器渲染完成后，即可调用它的 API 。参考 编辑器 API 。

```js

function insertText() {
    if (editor == null) return
    editor.insertText('hello')
}

return (
    <>
        <button onClick={insertText}>insert text</button>
        <div style={{ border: '1px solid #ccc', zIndex: 100}}>
            <Toolbar ... />
            <Editor ... />
        </div>
    </>
)
```

## 内容处理

### 获取内容

#### 获取 HTML 和 Text

使用 editor.getHtml() 获取 HTML 内容，可参考 demo。使用 editor.getText() 获取纯文本内容。

推荐使用 HTML 格式存储数据。

#### 获取 JSON

使用 editor.children 获取 JSON 内容。

JSON 格式可转换为 HTML 和 Text 格式，支持浏览器和 nodejs 。 如果是在 nodejs 中，需要安装 yarn add jsdom global-jsdom ，并且引入 require('global-jsdom/register')。

const editor = createEditor({ content }) // `content` 即为 JSON 内容
const html = editor.getHtml()
const text = editor.getText()

#### 自定义样式

编辑器输出或者生成的 HTML 都是纯标签，没有内联样式。所以，显示 HTML 时需要你自定义样式。可参考以下示例

- 显示 HTML
- 自定义样式

另外，代码高亮也需要自行处理，推荐使用 Prism.js ，因为编辑器内容内部也是基于 Prism.js 来实现的。可参考 demo。

### 设置内容

创建编辑器时，传入的默认内容。即编辑器创建完成后，立马显示这些内容。

#### 设置 HTML

【注意】这里的 HTML 内容必须是 wangEditor 生成的（即 editor.getHtml() 返回的） HTML 格式，不可以自己随意写。HTML 格式很灵活，wangEditor 无法兼容所有的 HTML 格式。

例如，wangEditor 可以识别 <strong>hello</strong> 为加粗，但无法识别 <span style="font-weight: bold;">hello</span> 等其他加粗方式。

#### 创建时设置 HTML

const editor = createEditor({
  html: '<p>hello <strong>world</strong></p>', // 从 editor.getHtml() 获取的 html 内容
  // 其他属性...
})

#### 动态设置 HTML

参考 demo

editor.setHtml('<p>hello <strong>world</strong></p>')
TIP

注意，setHtml 主要用于回显编辑器输出的 HTML ，即 editor.getHtml() 的内容。
如果想插入一段 HTML ，请使用 dangerouslyInsertHtml

#### 设置 Text

```js

// 1. 把 text 转换为 html
const text = '...' // text 内容
const html = text.split(/\n/).map(line => `<p>${line}</p>`).join('\n')

// 2. 设置 html
const editor = createEditor({
  html,
  // 其他属性...
})

// 3. 或，在创建完 editor 之后执行 setHtml
// editor.setHtml(html)
```

#### 设置 JSON

const editor = createEditor({
  content: [...], // editor.children 获取的内容
  // 其他属性
})

#### Ajax 异步设置内容

可等待 Ajax 返回后再创建编辑器。

```js


// 伪代码
import { IDomEditor } from '@wangeditor/editor'

let editor: IDomEditor | null = null   // TS 语法
// let editor = null                   // JS 语法

ajax(url, res => {
  editor = createEditor({
    // content 或 html
    // 其他属性
  })
})
```

## 配置和API

### 工具栏配置

TIP

wangEditor 从 V5 版本开始，工具栏配置和菜单配置（如配置颜色、字体、链接校验、上传图片等）分离了。本文只讲工具栏配置。

```js

import { IToolbarConfig } from '@wangeditor/editor'

const toolbarConfig: Partial<IToolbarConfig> = {  // TS 语法
// const toolbarConfig = {                        // JS 语法
    /*工具栏配置*/
}

// 创建 toolbar ，或者传入 Vue React <Toolbar> 组件中
```

#### getConfig

可通过 toolbar.getConfig() 查看工具栏的默认配置。
如果你使用 Vue React ，可以通过如下代码获取 toolbar 实例

```js

import { DomEditor } from '@wangeditor/editor'
const toolbar = DomEditor.getToolbar(editor)

const curToolbarConfig = toolbar.getConfig()
console.log(curToolbarConfig.toolbarKeys) // 当前菜单排序和分组
```

#### toolbarKeys

重新配置工具栏，显示哪些菜单，以及菜单的排序、分组。

- toolbar.getConfig().toolbarKeys 查看当前的默认配置
- editor.getAllMenuKeys() 查询编辑器注册的所有菜单 key （可能有的不在工具栏上）

```js

toolbarConfig.toolbarKeys = [
  // 菜单 key
  'headerSelect',

  // 分割线
  '|',

  // 菜单 key
  'bold',
  'italic',

  // 菜单组，包含多个菜单
  {
    key: 'group-more-style', // 必填，要以 group 开头
    title: '更多样式', // 必填
    iconSvg: '<svg>....</svg>', // 可选
    menuKeys: ['through', 'code', 'clearStyle'], // 下级菜单 key ，必填
  },
  // 继续配置其他菜单...
]
```

#### insertKeys

可以在当前 toolbarKeys 的基础上继续插入新菜单，如自定义扩展的菜单。

toolbarConfig.insertKeys = {
  index: 5, // 插入的位置，基于当前的 toolbarKeys
  keys: ['menu-key1', 'menu-key2'],
}

#### excludeKeys

如果仅仅想排除掉某些菜单，其他都保留，可以使用 excludeKeys 来配置。
可通过 toolbar.getConfig().toolbarKeys 查看工具栏的默认配置

toolbarConfig.excludeKeys = [
  'headerSelect',
  'italic',
  'group-more-style', // 排除菜单组，写菜单组 key 的值即可
]
如果你想排除某个菜单组，可通过 toolbar.getConfig().toolbarKeys 找到这个菜单组的 key 。

#### modalAppendToBody

将菜单弹出的 modal 添加到 body 下，并自定义 modal 的定位和其他样式。

```js

toolbarConfig.modalAppendToBody = true

// 创建 toolbar 和 editor

// 可监听 `modalOrPanelShow` 和 `modalOrPanelHide` 自定义事件来设置样式、蒙层
editor.on('modalOrPanelShow', modalOrPanel => {
    if (modalOrPanel.type !== 'modal') return
    const { $elem } = modalOrPanel // modal element

    // 设置 modal 样式（定位、z-index）
    // 显示蒙层
})
editor.on('modalOrPanelHide', () => {
    // 隐藏蒙层
})
```

### 编辑器配置

import { IEditorConfig } from '@wangeditor/editor'

const editorConfig: Partial<IEditorConfig> = {   // TS 语法
// const editorConfig = {                        // JS 语法
    /*编辑器配置*/
}

// 创建 editor 或传入 Vue React <Editor> 组件
TIP

可通过 editor.getConfig() 查看编辑器默认配置

#### placeholder

配置编辑器 placeholder

editorConfig.placeholder = '请输入内容...'

#### readOnly

配置编辑器是否只读，默认为 false

editorConfig.readOnly = true
只读状态可通过 editor.enable() 和 editor.disable() 切换，详见 API 。

#### autoFocus

配置编辑器默认是否 focus ，默认为 true

editorConfig.autoFocus = false

#### scroll

配置编辑器是否支持滚动，默认为 true 。注意，此时不要固定 editor-container 的高度，设置一个 min-height 即可。

editorConfig.scroll = false
TIP

可将 scroll 设置为 false 的情况：

编辑器高度自增
在线文档，如腾讯文档、语雀那样的，参考 demo 中的“仿腾讯文档”

#### maxLength onMaxLength

配置编辑器的 maxlength ，参考 demo。

import { IDomEditor } from '@wangeditor/editor'

editorConfig.maxLength = 1000
editorConfig.onMaxLength = function (editor: IDomEditor) {
  // TS 语法
  // editorConfig.onMaxLength = function (editor) {            // JS 语法
  // 当达到 maxlength 限制时，触发该回调函数
}
TIP

无特殊需求，请慎用 maxLength ，这可能会导致编辑器内容过多时，编辑卡顿。

#### hoverbarKeys

配置编辑器的 hoverbar 菜单。通过 editor.getConfig().hoverbarKeys 可查看当前的 hoverbarKeys

TIP

createEditor 时设置 mode: 'simple' 可隐藏选中文本时的 hoverbar 。

#### 使用 element type

可以通过元素 type 配置某种元素的 hoverbar

- 元素的 type 可通过 editor.children 查看，如下图
- 使用 editor.getAllMenuKeys() 可查看所有内置 menu key

```js

editorConfig.hoverbarKeys = {
  link: {
    // 重写 link 元素的 hoverbar
    menuKeys: ['editLink', 'unLink', 'viewLink'],
  },
  image: {
    // 清空 image 元素的 hoverbar
    menuKeys: [],
  },
}
```

#### 自定义 match 函数

如果 element type 无法满足需求，可通过自定义 match 函数匹配元素。

```js

import { SlateNode, IDomEditor } from '@wangeditor/editor'

editorConfig.hoverbarKeys = {
    'text': {
        // 如有 match 函数，则优先根据 match 判断，而忽略 element type
        match: (editor: IDomEditor, n: SlateNode) => {   // TS 语法
        // match: (editor, n) => {                       // JS 语法
            // 可参考下文的源码
        },
        menuKeys: [ ... ], // 定义你想要的 menu keys
    }
}
```

可参考 hoverbar 配置的源码。

#### onCreated

编辑器创建完毕时的回调函数。

```js

import { IDomEditor } from '@wangeditor/editor'

editorConfig.onCreated = (editor: IDomEditor) => {
  // TS 语法
  // editorConfig.onCreated = (editor) => {            // JS 语法
  // editor created
}
```

#### onChange

编辑器内容、选区变化时的回调函数。

import { IDomEditor } from '@wangeditor/editor'

editorConfig.onChange = (editor: IDomEditor) => {
  // TS 语法
  // editorConfig.onChange = (editor) => {            // JS 语法
  // editor changed
  console.log('content', editor.children)
}

#### onDestroyed

编辑器销毁时的回调函数。调用 editor.destroy() 即可销毁编辑器，详见 API 。

import { IDomEditor } from '@wangeditor/editor'

editorConfig.onDestroyed = (editor: IDomEditor) => {
  // TS 语法
  // editorConfig.onDestroyed = (editor) => {            // JS 语法
  // editor destroyed
}

#### onFocus

编辑器 focus 时的回调函数。

import { IDomEditor } from '@wangeditor/editor'

editorConfig.onFocus = (editor: IDomEditor) => {
  // TS 语法
  // editorConfig.onFocus = (editor) => {             // JS 语法
  // editor focused
}

#### onBlur

编辑器 blur 时的回调函数。

import { IDomEditor } from '@wangeditor/editor'

editorConfig.onBlur = (editor: IDomEditor) => {
  // TS 语法
  // editorConfig.onBlur = (editor) => {            // JS 语法
  // editor blur
}

#### customPaste

自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑。

```js

import { IDomEditor } from '@wangeditor/editor'

editorConfig.customPaste = (
  editor: IDomEditor,
  event: ClipboardEvent
): boolean => {
  // TS 语法
  // editorConfig.customPaste = (editor, event) => {                                       // JS 语法

  // event 是 ClipboardEvent 类型，可以拿到粘贴的数据
  // 可参考 <https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent>

  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 同步
  editor.insertText('xxx')

  // 异步
  setTimeout(() => {
    editor.insertText('yy')
  }, 1000)

  // 阻止默认的粘贴行为
  event.preventDefault()
  return false

  // 继续执行默认的粘贴行为
  // return true
}
```

#### customAlert

自定义编辑器 alert 。比如，想用 antd 的 message 功能。

```js

import { message } from 'antd'

editorConfig.customAlert = (s: string, t: string) => {
  // TS 语法
  // editorConfig.customAlert = (s, t) => {                 // JS 语法
  switch (t) {
    case 'success':
      message.success(s)
      break
    case 'info':
      message.info(s)
      break
    case 'warning':
      message.warning(s)
      break
    case 'error':
      message.error(s)
      break
    default:
      message.info(s)
      break
  }
}
```

#### EXTEND_CONF

用于第三方插件做扩展配置，如 mention 插件。

### 菜单配置

本文是各个菜单项的详细配置。如想要自定义工具栏的菜单（隐藏某些菜单、排序、分组等），请参考工具栏配置。

#### 通用方法

##### 确定 menu key

要配置哪个菜单，首先要知道这个菜单的 key 。执行 editor.getAllMenuKeys() 可获取编辑器所有菜单，从中找到自己想要的菜单 key 即可。

##### 获取菜单的默认配置

找到菜单 key 之后，可以先看看菜单的当前配置，再自行修改。

editor.getMenuConfig('uploadImage') // 获取 uploadImage 的当前配置

##### 修改配置

```js

import { IEditorConfig } from '@wangeditor/editor'

// 初始化 MENU_CONF 属性
const editorConfig: Partial<IEditorConfig> = {
  // TS 语法
  // const editorConfig = {                       // JS 语法
  MENU_CONF: {},

  // 其他属性...
}

// 修改 uploadImage 菜单配置
editorConfig.MENU_CONF['uploadImage'] = {
  server: '/api/upload-image',
  fieldName: 'custom-field-name',
  // 继续写其他配置...

  //【注意】不需要修改的不用写，wangEditor 会去 merge 当前其他配置
}

// 修改 otherMenuKey 菜单配置
editorConfig.MENU_CONF['otherMenuKey'] = {
  // 配置
}

// 创建 editor 或传入 Vue React <Editor> 组件
```

#### 颜色

```js

// 文字颜色
editorConfig.MENU_CONF['color'] = {
  colors: ['#000', '#333', '#666'],
}

// 背景色
editorConfig.MENU_CONF['bgColor'] = {
  colors: ['#000', '#333', '#666'],
}
```

#### 字号

```js

editorConfig.MENU_CONF['fontSize'] = {
  fontSizeList: [
    // 元素支持两种形式
    //   1. 字符串；
    //   2. { name: 'xxx', value: 'xxx' }

    '12px',
    '16px',
    { name: '24px', value: '24px' },
    '40px',
  ],
}
```

#### 字体

TIP

请注意，某些字体不能商用。具体请自行查找。

```js

editorConfig.MENU_CONF['fontFamily'] = {
  fontFamilyList: [
    // 元素支持两种形式
    //   1. 字符串；
    //   2. { name: 'xxx', value: 'xxx' }

    '黑体',
    '楷体',
    { name: '仿宋', value: '仿宋' },
    'Arial',
    'Tahoma',
    'Verdana',
```

  ],
}

#### 行高

editorConfig.MENU_CONF['lineHeight'] = {
  lineHeightList: ['1', '1.5', '2', '2.5'],
}

#### 表情

editorConfig.MENU_CONF['emotion'] = {
  emotions: '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉'.split(' '), // 数组
}

#### 链接

- checkLink 校验链接
- parseLinkUrl 转换链接 url

```js

// 自定义校验链接
function customCheckLinkFn(
  text: string,
  url: string
): string | boolean | undefined {
  // TS 语法
  // function customCheckLinkFn(text, url) {                                              // JS 语法

  if (!url) {
    return
  }
  if (url.indexOf('http') !== 0) {
    return '链接必须以 http/https 开头'
  }
  return true

  // 返回值有三种选择：
  // 1. 返回 true ，说明检查通过，编辑器将正常插入链接
  // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
}

// 自定义转换链接 url
function customParseLinkUrl(url: string): string {
  // TS 语法
  // function customParseLinkUrl(url) {                // JS 语法

  if (url.indexOf('http') !== 0) {
    return `http://${url}`
  }
  return url
}

// 插入链接
editorConfig.MENU_CONF['insertLink'] = {
  checkLink: customCheckLinkFn, // 也支持 async 函数
  parseLinkUrl: customParseLinkUrl, // 也支持 async 函数
}
// 更新链接
editorConfig.MENU_CONF['editLink'] = {
  checkLink: customCheckLinkFn, // 也支持 async 函数
  parseLinkUrl: customParseLinkUrl, // 也支持 async 函数
}
```

#### 图片

如果用于 Typescript ，需定义图片元素类型。可单独放在 .d.ts 中定义。

import { SlateElement } from '@wangeditor/editor'

type ImageElement = SlateElement & {
  src: string
  alt: string
  url: string
  href: string
}

图片菜单的配置

- onInsertedImage 插入图片之后的回调
- onUpdatedImage 更新图片之后的回调
- checkImage 校验图片链接
- parseImageSrc 转换图片链接

```js

// 自定义校验图片
function customCheckImageFn(
  src: string,
  alt: string,
  url: string
): boolean | undefined | string {
  // TS 语法
  // function customCheckImageFn(src, alt, url) {                                                    // JS 语法
  if (!src) {
    return
  }
  if (src.indexOf('http') !== 0) {
    return '图片网址必须以 http/https 开头'
  }
  return true

  // 返回值有三种选择：
  // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
  // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
}

// 转换图片链接
function customParseImageSrc(src: string): string {
  // TS 语法
  // function customParseImageSrc(src) {               // JS 语法
  if (src.indexOf('http') !== 0) {
    return `http://${src}`
  }
  return src
}

// 插入图片
editorConfig.MENU_CONF['insertImage'] = {
  onInsertedImage(imageNode: ImageElement | null) {
    // TS 语法
    // onInsertedImage(imageNode) {                    // JS 语法
    if (imageNode == null) return

    const { src, alt, url, href } = imageNode
    console.log('inserted image', src, alt, url, href)
  },
  checkImage: customCheckImageFn, // 也支持 async 函数
  parseImageSrc: customParseImageSrc, // 也支持 async 函数
}
// 编辑图片
editorConfig.MENU_CONF['editImage'] = {
  onUpdatedImage(imageNode: ImageElement | null) {
    // TS 语法
    // onUpdatedImage(imageNode) {                    // JS 语法
    if (imageNode == null) return

    const { src, alt, url } = imageNode
    console.log('updated image', src, alt, url)
  },
  checkImage: customCheckImageFn, // 也支持 async 函数
  parseImageSrc: customParseImageSrc, // 也支持 async 函数
}
```

#### 上传图片

上传图片的配置比较复杂，拆分为几个部分来讲解。可参考这个 demo。

editorConfig.MENU_CONF['uploadImage'] = {
    // 上传图片的配置
}

##### 服务端地址

必填，否则上传图片会报错。

editorConfig.MENU_CONF['uploadImage'] = {
  server: '/api/upload',
}
【特别注意】服务端 response body 格式要求如下：
上传成功的返回格式：

{
    "errno": 0, // 注意：值是数字，不能是字符串
    "data": {
        "url": "xxx", // 图片 src ，必须
        "alt": "yyy", // 图片描述文字，非必须
        "href": "zzz" // 图片的链接，非必须
    }
}
上传失败的返回格式：

{
    "errno": 1, // 只要不等于 0 就行
    "message": "失败信息"
}

TIP

如果你的服务端 response body 无法按照上述格式，可以使用下文的 customInsert

##### 基本配置

```js
editorConfig.MENU_CONF['uploadImage'] = {
  // form-data fieldName ，默认值 'wangeditor-uploaded-image'
  fieldName: 'your-custom-name',

  // 单个文件的最大体积限制，默认为 2M
  maxFileSize: 1 *1024* 1024, // 1M

  // 最多可上传几个文件，默认为 100
  maxNumberOfFiles: 10,

  // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
  allowedFileTypes: ['image/*'],

  // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
  meta: {
    token: 'xxx',
    otherKey: 'yyy',
  },

  // 将 meta 拼接到 url 参数中，默认 false
  metaWithUrl: false,

  // 自定义增加 http  header
  headers: {
    Accept: 'text/x-json',
    otherKey: 'xxx',
  },

  // 跨域是否传递 cookie ，默认为 false
  withCredentials: true,

  // 超时时间，默认为 10 秒
  timeout: 5 * 1000, // 5 秒
}
```

#### 回调函数

```js

editorConfig.MENU_CONF['uploadImage'] = {
  // 上传之前触发
  onBeforeUpload(file: File) {
    // TS 语法
    // onBeforeUpload(file) {    // JS 语法
    // file 选中的文件，格式如 { key: file }
    return file

    // 可以 return
    // 1. return file 或者 new 一个 file ，接下来将上传
    // 2. return false ，不上传这个 file
  },

  // 上传进度的回调函数
  onProgress(progress: number) {
    // TS 语法
    // onProgress(progress) {       // JS 语法
    // progress 是 0-100 的数字
    console.log('progress', progress)
  },

  // 单个文件上传成功后
  onSuccess(file: File, res: any) {
    // TS 语法
    // onSuccess(file, res) {          // JS 语法
    console.log(`${file.name} 上传成功`, res)
  },

  // 单个文件上传失败
  onFailed(file: File, res: any) {
    // TS 语法
    // onFailed(file, res) {           // JS 语法
    console.log(`${file.name} 上传失败`, res)
  },

  // 上传错误，或者触发 timeout 超时
  onError(file: File, err: any, res: any) {
    // TS 语法
    // onError(file, err, res) {               // JS 语法
    console.log(`${file.name} 上传出错`, err, res)
  },
}
```

#### 自定义功能

如果用于 Typescript ，则要定义插入函数的类型。

type InsertFnType = (url: string, alt: string, href: string) => void

##### 自定义插入

如果你的服务端 response body 无法按照上文规定的格式，则无法插入图片，提示失败。
但你可以使用 customInsert 来自定义插入图片。

```js

editorConfig.MENU_CONF['uploadImage'] = {
  // 自定义插入图片
  customInsert(res: any, insertFn: InsertFnType) {
    // TS 语法
    // customInsert(res, insertFn) {                  // JS 语法
    // res 即服务端的返回结果

    // 从 res 中找到 url alt href ，然后插入图片
    insertFn(url, alt, href)
  },
}
```

##### 自定义上传

如果你不想使用 wangEditor 自带的上传功能，例如你要上传到阿里云 OSS，那么可以通过 customUpload 来自定义上传。

```js

editorConfig.MENU_CONF['uploadImage'] = {
  // 自定义上传
  async customUpload(file: File, insertFn: InsertFnType) {
    // TS 语法
    // async customUpload(file, insertFn) {                   // JS 语法
    // file 即选中的文件
    // 自己实现上传，并得到图片 url alt href
    // 最后插入图片
    insertFn(url, alt, href)
  },
}
```

##### 自定义选择图片

如果你不想使用 wangEditor 自带的选择文件功能，例如你有自己的图床，或者图片选择器。
可以通过 customBrowseAndUpload 来自己实现选择图片、上传图片，并插入图片。

```js

editorConfig.MENU_CONF['uploadImage'] = {
  // 自定义选择图片
  customBrowseAndUpload(insertFn: InsertFnType) {
    // TS 语法
    // customBrowseAndUpload(insertFn) {              // JS 语法
    // 自己选择文件
    // 自己上传文件，并得到图片 url alt href
    // 最后插入图片
    insertFn(url, alt, href)
  },
}
```

#### base64 插入图片

editorConfig.MENU_CONF['uploadImage'] = {
  // 其他配置...

  // 小于该值就插入 base64 格式（而不上传），默认为 0
  base64LimitSize: 5 * 1024, // 5kb
}

#### 获取已删除的图片

这是一个常见的需求。

上传图片到编辑器，然后又把图片删除了。此时你可能想要拿到这张删除的图片，在服务器也把图片文件删了。

- 使用 onInsertedImage 来收集所有上传或插入的图片，记录为 imageList1
- 最后保存编辑器内容之前，使用 editor.getElemsByType('image') 获取当前编辑器的所有图片，记录为 imageList2
- 对比 imageList1 和 imageList2 ，两者的差异，就是删除过的图片

可能会有疑问：为何要在最后去对比？我想要在图片删除时就及时得到反馈。
但，这样是不行的，因为图片删除了，还可能会被撤销回来。所以，一定要在最后去操作。

#### 视频

如果用于 Typescript ，需定义视频元素类型。可单独放在 .d.ts 中定义。

import { SlateElement } from '@wangeditor/editor'

type VideoElement = SlateElement & {
  src: string
  poster?: string
}
菜单配置

- onInsertedVideo 插入视频之后的回调
- checkVideo 校验视频链接
- parseVideoSrc 转换视频链接

```js

// 自定义校验视频
function customCheckVideoFn(
  src: string,
  poster: string
): boolean | string | undefined {
  // TS 语法
  // function customCheckVideoFn(src, poster) {                                             // JS 语法
  if (!src) {
    return
  }
  if (src.indexOf('http') !== 0) {
    return '视频地址必须以 http/https 开头'
  }
  return true

  // 返回值有三种选择：
  // 1. 返回 true ，说明检查通过，编辑器将正常插入视频
  // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
}

// 自定义转换视频
function customParseVideoSrc(src: string): string {
  // TS 语法
  // function customParseVideoSrc(src) {               // JS 语法
  if (src.includes('.bilibili.com')) {
    // 转换 bilibili url 为 iframe （仅作为示例，不保证代码正确和完整）
    const arr = location.pathname.split('/')
    const vid = arr[arr.length - 1]
    return `<iframe src="//player.bilibili.com/player.html?bvid=${vid}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`
  }
  return src
}

editorConfig.MENU_CONF['insertVideo'] = {
  onInsertedVideo(videoNode: VideoElement | null) {
    // TS 语法
    // onInsertedVideo(videoNode) {                    // JS 语法
    if (videoNode == null) return

    const { src } = videoNode
    console.log('inserted video', src)
  },
  checkVideo: customCheckVideoFn, // 也支持 async 函数
  parseVideoSrc: customParseVideoSrc, // 也支持 async 函数
}
```

#### 上传视频

上传视频的配置比较复杂，拆分为几个部分来讲解。可参考这个 demo。

editorConfig.MENU_CONF['uploadVideo'] = {
    // 上传视频的配置
}

##### 服务端地址

必填，否则上传视频会报错。

editorConfig.MENU_CONF['uploadVideo'] = {
  server: '/api/upload',
}
【特别注意】服务端 response body 格式要求如下：
上传成功的返回格式：

{
  "errno": 0, // 注意：值是数字，不能是字符串
  "data": {
    "url": "xxx", // 视频 src ，必须
    "poster": "xxx.png" // 视频封面图片 url ，可选
  }
}

// 注意：@wangeditor/editor 版本 >= 5.1.8 才支持 video poster

上传失败的返回格式：

{
  "errno": 1, // 只要不等于 0 就行
  "message": "失败信息"
}
TIP

如果你的服务端 response body 无法按照上述格式，可以使用下文的 customInsert

##### 基本配置

```js

editorConfig.MENU_CONF['uploadVideo'] = {
  // form-data fieldName ，默认值 'wangeditor-uploaded-video'
  fieldName: 'your-custom-name',

  // 单个文件的最大体积限制，默认为 10M
  maxFileSize: 5 *1024* 1024, // 5M

  // 最多可上传几个文件，默认为 5
  maxNumberOfFiles: 3,

  // 选择文件时的类型限制，默认为 ['video/*'] 。如不想限制，则设置为 []
  allowedFileTypes: ['video/*'],

  // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
  meta: {
    token: 'xxx',
    otherKey: 'yyy',
  },

  // 将 meta 拼接到 url 参数中，默认 false
  metaWithUrl: false,

  // 自定义增加 http  header
  headers: {
    Accept: 'text/x-json',
    otherKey: 'xxx',
  },

  // 跨域是否传递 cookie ，默认为 false
  withCredentials: true,

  // 超时时间，默认为 30 秒
  timeout: 15 * 1000, // 15 秒

  // 视频不支持 base64 格式插入
}
```

##### 回调函数

```js

editorConfig.MENU_CONF['uploadVideo'] = {
  // 上传之前触发
  onBeforeUpload(file: File) {
    // TS 语法
    // onBeforeUpload(file) {      // JS 语法
    // file 选中的文件，格式如 { key: file }
    return file

    // 可以 return
    // 1. return file 或者 new 一个 file ，接下来将上传
    // 2. return false ，不上传这个 file
  },

  // 上传进度的回调函数
  onProgress(progress: number) {
    // TS 语法
    // onProgress(progress) {       // JS 语法
    // progress 是 0-100 的数字
    console.log('progress', progress)
  },

  // 单个文件上传成功之后
  onSuccess(file: File, res: any) {
    // TS 语法
    // onSuccess(file, res) {          // JS 语法
    console.log(`${file.name} 上传成功`, res)
  },

  // 单个文件上传失败
  onFailed(file: File, res: any) {
    // TS 语法
    // onFailed(file, res) {          // JS 语法
    console.log(`${file.name} 上传失败`, res)
  },

  // 上传错误，或者触发 timeout 超时
  onError(file: File, err: any, res: any) {
    // TS 语法
    // onError(file, err, res) {               // JS 语法
    console.log(`${file.name} 上传出错`, err, res)
  },
}
```

##### 自定义功能

如果用于 Typescript ，则要定义插入函数的类型。

type InsertFnType = (url: string, poster: string = '') => void

###### 自定义插入

如果你的服务端 response body 无法按照上文规定的格式，则无法插入视频，提示失败。
但你可以使用 customInsert 来自定义插入视频。

```js

editorConfig.MENU_CONF['uploadVideo'] = {
  // 自定义插入视频
  customInsert(res: any, insertFn: InsertFnType) {
    // TS 语法
    // customInsert(res, insertFn) {                  // JS 语法
    // res 即服务端的返回结果

    // 从 res 中找到 url poster ，然后插入视频
    insertFn(url, poster)
  },
}
```

###### 自定义上传

如果你不想使用 wangEditor 自带的上传功能，例如你要上传到阿里云 OSS 。
可以通过 customUpload 来自定义上传。

```js

editorConfig.MENU_CONF['uploadVideo'] = {
  // 自定义上传
  async customUpload(file: File, insertFn: InsertFnType) {
    // TS 语法
    // async customUpload(file, insertFn) {                   // JS 语法
    // file 即选中的文件
    // 自己实现上传，并得到视频 url poster
    // 最后插入视频
    insertFn(url, poster)
  },
}
```

###### 自定义选择视频

如果你不想使用 wangEditor 自带的选择文件功能，例如你有自己的图床，或者视频文件选择器。
可以通过 customBrowseAndUpload 来自己实现选择视频、上传视频，并插入视频。

```js

editorConfig.MENU_CONF['uploadVideo'] = {
  // 自定义选择视频
  customBrowseAndUpload(insertFn: InsertFnType) {
    // TS 语法
    // customBrowseAndUpload(insertFn) {             // JS 语法
    // 自己选择文件
    // 自己上传文件，并得到视频 url poster
    // 最后插入视频
    insertFn(url, poster)
  },
}
```

#### 代码高亮

codeLangs 配置代码语言

```js

```

editorConfig.MENU_CONF['codeSelectLang'] = {
  // 代码语言
  codeLangs: [
    { text: 'CSS', value: 'css' },
    { text: 'HTML', value: 'html' },
    { text: 'XML', value: 'xml' },
    // 其他
  ],
}
TIP

配置代码语言时，只能从 editor.getMenuConfig('codeSelectLang').codeLangs 中选择，不能自己随意增加。 如有其他语言的需要，可以给我们提交 issue ，这需要修改源码。

#### 其他

其他菜单的配置，请参考上文的 通用方法 自行修改。

### 编辑器API

#### config 相关

##### getConfig

获取编辑器所有配置

editor.getConfig()

##### getMenuConfig

获取单个 menu 的配置。menu 配置相关的可参考这里。

editor.getMenuConfig(menuKey)

##### getAllMenuKeys

获取编辑器所有 menu 的 key

editor.getAllMenuKeys()

##### alert

编辑器 alert ，可通过 customAlert 配置。

editor.alert('错误信息', 'error')

#### 内容处理

##### handleTab

控制编辑器按 tab 键时，输入什么。默认如下

editor.handleTab = () => editor.insertText('    ')

##### getHtml

editor.getHtml() 获取非格式化的 html

<p>head</p><p>hello <strong>word</strong></p>
你可以自行格式化 html ，如使用 xml-formatter

##### getText

获取当前编辑器的纯文本内容

const text = editor.getText()

##### setHtml

重置编辑器的 HTML 内容。【注意】只能解析 editor.getHtml() 返回的 HTML 格式，不支持自定义 HTML 格式。

editor.setHtml('<p>hello</p>')
如果想插入一段 HTML ，请使用 dangerouslyInsertHtml

##### isEmpty

判断当前编辑器内容是否为空（只有一个空段落）

editor.isEmpty()
TIP

该方法只能识别只有一个空段落的情况，其他情况（如有一个空标题、空表格）请使用 editor.getText() 来判断。

##### getSelectionText

获取选中的文本

editor.getSelectionText()

##### getElemsByType

通过 type 获取编辑器的 element 列表。

editor.getElemsByType('image') // 所有图片
editor.getElemsByType('link') // 所有链接
// 其他

##### getElemsByTypePrefix

通过 type 前缀获取编辑器的 element 列表。

editor.getElemsByTypePrefix('header') // 获取所有标题 header1 header2 header3...
// 其他

##### deleteBackward

向后删除，相当于按 backspace 键。

editor.deleteBackward()

##### deleteForward

向后删除，相当于按 delete 键（部分键盘没有这个键）

editor.deleteForward()

##### deleteFragment

删除选中的内容

editor.deleteFragment()

##### getFragment

获取选中的内容，json 格式

editor.getFragment()

##### insertBreak

在选区回车换行

editor.insertBreak()

##### insertText

在选区插入文本

editor.insertText('xxx')

##### dangerouslyInsertHtml

如果是 editor.getHtml() 获取的 HTML 格式，可以完美解析。
如果是其他的 HTML 格式，则不能保证语义正确 —— dangerously 。
editor.dangerouslyInsertHtml(`<h1>标题</h1><p>文本 <b>加粗</b></p>`)
TIP

如果你想重置编辑器 HTML 内容，请使用 setHtml

##### clear

清空编辑器内容

editor.clear()

##### undo

撤销

editor.undo()

##### redo

重做

editor.redo()

#### 节点操作

使用节点操作 API 前，请查看 节点数据结构 。

##### insertNode

在选区插入一个节点

const node = { type: 'paragraph', children: [{ text: 'simple text' }] }
editor.insertNode(node)

##### insertNodes

在选区插入多个节点

import { SlateTransforms } from '@wangeditor/editor'

const node1 = { type: 'paragraph', children: [{ text: 'aaa' }] }
const node2 = { type: 'paragraph', children: [{ text: 'bbb' }] }
const nodeList = [node1, node2]

SlateTransforms.insertNodes(editor, nodeList)

##### removeNodes

删除选区所在的节点

import { SlateTransforms } from '@wangeditor/editor'

SlateTransforms.removeNodes(editor)

##### 获取选中节点

可使用 SlateEditor.nodes 获取选中的节点。详情可参考 Slate.js 中的 Editor.nodes API 。

```js

import { SlateEditor, SlateElement, SlateNode } from '@wangeditor/editor'

const nodeEntries = SlateEditor.nodes(editor, {
    match: (node: SlateNode) => {  // TS syntax
    // match: (node) => {          // JS syntax
        if (SlateElement.isElement(node)) {
            if (node.type === 'paragraph') {
                return true // 匹配 paragraph
            }
        }
        return false
    },
    universal: true,
})

if (nodeEntries == null) {
    console.log('当前未选中的 paragraph')
} else {
    for (let nodeEntry of nodeEntries) {
        const [node, path] = nodeEntry
        console.log('选中了 paragraph 节点', node)
        console.log('节点 path 是', path)
    }
}
```

##### setNodes

设置选中节点的属性

import { SlateTransforms } from '@wangeditor/editor'

SlateTransforms.setNodes(editor, {
  // @ts-ignore
  textAlign: 'right'
}, {
  mode: 'highest' // 针对最高层级的节点
})

##### getParentNode

获取一个节点的父节点

const parentNode = editor.getParentNode(node) // 返回 node 或者 null

##### toDOMNode

获取一个节点对应的 DOM 节点

const elem = editor.toDOMNode(node) // 返回 HTMLElement

##### isInline

判断一个节点是否是 inline

const inline = editor.isInline(node)

##### isVoid

判断一个节点是否是 void

const void = editor.isVoid(node)

TIP
void node 即没有子元素的节点（它本身就可看作是一个特殊字符），例如 image video 。可参考 html void element 定义。

你可以通过 editor.isVoid 自定义哪些元素是 void ，但需要详细学习 slate 。

##### isText

判断一个节点是否是 text

import { SlateText } from '@wangeditor/editor'

SlateText.isText(node) // true/false

##### isElement

判断一个节点是否是 elem

import { SlateElement } from '@wangeditor/editor'

SlateElement.isElement(node) // true/false

##### addMark

为选中的文本添加标记（文本样式）

editor.addMark('bold', true)     // 加粗
editor.addMark('color', '#999')  // 文本颜色

##### removeMark

对选中的文字，取消标记（文本样式）

editor.removeMark('bold') // 取消加粗

##### marks

获取选中文字的标记（文本样式）

import { SlateEditor } from '@wangeditor/editor'

SlateEditor.marks(editor) // 例如 { bold: true, color: "#595959" }

#### DOM 相关

##### id 属性

获取编辑器 id

editor.id // 如 'wangEditor-1'

##### isFullScreen 属性

编辑器是否全屏

editor.isFullScreen // true/false

##### focus

聚焦到编辑器

editor.focus()

// editor.focus(true) // 选区定位到最后

##### blur

失焦编辑器

editor.blur()

##### isFocused

判断当前编辑器是否聚焦？

editor.isFocused() // true/false

##### updateView

强制更新视图

editor.updateView()

TIP
updateView 是内部 API ，不建议用户使用。如要使用，也请勿频繁执行。

##### scrollToElem

滚动到指定元素，类似锚点。如滚动到某个标题的位置。可实现标题目录，参考 demo。

可根据 toDOMNode 获取 node 对应的 DOM 元素。

editor.scrollToElem(elemId)

##### showProgressBar

显示进度条，一般用于上传功能

editor.showProgressBar(progress) // progress 为 0-100 的数字

##### hidePanelOrModal

隐藏当前的弹框 （如插入链接） 和下拉列表（如设置标题、设置字体）

editor.hidePanelOrModal()

##### fullScreen

设置为全屏

editor.fullScreen()
TIP

全屏功能，有 html 结构的要求，请参考这里

##### unFullScreen

取消全屏

editor.unFullScreen()

##### disable

禁用编辑器，设置为只读

editor.disable()

##### isDisabled

判断当前编辑器是否只读？

editor.isDisabled() // true/false

##### enable

取消禁用，取消只读

editor.enable()

##### destroy

销毁编辑器和工具栏

editor.destroy()
TIP

*destroy 仅仅是移除编辑器、工具栏的 DOM 节点，全局绑定的事件等。自己定义的变量，如 const editor = createEditor({...}) ，这个 editor 还需要自己来销毁。*

##### 获取编辑区域容器 DOM

获取编辑区域容器 DOM 节点

editor.getEditableContainer()

#### selection 相关

selection 数据结构参考 slate Location 。

##### selection 属性

获取编辑器当前的选区。如果未选中，则返回 null 。

editor.selection // selection 或 null
selection 数据结构如下：

{
  "anchor": { "path": [1,0], "offset":8 },
  "focus": { "path": [1,0], "offset":10 }
}

##### select

选中一个指定的选区。

const newSelection = {
  anchor: { path: [1,0], offset:8 },
  focus: { path: [1,0], offset:10 }
}
editor.select(newSelection)

##### selectAll

选中所有内容

editor.selectAll()

##### deselect

取消选中

editor.deselect()

##### move

移动光标

editor.move(3) // 移动 3 个字符

##### moveReverse

反向移动光标

editor.moveReverse(2) // 反向移动 2 个字符

##### restoreSelection

恢复最近一次非 null 选区。如编辑器 blur 之后，再重新恢复选区。

editor.restoreSelection()

##### isSelectedAll

判断编辑器是否全部选中。

editor.isSelectedAll() // true/false

##### getSelectionPosition

获取选区的定位，将视情况返回 left right top bottom 的其中几个。

editor.getSelectionPosition() // 例如 { left: "80.15px", top: "116px" }
【注意】该定位是相对于编辑区域的，而非 body 。
你可以获取编辑区域 DOM 元素的定位 editor.getEditableContainer().getBoundingClientRect() 从而计算出相对于 body 的定位。

##### getNodePosition

获取某个节点的定位，将视情况返回 left right top bottom 的其中几个。

editor.getNodePosition(node) // 例如 { left: "80.15px", top: "116px" }
【注意】该定位是相对于编辑区域的，而非 body。
你可以获取编辑区域 DOM 元素的定位 editor.getEditableContainer().getBoundingClientRect()， 从而计算出相对于 body 的定位。

##### 自定义事件

wangEditor 使用 event-emitter 来做自定义事件。

##### on

监听某个事件

editor.on('event-key', fn)

##### off

取消监听

editor.off('event-key', fn)

##### once

只监听一次

editor.once('event-key', fn)

##### emit

触发事件

editor.emit('event-key')

##### 内置的事件

editor.on('fullScreen', () => { console.log('fullScreen') })
editor.on('unFullScreen', () => { console.log('unFullScreen') })
editor.on('scroll', () => { console.log('scroll') })
editor.on('modalOrPanelShow', modalOrPanel => { console.log(modalOrPanel) })
editor.on('modalOrPanelHide', () => { console.log('modalOrPanelHide') })

#### 使用 slate 解锁更多 API

wangEditor 基于 slate.js（但不依赖 React）开发

上文已列出了比较常用的 API ，但这并非全部。 slate.js 还提供了更多 API ，可满足你的所有操作需求。

##### Transforms API

参考 slate Transforms API

使用如下方式即可得到 slate Transforms 对象，不用再单独安装 slate 。

import { SlateTransforms } from '@wangeditor/editor'

##### Node Editor API

参考 slate Node API

使用如下方式即可得到 slate Node 相关对象，不用再单独安装 slate 。

import { SlateEditor, SlateNode, SlateElement, SlateText } from '@wangeditor/editor'

##### Location API

参考 slate Location API

使用如下方式即可得到 slate Location 相关对象，不用再单独安装 slate 。

import { SlateLocation, SlatePath, SlatePoint, SlateRange } from '@wangeditor/editor'

## 高级

### 节点数据结构

wangEditor 是基于 slate.js 为内核开发的，所以学习本文之前，要先了解 slate Node 设计 。

#### 是什么

很多同学可能根本不知道本文要讲什么，对于这里的“节点”和“数据结构”也不知何意。
没关系，接下来通过几个问题，就可以让你快速入门。

我们通过 API 的学习，已经知道了 wangEditor 有丰富的 API 可供使用。
那么问题来了：

editor.addMark(key, value) 可以设置文本样式，如何设置删除线呢？此时 key value 该咋写？

editor.insertNode(node) 可以插入一个节点，如何插入一个链接呢？此时 node 该咋写？

SlateTransforms.setNodes(editor, {...}) 可以设置节点的属性，如何设置行高呢？此时 {...} 这个属性
该咋写？

通过上述问题，你大概知道了本文的目的 —— 就是告诉你，编辑器内所有内容、节点的数据结构 —— 它们都是由哪些数据构成的？

#### 快速了解

如果想快速了解各个节点的数据结构，其实方法很简单。

创建一个编辑器，操作一下
查看 editor.children
例如，写一段文字、设置一个标题或列表，查看 editor.children 即可看到它们的数据结构

再例如，对文字设置行高和文本样式，查看 editor.children 即可看到它们的数据结构

#### Text Node

文本节点，例如 { text: 'hello' } 必须有 text 属性。还可以自定义属性，例如加粗的文本可表示为 { text: 'hello', bold: true } ，其他属性可自行扩展。

注意，文本节点是底层节点，所以没有子节点，没有 children 属性。

#### Element Node

元素节点，例如 { type: 'header1', children: [ { text: 'hello' } ] } 必须有两个属性 type 和 children 属性。还可以自定义属性，例如居中对齐可表示为 { type: 'header1', textAlign: 'center', children: [ { text: 'hello' } ] } ，其他属性自行扩展。

#### Inline Element

元素默认是 block 显示，即占满一整行。但有些元素需要变为 inline 显示，如 <img> <a> 等。

我们可以通过插件来修改 isInline 把一个元素改为 inline ，参考链接元素的插件源码。

#### Void Element

有些元素需要定义为 void 类型（即没有子节点），例如 <img> <video> 等。

我们可以通过插件来修改 isVoid 把一个元素改为 void ，参考图片元素的插件源码。

注意，void 类型虽然在语义上没有子节点，但 slate.js 规定，它必须有一个 children 属性，其中只有一个空字符串。例如图片元素：

{
    type: 'image',
    // 其他属性 ...
    children: [{ text: '' }] // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
}

#### 各种节点的数据结构

详细的节点数据结构，可以直接查看源码中 type 定义。

文本样式 - 扩展 text node 属性
文字颜色 背景色 - 扩展 text node 属性
段落 - 定义 element node
行高 - 扩展 element node 属性
字号 字体 - 扩展 text node 属性
对齐 - 扩展 element node 属性
缩进 - 扩展 element node 属性
链接 - 定义 inline element node
标题 - 定义 element node
引用 - 定义 element node

图片 - 定义 inline void element node

分割线 - 定义 void element node
代码块 - 定义 element node
列表 - 定义 element node
表格 - 定义 element node

视频 - 定义 void element node

### 自定义扩展新功能

wangEditor 从 V5 开始，源码上就分离了 core editor 还有各个 module 。
core 是核心 API ，editor 负责汇总集成。所有的具体功能，都分布在各个 module 中来实现。

基于这种扩展性，官方开发了几个常用插件，其源码也可作为二次开发的参考。

#### 注册新菜单

菜单分为几种

ButtonMenu 按钮菜单，如 加粗、斜体
SelectMenu 下拉菜单，如 标题、字体、行高
DropPanelMenu 下拉面板菜单，如 字体颜色、创建表格
ModalMenu 弹出框菜单，如 插入链接、插入网络图片

##### ButtonMenu

可参考这个 demo 网页源码。在实际开发中，会用到很多 editor API 。

第一，定义菜单 class

```js

import { IButtonMenu, IDomEditor } from '@wangeditor/editor'

class MyButtonMenu implements IButtonMenu {
  // TS 语法
  // class MyButtonMenu {                       // JS 语法

  constructor() {
    this.title = 'My menu title' // 自定义菜单标题
    // this.iconSvg = '<svg>...</svg>' // 可选
    this.tag = 'button'
  }

  // 获取菜单执行时的 value ，用不到则返回空字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    // getValue(editor) {                              // JS 语法
    return ' hello '
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    // isActive(editor) {                    // JS 语法
    return false
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    // isDisabled(editor) {                     // JS 语法
    return false
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    // TS 语法
    // exec(editor, value) {                              // JS 语法
    if (this.isDisabled(editor)) return
    editor.insertText(value) // value 即 this.value(editor) 的返回值
  }
}
```

第二，注册菜单到 wangEditor

第三，插入菜单到工具栏

到此，自定义菜单就已经注册成功了，参考这个 demo

##### SelectMenu

可参考这个 demo 网页源码。在实际开发中，会用到很多 editor API 。

第一，定义菜单 class

```js

import { IDomEditor, ISelectMenu } from '@wangeditor/editor'

class MySelectMenu implements ISelectMenu {
  // TS 语法
  // class MySelectMenu {                       // JS 语法

  constructor() {
    ;(this.title = 'My Select Menu'), (this.tag = 'select')
    this.width = 60
  }

  // 下拉框的选项
  getOptions(editor: IDomEditor) {
    // TS 语法
    // getOptions(editor) {            // JS 语法
    const options = [
      {
        value: 'beijing',
        text: '北京',
        styleForRenderMenuList: { 'font-size': '32px', 'font-weight': 'bold' },
      },
      { value: 'shanghai', text: '上海', selected: true },
      { value: 'shenzhen', text: '深圳' },
    ]
    return options
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    // isActive(editor) {                      // JS 语法
    return false
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    // getValue(editor) {                               // JS 语法
    return 'shanghai' // 匹配 options 其中一个 value
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    // isDisabled(editor) {                     // JS 语法
    return false
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    // TS 语法
    // exec(editor, value) {                              // JS 语法
    // Select menu ，这个函数不用写，空着即可
  }
}
```

第二，注册菜单到 wangEditor

第三，插入菜单到工具栏

到此，自定义菜单就已经注册成功了，参考这个 demo

##### DropPanelMenu

可参考这个 demo 网页源码。在实际开发中，会用到很多 editor API 。

第一，定义菜单 class

```js

import { IDomEditor, IDropPanelMenu } from '@wangeditor/editor'

class MyDropPanelMenu implements IDropPanelMenu {
  // TS 语法
  // class MyDropPanelMenu {                           // JS 语法

  constructor() {
    this.title = 'My menu'
    // this.iconSvg = '<svg >...</svg>'
    this.tag = 'button'
    this.showDropPanel = true
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    // isActive(editor) {                      // JS 语法
    return false
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    // getValue(editor) {                               // JS 语法
    return ''
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    // isDisabled(editor) {                     // JS 语法
    return false
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    // TS 语法
    // exec(editor, value) {                              // JS 语法
    // DropPanel menu ，这个函数不用写，空着即可
  }

  // 定义 DropPanel 内部的 DOM Element
  getPanelContentElem(editor: IDomEditor): DOMElement {
    // TS 语法
    // getPanelContentElem(editor) {                        // JS 语法
    const $list = $(`<ul>
            <li>北京</li> <li>上海</li> <li>深圳</li>
          </ul>`)

    $list.on('click', 'li', function () {
      editor.insertText(this.innerHTML)
      editor.insertText(' ')
    })

    return $list[0] // 返回 DOM Element 类型

    // PS：也可以把 $list 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
  }
}
```

第二，注册菜单到 wangEditor

第三，插入菜单到工具栏

到此，自定义菜单就已经注册成功了，参考这个 demo

##### ModalMenu

可参考这个 demo 网页源码。在实际开发中，会用到很多 editor API 。

第一，定义菜单 class

```js

import { IDomEditor, IModalMenu, SlateNode } from '@wangeditor/editor'

class MyModalMenu implements IModalMenu {
  // TS 语法
  // class MyModalMenu {                       // JS 语法

  constructor() {
    this.title = 'My menu'
    // this.iconSvg = '<svg >...</svg>'
    this.tag = 'button'
    this.showModal = true
    this.modalWidth = 300
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    // isActive(editor) {                      // JS 语法
    return false
  }

  // 获取菜单执行时的 value ，用不到则返回空字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    // getValue(editor) {                               // JS 语法
    return ''
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    // isDisabled(editor) {                     // JS 语法
    return false
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    // TS 语法
    // exec(editor, value) {                              // JS 语法
    // Modal menu ，这个函数不用写，空着即可
  }

  // 弹出框 modal 的定位：1. 返回某一个 SlateNode； 2. 返回 null （根据当前选区自动定位）
  getModalPositionNode(editor: IDomEditor): SlateNode | null {
    // TS 语法
    // getModalPositionNode(editor) {                             // JS 语法
    return null // modal 依据选区定位
  }

  // 定义 modal 内部的 DOM Element
  getModalContentElem(editor: IDomEditor): DOMElement {
    // TS 语法
    // getModalContentElem(editor) {                        // JS 语法

    const $content = $('<div></div>')
    const $button = $('<button>do something</button>')
    $content.append($button)

    $button.on('click', () => {
      editor.insertText(' hello ')
    })

    return $content[0] // 返回 DOM Element 类型

    // PS：也可以把 $content 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
  }
}
```

第二，注册菜单到 wangEditor

第三，插入菜单到工具栏

到此，自定义菜单就已经注册成功了，参考这个 demo

###### 用 Vue React 组件实现 modal

如果你用 Vue React 开发了 modal 组件，想通过菜单来显示/隐藏

不用 ModalMenu ，改用最简单的 ButtonMenu
在 exec 函数中通过自定义事件（或其他方式）来控制 modal 组件的显示和隐藏
可再参考这个分享：在 React 中更方便的扩展 Menu ，替代原有的 ModalMenu 方案

##### 注册菜单到 wangEditor

先根据菜单 class 来定义菜单配置

```js

const menu1Conf = {
  key: 'menu1', // 定义 menu key ：要保证唯一、不重复（重要）
  factory() {
    return new YourMenuClass() // 把 `YourMenuClass` 替换为你菜单的 class
  },
}
// const menu2Conf = { ... }
// const menu3Conf = { ... }
然后，再把菜单注册到 wangEditor 。有两种选择：

第一，如果只注册一个菜单，没有别的功能了，则推荐使用 registerMenu

import { Boot } from '@wangeditor/editor'

Boot.registerMenu(menu1Conf)
第二，如果除了菜单之外还要同时注册其他能力，则建议使用 registerModule

import { Boot, IModuleConf } from '@wangeditor/editor'

const module: Partial<IModuleConf> = {
  // TS 语法
  // const module = {                      // JS 语法

  menus: [menu1Conf, menu2Conf, menu3Conf],

  // 其他功能，下文讲解...
}
Boot.registerModule(module)
```

TIP：

- 必须在创建编辑器之前注册
- 全局只能注册一次，不要重复注册

##### 插入菜单到工具栏

在创建编辑器（或渲染 Vue React 组件时）注册到工具栏，可选择以下方式

注册到工具栏 insertKeys
注册到悬浮菜单 hoverbarKeys

#### 劫持编辑器事件和操作（插件）

如支持 markdown 语法，以及 ctrl + enter 回车等。可参考它们的源码。

##### 定义插件

在实际开发中，会用到很多 editor API 。

```js

import { IDomEditor } from '@wangeditor/editor'

function withBreakAndDelete<T extends IDomEditor>(editor: T): T {
  // TS 语法
  // function withBreakAndDelete(editor) {                            // JS 语法

  const { insertBreak, deleteBackward } = editor // 获取当前 editor API
  const newEditor = editor

  // 重写 insertBreak 换行
  newEditor.insertBreak = () => {
    // if: 是 ctrl + enter ，则执行 insertBreak
    insertBreak()

    // else: 则不执行换行
    return
  }

  // 重写 deleteBackward 向后删除
  newEditor.deleteBackward = (unit) => {
    // if： 某种情况下，执行默认的删除
    deleteBackward(unit)

    // else: 其他情况，则不执行删除
    return
  }

  // 重写其他 API ...

  // 返回 newEditor ，重要！
  return newEditor
}
```

##### 注册插件到 wangEditor

有两种方式。

第一，如果你仅仅注册一个插件，没有别的需求，则推荐使用 registerPlugin

```js

import { Boot } from '@wangeditor/editor'

Boot.registerPlugin(withBreakAndDelete)
```

第二，如果你除了注册插件之外，同时还注册其他功能，则推荐使用 registerModule

```js

import { Boot, IModuleConf } from '@wangeditor/editor'

const module: Partial<IModuleConf> = {
  // TS 语法
  // const module = {                      // JS 语法

  // menus: [menu1Conf, menu2Conf, menu3Conf], // 菜单
  editorPlugin: withBreakAndDelete, // 插件

  // 其他功能，下文讲解...
}
Boot.registerModule(module)
```

TIP

必须在创建编辑器之前注册
全局只能注册一次，不要重复注册

至此一个插件就注册完成，可以监听编辑器的 insertBreak 和 deleteBackward 事件。

#### 定义新元素

编辑器默认只有基本的标题、列表、文字、图片、表格等元素，如果你想让编辑器渲染一个新元素，如 *附件 数学公式 链接卡片* 等，那么你就需要根据本节内容来定义。

编辑器的输入和输出通常都是 HTML ，但其内部却有复杂的渲染机制，主要过程是：model -> 生成 vdom -> 渲染 DOM，如下图。

所以，我们也需要了解很多知识，定义很多函数来完成这一功能。不过别担心，其实并不难理解，跟着文档一步步操作即可。

##### 定义节点数据结构

数据驱动视图，这也是 Vue React 的设计思路。要想显示啥，必须先定义相应的数据结构。

在此需要你详细了解 wangEditor 节点数据结构的相关知识，并熟悉以下知识点：

- Text node 和 Element node的区别
- 如何扩展 Text node 和 Element node的属性
- 如何设置 Inline node
- 如何设置 Void node ，以及它的 children 有何特点

例如，对“附件”元素，我们设计为： type: 'attachment' + inline + void ，然后扩展一些必要属性，数据结构示例：

```js

const myResume: AttachmentElement = {  // TS 语法
// const resume = {                    // JS 语法
  type: 'attachment'
  fileName: 'resume.pdf'
  link: '<https://xxx.com/files/resume.pdf>'
  children: [{ text: '' }]  // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
}
```

如果你使用 TS ， AttachmentElement 的定义在这里。

##### 定义 inline 和 void

我们把“附件”元素设计为 inline 和 void ，就需要在代码中体现出来。

第一，定义一个插件，重写 isInline 和 isVoid API

```js

import { DomEditor, IDomEditor } from '@wangeditor/editor'

function withAttachment<T extends IDomEditor>(editor: T) {
  // TS 语法
  // function withAttachment(editor) {                        // JS 语法
  const { isInline, isVoid } = editor
  const newEditor = editor

  newEditor.isInline = (elem) => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'attachment') return true // 针对 type: attachment ，设置为 inline
    return isInline(elem)
  }

  newEditor.isVoid = (elem) => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'attachment') return true // 针对 type: attachment ，设置为 void
    return isVoid(elem)
  }

  return newEditor // 返回 newEditor ，重要！！！
}
```

第二，把插件 withAttachment 注册到 wangEditor ，参考上文。

##### 在编辑器中渲染新元素

数据结构定义好了，但编辑器现在还不认识它，执行 editor.insertNode(myResume) 也不会有任何效果。接下来就需要让编辑器认识它，能根据 myResume 的数据，渲染出我们想要的 UI 界面。

###### 安装 snabbdom.js

```sh

yarn add snabbdom --peer

# 安装到 package.json 的 peerDependencies 中即可
```

编辑器的内部渲染使用了 VDOM 技术，snabbdom.js 是一个优秀的 VDOM diff 工具。

我们主要会用到它的 h 函数，你可以先在文档中了解一下。

###### 定义 renderElem 函数

以下是“附件”元素 renderElem 的代码示例，完整代码请参考它的源码

```js

import { h, VNode } from 'snabbdom'
import { IDomEditor, SlateElement } from '@wangeditor/editor'

/**

- 渲染“附件”元素到编辑器
- @param elem 附件元素，即上文的 myResume
- @param children 元素子节点，void 元素可忽略
- @param editor 编辑器实例
- @returns vnode 节点（通过 snabbdom.js 的 h 函数生成）
 */
function renderAttachment(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {  // TS 语法
// function renderAttachment(elem, children, editor) {                                                // JS 语法

    // 获取“附件”的数据，参考上文 myResume 数据结构
    const { fileName = '', link = '' } = elem

    // 附件 icon 图标 vnode
    const iconVnode = h(
        // HTML tag
        'img',
        // HTML 属性
        {
            props: { src: 'xxxx.png' } // HTML 属性，驼峰式写法
            style: { width: '1em', marginRight: '0.1em',  /*其他...*/ } // HTML style ，驼峰式写法
        }
        // img 没有子节点，所以第三个参数不用写
    )

    // 附件元素 vnode
    const attachVnode = h(
        // HTML tag
        'span',
        // HTML 属性、样式、事件
        {
            props: { contentEditable: false }, // HTML 属性，驼峰式写法
            style: { display: 'inline-block', marginLeft: '3px', /*其他... */ }, // style ，驼峰式写法
            on: { click() { console.log('clicked', link) }, /* 其他...*/ }
        },
        // 子节点
        [ iconVnode, fileName ]
    )

    return attachVnode
}
```

###### 注册 renderElem 到 wangEditor

先定义 renderElem 配置

const renderElemConf = {
  type: 'attachment', // 新元素 type ，重要！！！
  renderElem: renderAttachment,
}
然后把 renderElemConf 注册到 wangEditor ，有两种方式。

第一，如果你只想注册一个 renderElem ，没有其他功能，推荐使用 registerRenderElem

import { Boot } from '@wangeditor/editor'

Boot.registerRenderElem(renderElemConf)

第二，如果你除了 renderElem 同时还要注册其他功能，推荐使用 registerModule

```js

import { Boot, IModuleConf } from '@wangeditor/editor'

const module: Partial<IModuleConf> = {
  // TS 语法
  // const module = {                      // JS 语法

  // menus: [menu1Conf, menu2Conf, menu3Conf], // 菜单
  // editorPlugin: withBreakAndDelete, // 插件
  renderElems: [renderElemConf /*其他元素...*/], // renderElem

  // 其他功能，下文讲解...
}
Boot.registerModule(module)
```

TIP

- 必须在创建编辑器之前注册
- 全局只能注册一次，不要重复注册

此时，你再执行 editor.insertNode(myResume) 就可以看到“附件”元素被渲染到了编辑器中。

##### 把新元素转换为 HTML

当你把 myResume 插入到编辑器，并渲染成功，此时执行 editor.getHtml() 获取的 HTML 里并没有“附件”元素。接下来需要定义如何输入 HTML 。

###### 定义 elemToHtml 函数

以下是代码示例，完整源码可参考这里

```js
import { SlateElement } from '@wangeditor/editor'

/**
 * 生成“附件”元素的 HTML
 * @param elem 附件元素，即上文的 myResume
 * @param childrenHtml 子节点的 HTML 代码，void 元素可忽略
 * @returns “附件”元素的 HTML 字符串
 */
function attachmentToHtml(elem: SlateElement, childrenHtml: string): string {
  // TS 语法
  // function attachmentToHtml(elem, childrenHtml) {                             // JS 语法

  // 获取附件元素的数据
  const { link = '', fileName = '' } = elem

  // 生成 HTML 代码
  const html = `<span
        data-w-e-type="attachment"
        data-w-e-is-void
        data-w-e-is-inline
        data-link="${link}"
        data-fileName="${fileName}"
    >${fileName}</span>`

  return html
}
```

注意以下事项：

- 自定义元素生成的 HTML tag 尽量使用 <div>（针对 block 元素） 或 <span>（针对 inline 元素）等通用标签。谨慎使用 <a> <p> <table> 等编辑器默认支持的标签，那可能会带来冲突。
- 使用 data-w-e-type 记录元素 type ，以便解析 HTML 时（下文讲）能识别到
- 使用 data-w-e-is-void 标记元素是 void ，以便解析 HTML 时能识别
- 使用 data-w-e-is-inline 标记元素是 inline ，以便解析 HTML 时能识别
- HTML 结构尽量扁平、简洁，这样更容易解析 HTML ，更稳定

###### 注册 elemToHtml 到 wangEditor

先定义 elemToHtml 配置

const elemToHtmlConf = {
  type: 'attachment', // 新元素的 type ，重要！！！
  elemToHtml: attachmentToHtml,
}
然后注册到 wangEditor ，有两种方式

第一，如果你只想注册 elemToHtml ，没有其他需求，则推荐使用 registerElemToHtml

import { Boot } from '@wangeditor/editor'

Boot.registerElemToHtml(elemToHtmlConf)
第二，如果你除了注册 elemToHtml 之外，还需要注册其他功能，则推荐使用 registerModule

```js

import { Boot, IModuleConf } from '@wangeditor/editor'

const module: Partial<IModuleConf> = {
  // TS 语法
  // const module = {                      // JS 语法

  // menus: [menu1Conf, menu2Conf, menu3Conf], // 菜单
  // editorPlugin: withBreakAndDelete, // 插件
  // renderElems: [renderElemConf],    // renderElem
  elemsToHtml: [elemToHtmlConf /*其他元素...*/], // elemToHtml

  // 其他功能，下文讲解...
}
Boot.registerModule(module)
```

TIP

- 必须在创建编辑器之前注册
- 全局只能注册一次，不要重复注册

此时，你再执行 editor.getHtml() 即可得到“附件”元素的 HTML 代码，显示 HTML 时可配合 JS 实现点击下载附件的效果。

##### 解析新元素 HTML 到编辑器

通过 const html = editor.getHtml() 可以得到正确的 HTML ，但再去设置 HTML editor.setHtml(html) 却无效。需要你自定义解析 HTML 的逻辑。

###### 定义 parseElemHtml 函数

```js

import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'

/**

- 解析 HTML 字符串，生成“附件”元素
- @param domElem HTML 对应的 DOM Element
- @param children 子节点
- @param editor editor 实例
- @returns “附件”元素，如上文的 myResume
 */
function parseAttachmentHtml(
  domElem: Element,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  // TS 语法
  // function parseAttachmentHtml(domElem, children, editor) {                                                     // JS 语法

  // 从 DOM element 中获取“附件”的信息
  const link = domElem.getAttribute('data-link') || ''
  const fileName = domElem.getAttribute('data-fileName') || ''

  // 生成“附件”元素（按照此前约定的数据结构）
  const myResume = {
    type: 'attachment',
    link,
    fileName,
    children: [{ text: '' }], // void node 必须有 children ，其中有一个空字符串，重要！！！
  }

  return myResume
}
```

###### 注册 parseElemHtml 到 wangEditor

先定义 parseHtml 配置

```js

const parseHtmlConf = {
  selector: 'span[data-w-e-type="attachment"]', // CSS 选择器，匹配特定的 HTML 标签
  parseElemHtml: parseAttachmentHtml,
}
```

然后把 parseHtmlConf 注册到 wangEditor ，有两种方式：

第一，如果你只想注册一个 parseElemHtml ，没有别的功能，则推荐 registerParseElemHtml

import { Boot } from '@wangeditor/editor'

Boot.registerParseElemHtml(parseHtmlConf)
第二，如果你除了想注册 parseElemHtml ，还想注册其他功能，则推荐 registerModule

```js

import { Boot, IModuleConf } from '@wangeditor/editor'

const module: Partial<IModuleConf> = {
  // TS 语法
  // const module = {                      // JS 语法

  // menus: [menu1Conf, menu2Conf, menu3Conf], // 菜单
  // editorPlugin: withBreakAndDelete, // 插件
  // renderElems: [renderElemConf],    // renderElem
  // elemsToHtml: [elemToHtmlConf],    // elemToHtml
  parseElemsHtml: [parseHtmlConf /*其他元素...*/], // parseElemHtml
}
Boot.registerModule(module)
```

TIP

- 必须在创建编辑器之前注册
- 全局只能注册一次，不要重复注册

此时，再把获取的 HTML 设置到编辑器中 editor.setHtml(html) 即可成功显示“附件”元素。

#### 总结

一个模块常用代码文件如下，共选择参考（不一定都用到）

render-elem.ts
elem-to-html.ts
parse-elem-html.ts
plugin.ts
menu/
Menu1.ts
Menu2.ts

### 多语言

#### 切换语言

默认可支持中文和英文，默认为中文。

import { i18nChangeLanguage } from '@wangeditor/editor'

// 切换语言 - 'en' 或者 'zh-CN'
i18nChangeLanguage('en')

// 创建编辑器...

#### 获取语言

获取全部语言配置

import { i18nGetResources } from '@wangeditor/editor'

const resources = i18nGetResources('en') // 'en' 或 'zh-CN'
获取单个词汇

import { t } from '@wangeditor/editor'

console.log( t('header.title') )

#### 增加新语言

除了中文和英文，使用其他语言，需要先添加语言的词汇，然后再切换语言。

import { i18nAddResources, i18nChangeLanguage, t } from '@wangeditor/editor'

// 添加新语言，如日语 ja
i18nAddResources('ja', {
    // 标题
    header: {
        title: 'ヘッダー',
        text: 'テキスト',
    },
    // ... 其他语言词汇，下文说明 ...
})

// 切换为日语 ja
i18nChangeLanguage('ja')

// 获取单个词汇
console.log( t('header.title') )

// 创建编辑器...

### 主题

可以通过 CSS vars 定义自己的主题，样式请参考源码。

/*暗色主题 */
html.dark {
    --w-e-textarea-bg-color: #333;
    --w-e-textarea-color: #fff;
    /* ...其他...*/
}

### 用于typescript

将 wangEditor 用于 Typescript 的注意事项。

#### 扩展类型

新建一个 custom-types.d.ts ，源码如下。注意，保证该文件在 tsconfig.json 的 include 中。

```js
import { SlateDescendant, SlateElement, SlateText } from '@wangeditor/editor'

declare module '@wangeditor/editor' {
    // 扩展 Text
    interface SlateText {
        text: string
    }

    // 扩展 Element
    interface SlateElement {
        type: string
        children: SlateDescendant[]
    }
}
```

### 插件

- ctrl+enter 换行
- @ mention 提及
- formula 公式
- markdown
- 上传附件
- 链接卡片
