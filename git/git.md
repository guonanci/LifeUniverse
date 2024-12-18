# Git 资料整理

    在这里，我整理的并不是很多，大家可以稍微借鉴一下就好，git命令用得好可以偷点懒罢了。

## 操作流程

_一图胜千言_，你常用的几个命令大概就是这样的。这是阮一峰给出的样子：
![git 基本概念关系图][img1]

官方 git-scm 是这样的:
![git districts][img2]
只表明了一般的 git 本地操作流程：

1. 在工作目录中修改文件
2. 暂存文件，将文件的快照放入暂存区域
3. 提交更新，找到暂存区域的文件，将快照永久性存储到 git 仓库目录

## 命令清单

### 配置

.gitconfig 配置文件，可以是电脑上的全局配置，或者项目目录下的项目配置
`git config --list`用于查看全局配置
我电脑上是 log 出：

```
credential.helper=osxkeychain
user.email=nanci_guo@xinyan.com
user.name=guonanci
push.default=matching
alias.s=status
alias.t=tag
alias.ck=checkout
alias.cm=commit
alias.ps=push
alias.pl=pull
alias.d=diff
alias.l=log
alias.rs=reset
alias.rv=revert
alias.m=merge
alias.unstage=reset HEAD --
alias.last=log -1 HEAD
url.https://.insteadof=git://
last.unstage=log -1 HEAD
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
remote.origin.url=git@gitlab.xinyan.com:spider/SDK_H5.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
```

你们在 windows 也试试，大致应该差不多

### 增加删除文件

```
# 添加指定文件/目录到暂存区
$ git add [file1] [dir1] [file2] ...
```

### 代码提交

`git commit -m [msg]`是提交暂存区到仓库区，`git commit [file1] [dir1] [file2] ... -m [msg]`是提交暂存区的指定文件到仓库区，`git commit -a`是提交工作区自上次 commit 之后的变化，直接到仓库区,`git commit --amend -m [msg]`是使用一次新的 commit，替代上一次提交，如果代码没有任何变化，则用来改写上一次 commit 的提交信息，`git commit --amend [file1] [file2]是重做一次 commit，并包括指定文件的新变化，其实如果不太注重 commit message 的话，--amend 这个标志位几乎没什么用了。 ###分支

```shell
// 列出所有本地分支
git branch
// 列出所有远程分支
git branch -r
// 列出所有本地和远程分支
git branch -a
// 新建一个分支，但依然停留在当前分支
git branch [new-branch-name]
// 从指定分支新建一个分支，切换到新分支，与同名远程分支建立追踪关系
git checkout -b [new-branch-name] [base-branch-name:可选] && git push -u origin [new-branch-name]
// 合并指定分支到当前分支
git merge [branch-to-merge]
// 删除本地和远程的同名分支,
git branch -d [branch-name] && git push origin :[branch-name]


```

### 查看信息

```
// 显示有变更的文件
git status
// 显示暂存区和工作区的差异
git diff
// 显示工作区和当前分支最新commit之间的差异
git diff HEAD
// 显示指定文件的每一行代码是谁在哪个时间改过，信息有点多哦。。
git blame [file]
```

### 远程同步

```
// 下载远程仓库的所有变动
git fetch [remote]
// 显示所有远程仓库
git remote -v
// 显示某个远程仓库的信息
git remote show [remote]
// 增加一个新的远程仓库，并命名
git remote add [shortname] [url]
// 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]
// 上传本地指定分支到远程仓库
git push [remote] --force
// 推送所有远程分支到远程仓库
git push [remote] --all
```

### 撤销

```
// 恢复暂存区的指定文件到工作区，我经常用
git checkout [file1] [dir1] ...
// or
git checkout .
// 重置暂存区的指定文件，与上一次的commit保持一致，但工作区不变
git reset [file]
// 重置当前分支的HEAD为指定commit，同时重置暂存区与工作区，与指定commit保持一致
git reset --hard [comit-log]

