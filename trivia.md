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
```css
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
参考：https://www.iteye.com/blog/yigang-2235539

### 5. 去掉span标签的间距
将span转成块级标签，父元素字体大小设置为0，再设置span字体大小
```css
    .show_msg {
        font-size: 0px;
    }

    .show_msg > span {
        display: inline-block;
        font-size: 40px;
    }
```
参考：https://blog.csdn.net/u014627807/article/details/79961951

### 6. js对象去重
```javascript
    var obj = [
            {year: '2013-2014', term: '1'},
            {year: '2013-2014', term: '2'},
            {year: '2013-2014', term: '3'},
            {year: '2013-2014', term: '2'},
            {year: '2014-2015', term: '1'},
            {year: '2013-2014', term: '2'}
            ]
    var unique = {};
    obj.forEach(function(gpa) {
        unique[JSON.stringify(gpa)] = gpa
    });
    obj = Object.keys(unique).map(function(u) {
        return JSON.parse(u)
    });
    console.log(unique)
```
参考：https://blog.csdn.net/longzhoufeng/article/details/78224205

### 7. js保留两位小数
以下处理结果会四舍五入:
```javascript
    var num = 2.446242342;
    num = num.toFixed(2);  // 输出结果为 2.45
```
以下处理结果不会四舍五入:
```javascript
    第一种，先把小数变整数：
    Math.floor(15.7784514000 * 100) / 100   // 输出结果为 15.77
    
    第二种，当作字符串，使用正则匹配：
    Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/))   // 输出结果为 15.77,不能用于整数如 10 必须写为10.0000
```
参考：https://www.runoob.com/w3cnote/javascript-two-decimal.html

### 8. 修改placeholder默认颜色
```css
    :-moz-placeholder { 
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #fff;  
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #fff;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #fff;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #fff;
    }

```
参考：http://www.bbs0101.com/archives/116.html


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


## 手机端

### 1. 兼容所有机型
```javascript
    // 会有白边底部
    var w = window.innerWidth;
    window.addEventListener("resize", (e) => {
        document.body.style.zoom = window.innerWidth / w;
    })
```
参考： https://blog.csdn.net/yakson/article/details/78575135

```javascript
    // 使用rem
    window.addEventListener("resize", (e) => {
        initWidth();
        initFontSize();
    })

    function initWidth() {
        scaler.style.width = document.documentElement.clientWidth + 'px'
    }
    function initFontSize() {
        const cw = document.documentElement.clientWidth
        // width: 375px -> fontSize:16px
        if (cw == 375) {
            document.documentElement.style.fontSize = '16px'
        } else {
            document.documentElement.style.fontSize = cw / 375 * 16 + 'px'
        }
    }

    initWidth();
    initFontSize(); 
```
参考： https://blog.csdn.net/fifteen718/article/details/83039121

### 2. 禁止苹果手机缩放，ios10后的版本
```javascript
    // 阻止双击放大
    var lastTouchEnd = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止双指放大
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    }); 
```
参考： https://blog.csdn.net/Terenceno/article/details/96132342

### 3. 判断横竖屏
```javascript
    //判断手机横竖屏状态：
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) { 
            console.log("竖屏");
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
            console.log("横屏");
        }  
    }, false); 
```
参考：https://www.cnblogs.com/cdj61/p/9342041.html