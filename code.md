## 代码块

### Canvas
1. 线条光辉流动
```js
    let animated_grd;
    var q = (Date.now() / 1000 * 0.2) % 1.0;
    var op = Math.floor((1 - Math.pow(1 - 2 * q, 2)) * 255);
    animated_grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
    animated_grd.addColorStop(Math.max(0, q - 0.1), 'black');
    animated_grd.addColorStop(q, `rgba(${op},${op},${op},0.8)`);
    animated_grd.addColorStop(Math.min(1, q + 0.1) ,'black');
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = animated_grd
    ctx.lineWidth = 22;
    ctx.filter = "blur(8px)"
    ctx.stroke();
    ctx.restore();
```
![线条光辉流动](https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "百度")