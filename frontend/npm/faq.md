# 如何更新本地依赖包
定期更新你的应用所依赖的包（package）是个好习惯。因为依赖包的开发者更新了代码，你的应用也就能够获得提升。

## 步骤
1.执行命令 `npm outdated` 查看有哪些包要更新；
2.在 `package.json` 文件所在的目录中执行命令 `npm update`;
3.执行命令 `npm outdated`，此时没有消息就说明都更新完毕（没有消息就是最好的消息）；

# 如何卸载本地安装的包
```js
npm uninstall <package>

// 从 package.json 文件中删除依赖
npm uninstall <package> --save
npm uninstall <package> --save-dev
```

# 如何发布包
## 创建用户帐户
```js
npm adduser
```

## 登录
```js
// 去登陆
npm login

// 查看是否已经登录
npm whoami
```

## 发布
```js
npm publish
```
> 查看发布的包，`https://npmjs.com/package/<package>`

## 更新版本号
```
npm version <update_type>
```