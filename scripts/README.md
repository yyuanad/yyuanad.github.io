# 安装 nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

# 安装 node

```
nvm install 16.18
```

理论上会自动选择 `node: 16.18`
如果执行后续指令报错, 找不到 `node`, 可以执行

```
nvm use 16
```

# 安装 yarn

```
corepack enable
corepack prepare yarn@1.22.19 --activate
```

# 在本项目根目录执行

```
yarn install
```

之后每次提交时都会自动更新 `index.html` 里的更新时间

# 提交报错

如果你使用的是 `vscode` 的 `source control` 面板进行代码的提交, 并遇到如下错误:

```
Git: .husky/pre-commit: line 4: yarn: command not found
```

请创建如下文件 `~/.huskyrc`, 内容如下:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
