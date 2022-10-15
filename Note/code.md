# 🌙 代码块 
> [Javascript + 优质代码块](https://github.com/lulu-s/lulu-book/blob/master/assets/ao.js) 
  [node](https://github.com/lulu-s/lulu-book/blob/master/assets/node.js)

* [部署方法](#部署方法)
    * [1. 谷歌浏览器全屏](#1-谷歌浏览器全屏)
    * [2. url保存本地，双击打开，文件存储为`filename.url`](#2-url保存本地双击打开文件存储为filenameurl)
    * [3. 自动启动](#3-自动启动)
    * [4. 关闭锁屏](#4-关闭锁屏)
    * [5. cnpm](#5-cnpm)
    * [6. 谷歌浏览器不能下载的替代方法](#6-谷歌浏览器不能下载的替代方法)

* [CSS](#CSS)
    * [1. css 实现 tooltip](#1-css-实现-tooltip)

* [Electron](#Electron)
    * [1. 允许浏览器自动播放](#1-允许浏览器自动播放)
    * [2. 加载本地文件 file///](#2-加载本地文件-file)

* [Javascript](#Javascript)
    * [1. 千位分隔符](#1-千位分隔符)
    * [2. 转换日期](#2-转换日期)
    * [3. 补零操作](#3-补零操作)
    * [4. 校验手机号](#4-校验手机号)
    * [5. 提取汉字](#5-提取汉字)
    * [6. 字符串去符号](#6-字符串去符号)
    * [7. fetch 循环](#7-fetch-循环)
    * [8. 冒泡排序](#8-冒泡排序)
    * [9. 正则表达式获取两个字符之间的字符串信息](#9-正则表达式获取两个字符之间的字符串信息)
    * [10. 不重复的随机数组](#10-不重复的随机数组)
    * [11. 颜色转换 rgb 与 hex 互转](#11-颜色转换-rgb-与-hex-互转)

* [Canvas](#Canvas)
    * [1. 线条光辉流动](#1-线条光辉流动)
    * [2. 根据已知点，画贝塞尔曲线，返回点，使用 lineTo 连接](#2-根据已知点画贝塞尔曲线返回点使用-lineto-连接)
    * [3. 鼠标 转换 canvas 坐标](#3-鼠标-转换-canvas-坐标)
    * [4. 下载 canvas 图片](#4-下载-canvas-图片)

* [Node](#Node)
    * [1. 静态文件夹 / 静态页面](#1-静态文件夹--静态页面)
    * [2. 跨域](#2-跨域)
    * [3. bodyParser解析, 用 req.body 获取 post 参数](#3-bodyparser解析-用-reqbody-获取-post-参数)
    * [4. 搭建服务器及提示](#4-搭建服务器及提示)
    * [5. socket.io 基本用法](#5-socketio-基本用法)
    * [6. ip](#6-ip)

* [优质代码块（汇总）](#优质代码块-汇总)
    * [1. loop 循环, looperStart 开启循环模式, eased 递增](#1-loop-循环-looperstart-开启循环模式-eased-递增)
    * [2. noise](#2-noise)
    * [3. 并发](#3-并发)



## 部署方法

### 1. 谷歌浏览器全屏
* 方法1
    * index.bat
    ```shell
        cd C:\Program Files (x86)\Google\Chrome\Application 
        chrome.exe --user-data-dir --disable-direct-composition http://localhost:1234
    ```

    * main.vbs
    ```shell
        Set WshShell = WScript.CreateObject("WScript.Shell")

        WScript.Sleep 3000
        WshShell.SendKeys "{F11}"
        WScript.Sleep 1000
        WshShell.SendKeys "^r"
    ```
* 方法2 - 推荐
```shell
    cd ./根目录
    start /min http-server -p 1234
    "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:1234  --kiosk
```

### 2. url保存本地，双击打开，文件存储为`filename.url`

```shell
    [InternetShortcut]
    URL=http://http://stackoverflow.com/
```
参考：https://stackoverflow.com/questions/14256010/save-webpage-as-a-url-file-and-open-with-chrome

### 3. 自动启动
1. 进入c盘 → emerge（电脑名）→ 地址栏手敲  \AppData → Roaming → Microsoft → Windows「开始」菜单 → 程序 → 启动
2. 将 启动文件夹 生成快捷方式到桌面
3. 将 run.bat 移动到 启动文件夹快捷方式 内

### 4. 关闭锁屏
* 关闭屏幕保护程序
    1. 打开 系统偏好设置 → 桌面与屏幕保护程序 → 修改闲置时间为永不
* 关闭节能模式（window不用进行此步骤）
    1. 打开 系统偏好设置 → 节能 → 修改为永不关闭显示器

### 5. cnpm
```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 6. 谷歌浏览器不能下载的替代方法
* 点击`下载安装文件` <br>
参考：https://support.google.com/chrome/answer/95346?visit_id=637499032867344818-2691531643&hl=zh-Hans&rd=2#install_win_offline&zippy=


## CSS

### 1. css 实现 tooltip
* html
```html
<div class='tool-btn' data-title="title_name" >
```

* css
```css
.tool-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: white;
}

.tool-btn {
    width: 100%;
    width: 50%;
    word-wrap: break-word;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;

    .icon {
        padding: 2px;
        padding-bottom: 5px;
        font-size: 1.2em;
    }

    span {
        display: inline-block;
        margin-left: 10px; 
        margin-right: 10px; 
        // font-size: 12px;
    }
}


.tool-btn:hover::before {
    content: "";
    position: absolute;
    // bottom: -10px;
    z-index: 1000;
    width: 0;
    border: 5px solid;
    border-color: transparent #e4017f transparent transparent;
    transition: all 0.4s ease;
    transform: translate(25px, 13px);
    pointer-events: none;
    // opacity: 0.5;
    animation: before_scale .3s ease forwards .05s;
}

@keyframes before_scale {
    0% {
        transform: translate(25px, 13px)  scale(0.4);
        // opacity: 0.5;
    }
    100% {
        transform: translate(15px, 13px)  scale(1);
        // opacity: 1;
    }
}

.tool-btn:hover::after {
    content: attr(data-title);
    position: absolute;
    /* bottom: 0; */
    z-index: 1100;
    text-align: center;
    width: max-content;
    background: #e4017f;
    color: #fff;
    padding: 0 12px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    // font-weight: bold;
    transition: all .4s ease;
    transform: translate(25px, -29px);
    border-radius: 3px;
    pointer-events: none;
    animation: after_scale .4s ease forwards;
}

@keyframes after_scale {
    0% {
        transform: translate(25px, -29px) scale(0.9);
    }
    100% {
        transform: translate(25px, -29px) scale(1);
    }
}
```


## Electron 

### 1. 允许浏览器自动播放
```js
    const electron = require('electron')
    const {
        app,
        BrowserWindow
    } = require('electron')
    app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
```

### 2. 加载本地文件 file///
```js
    const { app, BrowserWindow, protocol } = require('electron')

    function createWindow() {
        const win = new BrowserWindow({
            width: 5120,
            height: 2160,
            webPreferences: {
                nodeIntegration: true,
                webSecurity: false
            },
            // frame: false,
            // kiosk: true,
            webSecurity: false
        })
        

        win.loadURL('http://localhost:1234/index.html')
        // win.loadURL('http://localhost:1234/index.html#production')
    }

    app.whenReady().then(() => {
    protocol.registerFileProtocol('file', (request, callback) => {
        const pathname = decodeURI(request.url.replace('file:///', ''));
        callback(pathname);
    });
    }).then(createWindow)
```


## Javascript

### 1. 千位分隔符
```js
    export function addComma(number) {
        if (number && number != null) {
            number = String(number);
            var left = number.split(".")[0];
            // right = number.split('.')[1];
            // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0' ) : '.00';
            var temp =  left.split("")
                            .reverse()
                            .join("")
                            .match(/(\d{1,3})/g);
            return (
                (Number(number) < 0 ? "-" : "") +
                    temp
                        .join(",")
                        .split("")
                        .reverse()
                        .join("")
                ); // + right;
        } else if (number === 0) {
            return "0.00";
        } else {
            return "";
        }
    }
```

### 2. 转换日期
```js
    export function getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = `${oYear}-${addZero(oMonth)}-${addZero(oDay)} ${addZero(oHour)}:${addZero(oMin)}:${addZero(oSen)}`,
            oDates = `${oYear}-${addZero(oMonth)}-${addZero(oDay)}`;
        return {
            years: oYear,
            months: oMonth,
            days: oDay,
            hours: oHour,
            minutes: oMin,
            seconds: oSen,
            time: oTime,
            date: oDates,
            ms: oDate.getTime(),
        };
    }
```

### 3. 补零操作
```js
    export function addZero(num) {
        if (parseInt(num) < 10)  num = "0" + num;
        return num;
    }
```

### 4. 校验手机号
```js
    function isPoneAvailable(tel) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(tel)) return false;
        else return true;
    }
```

### 5. 提取汉字
```js
    function GetChinese(strValue) {  
        if(strValue!= null && strValue!= ""){  
            var reg = /[\u4e00-\u9fa5]/g;   
            return strValue.match(reg).join("");  
        }  
        else  
            return "";  
    }  
```

### 6. 字符串去符号
```js
    function no_symbol(str){
        return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\。|\，|\？|\！|\、|\；|\：]/g, ""); 
    }
```

### 7. fetch 循环
```js
fetch(API_URL_DIARY)
    .then(response => response.json())
    .then(data => {
        console.log("old", data);
        return data;
    })
    .then(async data => {
        await Promise.all(data.map((e, index, array) => {
            return fetch(API_URL_FOOD_DETAILS + e.foodid)
                .then(response => response.json())
                .then(data => {
                    array[index] = {...e, ...data};
                    console.log("update");
                })
        }));

        console.log("new", data)
    });
```
参考： https://www.coder.work/article/3878138

### 8. 冒泡排序
```js
    // 冒泡排序(从小到大)
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                    var temp = arr[j+1];        //元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    bubbleSort(logo)
```

### 9. 正则表达式获取两个字符之间的字符串信息
```js
    var re = new RegExp("(?<=/).*(?=.)");
    return re.exec("/234234.")[0]
```
* 参考：
    1. https://blog.csdn.net/weixin_34137799/article/details/91367185?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control
    2. https://www.cnblogs.com/whaozl/p/5462865.html

### 10. 不重复的随机数组
```js
/**
* 构造不重复随机数组
* @param range [start, end] start: 开始数 end: 结束数
* @param count 取多少个
*/
function rangeRam (range, count) {
   const ramArr = [];
   const result = [];

   for (let i = range[0]; i <= range[1]; i++) {
       ramArr.push(check_length(i));
   }

   for (; count > 0; count--) {
       const ram = Math.floor(Math.random() * (ramArr.length - 1));

       result.push(ramArr[ram]);

       ramArr[ram] = ramArr[ramArr.length - 1];
       ramArr.pop();
   }

   return result;
};
```
参考： https://zhuanlan.zhihu.com/p/85614147

### 11. 颜色转换 rgb 与 hex 互转
```js

/*
 *  颜色转换
 *  var sRgb = "RGB(23, 245, 56)" , sHex = "#34538b";
 *  var sHexColor = sRgb.colorHex();
 *  var sRgbColor = sHex.colorRgb();
 */

//  #34538b -->  RGB(52,83,139)
String.prototype.colorRgb = function () {
    var sColor = this.toLowerCase();
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    }
    return sColor;
};

// RGB(52,83,139) -->  #34538b
String.prototype.colorHex = function () {
    var that = this;
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    }
    return that;
};
```
参考：https://www.jianshu.com/p/54ada88b85e4


## Canvas

### 1. 线条光辉流动
* [video](https://github.com/lulu-s/lulu-book/blob/master/assets/video/%E7%BA%BF%E6%9D%A1%E5%85%89%E8%BE%89%E6%B5%81%E5%8A%A8.mov)
```js
    var q = (Date.now() / 1000 * 0.2) % 1.0;
    var op = Math.floor((1 - Math.pow(1 - 2 * q, 2)) * 255);
    let animated_grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
    animated_grd.addColorStop(Math.max(0, q - 0.1), 'black');
    animated_grd.addColorStop(q, `rgba(${op}, ${op}, ${op}, 0.5)`);
    animated_grd.addColorStop(Math.min(1, q + 0.1), 'black');
    
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = animated_grd
    ctx.lineWidth = 22;
    ctx.filter = "blur(8px)"
    ctx.stroke();
    ctx.restore();
```

### 2. 根据已知点，画贝塞尔曲线，返回点，使用 lineTo 连接
```js
    // 使用 getCurvePoints(point, 0.5, 10, false)
    export function getCurvePoints(points, tension, numOfSeg, close) {
        'use strict';

        // options or defaults
        tension = (typeof tension === 'number') ? tension : 0.5;
        numOfSeg = numOfSeg ? numOfSeg : 25;

        var pts,									// for cloning point array
            i = 1,
            l = points.length,
            rPos = 0,
            rLen = (l-2) * numOfSeg + 2 + (close ? 2 * numOfSeg: 0),
            res = new Float32Array(rLen),
            cache = new Float32Array((numOfSeg + 2) * 4),
            cachePtr = 4;

        pts = points.slice(0);

        if (close) {
            pts.unshift(points[l - 1]);				// insert end point as first point
            pts.unshift(points[l - 2]);
            pts.push(points[0], points[1]); 		// first point as last point
        }
        else {
            pts.unshift(points[1]);					// copy 1. point and insert at beginning
            pts.unshift(points[0]);
            pts.push(points[l - 2], points[l - 1]);	// duplicate end-points
        }

        // cache inner-loop calculations as they are based on t alone
        cache[0] = 1;								// 1,0,0,0

        for (; i < numOfSeg; i++) {

            var st = i / numOfSeg,
                st2 = st * st,
                st3 = st2 * st,
                st23 = st3 * 2,
                st32 = st2 * 3;

            cache[cachePtr++] =	st23 - st32 + 1;	// c1
            cache[cachePtr++] =	st32 - st23;		// c2
            cache[cachePtr++] =	st3 - 2 * st2 + st;	// c3
            cache[cachePtr++] =	st3 - st2;			// c4
        }

        cache[++cachePtr] = 1;						// 0,1,0,0

        // calc. points
        parse(pts, cache, l);

        if (close) {
            //l = points.length;
            pts = [];
            pts.push(points[l - 4], points[l - 3], points[l - 2], points[l - 1]); // second last and last
            pts.push(points[0], points[1], points[2], points[3]); // first and second
            parse(pts, cache, 4);
        }

        function parse(pts, cache, l) {

            for (var i = 2, t; i < l; i += 2) {

                var pt1 = pts[i],
                    pt2 = pts[i+1],
                    pt3 = pts[i+2],
                    pt4 = pts[i+3],

                    t1x = (pt3 - pts[i-2]) * tension,
                    t1y = (pt4 - pts[i-1]) * tension,
                    t2x = (pts[i+4] - pt1) * tension,
                    t2y = (pts[i+5] - pt2) * tension;

                for (t = 0; t < numOfSeg; t++) {

                    var c = t << 2, //t * 4;

                        c1 = cache[c],
                        c2 = cache[c+1],
                        c3 = cache[c+2],
                        c4 = cache[c+3];

                    res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
                    res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
                }
            }
        }

        // add last point
        l = close ? 0 : points.length - 2;
        res[rPos++] = points[l];
        res[rPos] = points[l+1];

        return res;
    }
```

### 3. 鼠标 转换 canvas 坐标
```js
    export function coordinate(e, canvas, rect) {
        // 画布的大小
        if (!rect) rect = canvas.getBoundingClientRect();
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
        return { x: tx, y: ty, rect };
    }
```

### 4. 下载 canvas 图片
```js
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/JPEG", 0.5) // image/png
    a.download = canvas
    a.dataset.downloadurl = ["image/JPEG", a.download, a.href].join(':');
    a.click();
```

## Node

### 1. 静态文件夹 / 静态页面
```js
    const express = require("express");
    const app = express();
    app.use('/', express.static('../public'))
    // app.use('/', express.static(__dirname + '/public'));
```

### 2. 跨域
```js
    const express = require("express");
    const app = express();
    const cors = require("cors");
    app.use(cors());
```

### 3. bodyParser解析, 用 req.body 获取 post 参数
```js
    const express = require("express");
    const app = express();
    
    var bodyParser = require('body-parser');
    app.use(bodyParser.json({'limit': '50mb', extended: true}));
    app.use(bodyParser.urlencoded({'limit': '50mb', extended: true}));
```

### 4. 搭建服务器及提示
```js
    const hostname = "localhost";
    const port = 3000;

    const express = require("express");
    const app = express();
    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
```

### 5. socket.io 基本用法
* 后台
```js
    const hostname = "localhost";
    const port = 3000;
    const express = require('express');
    const app = express();
    const server = require('http').Server(app);
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        io.emit("move", Math.random());

        socket.on("path", (target) => {
            console.log(target);
        })
    })
    server.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
```
* 前端
```js
    import io from 'socket.io-client';
    const socket = io(":3000");

    socket.on("x", (target) => {
        console.log('x', target);
    })
```

### 6. ip
```js
const ip = require('ip');
const hostname = ip.address() || "localhost";
```


## 优质代码块（汇总）

### 1. loop 循环, looperStart 开启循环模式, eased 递增
```js
    //tiny updatez
    var PRECISION = 0.01;
    var deltaT = 0;

    function ease(f, t, sp, precision) {
        precision = precision || PRECISION;
        if (Math.abs(f - t) < precision) {
            return t;
        }
        return f + (t - f) * sp * deltaT;
    }



    var _eased_values = [];

    function eased(v, t, e, prec) {
        return new EasedValue(v, t, e, prec);
    }

    function EasedValue(value, to, e, precision) {
        this.value = value;
        this.to = to;
        this.precision = precision || PRECISION;
        this.e = e;
        _eased_values.push(this);
        this.updating = true;
        this.tick = function() {
            // ease
            this.value = ease(this.value, this.to, this.e, this.precision);
        }
    }

    var deltaTMultipler = 60;

    function looperSetDeltaTMultiplier(s) {
        deltaTMultipler = s;
    }

    var all = [];
    var removal = [];
    var t = (Date.now() / 1000) % 1000000;
    var prevT = (Date.now() / 1000) % 1000000;
    function tick() {
        deltaT = (t - prevT) * deltaTMultipler;
        prevT = t;
        if (deltaT < 0) {
            deltaT = 1;
        }
        if (deltaT > 3) {
            deltaT = 1;
        }
        t = ((Date.now()) % 1000000) * 0.001;
        if (removal.length > 0) {
            var _new = [];
            for (var i = 0; i < all.length; i++) {
                if (removal.indexOf(all[i]) >= 0) {
                    continue;
                }
                _new.push(all[i]);
            }
            removal = [];
            all = _new;
        }
        for (var i = 0; i < all.length; i++) {
            all[i](t, deltaT);
        }
    }

    function loop(func_or_obj) {
        var func = func_or_obj.update || func_or_obj;
        if (all.indexOf(func) >= 0) {
            return;
        }
        all.push(func);
    }

    function noLoop(func) {
        if (removal.indexOf(func) >= 0) {
            return;
        }
        removal.push(func);
    }

    function looperStart() {
        var _updator_thread = function () {
            requestAnimationFrame(_updator_thread);
            tick();
        };
        _updator_thread();
    }

    var _keys = {};
    function looperInterval(key, span) {
        _keys[key] = _keys[key] || Date.now();
        if (Date.now() > _keys[key] + span) {
            _keys[key] = Date.now();
            return true;
        }
        return false;
    }

    function _update_eased() {
        for (var i = 0; i < _eased_values.length; i++) {
            _eased_values[i].tick();
        }
    }
    loop(_update_eased);

    var _value_lib = {};
    var _value_keys = {};
    function changed(key, cur) {
        var changed = _value_lib[key] != cur;
        _value_lib[key] = cur;
        _value_keys[key] = 1;
        return changed;
    }
```

### 2. noise
```js
    import OpenSimplexNoise from "open-simplex-noise"; // "open-simplex-noise": "^1.6.0",

    export var openSimplex = new OpenSimplexNoise();
    export function simplexArray2d(width, height, scale) {
        var output = new Array(width);
        for (var x = 0; x < width; x++) {
            output[x] = new Array(height);
            for (var y = 0; y < height; y++) {
                output[x][y] = openSimplex.noise2D(x * scale, y * scale);
            }
        }
        return output;
    }

    export function simplexArray3d(width, height, depth, scale) {
        var output = new Array(width);
        for (var x = 0; x < width; x++) {
            output[x] = new Array(height);
            for (var y = 0; y < height; y++) {
                output[x][y] = new Array(depth);
                for (var z = 0; z < depth; z++) {
                    output[x][y][z] = OpenSimplexNoise.noise3D(x * scale, y * scale, z * scale);
                }
            }
        }
        return output;
    };

    export function simplexArray4d(width, height, depth, wLength, scale) {
        var output = new Array(width);
        for (var x = 0; x < width; x++) {
            output[x] = new Array(height);
            for (var y = 0; y < height; y++) {
                output[x][y] = new Array(depth);
                for (var z = 0; z < depth; z++) {
                    output[x][y][z] = new Array(wLength);
                    for (var w = 0; w < wLength; w++) {
                        output[x][y][z][w] = openSimplex.noise4D(x * scale, y * scale, z * scale, w * scale);
                    }
                }
            }
        }
        return output;
    };

    // console.log(simplexArray2d(1000, 1000, 0.01));

    export function pickClosest2d(x, y, arr2d) {
        x = Math.floor(x) % arr2d.length;
        x = x < 0 ? x + arr2d.length : x;
        y = Math.floor(y) % arr2d[x].length;
        y = y < 0 ? y + arr2d[x].length : y;
        return arr2d[x][y];
    }
```

### 3. 并发
```js
    function Promise_Queue_Settings(_queue_name, concurrent_max, interval, qps) {
        _promise_queues[_queue_name] = _promise_queues[_queue_name] || [];
        _promise_queues[_queue_name].__min_interval = interval || undefined;
        _promise_queues[_queue_name].__lim_qps = qps || undefined;
        _promise_queues[_queue_name].__max_con = concurrent_max || undefined;
    }

    function p_q_add(_queue_name, __cur) {
        _promise_queues[_queue_name] = _promise_queues[_queue_name] || [];
        if (_promise_queues[_queue_name].__id == undefined) {
            _promise_queues[_queue_name].__id = 0;
        }
        if (_promise_queues[_queue_name].__last_call == undefined) {
            _promise_queues[_queue_name].__last_call = 0;
        }
        if (_promise_queues[_queue_name].__working == undefined) {
            _promise_queues[_queue_name].__working = [];
        }
        if (_promise_queues[_queue_name].__qps == undefined) {
            _promise_queues[_queue_name].__qps = new qps();
        }
        __cur.__id = _promise_queues[_queue_name].__id++;
        _promise_queues[_queue_name].unshift(__cur);
        p_q_next(_promise_queues[_queue_name]); //start the queue if needed
    }

    function p_q_next(queue) {
        if (!queue || queue.length == 0) return; //done
        if (queue.__max_con &&
            queue.__working.length >
            queue.__max_con) {
            console.warn("Promise_Queue", "CONCURRENCY LIM", queue.__max_con);
            return;
        }
        if (queue.__min_interval &&
            (Date.now() - queue.__last_call) <= queue.__min_interval) {
            var next = Math.max(1, queue.__min_interval - (Date.now() - queue.__last_call));
            clearTimeout(queue.__timeout);
            console.warn("Promise_Queue", "INTERVAL THROTTLE", next);
            queue.__timeout = setTimeout(() => {
                p_q_next(queue);
            }, next)
            return;
        }
        if (queue.__lim_qps && queue.__qps.get() >= queue.__lim_qps) {
            clearTimeout(queue.__timeout);
            console.warn("Promise_Queue", "QPS THROTTLE", queue.__qps.get(), queue.__lim_qps);
            queue.__timeout = setTimeout(() => {
                p_q_next(queue);
            }, 100)
            return;
        }
        var _next = queue.pop();
        var id = _next.__id;
        queue.__working.push(id);
        queue.__qps.plus(1);
        queue.__last_call = Date.now();
        _next(() => {
            var index = queue.__working.indexOf(id);
            queue.__working = queue.__working.splice(
                index, 1
            );
            p_q_next(queue);
        });
    }

    function Promise_Queue(return_promise, _queue_name) {
        _queue_name = _queue_name || "default";
        var promise = new Promise((res, rej) => {
            function actual_work(__done) {
                return_promise().then(
                    (data) => {
                        res(data);
                        __done();
                    }, (e) => {
                        rej(data);
                        __done();
                    })
            }
            p_q_add(_queue_name, actual_work);
        })
        return promise;
    }
```
* 使用
```js
    var _promise_queues = {};
    Promise_Queue_Settings("baiduAI", 100, 0, 100);
    Promise_Queue_Settings("oftenWords", 100, 200, 2);

    // promise 封装
    function __promise(fun){
        return  Promise_Queue(() => {
            return new Promise(fun);
        }, "baiduAI");
    }
```