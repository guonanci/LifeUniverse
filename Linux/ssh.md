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

原文链接：https://blog.csdn.net/bedisdover/article/details/51622133


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
引号或者转义符号\ : https://www.51cto.com/article/746071.html
