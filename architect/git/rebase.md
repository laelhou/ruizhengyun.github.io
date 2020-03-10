# rebase 说明

## merge 与 rebase

两者做的事其实是一样的，都将一个分支的更改并入另一个分支，只不过方式有些不同。

![merge 与 rebase](./assets/git.rebase.jpeg)

### 合并前

```js
      D---E master
     /
A---B---C---F origin/master
```

1.使用 `merge` 合并后

```js
      D--------E  
     /          \
A---B---C---F----G   master, origin/master
```

2.使用 `rebase` 的方式，就不会有 `G` 合并点

```js
A---B---C---F---D'---E'   master, origin/master
```

> 其中 `D’, E’` 的 commit SHA 序号跟本來 `D, E` 是不同的，应为算是砍掉重新 commit 了。

### merge 合并

```js
git checkout feature
git merge merge
```

feature 分支中新的合并提交将两个分支的历史连在了一起。merge 是一个安全的操作。现有的分支不会被更改，每次合并上游更改时 feature 分支**都会引入一个外来的合并提交**。如果上游分支非常活跃的话，这或多或少会污染你的分支历史。

### rebase 合并

```js
git checkout feature
git rebase master
```

把整个 feature 分支移动到 master 分支的后面，有效地把所有 master 分支上新的提交并入过来。但是，rebase 为原分支上每一个提交创建一个新的提交，重写了项目历史，并且**不会带来合并提交**。

## rebase 优缺点

### 优点

- 项目历史会非常整洁，呈现出完美的线性
- 方便 code review。

### 缺点

- 安全性，如果你违反了 rebase 法则，重写项目历史可能会给你的协作工作流带来灾难性的影响；
- 可跟踪性，rebase 不会有合并提交中附带的信息——你看不到 feature 分支中并入了上游的哪些更改；

## rebase 法则

上面提到的法则就是**绝对不在公共分支上使用 rebase**。即在运行 `git rebase` 之前，先问下这个分支是不是只有你自己工作，如果不是那就不能使用 rebase。

## rebase 交互式

### 合并最新代码

允许更改并入新分支的提交，比自动的 rebase 要强大的多，它提供了对分支上提交历史完整的控制。

```js
git checkout feature
git rebase -i master
```

这里的 `-i` 是指**交互模式**，可以干预 rebase 事务过程，包括设置commit message、暂停 commit 等。接下来进入文本编辑器，显示所有将被移动的提交。

```js
pick 69f9342 dev_4
  
# Rebase de7db81..69f9342 onto de7db81 (1 command)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
#       However, if you remove everything, the rebase will be aborted.
#
#
# Note that empty commits are commented out
"~/dev/tutorial/git-test/.git/rebase-merge/git-rebase-todo" 27L, 1081C
```

如果不修改或修改提交信息后，键入 `:wq`，然后解决冲突，这时会产生临时分支，如图

```js
 ~/dev/tutorial/git-test  ➦ de7db81 ●✚ >R>  
```

此时输入

```js
git add .
git rebase --continue
# git rebase –abort 放弃一次合并
```

然后又会进入编辑器

```js
dev_4

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# interactive rebase in progress; onto de7db81
# Last command done (1 command done):
#    pick 69f9342 dev_4
# No commands remaining.
# You are currently rebasing branch 'dev_4' on 'de7db81'.
#
# Changes to be committed:
#       modified:   README.md
#
```

修改完提交信息后，键入 `:wq`，返回

```js
[detached HEAD 5fb8d7c] dev_4
 1 file changed, 2 insertions(+)
Successfully rebased and updated refs/heads/dev_4.
 ~/dev/tutorial/git-test   dev_4  
```

输入

```js
git log --graph --pretty=oneline --abbrev-commit
```

此时分支图形展示图如下

```js
* 5fb8d7c (HEAD -> dev_4) dev_4
* de7db81 (master, dev_3) dev_3
```

### 本地清理

隔段时间执行一次交互式 rebase，可以保证 feature 分支的每个提交都有意义且没有比较傻的提交记录或你不想让别人看到的提交记录。对最近的3次提交进行交互式 rebase。

```js
// feature 是只有你一个人才能工作的分支
git checkout feature
git log --oneline
```

```js
eab2a62 (HEAD -> dev_4) dev_4_3
02f7645 dev_4_2
dd70779 dev_4_1
5bfbcb8 dev_4
29105e8 (origin/master, origin/HEAD, master) Initial commit
```

```js
git rebase -i HEAD~4
```

接下来进入文本编辑器，显示所有将被移动的提交。

```js
pick 5bfbcb8 dev_4
pick 4456af9 dev_4_1
pick 2dbc566 dev_4_2
pick c4f05e9 dev_4_3

# Rebase 29105e8..c4f05e9 onto 29105e8 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
#       However, if you remove everything, the rebase will be aborted.
"~/dev/tutorial/git-test/.git/rebase-merge/git-rebase-todo" 30L, 1145C
```

交互界面中，最新列出最近的 4 个 commit（最后的是最近的一次提交），最前面是操作命令，默认 pick，表示该行被选中

```js
# p, pick 选中
# r, reword 选中并且修改提交信息
# e, edit 选中，rebase 时会暂停，允许修改这个 commit
# s, squash 选中，会将当前commit与上一个commit合并
# f, fixup 与squash相同，但不会保存当前commit的提交信息
# x, exec 执行其他shell命令
# d, drop 删除提交信息
```

英文状态下键入 `:i` ，然后将上文修改为

```js
pick 5bfbcb8 dev_4
s 4456af9 dev_4_1
f 2dbc566 dev_4_2
s c4f05e9 dev_4_3
```

英文状态下键入 esc，然后输入 `:wq`（保存并退出），编辑器此刻展示为

```js
# This is a combination of 4 commits.
# This is the 1st commit message:

dev_4

# This is the commit message #1:

dev_4_1

# The commit message #2 will be skipped:

# dev_4_2

# This is the commit message #3:

dev_4_3

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Nov 25 23:49:13 2019 +0800
#
# interactive rebase in progress; onto 29105e8
# Last commands done (4 commands done):
#    fixup 2dbc566 dev_4_2
#    squash c4f05e9 dev_4_3
# No commands remaining.
"~/dev/tutorial/git-test/.git/COMMIT_EDITMSG" 32L, 682C
```

可以看见 `dev_4_2` 的提交信息被注释了，因为命令是 `f`，如果自己不改动提交信息的话，键入 `:q`

```js
commit 69f93421a572d6a1171bdbc94b0590fe68cd0c02 (HEAD -> dev_4)
Author: ruizhengyun <ruizhengyun@gmail.com>
Date:   Mon Nov 25 23:49:13 2019 +0800

    dev_4

    dev_4_1

    dev_4_3
```

### 本地清理另外一种方式 pony Foo

```js
git checkout dev_4
git reset HEAD~4
git add .
git commit -m "dev_4"
git push -f
```

先撤销过去 4 个 commit，然后再建一个新的

## 强制推送

`git push` 命令要加上 `force` 参数，因为 `rebase` 以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送

```js
git push --force
// 或
git push -f
```
