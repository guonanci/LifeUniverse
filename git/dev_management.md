dev_management.md
dev 分支每 3 天由我本人从 test merge 到 dev 分支。（其他人 merge 的不管）

技术管理角度

1. test 环境的
   每周四晚上 8 点上线，提交到 test；如果需要 hotfix，预测 merge request 结束（test 环境部署完成）的时间。
2. dev&test

dev 到 test，dev 到 test？

feat 到 dev，dev 到 test

dev 分支的管理问题，

提测后修 bug

不建议自己手上有好多个 feat 开发代码，当然如果实在太忙，应建立好代码开关机制，有了这个机制，各个 feat 不会相互影响。
test 分支拉出 test-20210918（可以在 0913 号开始建立，包含一些 feat、hotfix）

开发联调完成的话，就可以提前提测，测试时间也可以分阶段适当提前（减少周四 1 天总的工作量），减少周四适当提前，建议在每天上午 11 点，下午 4 点，周四晚上 8 点。
每天测试同学需要跟产品、前后端开发明确当天可以测的测试功能，测试时间点。
咱们的分支目前不包含 master（ai）、release（test）。
尽量让自己保持：只有一个大的 feat 分支，上面有几个小的 feat 代码块。
