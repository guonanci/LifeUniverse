less 多处用到px转换为vw 如何实现
sass中可以定义函数，接收参数并且返回计算值：



less中函数是内置的不能够自定义，所以可以使用混入：

# 如何用less的mixin功能，结合媒体查询，来做移动端字体大小的适配

要使用 Less 的 mixin 功能结合媒体查询进行移动端字体大小适配，可以根据不同的屏幕宽度设置不同的字体大小。以下是一个简单的示例，展示如何使用 Less 的 `mixin` 和媒体查询来实现这一点：

```less
// 定义字体大小适配的 mixin
.font-size-adapt(@base-font-size) {
  font-size: @base-font-size;

  // 针对移动端的媒体查询（例如屏幕宽度小于768px）
  @media (max-width: 768px) {
    font-size: @base-font-size * 0.9; // 根据需要缩小字体大小
  }

  // 针对小屏幕手机的媒体查询（例如屏幕宽度小于480px）
  @media (max-width: 480px) {
    font-size: @base-font-size * 0.8; // 更小的屏幕则进一步缩小字体大小
  }
}

// 在样式中使用 mixin
.title {
  .font-size-adapt(24px); // 传入基础字体大小
}

.body-text {
  .font-size-adapt(16px); // 传入基础字体大小
}
```

### 解释

1. **`mixin` 定义：**
   - `.font-size-adapt(@base-font-size)` 是一个 mixin，它接收一个参数 `@base-font-size`，用来定义在不同屏幕下的字体大小变化。

2. **媒体查询：**
   - `@media (max-width: 768px)` 表示屏幕宽度小于768px时，字体大小会相应调整为 `@base-font-size` 的 90%。
   - `@media (max-width: 480px)` 表示屏幕宽度小于480px时，字体大小进一步调整为 `@base-font-size` 的 80%。

3. **应用：**
   - 在需要的样式中使用 `.font-size-adapt()`，传入基础的字体大小，例如 `24px` 或 `16px`，它会根据屏幕宽度自动适配。

这样，你可以通过一个 mixin 统一管理字体大小的适配，并且轻松应用在不同的元素上。
