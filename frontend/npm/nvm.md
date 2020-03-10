# 版本管理 nvm

Node Version Manager，是一个存放在 github 上的工具，用于管理 Node 版本。如果使用 Node 则建议先安装 NVM。在 github 上有对 nvm 详细的描述。github 地址：[https://github.com/creationix/nvm](https://github.com/creationix/nvm)。

## 安装 NVM（依赖 GIT）

### 运行命令

```js
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

或

```js
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

建议使用 `curl` 的方式，安装后将创建目录 `~/.nvm` 并将内容存放在这里。

### 测试是否安装成功

执行

```js
nvm -h
// 安装 node 8.9.0 版本
nvm install v8.9.0 
```

如果安装后不起作用，可以

- 查看 `~/.bashrc`, `~/.bash_profile`, `~/.zshrc`, `~/.profile` 中有没有配置信息 `export NVM_DIR...`；
- 若没有，就将下面配置信息添加到上面列出的四个文件中的一个；
- 让配置文件里面生效，执行 `source ~/.刚刚配置的那个文件名`

```js
// nvm 全局变量配置信息
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  ## This loads nvm
```

具体步骤

```js
cd ~
vim .bash_profile

## 将 `export NVM_DIR ...` 粘贴到文件中
## esc -> 输入":" -> 输入 "wq" -> 回车保存

## 让配置文件里面生效
source .bash_profile
```

## 卸载 NVM

1.执行下面的命令移除 nvm 内容

```js
cd ~
rm -rf .nvm
```

2.移除掉 `~/.profile, ~/.bash_profile, ~/.zshrc, ~/.bashrc` 文件中关于 nvm 的配置;

## 设置默认版本

如果不设置，每次进入终端都要设置哪个版本，烦死，效率低。

```js
nvm alias default v12.10.0
```

## nvm 版本目录路径

```js
/Users/你的电脑/.nvm/versions/node/
```