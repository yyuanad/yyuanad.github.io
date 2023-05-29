# 安装 nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

# 安装 node

```
nvm install 16.18
```

# 安装 yarn

```
corepack enable
corepack prepare yarn@1.22.19 --activate
```

# 在根目录执行

```
yarn install
```

之后每次提交时都会自动更新 `index.html` 里的更新时间
