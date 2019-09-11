# 乱七八糟的知识点


## 处理各种奇葩问题

### 1. 解决使用css3的rotate，出现锯齿化的问题。
  ```css
    -webkit-backface-visibility: hidden;
  ```
参考：https://code.i-harness.com/zh-TW/q/630f7b

### 2. 解决Three.js缩放时以整个浏览器为单位。
  ```css
    body {
        overflow: hidden;
    }
    canvas {
        display: block; /* fix necessary to remove space at bottom of canvas */
    }
  ```
参考：https://stackoverflow.com/questions/10425310/three-js-full-screen-issue

### 3. Three.js由3d场景坐标转换成2d屏幕坐标
  ```javascript
    // 首先需要通过某个场景组Group里面的模型的位置坐标，不输入具体坐标则为该组内位置坐标全部转换 group.localToWorld()
    var pos = group.localToWorld( new three.Vector3(x, y, z) );
    
    // 然后通过THREE.Vector3的project方法，逆转相机来求出二维坐标，或全部 pos.project( camera );
    var vector = new three.Vector3( pos.x, pos.y, pos.z ).project( camera );

    // 返回的是一个二维向量，我们可以通过获取的坐标计算出当前点距离显示平面左上角的像素距离。
    vector.x = ( vector.x + 1) * w / 2;
    vector.y = - ( vector.y - 1) * h / 2;
  ```
参考：<br>
  * https://blog.csdn.net/qq_30100043/article/details/80798791
  * https://codeday.me/bug/20190328/844841.html

### 4. div做的button点击出现选中蓝框
div或者button的样式里面加上
```
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
参考：https://www.iteye.com/blog/yigang-2235539


## bug

### 1. Uncaught SyntaxError: Invalid or unexpected token (javascript)
注意：注意分号要是英文或者是缺少各种符号`, { [ ( ......`。

### 2. unable to access 'https://github.com/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443. (Github)
注意：打开git bash(命令行)， 敲命令`git config --global http.sslVerify false`

## Mac

### 1. git安装
参考：https://www.jianshu.com/p/7edb6b838a2e

### 2. npm权限问题
参考：https://blog.csdn.net/sinat_36422236/article/details/89675658

### 3. 查看ip
参考：https://jingyan.baidu.com/article/b0b63dbf3fefd14a48307013.html

### 4. 关闭死不掉的进程
1. 查看端口
终端输入：lsof -i tcp:port 将port换成被占用的端口(如：8086、9998)
将会出现占用端口的进程信息。

2. kill进程
找到进程的PID,使用kill命令：kill -9 PID（进程的PID，如2044），杀死对应的进程

参考 https://blog.csdn.net/nextstudio/article/details/18133963

## Github

### 1. 关于gitmodule子模块的运用
正常的使用git clone命令，然后再使用 git submodule init 和git submodule update来获取子模块<br>
参考：https://blog.csdn.net/xuanwolanxue/article/details/80609986
