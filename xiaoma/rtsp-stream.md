sudo apt install ffmpeg
sudo apt remove ffmpeg
sudo apt-get autoremove

pwd:123*con

sudo apt-get install ffmpeg

ffmpeg -version
ffmpeg: error while loading shared libraries: libavdevice.so

sudo find / -name libavdevice.so.52

sudo dbkg -i *.deb

tar -cvf
tar -xzvf

sudo dpkg -i libalibaacs...
sudo dpkg -i libswscale...
sudo

dpkg: error processing package libswscale5:amd64(--install)
dependency problems - leaving unconfigured
Processing triggers for libc-bin (2.31-0ubuntu9.16)
Errors were encountered while processing

Please try to fix the dependency error by running this command.

~$sudo apt --fix-broken install

<http://ports.ubuntu.com/pool/>

libc-bin_3.31-0ubuntu9.16_arm64.deb
man-db_2.9.1-1_amd64.deb

您遇到的 `dpkg` 错误消息表明在尝试安装 `libswscale5:amd64` 包时出现了依赖性问题。这意味着您试图安装的包依赖于其他未安装或版本不正确的包。以下是解决此问题的步骤：

1. **检查依赖关系：**
   首先，确定 `libswscale5` 所需的依赖关系。您可以运行以下命令：

   ```bash
   dpkg -I libswscale5*.deb
   ```

   这将显示 `libswscale5` 所需的依赖关系。

2. **安装依赖关系：**
   确定所需的依赖关系后，尝试安装它们。您可以使用 `apt-get` 命令：

   ```bash
   sudo apt-get install -f
   ```

   此命令尝试修复破损的依赖关系。

3. **再次安装包：**
   如果依赖关系已解决，请尝试再次安装包：

   ```bash
   sudo dpkg -i libswscale5*.deb
   ```

4. **检查其他破损的包：**
   如果仍然有问题，请检查其他破损的包：

   ```bash
   sudo apt-get check
   ```

5. **强制安装（如有必要）：**
   在某些情况下，您可能需要强制安装包（谨慎使用）：

   ```bash
   sudo dpkg --force-all -i libswscale5*.deb
   ```

6. **使用 Aptitude：**
   如果 `apt-get` 和 `dpkg` 仍然有问题，可以尝试使用 `aptitude`，它通常在解决依赖关系方面表现更好：

   ```bash
   sudo aptitude install libswscale5
   ```

7. **手动解决依赖关系：**
   如果上述步骤无效，您可能需要手动下载和安装所需的依赖关系。您可以在 [Ubuntu 软件包网站](https://packages.ubuntu.com/) 或 [Debian 软件包库](https://packages.debian.org/) 上找到所需的包。

8. **更新和升级：**
   确保您的软件包列表是最新的：

   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   ```

9. **清理：**
   最后，清理任何不必要的软件包：

   ```bash
   sudo apt-get autoremove
   sudo apt-get clean
   ```

通过遵循这些步骤，您应该能够解决依赖性问题并成功安装 `libswscale5:amd64` 包。如果问题仍然存在，请提供更多关于您遇到的具体错误消息的详细信息。

ffmpeg child process for ${option.url} is exit with code ${code} \n message $