// 新建一个commit，用来撤销指定commit，后者的所有变化都被前者抵消，并且应用到当前分支
git revert [commit]
```

### git 远程操作

#### git clone，git remote

```
// ssh，https，git，本地协议都支持，git协议下载最快
git clone [版本库url] [本地目录名:可选]

// git remote 用于管理主机名，不带选项的时候，git remote列出所有远程主机

git remote // origin
// -v 选项可以查看主机网址
git remote -v
origin git@gitlab.xinyan.com:spider/SDK_H5.git (fetch)
origin git@gitlab.xinyan.com:spider/SDK_H5.git (push)

// 克隆版本库的时候，所使用的远程主机自动被git命名为origin，如果想用其他的主机名，需要用git clone命令的-o选项指定
git remote -o jQuery htttps://github.com/jquery/jquery.git
git remote
jQuery

// 可以查看该主机的详细信息
git remote show <host-name>
git remote show origin
// 添加
git remote add <host-name> <url>

// 删除
git remote rm <host-name>
// 改名
git remote rename <old-name> <new-name>


```

#### git fetch

一旦远程主机的版本库有了 commit 更新, 需要将这些更新取回本地，用到`git fetch <remote-host>`
git fetch 命令通常用来查看其他人的进程，因为她取回的代码对你本地的开发代码没有影响。默认情况下，git fetch 取回所有分支的更新。如果只想取回特定分支的更新，可以指定分支名：`git fetch <remote-host> <branch-name>`。所取回的更新，需要在本地主机上用"远程主机名/分支名"的形式读取。

pl 之前需要 fetch

### git pull

取回远程主机某个分支的更新，再与本地的指定分支合并`git pull <remote-host> <remote-branch>:<local-branch>`。如果远程分支与当前分支合并，则冒号后面的部分可以省略:

```
git pull origin next

