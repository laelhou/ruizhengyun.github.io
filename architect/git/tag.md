# 标签
发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

Git 的标签虽然是版本库的快照，但其实它就是指向某个commit的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。

# 场景
Git有commit，为什么还要引入tag？

“请把上周一的那个版本打包发布，commit号是6a5819e...”

“一串乱七八糟的数字不好找！”

如果换一个办法：

“请把上周一的那个版本打包发布，版本号是v1.2”

“好的，按照tag v1.2查找commit就行！”

所以，tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。

# 新增标签
```
git tag release-1.0.0
```

2.发版本后忘记打标签了，可以根据 commitId 打包
```
git tag release-1.0.0 f52c633
```

3. 用 `-a` 指定标签名，`-m` 指定说明文字

```
git tag -a release-1.0.0 -m "version 1.0.0 released" 1094adb
```

# 推送标签
1.推送一个本地标签
```
git push origin release-1.0.0
```

2.推送全部未推送过的本地标签
```
git push origin --tags
```

# 查看标签
1.查看所有标签
```
git tag
```

2.查看标签信息
```
git show release-1.0.0
```

# 删除标签
```
git tag -d release-1.0.0
git push origin :refs/tags/release-1.0.0
```

# 参考
- [廖雪峰 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600/900788941487552)