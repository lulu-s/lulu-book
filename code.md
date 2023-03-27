### 一些工作时候沉淀的视觉方法


### 1. 画光圈外散的视觉
```

  async draw_wave() {
    // console.log(this.pins, this.car);

    // 片 贴图 绘制动画
    var cw, ch;
    var canvas = document.createElement('canvas');
    cw = canvas.width = 512;
    ch = canvas.height = 512;
    var ctx = canvas.getContext('2d');

    var texture = new three.CanvasTexture(canvas);
    var plane_geo = new three.PlaneGeometry(1, 1, 60, 60);
    var plane_mat = new three.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      fog: false,
      side: three.DoubleSide,
      map: texture
    })
    var plane = new three.Mesh(plane_geo, plane_mat);
    plane.rotation.x = Math.PI / 2

    this.car.add(plane);

    var center = new three.Vector2(cw / 2, ch / 2);
    var shows = new Array(this.pins.length).fill(0);
    var one_deg = Math.PI / 180;
    this.cloop(t => {
      ctx.clearRect(0, 0, cw, ch);
      ctx.strokeStyle = '#ffffff'

      for (let i = 0; i < shows.length; i++) {
        shows[i] = ease(shows[i], this.sensor_st ? 1 : 0, 0.1, 0.001);

      }

   switch (component.inner) {
                case 0: // 2👌
                    ctx.save();
                    ctx.globalAlpha = shows[2];
                    draw_circle(ctx, cw / 2.5, t / 1.2);
                    draw_circle(ctx, cw / 4, t / 1.4);
                    ctx.restore();
                    break;
                case 1: // 0 👌
                    ctx.save();
                    ctx.globalAlpha = shows[0];
                    draw_taper(ctx, cw / 2, Math.PI - Math.PI / 5, Math.PI + Math.PI / 8, t / 1.8);
                    ctx.restore();
                    break;
                case 2: // 2👌
                    ctx.save();
                    ctx.globalAlpha = shows[2];
                    draw_circle(ctx, cw / 2.5, t / 1.2);
                    draw_circle(ctx, cw / 4, t / 1.4);
                    draw_taper(ctx, cw / 2, Math.PI - Math.PI / 5, Math.PI + Math.PI / 8, t / 1.8);
                    ctx.restore();
                    break;
                case 99: // case 3: 自主泊车
                    ctx.save();
                    ctx.globalAlpha = shows[3];
                    draw_taper(ctx, cw / 3, 0, one_deg * 20, t / 1.7);
                    draw_taper(ctx, cw / 3, one_deg * 335, one_deg * 355, t / 1.7);

                    draw_taper(ctx, cw / 2.7, one_deg * 40, one_deg * 80, t / 1.7);
                    draw_taper(ctx, cw / 2.7, one_deg * 90, one_deg * 130, t / 1.7);

                    draw_taper(ctx, cw / 3, one_deg * 150, one_deg * 170, t / 1.7);
                    draw_taper(ctx, cw / 3, one_deg * 175, one_deg * 195, t / 1.7);

                    draw_taper(ctx, cw / 2.7, one_deg * 220, one_deg * 260, t / 1.7);
                    draw_taper(ctx, cw / 2.7, one_deg * 280, one_deg * 320, t / 1.7);
                    ctx.restore();
                    break;
                // case 4: // 👌
                case 3: // 👌
                    ctx.save();
                    ctx.globalAlpha = shows[3];
                    draw_taper(ctx, cw / 3, one_deg * 22.5, one_deg * 150, t / 1.7);
                    draw_taper(ctx, cw / 3, Math.PI + Math.PI / 8, Math.PI * 2 - Math.PI / 8, t / 1.7);
                    draw_taper(ctx, cw / 2, -Math.PI / 9, Math.PI / 9, t / 1.8);
                    draw_taper(ctx, cw / 2, Math.PI - Math.PI / 6, Math.PI + Math.PI / 8, t / 1.8);
                    draw_taper(ctx, cw / 3, -Math.PI / 6, Math.PI / 6, t / 1.82, 'stroke');
                    draw_taper(ctx, cw / 3, Math.PI - Math.PI / 4, Math.PI + Math.PI / 6, t / 1.82, 'stroke');

                    ctx.restore();
                    break;
                default:
                    // console.log('...');
                    break;
            }
      texture.needsUpdate = true;
    })


    function draw_circle(ctx, r, t) {
      var vel = t % 1// Math.sin(t) * 0.5 + 0.5;
      var grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.8);
      grd.addColorStop(0, "rgba(0, 66, 255, 0)");
      grd.addColorStop(1, "rgba(255, 255, 255, 0.8)");

      ctx.save();
      ctx.globalAlpha = -Math.pow((vel * 2 - 1), 2) + 1;

      ctx.translate(center.x, center.y)
      ctx.scale(vel, vel);
      // 创建径向渐变
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2, false);
      ctx.fill();

      ctx.restore();
    }

    function draw_taper(ctx, r, start_deg, end_deg, t, mode) {
      var grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.5);
      grd.addColorStop(0, "rgba(0, 66, 255, 0)");
      grd.addColorStop(1, "rgba(255, 255, 255, 1)");
      // 创建径向渐变
      var vel = t % 1 //  Math.sin(t * 4) * 0.5 + 0.5;

      ctx.save();
      ctx.globalAlpha = Math.random() > 0.1 ? -Math.pow((vel * 2 - 1), 2) + 1 : 0;
      ctx.translate(center.x, center.y);
      ctx.scale(vel, vel);
      ctx.fillStyle = grd;
      ctx.strokeStyle = grd;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, start_deg, end_deg, false);
      mode == 'stroke' ? ctx.closePath() : '';
      mode == 'stroke' ? ctx.stroke() : ctx.fill();
      ctx.restore();
    }
  }
```