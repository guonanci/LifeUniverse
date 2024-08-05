windows install dir: C:\Programs\Nodejs
```js
const promisify = function (method) {
  return function (ctx) {
    // 获取method调用的需要参数
    var args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (resolve, reject) {
      // 除了函数传入的参数以外还需要一个callback函数来供异步方法调用
      var callback = function (err, result) {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      };

      args.push(callback);
      // 调用method
      method.apply(ctx, args);
    });
  };
};

// quit nodejs command line: cmd z
```

[mac_upd_nodejs](https://zhuanlan.zhihu.com/p/64125228)

```
Node npm升级
一、Node 升级

1. 利用Node.js的多版本管理器n

sudo npm cache clean -f //清除nodejs的cache：
sudo npm install -g n //使用npm安装n模块
npm view node versions // node所有版本
sudo n latest // 升级到最新版本
sudo n stable // 升级到稳定版本
sudo n xx.xx // 升级到具体版本号
2.利用brew升级

brew update
(1).更新homebrew,如果出现The /usr/local directory is not writable.则需要更改权限 ，然后输入：sudo chown -R $(whoami) /usr/local
(2).升级完以后，会弹出这个
Homebrew no longer needs to have ownership of /usr/local. If you wish you can
return /usr/local to its default ownership with
sudo chown root:wheel /usr/local
(3). 按提示输入下边的命令，更改会原来的权限
sudo chown root:wheel /usr/local
--------------------
接下来更新node
brew upgrade node
二、npm 升级

sudo npm install npm@latest -g //升级到最新版
sudo npm install npm@xx -g //升级到指定版本
npm version // 查看版本详情
npm view npm version // npm最新版本
npm view npm versions // npm所有版本
npm list //  插件清单
```

# electron

这个 package 不管是 vpn 的全局还是自动模式，都 install 失败，要用淘宝镜像源

# v17

export NODE_OPTIONS=--openssl-legacy-provider(cur proj dir)
https://github.com/webpack/webpack/issues/14532

# zsh npm/node command not found

https://www.cnblogs.com/shenxiaolin/p/14379507.html#:~:text=%E2%80%94%E2%80%94%E7%BB%88%E7%AB%AF%E6%8A%A5%E6%AD%A4%E9%94%99%EF%BC%8C,%E6%98%AFnode%E5%AE%89%E8%A3%85%E6%9C%89%E9%97%AE%E9%A2%98%EF%BC%8C&text=%E6%89%80%E4%BB%A5%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%98%AF%E7%9B%B4%E6%8E%A5%E5%8D%B8%E8%BD%BD,%E9%80%9A%E8%BF%87%E7%BB%88%E7%AB%AF%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85node%EF%BC%81

# JS webpack OOM

https://github.com/webpack/webpack-sources/issues/66


# 你需要权限删除node_modules
如果遇到权限问题，导致无法删除 `node_modules` 目录，可以尝试以下方法来提升权限或者使用工具来强制删除目录。

### 方法一：以管理员身份运行 PowerShell

1. **以管理员身份运行 PowerShell**：
   - 右键点击开始菜单。
   - 选择“Windows PowerShell（管理员）”或者“Windows PowerShell”。
   - 在弹出的 UAC（用户账户控制）提示中选择“是”。

2. **在管理员 PowerShell 中执行删除命令**：
   ```powershell
   Remove-Item -Recurse -Force .\node_modules
   ```

### 方法二：使用 PowerShell 的 `TakeOwn` 和 `ICACLS` 提升权限

1. **以管理员身份运行 PowerShell**。

2. **取得 `node_modules` 目录的所有权**：
   ```powershell
   takeown /f .\node_modules /r /d y
   ```

3. **为当前用户授予完全控制权限**：
   ```powershell
   icacls .\node_modules /grant %username%:F /t
   ```

4. **删除 `node_modules` 目录**：
   ```powershell
   Remove-Item -Recurse -Force .\node_modules
   ```

### 方法三：使用第三方工具如 `rimraf` 强制删除

1. **全局安装 `rimraf`**：
   `rimraf` 是一个跨平台的 Node.js 包，用于递归删除文件和目录。

   ```sh
   npm install -g rimraf
   ```

2. **使用 `rimraf` 删除 `node_modules`**：
   ```sh
   rimraf node_modules
   ```

### 方法四：手动删除

1. **关闭所有终端和编辑器**：
   确保没有任何程序在使用 `node_modules` 中的文件。

2. **通过文件资源管理器手动删除**：
   - 打开文件资源管理器。
   - 导航到项目目录。
   - 右键点击 `node_modules` 目录并选择“删除”。

### 重新安装依赖

完成删除操作后，重新安装项目依赖：

```sh
yarn install
```

### 总结

通过上述方法，你应该能够解决权限问题并成功删除 `node_modules` 目录。以管理员身份运行 PowerShell 或使用 `rimraf` 等工具通常是最有效的解决方案。
