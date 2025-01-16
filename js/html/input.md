# ::selection

```css
input::selection {
  background: #000;
  color: #fff;
}
```

import { ModalForm, ProFormText } from '@ant-design/pro-form'
Modal-Input 的光标无法向左移动 submitter、formRef 都试过了不行。。。（ModelFieldDropBox/index.tsx 里面却可以，一切正常）

ev => ev.target.value

onPressEnter

# antd Input 受控时影响到无法输入中文

在使用 Ant Design (`antd`) 的 `Input` 组件时，如果你遇到在受控模式下无法输入中文的问题，通常是因为中文输入法在输入过程中需要经历一个组合（composition）的过程，而直接将 `onChange` 的值更新到状态可能会打断这一过程。

### 问题的原因

在中文输入法下，当你输入中文时，输入法先将拼音等字符组合成候选词，只有在选定候选词后，输入才会真正提交。这一组合过程需要通过事件 `compositionstart`、`compositionupdate` 和 `compositionend` 来控制。如果在 `compositionend` 之前就更新了状态，组合状态会被打断，导致无法正常输入中文。

### 解决方法

可以通过监听 `onCompositionStart` 和 `onCompositionEnd` 来标记当前是否在输入组合状态，然后在组合状态结束后再更新状态。

#### 示例代码

```jsx
import React, { useState } from 'react';
import { Input } from 'antd';

const ControlledInput = () => {
  const [value, setValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleChange = (e) => {
    if (!isComposing) {
      setValue(e.target.value);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposing(false);
    setValue(e.target.value);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      placeholder="请输入内容"
    />
  );
};

export default ControlledInput;
```

### 代码解释

1. **状态管理**：
   - `value`：用于存储输入框的内容。
   - `isComposing`：标记当前是否处于组合输入状态。

2. **事件处理**：
   - **`onChange`**：当 `isComposing` 为 `false` 时，更新 `value`。
   - **`onCompositionStart`**：当组合输入开始时，将 `isComposing` 设为 `true`。
   - **`onCompositionEnd`**：当组合输入结束时，将 `isComposing` 设为 `false`，并更新 `value`。

### 原理

- 在中文输入法组合输入阶段，不立即更新状态，避免中断组合过程。
- 组合输入结束后，使用最终的输入值更新状态。

### 适用场景

这种方法不仅适用于 Ant Design 的 `Input` 组件，也适用于任何受控的输入组件，例如原生的 `<input>`、`TextArea`，或其他 UI 库的输入组件。

通过这种方式，你可以在受控模式下顺利输入中文。

# antd Modal内部的Input onChange时失焦

在 Ant Design 的 `Modal` 组件内部使用 `Input` 时，如果 `Input` 在触发 `onChange` 时出现失焦问题，通常是由于以下几个原因：

1. **React 组件重新渲染导致元素被重建**：
   每次更新状态时，`Modal` 或其子组件可能会重新渲染，导致 `Input` 组件被重新创建，从而失去焦点。

2. **`Modal` 的 `destroyOnClose` 属性**：
   如果 `destroyOnClose` 设置为 `true`，每次关闭 `Modal` 时都会销毁内部组件，下次打开时会重新渲染。

3. **状态更新引起的重渲染**：
   状态更新不正确或父组件的状态变动会导致 `Modal` 内部的所有子元素重新渲染。

### 解决方法

#### 1. **确保状态更新不影响组件重新渲染**

在 `onChange` 时，避免不必要的父组件重新渲染。确保状态更新时只更新需要变化的部分。

**示例代码：**

```jsx
import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';

const MyModal = () => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开 Modal</Button>
      <Modal
        title="示例 Modal"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="请输入内容"
        />
      </Modal>
    </div>
  );
};

export default MyModal;
```

#### 2. **使用 `useMemo` 或 `useCallback` 优化渲染**

使用 `useMemo` 或 `useCallback` 确保 `Input` 的 `onChange` 处理函数不会在每次渲染时都重新创建。

**示例代码：**

```jsx
import React, { useState, useCallback } from 'react';
import { Modal, Input, Button } from 'antd';

const MyModal = () => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开 Modal</Button>
      <Modal
        title="示例 Modal"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="请输入内容"
        />
      </Modal>
    </div>
  );
};

export default MyModal;
```

#### 3. **避免重新创建 `Modal` 组件**

确保 `Modal` 组件在渲染过程中不会被销毁和重新创建。`Modal` 应该在父组件中保持稳定，不随状态变化而重建。

#### 4. **检查 `destroyOnClose` 属性**

如果你设置了 `destroyOnClose={true}`，尝试将其设为 `false`，避免 `Modal` 每次关闭时都销毁内容。

```jsx
<Modal
  title="示例 Modal"
  open={visible}
  destroyOnClose={false}  // 不销毁 Modal 内容
  onCancel={() => setVisible(false)}
>
  <Input value={inputValue} onChange={handleInputChange} />
</Modal>
```

#### 5. **使用 `autoFocus` 确保焦点恢复**

如果失焦问题依然存在，可以通过 `autoFocus` 属性让 `Input` 在渲染时自动获取焦点。

```jsx
<Input
  value={inputValue}
  onChange={handleInputChange}
  autoFocus
/>
```

### 总结

1. **避免不必要的重渲染**，确保状态更新不会导致整个 `Modal` 重新渲染。
2. 使用 **`useCallback`** 优化 `onChange` 事件处理函数。
3. 将 **`destroyOnClose` 设为 `false`**，避免 `Modal` 内容被销毁。
4. 使用 **`autoFocus`** 确保 `Input` 在渲染时自动聚焦。

通过这些方法，可以有效解决 `Input` 在 `Modal` 中失焦的问题。
