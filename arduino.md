

# Arduino
<br>

## 结合web，控制led。
参考： https://blog.csdn.net/TonyIOT/article/details/103194166 <br>


### 1. 硬件
* Arduino UNO板
* 发光二极管
* 电阻


### 2. 软件
> Arduino IDE：用于将程序上传到Arduino UNO板。<br>Firmata：它是一种协议，用于与计算机，智能手机等设备上的软件与不同的微控制器进行通信。Firmata固件可以加载在任何微控制器板上（例如Arduino，Teensy），并且可以与任何笔记本电脑，PC或智能手机进行通讯。Firmata库随Arduino IDE一起提供，因此无需从任何地方下载。<br>Johnny-Five API: http://johnny-five.io/api/led/#api


### 3. 建立xx文件夹， 下载库
```
    npm i johnny-five express socket.io serialport
```
* serialport 串口封装库。
* express HTTP服务封装库。
* socket.io WebSockets库。
* Johnny-Five Johnny-Five是基于JavaScript的机器人技术和物联网平台，用于以JavaScript编写代码，并用于在Arduino开发板和计算机之间架起桥梁。Johnny-Five已通过各种Arduino兼容板（例如Arduino UNO，NANO，Promini等）进行了测试。在本教程中，必须下载Johnny-Five库才能使用其所有功能。


### 4. 将Firmata固件加载到Arduino UNO中
* 使用USB线连接 Arduino UNO
* 打开 Arduino IDE，然后从工具中选择Arduino UNO板（如果使用其他板，则选择相应的一块）
* 选择已连接的Arduino UNO的相应COM端口
* 点击菜单->文件->示例->固件-> StandardFirmata找到固件
* 通过转到文件->上传，上传「StandardFirmata」。


### 5. 编写blinkled.js程序，控制led闪烁
```javascript
    var johnny_five = require("johnny-five");

    var led_pin = 5; // 引脚5
    var arduino_board = new johnny_five.Board();

    arduino_board.on("ready", function(){
        console.log("led has stared blinking");
        var led = new johnny_five.Led(led_pin); // 设置输出模式
        led.blink(100);  // 延迟100ms
    })
```
执行终端输入 ` node blink_led.js`


### 6. 