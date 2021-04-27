// 🌙 代码块


// Javascript

// 1. 千位分隔符
export function addComma(number) {
    if (number && number != null) {
        number = String(number);
        var left = number.split(".")[0];
        // right = number.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0' ) : '.00';
        var temp = left.split("")
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


// 2. 转换日期
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


// 3. 补零操作
export function addZero(num) {
    if (parseInt(num) < 10) num = "0" + num;
    return num;
}


// 4. 校验手机号
export function isPoneAvailable(tel) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(tel)) return false;
    else return true;
}


// 5. 提取汉字
export function GetChinese(strValue) {
    if (strValue != null && strValue != "") {
        var reg = /[\u4e00-\u9fa5]/g;
        return strValue.match(reg).join("");
    }
    else
        return "";
}


// 6. 字符串去符号
export function no_symbol(str) {
    return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\。|\，|\？|\！|\、|\；|\：]/g, "");
}


// 8.冒泡排序(从小到大)
export function bubbleSort(arr) {
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

// 9. 正则表达式获取两个字符之间的字符串信息 例如 str = /234234."
export function between(a, b, str){
    var re = new RegExp(`(?<=${a}).*(?=${b})`);
    return re.exec(str)[0]
}

// 10. 不重复的随机数组
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


// Canvas

// 1. 线条光辉流动
export function draw_line_light(ctx){
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
}


// 2. 根据已知点，画贝塞尔曲线，返回点，使用 lineTo 连接
export function getCurvePoints(points, tension, numOfSeg, close) {
    'use strict';

    // options or defaults
    tension = (typeof tension === 'number') ? tension : 0.5;
    numOfSeg = numOfSeg ? numOfSeg : 25;

    var pts,									// for cloning point array
        i = 1,
        l = points.length,
        rPos = 0,
        rLen = (l - 2) * numOfSeg + 2 + (close ? 2 * numOfSeg : 0),
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

        cache[cachePtr++] = st23 - st32 + 1;	// c1
        cache[cachePtr++] = st32 - st23;		// c2
        cache[cachePtr++] = st3 - 2 * st2 + st;	// c3
        cache[cachePtr++] = st3 - st2;			// c4
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
                pt2 = pts[i + 1],
                pt3 = pts[i + 2],
                pt4 = pts[i + 3],

                t1x = (pt3 - pts[i - 2]) * tension,
                t1y = (pt4 - pts[i - 1]) * tension,
                t2x = (pts[i + 4] - pt1) * tension,
                t2y = (pts[i + 5] - pt2) * tension;

            for (t = 0; t < numOfSeg; t++) {

                var c = t << 2, //t * 4;

                    c1 = cache[c],
                    c2 = cache[c + 1],
                    c3 = cache[c + 2],
                    c4 = cache[c + 3];

                res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
                res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
            }
        }
    }

    // add last point
    l = close ? 0 : points.length - 2;
    res[rPos++] = points[l];
    res[rPos] = points[l + 1];

    return res;
}


// 3. 鼠标 转换 canvas 坐标
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



// 优质代码块（汇总）

// 1. loop 循环, looperStart 开启循环模式, eased 递增
//tiny updatez
var PRECISION = 0.01;
var deltaT = 0;

export function ease(f, t, sp, precision) {
    precision = precision || PRECISION;
    if (Math.abs(f - t) < precision) {
        return t;
    }
    return f + (t - f) * sp * deltaT;
}

var _eased_values = [];

export function eased(v, t, e, prec) {
    return new EasedValue(v, t, e, prec);
}

export function EasedValue(value, to, e, precision) {
    this.value = value;
    this.to = to;
    this.precision = precision || PRECISION;
    this.e = e;
    _eased_values.push(this);
    this.updating = true;
    this.tick = function () {
        // ease
        this.value = ease(this.value, this.to, this.e, this.precision);
    }
}

var deltaTMultipler = 60;

export function looperSetDeltaTMultiplier(s) {
    deltaTMultipler = s;
}

var all = [];
var removal = [];
var t = (Date.now() / 1000) % 1000000;
var prevT = (Date.now() / 1000) % 1000000;
export function tick() {
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

export function loop(func_or_obj) {
    var func = func_or_obj.update || func_or_obj;
    if (all.indexOf(func) >= 0) {
        return;
    }
    all.push(func);
}

export function noLoop(func) {
    if (removal.indexOf(func) >= 0) {
        return;
    }
    removal.push(func);
}

export function looperStart() {
    var _updator_thread = function () {
        requestAnimationFrame(_updator_thread);
        tick();
    };
    _updator_thread();
}

var _keys = {};
export function looperInterval(key, span) {
    _keys[key] = _keys[key] || Date.now();
    if (Date.now() > _keys[key] + span) {
        _keys[key] = Date.now();
        return true;
    }
    return false;
}

export function _update_eased() {
    for (var i = 0; i < _eased_values.length; i++) {
        _eased_values[i].tick();
    }
}
loop(_update_eased);

var _value_lib = {};
var _value_keys = {};
export function changed(key, cur) {
    var changed = _value_lib[key] != cur;
    _value_lib[key] = cur;
    _value_keys[key] = 1;
    return changed;
}

//  2. noise
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

// 3. 并发

export function Promise_Queue_Settings(_queue_name, concurrent_max, interval, qps) {
    _promise_queues[_queue_name] = _promise_queues[_queue_name] || [];
    _promise_queues[_queue_name].__min_interval = interval || undefined;
    _promise_queues[_queue_name].__lim_qps = qps || undefined;
    _promise_queues[_queue_name].__max_con = concurrent_max || undefined;
}

export function p_q_add(_queue_name, __cur) {
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

export function p_q_next(queue) {
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

export function Promise_Queue(return_promise, _queue_name) {
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
