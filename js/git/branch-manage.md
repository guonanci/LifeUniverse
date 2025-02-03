有时候需要
hotfix 类功能还是很常见的（紧急、开发量小但很重要、近期会上线），先经过 test

所以经常会有 test 分支 merge 到 dev 分支的 mr。尽量减少 commit 数量（或者说每个 commit 只包含一个功能也可以），commit-msg 只包含 bug 编号也可以。
