# 常用命令

## 简写

- `npm install` 可简写 `npm i`

## 创建

### 引导创建 `package.json` 文件

```js
npm init
npm init -y
```

## 安装

```js
// 全局
npm install <package> -g

// 本地
npm install <package>

// 安装到最新版本
npm install <package>@latest

// 一次性
npm install <package> <package>

// 开发时依赖包
npm install <package> --save-dev
npm install <package> -D

// 运行时依赖包
npm install <package> --save
npm install <package> -S
```

## 卸载

```js
npm uninstall <package>
```

## 更新

```js
// 简单更新
npm update <package>

// 更新到指定版本
npm update <package>@version
```

`update` 无法让已经安装的高版本 `2.5.0` 更新到低版本 `1.0.0`，可先 `npm uninstall <package>` 再 `npm install <package> @2.5.0`

## 查看

### 查看版本号和帮助

```js
// 自身版本号
npm -v

// 所有命令
npm help
```

### 查看目录

```js
// 项目所在目录
npm root

// 全局所在目录
npm root -g
```

### 查看包属性

```js
// 包所有信息
npm view <package>

// 包的属性
npm view <package> dependencies

// 包源文件地址
npm view <package> repository.url

// 包依赖 node 最低版本号
npm view <package> engines

// 包当前版本号
npm view <package> version

// 包历史版本号
npm view <package> versions

// 包作者信息
npm view <package> maintainers
```

### 查看 bugs (issues)

```js
// 包bugs
npm bugs <package>

// 当前项目bugs
npm bugs
```

### 查看包列表

```js
// 当前项目包列表
npm list

// 全局包列表
npm list -g 

// 限制展示目录层级
npm list --depth=0 
```

## 检查

```js
// 检查所有包是否过时
npm outdated
```

## 发布

### 查看包名是否存在

```js
npm search <package>
```

## 打开

- 比如查看 ant.design 主页，就可以 `npm homs antd`;
- 比如查看 ant.design 文档，就可以 `npm docs antd`; 
- 比如查看 ant.design github 仓库，就可以 `npm repo antd`; 

```js
// 包主页
npm home <package>

// 包文档地址
npm docs <package>

// 包仓库地址
npm repo <package>
```

## 清除

## 清除缓存

慎用该命令

```js
npm cache clean
```

### 清除未用到的包

有时在我们使用 `npm list` 时，可能会碰到一些问题，有些包并没有被项目引用并使用，但还是安装了，可通过下面命令清除这些没有使用到的包

```js
npm prune
```

## 说明

对于常用的命令后续会在追加，如果还有没有列出的常用命令，欢迎在评论区指出。
