# scp upload/download files

1. 从服务器下载文件
命令格式如下：

scp <用户名>@<ssh服务器地址>:<文件路径> <本地文件名>

示例，下载文件到本地桌面

scp root@127.0.0.1:~/test.txt ~/Desktop/test.txt

2. 上传文件到服务器
命令格式如下：

scp <本地文件名> <用户名>@<ssh服务器地址>:<上传保存路径即文件名>

这里需要注意的一点是，只能将文件上传至用户目录下。如需上传至其它目录，可先上传至用户目录，然后移动文件至指定位置。
3. 文件夹操作
上传/下载文件夹操作与文件操作类似，只需加入参数 -r 即可。
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：<https://blog.csdn.net/bedisdover/article/details/51622133>

*cd ~ && cd /*

# ls

ls 命令在 Unix 和 Linux 系统中用于列出目录内容。要查看文件的修改时间（mtime，即内容最后修改时间），你可以使用 -l（长格式）或 --full-time 选项（如果可用）与 ls 命令结合。

使用 -l 选项：
bash
ls -l filename
输出示例：

bash
-rw-r--r-- 1 user group 12345 Jan 23 20:34 filename
在上述输出中，Jan 23 20:34 就是文件的修改时间。
2. 使用 --full-time 选项（在某些系统上可用）：

这个选项会显示更完整的日期和时间，包括时区。

bash
ls --full-time filename
注意：并非所有的 ls 实现都支持 --full-time 选项。如果你的系统不支持，你可能需要使用其他方法（如 stat 命令）来获取更详细的时间信息。
3. 使用 stat 命令：

如果你需要更详细的文件信息，包括访问时间（atime）、修改时间（mtime）和状态改变时间（ctime），你可以使用 stat 命令。

bash
stat filename
在输出中，你会看到类似于 Access:、Modify: 和 Change: 的行，后面跟着相应的时间戳。

希望这可以帮助你查看文件的修改时间！

# 文件名包含空格

引号或者转义符号\ : <https://www.51cto.com/article/746071.html>

# home-end

这组快捷键很方便

# *

dist*也包括dist这个名字！！，*包含空字符。

# unzip

unzip覆盖解压原创

CSDN博客
<https://blog.csdn.net> › article › details
·
Translate this page
Aug 7, 2019 — unzip解压时需要直接覆盖以解压的文件在unzip命令后，增加-o的参数，则不再进行询问，直接覆盖原文件解压缩，节省了很多事儿。 unzip -o fileName.zip.

# ssh: connect to host github.com port 22: Connection timed out

fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

好的，关于你遇到的错误 `ssh: connect to host github.com port 22: Connection timed out`，通常是因为你的 SSH 连接 GitHub 时遇到问题。这里有一些可能的解决方案：

### 1. **检查网络或防火墙设置：**

- 确保你的网络或防火墙没有阻止端口 22（GitHub 使用此端口进行 SSH 连接）。如果你在公司或受限的网络环境下，可能会有端口阻塞的情况。你可以尝试切换到其他网络或使用 VPN。

### 2. **使用 HTTPS 代替 SSH：**

   如果 SSH 连接有问题，你可以尝试改用 HTTPS 来与 GitHub 交互。例如，修改远程仓库的 URL：

   ```bash
   git remote set-url origin https://github.com/username/repository.git
   ```

   然后再试一次。

### 3. **测试 SSH 连接 GitHub：**

   你可以用以下命令测试 SSH 是否能够成功连接到 GitHub：

   ```bash
   ssh -T git@github.com
   ```

   如果返回类似 `Hi username! You've successfully authenticated` 的消息，说明连接成功。如果仍然超时或报错，说明网络上有问题。

### 4. **使用端口 443（备用端口）：**

   如果端口 22 被屏蔽，你可以尝试使用 443 端口，这是通常开放的 HTTPS 端口。你可以在 SSH 配置文件（`~/.ssh/config`）中添加如下内容：

   ```bash
   Host github.com
     Hostname ssh.github.com
     Port 443
   ```

   保存文件后，再试一次。

### 5. **检查 SSH 密钥和身份验证：**

- 确保你的 SSH 密钥已经正确配置在 GitHub 上。你可以用以下命令查看当前加载的 SSH 密钥：

     ```bash
     ssh-add -l
     ```

- 如果没有列出任何密钥，可能需要将密钥添加到 SSH agent：

     ```bash
     ssh-add ~/.ssh/id_rsa
     ```

- 如果你还没有将 SSH 密钥添加到 GitHub，可以参考 [GitHub 的 SSH 密钥配置指南](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)。

### 6. **使用 SSH 的详细输出调试：**

   你可以在 SSH 命令中添加 `-v` 参数来获取详细的调试信息，这有助于你定位问题：

   ```bash
   ssh -vT git@github.com
   ```

   这将输出更多的调试信息，帮助你分析问题所在。

如果你有任何疑问，或者在某个步骤中需要帮助，随时告诉我！

# 怎么查看window10的网络或防火墙有没有阻止端口 22

在 Windows 10 上查看网络或防火墙是否阻止了端口 22，可以通过以下几种方法进行排查：

### 1. **使用 PowerShell 检查端口是否被阻塞**

   你可以使用 PowerShell 命令来检查端口是否开放。

   打开 PowerShell 窗口（以管理员身份运行），然后执行以下命令：

   ```powershell
   Test-NetConnection -ComputerName github.com -Port 22
   ```

- 如果结果中显示 `TcpTestSucceeded: True`，说明端口 22 没有被阻塞。
- 如果显示 `TcpTestSucceeded: False`，则表示端口 22 可能被防火墙或其他网络设置阻塞。

### 2. **检查 Windows 防火墙设置**

   在 Windows 10 中，你可以通过防火墙设置查看是否阻止了端口 22。

   **步骤：**

   1. 按 `Win + R` 打开运行窗口，输入 `wf.msc` 并按回车，打开 **Windows 防火墙高级安全性**。
   2. 在左侧栏选择 **入站规则**。
   3. 检查是否有规则阻止了端口 22，或者你可以在右侧的 **操作** 中选择 **新建规则**，来允许端口 22。
      - 如果端口 22 被阻止，你可以通过创建一个新的入站规则来允许该端口：
        - 点击 **新建规则**。
        - 选择 **端口**，然后点击 **下一步**。
        - 选择 **TCP** 并在特定本地端口中输入 `22`。
        - 选择 **允许连接**，然后继续设置规则。
        - 给规则命名，比如 "允许 SSH 端口 22"。
        - 点击 **完成**。

### 3. **查看路由器或网络防火墙设置**

   如果你在公司网络或使用路由器上网，可能是路由器或网络防火墙阻止了 SSH 的端口 22。你可以：

- 登录到路由器的管理界面，查看是否有设置阻止端口 22。
- 向网络管理员确认是否存在限制端口 22 的防火墙规则。

### 4. **使用 Telnet 检查端口**

   如果你已启用 Telnet 客户端功能（默认未启用），可以通过 Telnet 来检查端口是否开放。

   **启用 Telnet 客户端：**

   1. 打开 **控制面板** > **程序** > **程序和功能** > **启用或关闭 Windows 功能**。
   2. 找到 **Telnet 客户端**，勾选它并点击 **确定**。

   然后，打开命令提示符（CMD）并输入：

   ```bash
   telnet github.com 22
   ```

- 如果连接成功，说明端口 22 没有被阻塞。
- 如果无法连接，表示端口 22 可能被防火墙阻挡。

### 5. **检查是否使用了 VPN 或代理**

   如果你在使用 VPN 或代理服务器，这些工具有可能会干扰或阻止端口 22 的连接。你可以尝试断开 VPN 或代理，重新尝试连接 GitHub。

通过以上方法，你应该能够确认端口 22 是否被阻塞。如果确定是防火墙的问题，你可以调整防火墙设置，允许该端口的流量。如果是在公司网络中，可能需要联系网络管理员进行调整。
