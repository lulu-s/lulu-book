# ʚ碎片知识 / 小问题ɞ


* [未知分区](#未知分区)
    * [1. 影子 DOM](#1-影子dom)
    * [2. 查看 http 请求是否可以跨域](#2-查看-http-请求是否可以跨域)
    * [3. Data URL 格式](#3-Data-URL-格式)


* [HTML](#HTML) 
    * [1. input 输入框禁止显示历史记录](#1-input-输入框禁止显示历史记录)


* [JavaScript](#JavaScript) 
    * [1. js 对象去重](#1-js-对象去重)
    * [2. js 保留两位小数](#2-js-保留两位小数)
    * [3. radio 取消选中并能再次选中](#3-radio-取消选中并能再次选中)
    * [4. 生成 uuid](#4-生成-uuid)
    * [5. 校验手机号](#5-校验手机号)
    * [6. 解决同时绑定单击和双击事件，会两个都执行的情况](#6-解决同时绑定单击和双击事件-会两个都执行的情况)
    * [7. 评级组件](#7-评级组件)
    * [8. 保存 json](#8-保存-json)
    * [9. 二维数组位置查询](#9-二维数组位置查询)
    * [10. 获取 class 内的样式元素](#10-获取-class-内的样式元素)
    * [11. 实现 blob 与 base64 互转](#11-实现-blob-与-base64-互转)
    * [12. js 正则表达式提取汉字和去掉汉字](#12-js-正则表达式提取汉字和去掉汉字)
    * [13. js 实现文本的语音朗读](#13-js-实现文本的语音朗读)
    * [14. 校验是否为中文](#14-校验是否为中文)
    * [15. 删除数组中的某个元素](#15-删除数组中的某个元素)
    * [16. 图片加载失败事件](#16-图片加载失败事件)

    

* [CSS](#CSS)  
    * [1. 解决使用 css3 的 rotate ，出现锯齿化的问题](#1-解决使用-css3-的-rotate出现锯齿化的问题)
    * [2. div 做的 button 点击出现选中蓝框](#2-div-做的-button-点击出现选中蓝框)
    * [3. 去掉 span 标签的间距](#3-去掉-span-标签的间距)
    * [4. 修改 placeholder 默认颜色](#4-修改-placeholder-默认颜色)
    * [5. flex 像表格一样布局](#5-flex-像表格一样布局)
    * [6. css 中获取 class 的第 n 个元素](#6-css-中获取-class-的第-n-个元素)
    * [7. css 动画在结束后保持该状态不变](#7-css-动画在结束后保持该状态不变)
    * [8. 文字竖排的方式](#8-文字竖排的方式)
    * [9. textarea 多行文本框禁止拖动问题解决](#9-textarea-多行文本框禁止拖动问题解决)
    * [10. css 实现文字过长显示省略号的方法](#10-css-实现文字过长显示省略号的方法)

* [Vue](#Vue)  
    * [1. Vue 更改对象属性不刷新页面](#1-Vue-更改对象属性不刷新页面)
    * [2. v-html 渲染的 dom 增加样式](#2-v-html-渲染的-dom-增加样式)
    

* [Three.js](#Threejs)  
    * [1. 解决 Three.js 缩放时以整个浏览器为单位](#1-解决-threejs-缩放时以整个浏览器为单位)
    * [2. Three.js 由 3d 场景坐标转换成 2d 屏幕坐标](#2-threejs-由-3d-场景坐标转换成-2d-屏幕坐标)
    * [3. 修改 Three.js 背景色](#3-修改-threejs-背景色)
    * [4. 查看 Three.js 版本](#4-查看-threejs-版本)

* [Canvas](#Canvas)
    * [1. 解决 canvas 绘制在移动端模糊的问题](#1-解决-canvas-绘制在移动端模糊的问题)
    * [2. js 实现 canvas 保存图片并下载到本地](#2-js-实现-canvas-保存图片并下载到本地)
    * [3. 鼠标 / 手指位置转换 canvas 坐标](#3-鼠标--手指位置转换-canvas-坐标)
    * [4. canvas arc 绘制圆角矩形](#4-canvas-arc-绘制圆角矩形)
    
* [Node](#Node)  
    * [1. express 接收 post 请求参数](#1-express-接收-post-请求参数)
    * [2. 跨域问题](#2-跨域问题)

* [bug](#bug)
    * [1. Uncaught SyntaxError: Invalid or unexpected token (javascript)](#1-uncaught-syntaxerror-invalid-or-unexpected-token-javascript)
    * [2. unable to access 'https://github.com/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443. (Github)](#2-unable-to-access-httpsgithubcom-openssl-ssl_connect-ssl_error_syscall-in-connection-to-githubcom443-github)
    * [3. Update the Pi 出错](#3-Update-the-Pi-出错)
    * [4. vue-router 导致报错 [Vue warn]: Failed to mount component: template or render function not defined.](#4-vue-router-导致报错-vue-warn-failed-to-mount-component-template-or-render-function-not-defined)
    * [5. Uncaught TypeError: a[b].target.className.indexOf is not a function](#5-uncaught-typeerror-abtargetclassnameindexof-is-not-a-function)
    * [6. PayloadTooLargeError: request entity too larg](#6-payloadtoolargeerror-request-entity-too-larg)
    * [7. Could not resolve host: github.com](#7-could-not-resolve-host-githubcom)
    * [8. ping baidu.com 不通](#8-ping-baiducom-不通)
    * [9. npm i 卡住](#9-npm-i-卡住)
    * [10. Duplicate keys detected: 'xxxx'. This may cause an update error](#10-Duplicate-keys-detected-xxxx-This-may-cause-an-update-error)

* [Mac](#mac)
    * [1. git 安装](#1-git-安装)
    * [2. npm 权限问题](#2-npm-权限问题)
    * [3. 查看 ip](#3-查看-ip)
    * [4. 关闭死不掉的进程](#4-关闭死不掉的进程)
    * [5. 解压 rar](#5-解压rar)
    * [6. ffmpeg](#6-ffmpeg)
    * [7. Xcode_xxx.xip 不是来自 apple](#7-Xcode-xxx-xip-不是来自-apple)
    * [8. mac 解压 .rar 文件出现中文乱码](#8-mac-解压-rar-文件出现中文乱码)

* [Github](#github)
    * [1. 关于 gitmodule 子模块的运用](#1-关于-gitmodule-子模块的运用)

* [手机端](#手机端)
    * [1. 兼容所有机型](#1-兼容所有机型)
    * [2. 禁止苹果手机缩放，ios10 后的版本](#2-禁止苹果手机缩放ios10后的版本)
    * [3. 判断横竖屏](#3-判断横竖屏)
    * [4. ios 键盘弹起，body 拉长，关闭键盘页面不回弹](#4-ios键盘弹起-body拉长-关闭键盘页面不回弹)
    * [5. 修改苹果默认的工具栏和菜单栏](#5-修改苹果默认的工具栏和菜单栏)
    * [6. 阻止下拉滑动的效果（橡皮筋效果）](#6-阻止下拉滑动的效果橡皮筋效果)
    * [7. 软键盘弹起](#7-软键盘弹起)

* [数学类](#数学类)
    * [1. 粒子画球](#1-粒子画球)
    * [2. 计算圆柱贴图比例](#2-计算圆柱贴图比例)
    * [3. 计算图像缩放比例](#3-计算图像缩放比例)
    * [4. 分页](#4-分页)
    * [5. 计算两点之间的距离](#5-计算两点之间的距离)
    * [6. 用户拖拽](#6-用户拖拽)
    

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
    * [3. window bat delay](#3-window-bat-delay)

* [WScript](#WScript)
    * [1. VB脚本](#1-VB脚本)

* [Electron](#Electron)
    * [1. 窗口全屏退出快捷键](#1-窗口全屏退出快捷键)
    * [2. 自动点击](#2-自动点击)
    * [3. 使用 webview 显示空白](#3-使用-webview-显示空白)




## 未知分区

### 1. 影子 DOM

Chrome开发者工具有一个很好的特性就是你可以在Elements选项卡中检查影子DOM子树，就如同你检查普通的DOM树一样，所有想要做的东西都可一通过这个特性完美解决：<br>

1. 进入开发者模式按F1进入设置
2. 在Preferences选项卡中的Elements中把Show user agent shadow DOM前的复选框勾上（并没有找到原文所说的Genral所以按照网上的其他文章重写了这个步骤）
3. 重启开发者工具


### 2. 查看 http 请求是否可以跨域
* 1. 找到 `浏览器 - 开发者工具 - network - 随便选择某个文件，查看Headers - Response Headers`
* 2. 有 `Access-Control-Allow-Origin：*` 或者 * 为与请求源相同的地址。即服务器支持浏览器跨域访问。
* 3. 若不包含需修改服务器端，允许cors。如不能修改，需要在本地 node 搭中间件 或 使用 nginx

参考： https://blog.csdn.net/gdp12315/article/details/66479524


### 3. Data URL 格式
> Data URI 的格式: `data:[<mime type>][;charset=<charset>][;base64],<encoded data>`

* 第一部分是 data: 协议头，它标识这个内容为一个 data URI 资源。
* 第二部分是 MIME 类型，表示这串内容的展现方式，比如：text/plain，则以文本类型展示，image/jpeg，以 jpeg 图片形式展示，同样，客户端也会以这个 MIME 类型来解析数据。
* 第三部分是编码设置，默认编码是 charset=US-ASCII, 即数据部分的每个字符都会自动编码为 %xx，关于编码的测试，可以在浏览器地址框输入分别输入下面两串内容，查看效果：
```
    // output: ä½ å¥½ -> 使用默认的编码展示，故乱码
    data:text/html,你好  
    // output: 你好 -> 使用 UTF-8 展示
    data:text/html;charset=UTF-8,你好 
    // output: 浣犲ソ -> 使用 gbk 展示（浏览器默认编码 UTF-8，故乱码）
    data:text/html;charset=gbk,你好 
    // output: 你好 -> UTF-8 编码，内容先使用 base64 解码，然后展示
    data:text/html;charset=UTF-8;base64,5L2g5aW9 
```
* 第四部分是 base64 编码设定，这是一个可选项，base64 编码中仅包含 0-9,a-z,A-Z,+,/,=，其中 = 是用来编码补白的。
* 最后一部分为这个 Data URI 承载的内容，它可以是纯文本编写的内容，也可以是经过 base64编码 的内容。

参考： 
* 原作者： https://www.cnblogs.com/hustskyking/p/data-uri.html 
* https://www.cnblogs.com/dcb3688/p/4608062.html



## HTML

### 1. input 输入框禁止显示历史记录
```html
<input type="text" autocomplete="off" />
```
参考：https://blog.csdn.net/littlebearGreat/article/details/73497821

## JavaScript

### 1. js 对象去重
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

### 2. js 保留两位小数
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

### 3. radio 取消选中并能再次选中
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

### 4. 生成 uuid
```javascript
    export function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    //_nanoid 
    /**
     * Minified by jsDelivr using UglifyJS v3.1.10.
     * Original file: /npm/nano-id@1.1.0/index.js
     * 
     * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
    */
    var alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        nanoId = function (n) {
            null == n && (n = 10);
            for (var a = "", r = 0; r < n; ++r) a += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
            return a
        };
    nanoId.verify = function (n) {
        return "string" == typeof n && /^[a-zA-Z0-9]+$/.test(n)
    };
```
参考：https://www.jianshu.com/p/04ee4396edc3

### 5. 校验手机号
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

### 6. 解决同时绑定单击和双击事件，会两个都执行的情况
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


### 7. 评级组件
```javascript
    // "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
    // 9.2 3.4 先 / 2 后四舍五入
    const rate = Math.round(v.rate / 2)
    v.rataDisplay = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
```
参考：https://www.zhihu.com/question/46943112/answer/113583615



### 8. 保存 json
```javascript
    // 在谷歌 - 开发者工具 - console中输入以下内容 - Store as global variable - 保存
    JSON.stringify(temp1, 4, "\t")
```

### 9. 二维数组位置查询
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
    // 从一维数组的随机下标，返回一维数组构成的二维数组下标
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


### 10. 获取 class 内的样式元素
```js
    // 获取 class 内的样式元素
    export function getStyle(obj, attr) {
        var ie = !+"\v1";//简单判断ie6~8
        if (attr == "backgroundPosition") {//IE6~8不兼容backgroundPosition写法，识别backgroundPositionX/Y
            if (ie) {
                return obj.currentStyle.backgroundPositionX + " " + obj.currentStyle.backgroundPositionY;
            }
        }
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        else {
            return document.defaultView.getComputedStyle(obj, null)[attr];
        }
    }
```
参考：https://blog.csdn.net/dragoo1/article/details/48153391

### 11. 实现 blob 与 base64 互转
```javascript
    /**
     * base64  to blob二进制
     */
    function dataURItoBlob(dataURI) {
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // mime类型
        var byteString = atob(dataURI.split(',')[1]); //base64 解码
        var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
        var intArray = new Uint8Array(arrayBuffer); //创建视图

        for (var i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([intArray], {type: mimeString});
    }

    /**
     * 
     * blob二进制 to base64
     **/
    function blobToDataURI(blob, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
            callback(e.target.result);
        }
        reader.readAsDataURL(blob);
    }

    // example
    
    // blob 转 base64
    blobToDataURI(blob, function (data) {
        console.log(data);
    });

    // base64 转blob 伪代码
    var base64Str = 'base64 url';
    var blob = dataURItoBlob(base64Str);
    console.log(blob);
```
参考： https://www.cnblogs.com/dcb3688/p/4608062.html


### 12. js 正则表达式提取汉字和去掉汉字
```javascript
    //只提取汉字  
    function GetChinese(strValue) {  
        if(strValue!= null && strValue!= ""){  
            var reg = /[\u4e00-\u9fa5]/g;   
            return strValue.match(reg).join("");  
        }  
        else  
            return "";  
    }  
     //去掉汉字  
    function RemoveChinese(strValue) {  
        if(strValue!= null && strValue != ""){  
            var reg = /[\u4e00-\u9fa5]/g;   
           return strValue.replace(reg, "");   
        }  
        else  
            return "";  
    }  
```
参考： https://blog.csdn.net/yelin042/article/details/76982683


### 13. js 实现文本的语音朗读
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>百度语音测试</title>
		<script type="text/javascript"> 
		function doTTS(){
			var ttsDiv = document.getElementById('bdtts_div_id');
			var ttsAudio = document.getElementById('tts_autio_id');
			var ttsText = document.getElementById('ttsText').value;
			
			// 这样为什么替换不了播放内容
			/*var ssrcc = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=10&text='+ttsText;
			document.getElementById('tts_source_id').src=ssrcc;*/
			
			// 这样就可实现播放内容的替换了
			ttsDiv.removeChild(ttsAudio);
			var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
			var sss = '<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=9&text='+ttsText+'" type="audio/mpeg">';
			var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
			var au2 = '</audio>';
			ttsDiv.innerHTML = au1 + sss + eee + au2;
			
			ttsAudio = document.getElementById('tts_autio_id');
			
			ttsAudio.play();
		}
		</script>
	</head>
	<body>
		<div>
			<input type="text" id="ttsText">
			<input type="button" id="tts_btn" onclick="doTTS()" value="播放">
		</div>
		<div id="bdtts_div_id">
			<audio id="tts_autio_id" autoplay="autoplay">
				<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=9&text=播报内容" type="audio/mpeg">
				<embed id="tts_embed_id" height="0" width="0" src="">
			</audio>
		</div>
	</body>
</html>
```
参考: http://www.oicqzone.com/pc/2019061324570.html


### 14. 校验是否为中文
```javascript
    if (/^[\u4e00-\u9fa5]+$/.test(text)) {
        return true;
    }
```


### 15. 删除数组中的某个元素
```js
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

// 移除数组中的第二项
array.remove(1);
// 移除数组中的倒数第二项
array.remove(-2);
// 移除数组中的第二项和第三项（从第二项开始，删除2个元素）
array.remove(1,2);
// 移除数组中的最后一项和倒数第二项（数组中的最后两项）
array.remove(-2,-1);
```
参考：http://caibaojian.com/js-splice-element.html


### 16.图片加载失败事件
```js
<body>
    <img src="img.png" onerror="myfunction()">
</body>
<script>
    myfunction() {
        this.src="default.png"
    }
</script>
```
参考：https://champyin.com/2018/11/26/js%E5%A6%82%E4%BD%95%E8%AF%86%E5%88%AB%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5/






## CSS

### 1. 解决使用 css3 的 rotate，出现锯齿化的问题。
  ```css
    -webkit-backface-visibility: hidden;
  ```
参考：https://code.i-harness.com/zh-TW/q/630f7b


### 2. div 做的 button 点击出现选中蓝框
div或者button的样式里面加上
```css
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
参考：https://www.iteye.com/blog/yigang-2235539

### 3. 去掉 span 标签的间距
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

### 4. 修改 placeholder 默认颜色
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


### 5. flex 像表格一样布局
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





### 6. css 中获取 class 的第 n 个元素
```css
    .poem_replace:nth-of-type(1) {
        bottom: 4.5rem;
    }
    .poem_replace:nth-of-type(2) {
        bottom: 1.5rem;
    }
```
参考： 
* https://blog.csdn.net/hh1197787867/article/details/82182069
* MDN: https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type

### 7. css 动画在结束后保持该状态不变
增加 forwards 参数
```css
    .line_1 {
        animation: line_width_to_enter 1s ease forwards;
    }
```
参考：
* https://blog.csdn.net/lp2659359879/article/details/52523888
* MDN： https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode


### 8. 文字竖排的方式
```css
    p {
        writing-mode: vertical-rl; /* 竖排 从右向左*/
        writing-mode: vertical-lr; /* 竖排 从左向右*/
    }
```
参考：
* https://juejin.im/entry/595f0efc5188250d8b65e1e8
* MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode


### 9. textarea 多行文本框禁止拖动问题解决
```css
textarea {
    resize: none;
}
```
参考：https://blog.csdn.net/yu17310133443/article/details/73559325

### 10. css 实现文字过长显示省略号的方法
```css
div {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```
参考：https://blog.csdn.net/u012531787/article/details/18553885


## Vue

### 1. Vue 更改对象属性不刷新页面
```
    this.$set(target, projectName, value)
```
参考： https://cn.vuejs.org/v2/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E6%95%B0%E7%BB%84


### 2. v-html 渲染的 dom 增加样式
样式标签不能加 `scoped`。否则 `v-html` 渲染样式会修改无效 <br/>
参考：https://segmentfault.com/q/1010000013203950


## Three.js

### 1. 解决 Three.js 缩放时以整个浏览器为单位。
  ```css
    body {
        overflow: hidden;
    }
    canvas {
        display: block; /* fix necessary to remove space at bottom of canvas */
    }
  ```
参考：https://stackoverflow.com/questions/10425310/three-js-full-screen-issue

### 2. Three.js 由 3d 场景坐标转换成 2d 屏幕坐标
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

### 3. 修改 Three.js 背景色
```javascript
    renderer.setClearColor('rgb(135,206,250)',1.0);
	renderer.setClearColor(0xffffff,1.0);
	renderer.setClearColor('#428bca',1.0);
	renderer.setClearColor('rgba(135,206,250,0.5)',1.0);
```
参考： https://blog.csdn.net/cc_fys/article/details/72649916


### 4. 查看 Three.js 版本
在浏览器中按F12，打开开发版输入 `THREE.REVISION`


## Canvas

### 1. 解决 canvas 绘制在移动端模糊的问题
根据移动端的物理像素，放大 canvas 画布，使 1个 canvas 像素和 1个物理像素相等
```javascript
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio; // 假设 dpr 为2
    // 获取 css 的宽高
    let { width: cssWidth, height: cssHeight } = canvas.getBoundingClientRect();
    // 根据 dpr，扩大 canvas 画布的像素，使 1个 canvas 像素和 1个物理像素相等
    canvas.width = dpr * cssWidth;
    canvas.height = dpr * cssHeight;
    // 由于画布扩大，canvas 的坐标系也跟着扩大，如果按照原先的坐标系绘图内容会缩小
    // 所以需要将绘制比例放大
    ctx.scale(dpr,dpr);
```
参考： https://juejin.im/post/5cbdda7bf265da036504fb46



### 2. js 实现 canvas 保存图片并下载到本地
```javascript
    function exportCanvasAsPNG(id, fileName) {

        var canvasElement = document.getElementById(id);

        var MIME_TYPE = "image/png";

        var imgURL = canvasElement.toDataURL(MIME_TYPE);

        var dlLink = document.createElement('a');
        dlLink.download = fileName;
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    }
```
参考：
* https://www.jianshu.com/p/1707a45198c5
* (三种)： https://blog.csdn.net/wogieni/article/details/97416465

### 3. 鼠标 / 手指位置转换 canvas 坐标
```javascript
    // 伪代码
    canvas.addEventListener("touchstart", function (e) {
        ifSelected(e);
    });

    canvas.addEventListener("click", function (e) {
        ifSelected(e);
    });

    function ifSelected(e) {
        coord = coordinate(e);
        // 循环查看 点击位置对应的物体 并对点击物体进行选中
    }

    // 鼠标 转换 canvas坐标
    var rect = null;
    function coordinate(e) {
        // 画布的大小
        if (!rect) {
            // canvas
            rect = canvas.getBoundingClientRect();
        }
        var //鼠标所在位置
            ex = e.clientX || e.changedTouches[0].clientX,
            ey = e.clientY || e.changedTouches[0].clientY,
            //鼠标相对于画布的位置
            tx = ex - rect.left - document.documentElement.clientLeft,
            ty = ey - rect.top - document.documentElement.clientTop;
        //鼠标坐标转换成画布坐标系
        tx = (tx * canvas.width) / rect.width;
        ty = (ty * canvas.height) / rect.height;
        // console.log("原始坐标" + tx, ty);
        return { x: tx, y: ty };
    }

```


### 4. canvas arc 绘制圆角矩形
```javascript
    function Rect(x, y, w, h) {
        return {x:x, y:y, width:w, height:h};
    }

    var Point = function(x, y) {
        return {x:x, y:y};
    };
    
    var rect = Rect(50, 50, 300, 200);

    drawRoundedRect(rect, 25, ctx);

    function drawRoundedRect(rect, r, ctx) {
        var ptA = Point(rect.x + r, rect.y);
        var ptB = Point(rect.x + rect.width, rect.y);
        var ptC = Point(rect.x + rect.width, rect.y + rect.height);
        var ptD = Point(rect.x, rect.y + rect.height);
        var ptE = Point(rect.x, rect.y);
        
        ctx.beginPath();
        
        ctx.moveTo(ptA.x, ptA.y);
        ctx.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, r);
        ctx.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, r);
        ctx.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, r);
        ctx.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, r);
    
        ctx.stroke();
    }
```
参考： https://blog.csdn.net/tanghw/article/details/49793531



## Node

### 1. express 接收 post 请求参数
```javascript
    // 伪代码
    
    // node
    // 安装依赖：npm install body-parser express --save-dev
    var express = require("express");
    var bodyParser = require('body-parser');//解析, 用req.body获取post参数
    var app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

    app.post("/test",function(req,res){
        console.log(req.body.test);
        res.send({hello:'world'});
    })

    app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });


    // 前端请求
    let url = "http://hostname:port"
    fetch(url + "/test", {
        method: 'POST',
        mode: 'cors',// 避免cors攻击
        crossDomain: true,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            test: "test"
        })
    })
    .then(response => response.text())
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log("err : ", err));
```
参考： https://www.jianshu.com/p/34ca30e71494


### 2. 跨域问题
```javascript
    // 安装依赖：npm install express cors  --save-dev
    const express = require("express");
    const cors = require('cors');
    const app = express();
    app.use(cors());    
```



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

### 4. vue-router 导致报错 [Vue warn]: Failed to mount component: template or render function not defined.
> vue router 里有一个模式叫做`命名视图`，本来一个页面里面只能有一个路由视图对应一个组件，现在可以多个路由视图对应多个组件。
解决办法： 将路由中的加载模块修改为 component -> components 
```
    routes.push({
        path: `/${sub.component}`,
        name: sub.name,
        components: componentName[sub.component] // resolve => require([`../Layout/${sub.component}`], resolve)
    })
```
参考：https://www.cnblogs.com/jianxian/p/11063738.html

### 5. Uncaught TypeError: a[b].target.className.indexOf is not a function
关闭谷歌浏览器的自动翻译即可，目测我出现这个问题是和语音相关的api冲突了。

参考：https://blog.csdn.net/m0_37688284/article/details/88947719

### 6. PayloadTooLargeError: request entity too larg
```javascript
    app.use(bodyParser.json({'limit': '10mb',extended: true}));
    app.use(bodyParser.urlencoded({'limit': '10mb',extended: true}));
```
参考：https://github.com/apostrophecms/apostrophe/issues/1291

### 7. Could not resolve host: github.com
```
    git config --global http.proxy http://127.0.0.1:1080
    git config --global https.proxy https://127.0.0.1:1080
    git config --global --unset http.proxy
    git config --global --unset https.proxy

    npm config delete proxy
```
参考：
* https://github.com/desktop/desktop/issues/2789
* https://gist.github.com/laispace/666dd7b27e9116faece6

### 8. ping baidu.com 不通
1. 调整 DNS 为 `114, 114, 114, 114` 和 `8, 8, 8, 8`
2. 查看 DNS 是否修改成功 `cat /etc/resolv.conf`
3. (Mac) 再次尝试 `nslookup baidu.com`

参考：
* https://osxdaily.com/2011/06/03/get-dns-server-ip-command-line-mac-os-x/
* https://superuser.com/questions/258151/how-do-i-check-what-dns-server-im-using-on-mac-os-x

### 9. npm i 卡住
1. 检查DNS
2. 配置 npm 源： `npm config get registry https://registry.npm.taobao.org/`

参考：
* https://juejin.im/post/5d8eeb2de51d4578200cc968
* https://stackoverflow.com/questions/16873973/npm-install-hangs/39376187


### 10. Duplicate keys detected: 'xxxx'. This may cause an update error
vue 中的 v-for 循环的 key 重复了, key 必须是唯一的 <br>
参考：https://blog.csdn.net/Dream_xun/article/details/85064277



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

参考: https://blog.csdn.net/nextstudio/article/details/18133963

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

### 8. mac 解压 .rar 文件出现中文乱码
1. `brew install unar`
2. 中文（ GBK 或 GB18030 ）或简体中文（ GB 2312 或 windows，Dos ）`unar -encoding GBK 文件名.后缀名`



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

### 7. 移动端软键盘弹起
140是一个预估值的阀值，用来排除其他的resize操作。仅resize的高度差大于140时，才被识别为软键盘交互，否则不是。如浏览器的工具栏、搜索栏的隐藏，window的窗口页会有一个较小的变化。
```javascript
    var winHeight = window.innerHeight;
    window.addEventListener("resize", ()=>{
        var thisHeight = window.innerHeight;
        if ( winHeight - thisHeight > 140 ) {
            //键盘弹出
        } else {
            //键盘收起
        }
    })
    
```
参考： https://www.cnblogs.com/wangyihong/p/7514304.html


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

### 4. 分页
```javascript
    // index 条数 ， page 页玛， limit 限制条数
    array.filter((item, index) => index < limit * page && index >= limit * (page - 1))
```

### 5. 计算两点之间的距离
公式： `Math.sqrt( Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2), 2 )`
参考：https://blog.csdn.net/weixin_40099554/article/details/77873738

### 6. 用户拖拽
> 用户拖拽的思路
1. 首先记录上一帧和当前帧，判定上一帧和当前帧的差，大于 + 1 ，小于 - 1
2. 将当前帧赋值给上一帧
3. 在 touchstart、touchmove、touchend 中记录开始和结束时间，用于截流以及防止点击误触

```js
var pos, current = 0, prev;
var start_ms, end_ms;
window.ontouchstart = function (e) {
    start_ms = Date.now();
    // prev = pos;
    selected(e)
}
window.ontouchmove = function (e) {
    end_ms = Date.now();
    selected(e)
}
window.addEventListener("touchend", (e) => {
    end_ms = Date.now();
    selected(e)

    // prev = pos = 0;
})


function selected(e) {
    if ((end_ms - start_ms) < 100) {
        pos = e.changedTouches[0].clientX;
        current += prev > pos ? -0.01 : 0.01;
        control.abs_scroll = current / Math.PI * 2
        prev = pos;
    } else {
        start_ms = Date.now();
    }
}
```
参考：来自[@Mike Luan](https://github.com/luan007)的天才思路


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


### 3. window bat delay
> 正确的方法是使用timeoutWindows 2000中引入的命令。

* 等待30秒
```bat
timeout /t 30
```

* 如果用户按下任何键，超时将被中断；否则，超时将被中断。但是，该命令还接受可选的switch /nobreak，它有效地忽略了用户可能按下的任何命令，但显式的除外CTRL-C：
```bat
timeout /t 30 /nobreak
```

* 此外，如果您不希望命令在屏幕上显示其倒计时，则可以将其输出重定向到NUL：
```bat
timeout /t 30 /nobreak > NUL
```
参考：https://serverfault.com/questions/38318/better-way-to-wait-a-few-seconds-in-a-bat-file/432309


## WScript

### 1. VB脚本
* 1. WScript.Sleep(mm) 将当前脚本的执行暂停指定的毫秒数(单位毫秒)。



## Electron

### 1. 窗口全屏退出快捷键
```
    windows： Alt+F4
    macOS：command+Q
```


### 2. 自动点击
```js
    setTimeout(()=>{
        let inputArgs = {
            type: "mouseDown",
            x: 0,
            y: 0,
            clickCount: 1,
            button: 'left'
        }
        win.focusOnWebView();
        win.webContents.sendInputEvent(inputArgs)
        console.log("自动点击");
    }, 1000)
```


### 3. 使用 webview 显示空白
electron >= 5 禁用了 webview标签。<br/>
参考：https://blog.csdn.net/i13253161183/article/details/103066984

