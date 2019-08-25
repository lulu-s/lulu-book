# 乱七八糟的知识点

## Mac

### 1. git安装
参考：https://www.jianshu.com/p/7edb6b838a2e

### 2. npm权限问题
参考：https://blog.csdn.net/sinat_36422236/article/details/89675658


## 兼容类

### 1. 解决使用css3的rotate，出现锯齿化的问题。
  ```
    -webkit-backface-visibility: hidden;
  ```
参考：https://code.i-harness.com/zh-TW/q/630f7b


## bug

### 1. Uncaught SyntaxError: Invalid or unexpected token (javascript)
注意：注意分号要是英文的。

### 2. unable to access 'https://github.com/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443. (Github)
注意：打开git bash(命令行)， 敲命令"git config --global http.sslVerify false"
