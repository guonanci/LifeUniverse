https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html

upd：更新某功能（不是 feat, 不是 fix）
feat：新功能（feature）
fix：修补 bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动

https://segmentfault.com/a/1190000017790694

https://blog.csdn.net/m0_37613019/article/details/107892353

```js
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },

```

https://stackoverflow.com/questions/8598246/aggregating-and-uglifying-javascript-in-a-git-pre-commit-hook

chmod + x .git/hooks/pre-commit
chmod + x .husky/pre-commit

```js
chmod + x.git / hooks / pre - commit;
chmod + x.husky / pre - commit;
```
