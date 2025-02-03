```less
.fieldListItem {
  .ellipsis;
  position: relative;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
  padding: 0px 24px 0px 12px;
  & > span {
    font-size: 14px;
  }
  &:hover {
    background-color: #ffe9c4;
    .fieldListItemSetting {
      display: block;
    }
  }
}
.fieldListItemDbClickArea {
  width: 95%;
  display: inline-block;
}

// not work，dont know why，好想被 hover + > span的前缀&影响到了
.fieldListItem {
  .ellipsis;
  position: relative;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
  padding: 0px 24px 0px 12px;
  &DbClickArea {
    width: 95%;
    display: inline-block;
  }
  & > span {
    font-size: 14px;
  }
  &:hover {
    background-color: #ffe9c4;
    .fieldListItemSetting {
      display: block;
    }
  }
}
```

艹，原来是 jsx 里面写成了`fieldListItemWDbClickArea`, 多了个 W

严格遵守嵌套，否则不生效（不是 scss（两种嵌套都支持），不是 css 的嵌套写法）。
