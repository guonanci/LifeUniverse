*gitbash、cmd、PowerShell、electerm各有各的特点，在合适的时机选择你想要的工具即可*


# PowerShell
## Remove-Item : 找不到与参数名称“rf”匹配的参数。
所在位置 行:1 字符: 4
+ rm -rf .\node_modules\ yarn.lock
+    ~~~
    + CategoryInfo          : InvalidArgument: (:) [Remove-Item]，ParameterBindingExceptio
    n
    + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.Commands.Remove
   ItemCommand

在 PowerShell 中，`rm -rf` 命令的语法是错误的。`rm -rf` 是一个 Unix 风格的命令，在 Windows 上的 PowerShell 中，你需要使用 `Remove-Item` 命令来删除文件和目录。

下面是正确的 PowerShell 命令来删除 `node_modules` 文件夹和 `yarn.lock` 文件：

```sh
Remove-Item -Recurse -Force .\node_modules
Remove-Item -Force yarn.lock
```

### 详细步骤

1. **打开 PowerShell**：

   确保你在项目的根目录中打开 PowerShell。

2. **删除 `node_modules` 文件夹和 `yarn.lock` 文件**：

   执行以下命令：

   ```sh
   Remove-Item -Recurse -Force .\node_modules
   Remove-Item -Force .\yarn.lock
   ```

3. **重新安装依赖**：

   运行以下命令重新安装项目的依赖：

   ```sh
   yarn install
   ```

### 说明

- `Remove-Item -Recurse -Force .\node_modules`：这个命令会递归地强制删除 `node_modules` 文件夹及其内容。
- `Remove-Item -Force .\yarn.lock`：这个命令会强制删除 `yarn.lock` 文件。

### 总结

通过正确的 PowerShell 命令，你可以删除 `node_modules` 文件夹和 `yarn.lock` 文件，然后重新安装依赖，以解决由于缓存或依赖问题引起的错误。


# Remove-Item : 无法删除项 C:\Users\Administrator\projects\xiaoma-app\node_modules\react-nat
ive-gesture-handler: 目录不是空的。

在 Windows 的 PowerShell 中，有时在删除包含大量文件或目录的文件夹时会遇到 "目录不是空的" 错误。为了强制删除整个目录及其内容，可以使用以下步骤：

### 使用 PowerShell 强制删除目录

1. **打开 PowerShell**：
   确保你在项目的根目录中打开 PowerShell。

2. **使用 `Remove-Item` 强制删除目录**：
   尝试以下命令来强制删除 `node_modules` 目录：

   ```powershell
   Remove-Item -Recurse -Force .\node_modules
   ```

如果这不起作用，你可以尝试另一种方法，通过使用 `robocopy` 和 `Remove-Item` 组合来确保删除：

### 使用 `robocopy` 清空目录，然后删除

1. **创建一个临时空目录**：

   ```powershell
   mkdir empty
   ```

2. **使用 `robocopy` 将空目录的内容复制到 `node_modules`，以便清空 `node_modules`**：

   ```powershell
   robocopy empty node_modules /MIR
   ```

   这里的 `/MIR` 选项表示 "镜像" 复制，将目标目录中的所有文件和子目录同步为空目录的内容，这实际上会删除 `node_modules` 目录中的所有文件和子目录。

3. **删除空目录和 `node_modules` 目录**：

   ```powershell
   Remove-Item -Recurse -Force .\node_modules
   Remove-Item -Recurse -Force .\empty
   ```

### 重新安装依赖

1. **重新安装项目依赖**：

   ```powershell
   yarn install
   ```

### 总结

通过上述步骤，你应该能够成功删除 `node_modules` 目录及其所有内容。然后，你可以重新安装项目的依赖，以解决由于缓存或依赖问题引起的错误。

# SmartTerm

上传文件的话直接上传到根目录/root了，没有UI界面，所以需要自己手动确认一番。