git fetch origin
git merge origin/next
```

在某些场合，git 会自动在本地分支和远程分支之间，建立追踪关系 tracking，比如在`git clone`的时候，所有本地分支默认与远程主机的同名分支建立追踪关系
也允许手动建立追踪关系：`git branch --set-upstream master origin/next`
如果当前分支远程分支存在追踪关系，git pull 就可以省略远程分支名：`git pull origin`，如果当前分支只有一个追踪分支，连远程主机名都可以省略：`git pull`，上面命令表示，当前分支自动与唯一一个追踪分支进行合并。

如果远程主机删除了某个分支，默认情况下`git pull`的时候不会在拉取远程分支的时候删除对应的本地分支，是为了防止由于其他人操作了远程主机导致`git pull`不知不觉删除了本地分支，当然可以加上选项 `-p`就会在本地删除远程已经删除的分支：

```
git pull -p
// or
git fetch --prune origin
git fetch -p
```

#### git push

用于将本地分支的更新推送到远程主机，格式与`git pull`命令相仿：

```
git push <remote-host> <local-branch>:<remote-branch>
```

分支推送的顺序是`<from>:<to>`，`git pull`对应`<remote-branch>:<local-branch>`，`git push`对应`<local-branch>:<remote-branch>`，如果省略远程分支名，则表示将本地分支推送与之存在“追踪关系”的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。`git push origin master`，上面命令表示将本地的 master 分支推送到 origin 主机的 master 分支。
如果省略本地分支名，则表示删除指定的远程分支，等同于推送一个空的本地分支到远程分支。

```
git push origin :master
// or
git push origin --delete master
```

如果当前分之与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略：`git push origin`。
如果当前分支只有一个追踪分支，那么主机名都可以省略：`git push`

将本地分支推送到远程git push -u origin <branch-name>

如果当前分支与多个主机之间存在追踪关系，则可以使用`-u`选项指定一个默认主机，这样后面就可以不加任何参数使用`git push`了： `git push -u origin master`。不带任何参数的`git push`默认只推送当前分支，叫做 simple 方式，此外还有一种 matching 方式
，现在默认使用 simple 方式，如果要修改，采用`git config --global push.default matching/simple`，还有就是不管是否存在对应的远程分支，都会推送到远程主机，需要使用 `--all`选项：`git push --all origin`，如果要推送标签，要加上`--tags`选项：`git push origin --tags`。

## git 进阶

### git 特点 ####近乎所有操作都只是本地执行

比如说要浏览项目的历史，git 不需要外联到服务器去获取历史，只需要直接从本地数据库中读取。

#### git 保证完整性

git 中所有数据在存储前都计算校验和，然后以校验和来引用。意味着不可能在 git 不知情时更改文件内容或者目录内容。这个功能构建在 git 底层。是构成 git 哲学不可或缺的部分，如果在传输过程中丢失信息或者损坏文件，git 就能发现。
git 用以计算校验和的机制叫做 SHA-1 散列（哈希 hash），他是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 git 中文件的内容或者目录结构计算出来。

进阶部分不好整理，有点多，难度比较大，大家可以自己稍微看看我推荐的 progit.zh.pdf 还有 git-scm 中文文档，不过说到底 git 只是个工具，遇到问题可以及时解决就行。 ##提升效率的工具方面
其实自己手打也差不多， 可以利用之前提及的 git config --list 里面的 alias，比如：
`git pl && git add . && git cm -m "commit message" && git ps`； && 符号是说上一条命令执行成功才会执行下一条
Mac 上有 oh-my-zsh 这个很方便的命令行 alias 全局配置工具，还有 iterm2 终端 app，
参考下面的文章：
[item2 安装及使用](https://my.oschina.net/gabriel1215/blog/356935)
[oh-my-zsh 安装](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH)
[oh-my-zsh 配置](https://cnodejs.org/topic/565e945c3cda7a91276ff866)

我在项目里面配置了 ci.sh 和 test.sh prd.sh 可以用于日常的提交代码，推送到 test 分支发布测试环境，推送到 prd 分支发布生产环境。[windows 的话推荐强大的 Cygwin](https://cygwin.com/install.html)，[这里也有一篇有关 Cygwin 的短文](https://vimsky.com/article/3570.html),

windows 上我找到[这篇文章](https://blog.csdn.net/u014027051/article/details/52433110)，特别短，主要是 alias 方面。

不过我觉得如果你的 IDE 自带终端还有 git 操作比较方便的话还是用 IDE 吧，不用命令行也可以。
如果用命令行的话，推荐`git-bash`，[这里有篇短文](https://www.jianshu.com/p/ac0ea03f731a)，推荐一下。

## 参考资料

| 书籍 | 文档 | 链接 |
|:---------- |:----------:| ----------:|
|progit.zh.pdf | [git-scm.com/book](https://git-scm.com/book/zh/v2) | [阮一峰-常用 git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html) |

郭南赐 2018.06.02

# ssh key

pbcopy < ~/.ssh/id_rsa.pub

git branch name origin/name;
feat,fix,refactor,docs,style,chore

<!-- $ git remote add upstream https://github.com/[Original Owner Username]/[Original Repository].git
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
$ git push -->

# branch

rename: git branch -m new-name
git 删除分支 -d -D 区别
<https://blog.csdn.net/qq_32452623/article/details/54340749>

# 删除无用的代码注释

时机：接近回归测试完毕

feature 分支最后带上年月日就永远不用删分支了

big sur self with git

# commit

如果一行不够，可以只执行 git commit，就会跳出文本编辑器，让你写多行。

## 修刚commit还没有push

1. 刚commit还没有push

`git commit --amend`
会进入vim编辑器，点击i，修改commit信息后，点击esc，输入ZZ退出。
git log 可以看见最近commit信息

2. 刚push，修改最近一次commit

git commit --amend
会进入vim编辑器，点击i，修改commit信息后，点击esc，输入ZZ退出。
git log 可以看见最近commit信息，pull后再push到远程(但是每次pull后再push会导致覆盖原来的更改，后来直接强制推送成功了：git push origin HEAD:master --force)

3. 修改历史push的commit信息

git rebase -i HEAD~3
表示要修改当前版本的倒数第三次状态.
这个命令出来之后，会出来三行东东：
pick:*******

pick:*******

pick:*******
复制代码
如果你要修改哪个，就把那行的pick改成edit，然后保存退出(点击esc，输入ZZ退出)
这时通过git log你可以发现，git的最后一次提交已经变成你选的那个了，这时再使用：
git commit --amend 来对commit进行修改。
修改完成后使用git rebase --continue
然后将变化push到远程：git push origin HEAD:master --force

作者：let_code
链接：<https://juejin.cn/post/7178783712363708475>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## msg

格式化的 Commit message，有几个好处。

（1）提供更多的历史信息，方便快速浏览。

比如，下面的命令显示上次发布后的变动，每个 commit 占据一行。你只看行首，就知道某次 commit 的目的。

$ git log <last tag> HEAD --pretty=format:%s

（2）可以过滤某些 commit（比如文档改动），便于快速查找信息。

比如，下面的命令仅仅显示本次发布新增加的功能。

$ git log <last release> HEAD --grep feature
（3）可以直接从 commit 生成 Change log。

Change Log 是发布新版本时，用来说明与上一个版本差异的文档，详见后文。

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

<type>(<scope>): <subject>
// 空一行

<body>
// 空一行
<footer>
其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过 72 个字符（或 100 个字符）。这是为了避免自动换行影响美观。

（1）type

type 用于说明 commit 的类别，只允许使用下面 7 个标识。

feat：新功能（feature）
fix：修补 bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

（2）scope

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

（3）subject

subject 是 commit 目的的简短描述，不超过 50 个字符。

以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes
第一个字母小写
结尾不加句号（.）

2.3 Footer
Footer 部分只用于两种情况。

（1）不兼容变动

如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。

BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.

（2）关闭 Issue

如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue 。

Closes #234
也可以一次关闭多个 issue 。

Closes #123, #245, #992

footer-revert:
<https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html>

# config

**git config core.ignorecase false**

git config --global --add remote.origin.proxy ""

多人协作时，尽量减少无用公共代码的更改（会有细节上的冲突），大家分工明确时，代码格式化配置一致时可以做一些优化。

# hub

只看超过 20K 的 repo
github 现在必须要全局模式的代理才能访问，但是全局模式不方便调试公司 dev 环境，所以要搜第三方 library 时就上 npm 上面去搜

# gitlab

只点击 new merge request

- 每次 merged，然后回到 new merge request 页面

# vsc git plugin

点击 push 箭头就能在 commit 后直接提交了，不用打开折叠面板

# github

网页上查看源码时可以快速点击跳转，I like github pages

# openSource

## 行话

LGTM: Looks Good To Me. 已經 review 過，表示可以合併了。 SGTM: Sounds Good To Me. 與 LGTM 差不多，意思表示可以合併了。

## Security

- Policy
  - define how users should report security vulnerabilities for this repo
- advisories
  - View or disclose security advisories for this repo
  -

# branch

删除远程分支 `git push origin --delete branch-name`
删除本地分支 `git branch -d branch-name`

# npm publish

login: sE1jPZvZYB5oaHu3 yiminanci <yiminanci@gmail.com>

undo merge request.

commit-msg 写中文

# merge request

输入完标题后，直接敲回车，不用滑动网页了

# stash

git stash clear

`git config --list`
`git config --global core.ignorecase false`

test 的 hotfix 命名：hotfix/test-drillDown-20210922

ai 的 hotfix 命名：hotfix/ai-drillDown-20210922

为了节省 code review 的花费时间，如果 assignee 没空，就自己 merge（也不会打扰别人的 review）

不同的 commit 对应不同的小功能、小的 bugfix（同样的 featName 或 fixID 可能放在好几个 commit）。每次本地热刷新后，都去 commit 一下。

# pull

git pull --no-rebase
git pull --rebase
git config --config pull.rebase false

# Git is not working after macOS Update (xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools)

```
- xcode-select --install
```

<https://stackoverflow.com/questions/43541167/how-do-you-undo-discard-all-changes-in-vs-code-git>

# remote-url migration

<https://blog.csdn.net/wu1169668869/article/details/83345633>

```bash
git remote set-url --push origin git@gitlab.magicbi.cn:magicbi/magicbi_web.git
git clone xxx
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all

