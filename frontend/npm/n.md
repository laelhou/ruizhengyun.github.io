# 版本管理 n
## 全局安装
```js
npm install n -g
```

## 常用命令
### 安装
```js
// 最稳定版本
n stable

// 最新版
npm latest

// 定制版
npm vx.x.x
```

### 切换版本
```js
n x.x.x
```

### 删除指定版本
```js
n rm x.x.x
```

### 查看
```js
// 当前可用版本
n ls

// 可更新版本
npm -g outdated
```

### 指定版本执行
```js
n use x.x.x func.js
```