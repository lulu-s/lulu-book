# Mac / DOS / Linux 命令行

* [DOS 命令](#DOS-命令行)
* [Mac 终端命令](#Mac-终端命令)
* [Liunx 命令](#liunx-终端命令)


## DOS 命令
1. cd 进入指定目录
```
    语法：cd dirname     // 进入指定目录
         cd             // 回到根目录
         cd ..          // 回到上一层目录。
```
2. ls 查看当前目录下的所有文件(直接使用)


## Mac 终端命令

### 目录操作
1. cd 进入指定目录
```
    语法：cd dirname     // 进入指定目录
         cd             // 回到根目录
         cd ..          // 回到上一层目录。
```
2. ls 查看当前目录下的所有文件(直接使用)
3. pwd 显示当前路径名(直接使用)
4. mkdir 创建目录
```
    mkdir dirname
```
5. rmdir 删除目录
```
    rmdir dirname
```
6. touch 创建文件 / 隐藏文件也行
```
    touch ~/.zshrc
```

### 文件
1. open 打开文件
```
    open filename
```
2. file 显示文件类型
```
    file filename
```
3. cp 复制文件或目录
```
    cp -r name newname  // 复制name，复制体名newname
```
4. rm 删除文件或目录
```
    rm -r name
```

### 进程
1. ps 显示进程当前状态(直接使用)
2. kill 终止进程
```
    kill -9 30142
```

### 安全
1. passwd 修改用户密码

### 时间(直接使用)
1. date 显示系统的当前日期和时间
2. cal 显示日历

### 网络
1. ping 给一个网络主机发送 回应请求
```
    ping ip
```

### 其他命令(直接使用)
1. clear 清空窗口
2. env 当前设置过的环境变量
3. who 列出当前登录的所有用户
4. whoami 显示当前正进行操作的用户名
5. tty 显示终端或伪终端的名称
6. du 查询磁盘使用情况
7. df 显示文件系统的总空间和可用空间
8. w 显示当前系统活动的总信息



## Liunx 命令
1. nano 文件名 （创建文本）
2. curl 文件路径 > 文件名 （从该路径下载并创建名为“文件名“的文件）
3. cat 文件名 （查看文件）
4. rm 文件名 （删除文件）