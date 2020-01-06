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

### 9. radio取消选中并能再次选中
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

### 10. 生成uuid
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

### 12. 修改 threeJs 背景色
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

### 14. 监测threeJs版本
在浏览器中按F12，打开开发版输入 `THREE.REVISION`

### 15. 保存json
```
    JSON.stringify(temp1, 4, "\t")
```

### 16. flex像表格一样布局
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

### 5. 解压rar
1. brew install unrar
2. cd到rar文件目录 `unrar x filename.rar`


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

### 4. ios键盘弹起，body拉长，关闭键盘页面不回弹
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

### 5.修改苹果默认的工具栏和菜单栏
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


## 常识性知识点

### 影子dom

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