git push git@gitlab.magicbi.cn:magicbi/magicbi_web.git '*:*'
git push REMOTE --all
git push --all origin
```

chmod +x getAllBranches.sh
sh getAllBranches.sh

# remote

Changing Git remote URL updates fetch but not push - Stack ...

```
const s =
git remote -v
git remote set-url  origin git@gitlab.magicbi.cn:magicbi/magicbi_web.git
git remote set-url --push origin git@gitlab.magicbi.cn:magicbi/magicbi_web.git
```

# branch

撤销 删除分支
<https://blog.csdn.net/u010940300/article/details/47832791>

<https://www.cnblogs.com/sxdcgaq8080/p/14793684.html>

# hotfix

merge 到 ai 分支后，QA 验证通过后，一定要再次 merge 到 test 分支，不管是不是有相同代码的改动（本地）

# log

git log --oneline --decorate --color --graph
git log --oneline --all --graph

# stash / restore

error: cannot pull with rebase: You have unstaged changes.
error: please commit or stash them.

still commit,pull,push suc?

# reset

drop commit(s)

<https://www.jianshu.com/p/c2ec5f06cf1a>

# commit -am

-a: add all(dangerously)

# clean

<https://stackoverflow.com/questions/61212/how-to-remove-local-untracked-files-from-the-current-git-working-tree>

dev to test 的 merge 改动文件很多的话，就不要合并，必须经过每个人的同意。

老分支合并新分支代码（1.0.0-test），而不是反过来！！

# rebase

-i interactive

<https://www.jianshu.com/p/4a8f4af4e803>
git

reset --soft commit_id(在这个之后的 commit 都可以撤销，重新 commit 但是文件更改都保留好了，都 add 好了)。

<https://blog.csdn.net/mentalitys/article/details/81079761>

# commit

git commit之后修改上一次commit的信息
刚commit还没有push

git commit --amend

会进入vim编辑器，点击i，修改commit信息后，点击esc，输入ZZ退出。

git log 可以看见最近commit信息

修改历史push的commit信息

git rebase -i HEAD~3
表示要修改当前版本的倒数第三次状态.
这个命令出来之后，会出来三行东东：
pick:*******

pick:*******

pick:*******
复制代码
如果你要修改哪个，就把那行的pick改成edit，然后保存退出(点击esc，输入ZZ退出)
这时通过git log你可以发现，git的最后一次提交已经变成你选的那个了，这时再使用：
git commit --amend 来对commit进行修改。
修改完成后使用git rebase --continue
然后将变化push到远程：git push origin HEAD:master --force

作者：let_code
链接：<https://juejin.cn/post/7178783712363708475>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# unable to access github

generate ssh_key and add it to the ssh-agent: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global user.name "ss"
git config --global user.email "ss"

# tag-branch重名

最好删除或改名本地重名的tag

# emoji

## gitmoji

`npm i -g gitmoji-cli`
error: pathspec 'remove-useless-comment'' did not match any file(s) known to git 需要先add，add和commit分开来，而且commit后面要用双引号。

🎨:art: Improve structure/format of the code
⚡️:zap: Improve performance.
🔥:fire: Remove code or files
🐛:bug: Fix a bug
🚑️:ambulance: Critical hotfix
✨:sparkles: Introduce new features
📝:memo: Add or update documentation
🚀:rocket: Deploy stuff
💄:lipstick: Add or update the UI and style files
💄:tada: Begin a project
✅:white_check_mark: Add, update, or pass tests
🔒️:lock: Fix security or privacy issues.
🔒️:closed_lock_with_key: Add or update secrets
🔖:bookmark: Release / Version tags
🚨:rotating_light: Fix compiler/linter warnings;🚧:construction: Work in progress 💚:green_heart: Fix CI Build ⬇️:arrow_down: Downgrade dependencies ⬆️:arrow_up: Upgrade dependencies 📌:pushpin: Pin dependencies to specific versions 👷:construction_worker: Add or update CI build system 📈:chart_with_upwards_trend: Add or update analytics or track code

♻️:recycle: Refactor code ➕:heavy_plus_sign: Add a dependency ➖:heavy_minus_sign: Remove a dependency 🔧:wrench: Add or update configuration files 🔨:hammer: Add or update development scripts 🌐:globe_with_meridians: Internationalization and localization ✏️:pencil2: Fix typos 💩:poop: Write bad code that need to be improved

⏪️:rewind: Revert changes. 🔀:twisted_rightwards_arrows: merge branches 📦️:package: add or upd compiled files or packages 👽️:alien: upd code due to external API changes 🚚:truck: move or rename resources(e.g.: files,paths,routes) 📄:page_facing_up: add or upd license

💥:boom: introduce breaking changes 🍱:bento: add or upd assets ♿️:wheelchair: improve accessibility 💡:bulb: add or upd comments in source code

🍻beers write code drunkenly;💬speech_balloon add or upd txt and literals;🗃️card_file_box perform database related changes;🔊loud_sound add or upd logs;🔇mute remove logs;👥busts_in_silhouette add or upd contributors;🚸children_crossing improve user experience/usability;🏗️building_construction make architectural changes

📱iphone work on responsive design;🤡clown_face mock things;🥚egg add or upd an easter egg;🙈see_no_evil add or upd a .gitignore file;📸camera_flash add or upd snapshots;⚗️alembic perform experiments;🔍️mag improve SEO;🏷️label add or upd types;

🌱seedling幼苗 add or upd seed files;🚩triangular_flag_on_post add,upd,or remove feature flags;🥅goal_net catch errors;💫dizzy add or upd animations and transitions;

🗑️wastebasket deprecate code that needs to be cleaned up;🛂passport_control work on code related to authorization, roles and permissions;🩹adhesive_bandage simple fix for a non-critical issue

🧐monocle_face data exploration/inspection;⚰️coffin remove dead code;🧪test_tube add a failing test;👔necktie add or upd business logic;🩺stethoscope add or upd healthcheck;🧱bricks infrastructure related changes;🧑‍💻technologist improve developer experience;💸money_with_wings add sponsorships or money related infrastructure;

🧵thread add or upd code related to multithreading or concurrency;safety_vest🦺 add or upd code related to validation;

# remove all commits

<https://www.blogdesire.com/how-to-hide-commit-history-on-github/>

```bash
rm -rf .git
# Now initial a new repository on the current folder and add your remote git URL. I’m using my example project again.

git init
git remote add origin https://github.com/khokonm/example.git
git remote -v
```

# cmd

直接git pull，不用git status，因为git status出的结果经常不正确，有延迟；但是必须先add好commit好。因

# husky

```json
"husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged"
    }
  },
```

git commit后，如何进行撤销commit操作

掘金
<https://juejin.cn> › 前端
·
Translate this page
Oct 31, 2022 — 我们可以使用命令： git reset --soft HEAD^ 这样就成功撤销了commit。 使用 git reset --hard HEAD^ 这样连add也撤销了。 *注：reset 命令只能回滚最新的 ...

git reset --soft HEAD~1
