## 代码块

### Canvas
1. 线条光辉流动 ![video](#https://github.com/lulu-s/lulu-book/blob/master/assets/%E7%BA%BF%E6%9D%A1%E5%85%89%E8%BE%89%E6%B5%81%E5%8A%A8.mov)
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
