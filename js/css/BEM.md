BEM规范我觉得放到css这个模块讲比较合适
因为有了BEM，可以让css的编码变得有规范可循，使得css也变得整洁起来，拥有了很强的可维护性。
这里以elementUI的BEM规范为例，BEM代表 块（block）、元素（element）、修饰符（modifier），三个部分结合使用，生成一套具有唯一性的class命名规范，起到样式隔离，避免css样式污染的作用。
如el-input , el-input__inner, el-input--mini
定义block
作用：给组件添加统一的el-前缀，通过@content将include{}中传递过来的内容导入到指定位置
```less

@mixin b($block) {
  $B: $namespace+'-'+$block !global;  // 使用el-拼接组件名
  .#{$B} {
    @content;
  }
}
```
复制代码
block示例
// 编译前
```less

@include b(button) {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}

// 编译后
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
```
复制代码
定义element
作用：
1）通过__连接符将父级选择器和传入的子元素拼接起来
2）通过hitAllSpecialNestRule函数判断父级选择器（$selector: &），是否包含--   .is- ：这三种字符
3）如果父级选择器包含这几种字符，输出父级选择器包含子元素的嵌套关系


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```less
@mixin e($element) {
  $E: $element !global;
  $selector: &;
  $currentSelector: "";
  @each $unit in $element { // $element传入的值可以单个，也可以是列表
    $currentSelector: #{$currentSelector + "." + $B + $element-separator + $unit + ","};
  }

  @if hitAllSpecialNestRule($selector) {
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}
```

定义modifier(修饰符)

通过--连接符将父级选择器和传入的修饰符拼接起来


```less
@mixin m($modifier) {
  $selector: &;
  $currentSelector: "";
  @each $unit in $modifier {
    $currentSelector: #{$currentSelector + & + $modifier-separator + $unit + ","};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}
```

```less
// 编译前
@include b(button) {
  display: inline-block;
  @include m(primary) {
    color:blue;
  }
}
// 编译后
.el-button {
  display: inline-block;
}
.el-button--primary {
  color:blue;
}
```
