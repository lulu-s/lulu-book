# ʚ细碎的小知识ɞ


* [处理各种奇葩问题](#处理各种奇葩问题)
    * [1. 解决使用 css3 的 rotate 出现锯齿化的问题](#1-解决使用-css3-的-rotate出现锯齿化的问题)
    * [2. 解决 Three.js 缩放时以整个浏览器为单位](#2-解决-threejs-缩放时以整个浏览器为单位)
    * [3. Three.js 由 3d 场景坐标转换成 2d 屏幕坐标](#3-threejs-由-3d-场景坐标转换成-2d-屏幕坐标)
    * [4. div 做的 button 点击出现选中蓝框](#4-div-做的-button-点击出现选中蓝框)
    * [5. 去掉 span 标签的间距](#5-去掉-span-标签的间距)
    * [6. js 对象去重](#6-js-对象去重)
    * [7. js 保留两位小数](#7-js-保留两位小数)
    * [8. 修改 placeholder 默认颜色](#8-修改-placeholder-默认颜色)
    * [9. radio 取消选中并能再次选中](#9-radio-取消选中并能再次选中)
    * [10. 生成 uuid](#10-生成-uuid)
    * [11. 校验手机号](#11-校验手机号)
    * [12. 修改 Three.js 背景色](#12-修改-threejs-背景色)
    * [13. 解决同时绑定单击和双击事件，会两个都执行的情况](#13-解决同时绑定单击和双击事件-会两个都执行的情况)
    * [14. 监测 Three.js 版本](#14-监测-threejs-版本)
    * [15. 保存 json](#15-保存-json)
    * [16. flex 像表格一样布局](#16-flex-像表格一样布局)
    * [17. 下标](#17-下标)
    * [18. 评级组件](#19-评级组件)

* [bug](#bug)
    * [1. Uncaught SyntaxError: Invalid or unexpected token (javascript)](#1-uncaught-syntaxerror-invalid-or-unexpected-token-javascript)
    * [2. unable to access 'https://github.com/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443. (Github)](#2-unable-to-access-httpsgithubcom-openssl-ssl_connect-ssl_error_syscall-in-connection-to-githubcom443-github)
    * [3. Update the Pi 出错](#3-Update-the-Pi-出错)

* [Mac](#mac)
    * [1. git 安装](#1-git-安装)
    * [2. npm 权限问题](#2-npm-权限问题)
    * [3. 查看 ip](#3-查看-ip)
    * [4. 关闭死不掉的进程](#4-关闭死不掉的进程)
    * [5. 解压 rar](#5-解压rar)
    * [6. ffmpeg](#6-ffmpeg)
    * [7. Xcode_xxx.xip 不是来自 apple](#7-Xcode-xxx-xip-不是来自-apple)

* [Github](#github)
    * [1. 关于 gitmodule 子模块的运用](#1-关于-gitmodule-子模块的运用)

* [手机端](#手机端)
    * [1. 兼容所有机型](#1-兼容所有机型)
    * [2. 禁止苹果手机缩放，ios10 后的版本](#2-禁止苹果手机缩放ios10后的版本)
    * [3. 判断横竖屏](#3-判断横竖屏)
    * [4. ios 键盘弹起，body 拉长，关闭键盘页面不回弹](#4-ios键盘弹起-body拉长-关闭键盘页面不回弹)
    * [5. 修改苹果默认的工具栏和菜单栏](#5-修改苹果默认的工具栏和菜单栏)
    * [6. 阻止下拉滑动的效果（橡皮筋效果）](#6-阻止下拉滑动的效果橡皮筋效果)

* [常识性知识点](#常识性知识点)
    * [影子 DOM](#影子dom)

* [数学类](#数学类)
    * [1. 粒子画球](#1-粒子画球)
    * [2. 计算圆柱贴图比例](#2-计算圆柱贴图比例)
    * [3. 计算图像缩放比例](#3-计算图像缩放比例)

* [小程序](#小程序)
    * [1. 换行（标签必须是 `<text>` ?）](#1-换行标签必须是-text-)
    * [2. 小程序更新后，不能自动弹出授权，需要用户手动点击(官方推荐 button )](#2-小程序更新后不能自动弹出授权需要用户手动点击官方推荐-button-)
    * [3. bindtap 点击事件传参](#3-bindtap-点击事件传参)
    * [4. 微信开发文档 / 快速查找](#4-微信开发文档--快速查找)
    * [5. 组件化](#5-组件化)
    * [6. 生命周期](#6-生命周期)
    * [7. 自定义导航栏](#7-自定义导航栏)
    * [8. text 显示空格](#8-text-显示空格)
    * [9. web-view 的使用](#9-web-view-的使用)
    * [10. 父调用子组件，参数变化不刷新的问题](#10-父调用子组件-参数变化不刷新的问题)

* [linux](#linux)
    * [1. raspberry pi (树莓派) 清华源](#1-raspberry-pi-(树莓派)-清华源)
    * [2. nodejs 最新版本下载 (Debian)](#2-nodejs-最新版本下载-(Debian))





## 处理各种奇葩问题

### 1. 解决使用 css3 的 rotate，出现锯齿化的问题。
  ```css
    -webkit-backface-visibility: hidden;
  ```
参考：https://code.i-harness.com/zh-TW/q/630f7b

### 2. 解决 Three.js 缩放时以整个浏览器为单位。
  ```css
    body {
        overflow: hidden;
    }
    canvas {
        display: block; /* fix necessary to remove space at bottom of canvas */
    }
  ```
参考：https://stackoverflow.com/questions/10425310/three-js-full-screen-issue

### 3. Three.js 由 3d 场景坐标转换成 2d 屏幕坐标
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

### 4. div 做的 button 点击出现选中蓝框
div或者button的样式里面加上
```css
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
参考：https://www.iteye.com/blog/yigang-2235539

### 5. 去掉 span 标签的间距
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

### 6. js 对象去重
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

### 7. js 保留两位小数
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

### 8. 修改 placeholder 默认颜色
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

### 9. radio 取消选中并能再次选中
```javascript
    var old = null; //用来保存原来的对象

    ao.loop(()=>{
        if(this.$refs.radio.checked){
            old = this.$refs.radio; //如果当前对象选中，保存该对象
        } else {
            old = null;
        }
    })

    this.$refs.radio.addEventListener("click", (e) => {
        if(this.$refs.radio == old){//如果点击的对象原来是选中的，取消选中
            this.$refs.radio.checked = false;
            old = null;
            console.log(old);
        } else{
            old = this.$refs.radio;
            console.log(old);
        }
    })
```
参考：https://blog.csdn.net/tutian2000/article/details/80256757

### 10. 生成 uuid
```javascript
    export function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
```
参考：https://www.jianshu.com/p/04ee4396edc3

### 11. 校验手机号
```javascript
    export function isPoneAvailable(tel) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(tel)) {
            return false;
        } else {
            return true;
        }
    }
```

### 12. 修改 Three.js 背景色
```javascript
    renderer.setClearColor('rgb(135,206,250)',1.0);
	renderer.setClearColor(0xffffff,1.0);
	renderer.setClearColor('#428bca',1.0);
	renderer.setClearColor('rgba(135,206,250,0.5)',1.0);
```
参考： https://blog.csdn.net/cc_fys/article/details/72649916

### 13. 解决同时绑定单击和双击事件，会两个都执行的情况
```javascript
    //单击延时触发
    var clickTimeId;

    /*
    * 页面初始化
    */
    function onload() {
        document.addEventListener('click', onDocumentClick);
        document.addEventListener('dblclick', onDocumenDblClick);
    }

    /*
    * 鼠标单击事件响应
    * event 鼠标事件对象
    */
    function onDocumentClick(event) {
        // 取消上次延时未执行的方法
        clearTimeout(clickTimeId);
        //执行延时
        clickTimeId = setTimeout(function() {
            //此处为单击事件要执行的代码
            console.log("鼠标单击");
        }, 250);
    }

    /*
    * 鼠标双击事件响应
    * event 鼠标事件对象
    */
    function onDocumenDblClick(event) {
        // 取消上次延时未执行的方法
        clearTimeout(clickTimeId);
        console.log("鼠标双击");
    }
```
参考：https://www.hangge.com/blog/cache/detail_1794.html

### 14. 监测 Three.js 版本
在浏览器中按F12，打开开发版输入 `THREE.REVISION`

### 15. 保存 json
```
    JSON.stringify(temp1, 4, "\t")
```

### 16. flex 像表格一样布局
```
    .parent {
        width: 100%;
        height: 150px;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
   }

   .child {
        box-sizing: border-box;
        background-color: white;
        flex: 0 0 33%;
        height: 50px;
        border: 1px solid red;
   }
```
参考： https://blog.csdn.net/webEvelement/article/details/82850370

### 17. 下标
```javascript
    // 获取二维数组目标下标
    getArrIndex(arr, ti, tj){
        var len = 0;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(i == ti && j == tj) return len;
                len++;
            }
        }
    },
    // 获取下标获取二维数组下标
    getIndex(arr, index){
        var len = 0;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(len == index) return [i, j];
                len++;
            }
        }
    }
```



### 18. 评级组件
```javascript
    // "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
    // 9.2 3.4 先 / 2 后四舍五入
    const rate = Math.round(v.rate / 2)
    v.rataDisplay = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
```
参考：https://www.zhihu.com/question/46943112/answer/113583615


## bug

### 1. Uncaught SyntaxError: Invalid or unexpected token (javascript)
注意：注意分号要是英文或者是缺少各种符号`, { [ ( ......`。

### 2. unable to access 'https://github.com/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443. (Github)
注意：打开git bash(命令行)， 敲命令`git config --global http.sslVerify false`

### 3. Update the Pi 出错
> Failed to fetch http://raspbian.raspberrypi.org/raspbian/dists/buster/main/binary-armhf/Packages
* 解决办法
```
    sudo rm /var/lib/apt/lists/* -vf
    sudo apt-get update
```
参考： https://raspberrypi.stackexchange.com/questions/81940/raspbian-jessie-apt-get-update-fails-error-hash-sum-mismatch

## Mac

### 1. git 安装
参考：https://www.jianshu.com/p/7edb6b838a2e

### 2. npm 权限问题
参考：https://blog.csdn.net/sinat_36422236/article/details/89675658

### 3. 查看 ip
参考：https://jingyan.baidu.com/article/b0b63dbf3fefd14a48307013.html

### 4. 关闭死不掉的进程
1. 查看端口
终端输入：lsof -i tcp:port 将port换成被占用的端口(如：8086、9998)
将会出现占用端口的进程信息。

2. kill进程
找到进程的PID,使用kill命令：kill -9 PID（进程的PID，如2044），杀死对应的进程

参考 https://blog.csdn.net/nextstudio/article/details/18133963

### 5. 解压 rar
1. brew install unrar
2. cd到rar文件目录 `unrar x filename.rar`

### 6. ffmpeg
* 视频转音频
```javascript
    // ffmpeg -i 视频.mp4 -b:a 192K -vn 生成文件.mp3
    ffmpeg -i 0031LM3jlx07yuR6REFa01041200fm8C0E010.mp4 -b:a 192K -vn out.mp3
```
* 视频和音频合并
```javascript
    // ffmpeg -i 视频.mp4 -i 音频.mp3 -c:v copy -c:a 编码格式 生成文件.mp4
    ffmpeg -i vid.mp4 -i out.mp3 -c:v copy -c:a aac done.mp4
```

### 7. Xcode_xxx.xip 不是来自 apple

* 终端输入
 * `sudo spctl --master-disable`
 * `xattr -d com.apple.quarantine /Users/emerge/Downloads/Xcode_10.1.xip `
* 修改日期为几年前，如2018

## Github

### 1. 关于 gitmodule 子模块的运用
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

### 2. 禁止苹果手机缩放，ios10 后的版本
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

### 4. ios 键盘弹起，body 拉长，关闭键盘页面不回弹
```javascript
    // 获取窗口滚动条高度 
    export function getScrollTop(){  
        var scrollTop = 0;  
        if (document.documentElement && document.documentElement.scrollTop){  
            scrollTop = document.documentElement.scrollTop;  
        } else if(document.body){  
            scrollTop = document.body.scrollTop;  
        }  
        return scrollTop;  
    };
    var oldScrollTop = util.getScrollTop() || 0; // 记录当前滚动位置
    document.body.addEventListener('focusin', () => {  //软键盘弹起事件
        console.log("键盘弹起");
    });
    document.body.addEventListener('focusout', () => { //软键盘关闭事件
        console.log("键盘收起");    
        var ua = window.navigator.userAgent;
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0) { //键盘收起页面空白问题
            document.body.scrollTop = oldScrollTop; 
            document.documentElement.scrollTop = oldScrollTop; 
        }
    });
```
参考：https://www.cnblogs.com/xiongzaiqiren/p/10505490.html

### 5. 修改苹果默认的工具栏和菜单栏
需要网页"添加到主屏幕"才能测试。
```html
    <!-- 添加到主屏后的标题(iOS 6+)，是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
    <meta name=”apple-mobile-web-app-capable” content=”yes”/>
    <!-- 
        设置IOS工具栏颜色 
        default，设置的背景为白色，带有黑色文本和符号。
        black，具有黑色背景，黑色文本和符号，使其看起来完全是黑色的，默认。
        black-translucent，设置具有白色文本和符号，并且将采用与Web应用程序正文相同的背景色。
    -->
    <meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
```
参考：https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab

### 6. 阻止下拉滑动的效果（橡皮筋效果）
```javascript
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false}); //passive 参数不能省略，用来兼容ios和android
```

## 常识性知识点

### 影子 DOM

Chrome开发者工具有一个很好的特性就是你可以在Elements选项卡中检查影子DOM子树，就如同你检查普通的DOM树一样，所有想要做的东西都可一通过这个特性完美解决：<br>

1. 进入开发者模式按F1进入设置
2. 在Preferences选项卡中的Elements中把Show user agent shadow DOM前的复选框勾上（并没有找到原文所说的Genral所以按照网上的其他文章重写了这个步骤）
3. 重启开发者工具


## 数学类

### 1. 粒子画球
```javascript
    var radius = 100;
    var pointGeo = new THREE.Geometry();
    
    // 1. 随机生成随机3D向量 -> Normalize -> * 半径
    var num = 500;
    for(var i = 0; i < num; i ++){
        var v = new three.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5) 
        v = v.normalize();
        v = v.multiplyScalar(radius)
    }

    // 2.1 (n * n) 的形状 -> 经纬度 -> 球坐标
    var num = 100;
    for(var x = -num; x < num; x ++){
        for(var y = -num; y < num; y ++){
            var vec = convert2d3d(radius, x, y);
            var v = new three.Vector3(vec.x, vec.y, vec.z) 
            v.multiplyScalar(radius);
            pointGeo.vertices.push(v)
        }
    }
    function convert2d3d(r, x, y) {
        let lat  = y / r * Math.PI - Math.PI / 2;
        let long = x / r * 2 * Math.PI - Math.PI;
        return {
            x: Math.cos(lat) * Math.cos(long),
            y: Math.sin(lat),
            z: Math.cos(lat) * Math.sin(long),
        }
    }

    // 2.2 通过随机经纬度，生成球坐标
    for (var i = 0; i < 1000; i++) {
        var lat = GetRandomNum(1, 10) + Math.random();
        var long = GetRandomNum(1, 10) + Math.random();
        var vec = convert2d3d(lat, long);
        pointGeo.vertices.push( new THREE.Vector3(vec.x, vec.y, vec.z).multiplyScalar(radius) );
    }
    function GetRandomNum(Min, Max)
    {   
        var Range = Max - Min;   
        var Rand = Math.random();   
        return(Min + Math.round(Rand * Range));   
    } 
    // r*r -> uv -> 3d
    function convert2d3d(lat, long) {
        return {
            x: Math.cos(lat) * Math.cos(long),
            y: Math.sin(lat),
            z: Math.cos(lat) * Math.sin(long),
        }
    }
    
    // 3. 参考：https://codepen.io/gadgetgnome/pen/jbPxwQ
    var radius = 100;
    var pitchSegments = 50;
    var elevationSegments = pitchSegments / 2;
    for (var p = 0; p < pitchSegments; p++) {
        var pitch = Math.PI * 2 * p / pitchSegments ;
        for (var e = 0; e < elevationSegments; e++) {
            var elevation = Math.PI  * ((e / elevationSegments) - 0.5)  // 去掉0.5半球
            var vec = new THREE.Vector3(
                ( Math.cos(pitch) * Math.cos(elevation) ) * radius,
                Math.sin(elevation) * radius,
                ( Math.sin(pitch) * Math.cos(elevation) ) * radius
            );
        }
    }
```

### 2. 计算圆柱贴图比例
```
    w = Math.PI * 2 * raidus
    h = 已知
```

### 3. 计算图像缩放比例
```javascript
    var obj = ratioObj(img.width, img.height, side);
    ctx.drawImage(img, x * side + (side - obj.w) / 2, y * side + (side - obj.h) / 2, obj.w, obj.h );
        
    // s 边 正方块
    function ratioObj(w, h, s){
        var dw, dh; // 最终的图像比例
        if(w > h){
            // 图片比例 w / h
            // 当宽大于高的时候，
            // 1) dw / dh = w / h
            // 2) dw = s
            // 3) s / dh = w / h
            // 4) 公式反过来，dh / s = h / w
            // 5) dh = h * s / w
            dw = s;
            dh = ( h * s ) / w;
        } else {
            // 图片比例 h / w
            // 当高大于宽的时候，
            // 1) dh / dw = h / w
            // 2) dh = s
            // 3) s / dw = h / w
            // 4) 公式反过来，dw / s = w / h
            // 5) dh = w / h * s || w * s / h ;
            dw = ( w / h ) * s;
            dh = s;
        }
        return {
            w: dw,
            h: dh
        }
    }

```


## 小程序

### 1. 换行（标签必须是 `<text>` ?）
* 使用(\n)
```html
    <text>LV.1\n点数：00</text>
```
* 使用`<view>`标签包一下

### 2. 小程序更新后，不能自动弹出授权，需要用户手动点击(官方推荐 button )
* wxml
```html
    <!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
    <open-data class="user-avatar" type="userAvatarUrl"></open-data>
    <open-data class="user-nick-name" type="userNickName"></open-data>
    <!-- 需要使用 button 来授权登录 -->
    <button class="userinfo-btn" wx:if="{{canIUse}}" type="primary" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
    <view wx:else>请升级微信版本</view>
```
* js
```javascript
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
    // 跳转到tab主页面
    wx.switchTab({
      url: "../index/index"
    })
  },
  /**
    * 生命周期函数--监听页面显示
    */
  onShow: function () {
    // 授权页面隐藏home键
    if (wx.canIUse('hideHomeButton')) {
      wx.hideHomeButton({
        success: res => {
          console.log(res);
        }
      })
    }
  },
})
```
* wxss
```css
    .user-avatar {
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);
    }
    .user-nick-name {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translateX(-50%);
    }
    .userinfo-btn {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translateX(-50%);
    }
```
* 设置自定义编译，修改启动页面为授权页面，并隐藏home键。

### 3. bindtap 点击事件传参
* 使用 data-xx / id 进行传递参数
```html
    <view bindtap="getSwiperNum" data-item="{{item}}" class="swiper-item {{item}}"></view>
```

```javascript
    getSwiperNum: function(event){
        console.log(event.target);
        // dataset: {item: "demo-text-1"}
        // id: ""
        // offsetLeft: 113
        // offsetTop: 0
    }
```
参考：https://blog.csdn.net/u013778905/article/details/59129272

### 4. 微信开发文档 / 快速查找
* 分享 / 转发： https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
* 路由： https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
* web-view: https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html

### 5. 组件化

#### component（自定义组件）


* 介绍
> * properties：是组件对外开放的属性，当在使用者 xml 文件中使用该组件时，可以为这些属性传值达到改变组件的目的
> * data：内部数据，和 page 的 data 一样，和 properties 不同的是它是对内的
> * mthods：组件的自定义方法都定义在其内部，亲测定义在外部无法识别
> * externalClasses：组件外部样式，组件内部的样式是不受 app 和 使用者的 css 影响的，如果有组件内部有一些样式希望在使用者使用时才决定，那么久可以通过 externalClasses 去实现
> * behaviors：用于组件间的引用（详情：文档-组件间的关系)
> * 生命周期 ：created()、attached()、ready()、moved()、dettach()

* 新建目录，在目录下新建component
```javascript
    Component({
        //选项
        options: {
            multipleSlots: true // 启用多slot（插槽）支持
        },
        properties: {
            //外部属性
            text: {
                type: String, //类型
                value: 'default value', //默认值
                observer: '方法名' //当数据发生变化时调用
            }
        },
        //外部样式
        externalClasses: ['text-class'],
        data: {
            // 内部数据
            someData: {}
        },
        //生命周期
        attached: function(){},
        moved: function(){},
        detached: function(){},
        methods: {
            // 自定义方法
            customMethod: function(){}
        }
    })
```
* 使用者在 json 内添加调用关系
```js
    {
        "usingComponents": {
            // 组件名 : 路径
            "component-name": "component-path",
        }
    }
```
* 使用者在 wxml 内添加组件，属性名 = 属性值
```html
    <component-name property="" />
```

* template
参考： https://juejin.im/post/5b64744df265da0f6d72f4d7

### 6. 生命周期
```javascript
    //index.js
    Page({
        data: {
            text: "This is page data."
        },
        onLoad: function(options) {
            // 页面创建时执行
        },
        onShow: function() {
            // 页面出现在前台时执行
        },
        onReady: function() {
            // 页面首次渲染完毕时执行
        },
        onHide: function() {
            // 页面从前台变为后台时执行
        },
        onUnload: function() {
            // 页面销毁时执行 - 点击左上角返回上层页面的时候也会执行
        },
        onPullDownRefresh: function() {
            // 触发下拉刷新时执行
        },
        onReachBottom: function() {
            // 页面触底时执行
        },
        onShareAppMessage: function () {
            // 页面被用户分享时执行
        },
        onPageScroll: function() {
            // 页面滚动时执行
        },
        onResize: function() {
            // 页面尺寸变化时执行
        },
        onTabItemTap(item) {
            // tab 点击时执行
            console.log(item.index)
            console.log(item.pagePath)
            console.log(item.text)
        },
        // 事件响应函数
        viewTap: function() {
            this.setData({
            text: 'Set some data for updating view.'
            }, function() {
            // this is setData callback
            })
        },
        // 自由数据
        customData: {
            hi: 'MINA'
        }
    })
```
参考： https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html

### 7. 自定义导航栏

1. 首先取得控制权，在 app.json 内配置后，只会保留右上角的胶囊
```json
    "window": {
        "navigationStyle": "custom"
    }
```

2. 在 app.js 内获取设备信息
```javascript
    App({
        onLaunch: function () {
            this.globalData = {
                systeminfo: {}, // 系统信息
                headerBtnPosi: {} // 胶囊按钮位置信息
            }
            wx.getSystemInfo({ // 获取设备信息
                success: (res) => {
                    this.globalData.systeminfo = res
                },
            })
            // 获得胶囊按钮位置信息
            // wx.getMenuButtonBoundingClientRect() 像对象一样使用
            this.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect()
        }
    })
```

### 8. text 显示空格
```html
    <!-- 权限 decode="{{true}}"，空格 &nbsp; -->
    <text decode="{{true}}">&nbsp;&nbsp;</text>
```
参考：https://blog.csdn.net/llixiangjian/article/details/78457536

### 9. web-view 的使用
* 1. 个人账号不能使用 web-view，可以通过以下设置，本地测试。
> 详情(开发者工具右上角) -> 本地设置 -> 不效验合法域名、web-view（业务域名）、TLS版本以及HTTPS证书
* 2. 参考官方文档
```html
    <web-view src="http://emerge.cc/inspire/?topic=stepper&nsukey=dBSEbpjeCFJ%2FLCqMNpU06ugvCEMSSbi37wubNK3ubE3tJ48V2OEEk%2FZWgst3dnIK2gRd94IfNUfQqCnbdfc5Tis9LO19C01bsUsFyRE71KnagCmAAYKu9yvkZt%2ByyIjOS8%2F9%2B%2BCovplBqyZuk%2FJztx%2BFErEDI%2BITwJPTDtmafAF4ngqBZZM6%2FtOLrd25mQuFiil8IhfX2VIoxjATWix6MQ%3D%3D"></web-view>
```


### 10. 父调用子组件，参数变化不刷新的问题
* 在 `onLoad / onShow` 中调用 `setData`
```js
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      money: app.globalData.money
    })
  }
```





## linux

### 1. raspberry pi (树莓派) 清华源
```
    sudo sed -i 's#://raspbian.raspberrypi.org#s://mirrors.ustc.edu.cn/raspbian#g' /etc/apt/sources.list 
    sudo sed -i 's#://archive.raspberrypi.org/debian#s://mirrors.ustc.edu.cn/archive.raspberrypi.org/debian#g' /etc/apt/sources.list.d/raspi.list
```
参考：https://www.jianshu.com/p/67b9e6ebf8a0

### 2. nodejs 最新版本下载 (Debian)
* Node.js v13.x:
```
    # Using Debian, as root
    curl -sL https://deb.nodesource.com/setup_13.x | bash -
    apt-get install -y nodejs
```
参考：https://github.com/nodesource/distributions/blob/master/README.md