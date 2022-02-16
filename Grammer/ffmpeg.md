# 📺 FFmpeg 进修 + 常用命令 

<br/>

> 创建时间：2020.6.18

<br/>

> [FFmpeg](https://www.ffmpeg.org/)是视频处理的开源软件，适用于视频 / 音频的编解码。

<br/><br/>

目的：由于先拥有了常用命令，但不知道每个参数都能做什么，一直要用了就复制粘贴复制粘贴，就萌发了学习的想法，想知道每个部分都是做什么😄。<br/>


* [概念](#-概念)
    * [容器](#-容器)
    * [编码格式（codec）](#-编码格式codec)
    * [编码器（encoders）](#-编码器encoders)
* [待整理学习到的东西](#-待整理学习到的东西)
* [常用的命令行参数](#-常用的命令行参数)
* [常用命令（可直接使用）](#-常用命令可直接使用)
    * [1. 常见视频压缩](#1-常见视频压缩)
    * [2. 常见视频转换 webm 格式](#2-常见视频转换-webm-格式)
    * [3. 慢速播放](#3-慢速播放)
    * [4. 视频转视频帧](#4-视频转视频帧)
    * [5. 视频帧转视频](#5-视频帧转视频)
    * [6. 透明视频转换 webm](#6-透明视频转换-webm)
    * [7. 查看视频信息](#7-查看视频信息)
    * [8. 添加音轨](#8-添加音轨)
    * [9. 裁剪指令 + 命令行参数详解](#9-裁剪指令--命令行参数详解)
    * [10. 视频转换 gif 格式 / 质量一般](#9-视频转换-gif-格式-质量一般)
* [参考链接](#-参考链接)

<br/>

## 概念



### 容器（container）

> 一般来说，文件的后缀名，就是容器格式，例如 .mp4、.mp3、.webm。

* 查看 FFmpeg 支持的容器格式 
```shell
    ffmpeg -formats
```



### 编码格式（codec）

> 视频和音频都需要经过编码，保存成文件。不用的编码格式，有不同的压缩率，会导致文件大小和清晰度的差异。

* 常见的视频编码格式
    * H.262
    * H.264
    * H.265
    * VP8
    * VP9
    * AV1

* 常见的音频编码格式
    * MP3
    * AAC

* 查看 FFmpeg 支持的视频 / 音频编码格式
```shell
    ffmpeg -codecs
```



### 编码器（encoders）

> 编码器是实现某种编码格式的库文件。可以理解成，编码器根据传入的不同编码格式，实现视频或音频的编码和解码。

* 常用的 FFmpeg 内置视频编码器
    * libx264: 开源的 H.264 编码器，部分 window 支持 GPU 硬件解码，释放 CPU
    * NVENC
    * libx265: 开源的 HEVC 编码器
    * libvpx: 谷歌的 VP8 和 VP9 编码器
    * libaom: AV1 编码器

* 常用的 FFmpeg 内置音频编码器
    * libfdk-aac
    * aac

* 查看 FFmpeg 支持的视频 / 音频编码格式
```shell
    ffmpeg -encoders
```



### 元信息

构成一个视频或音频的要素，例如画面的尺寸、视频和音频的编码器、编码格式、时长、编码率等。是一种描述信息的合集。




## 待整理学习到的东西



### 复制流 `-c copy` 

使 FFmpeg 对指定的流忽略解码和编码步骤，只能混合和拆包。通常用于改变所述容器的格式或修改容器的元数据，也就`转换格式`。由于不存在解码或编码，非常快，而且没有质量损失。但因为某种原因，无法在某些情况下使用。



### -c / -codec

* -c:v \[codec\]：指定视频编码器
* -c:a \[codec\]：指定音频编码器



### -preset

指定输出的视频质量，会影响文件的生成速度，有以下几个可用值：
* ultrafast 很快
* superfast 超级快
* veryfast 非常快
* faster 更快的
* fast 快
* medium 中等的
* slow 慢
* slower 较慢的
* veryslow 非常慢



### 常用的命令行参数

* `-i filename(input)` 指定输入文件
* `-an` 去除音频流
* `-vn` 去除视频流
* `-y` 不经过确认，输出时直接覆盖同名文件
* `-n` 如果指定输出文件已经存在，不覆盖输出文件，并立刻退出
* `-hide-banner` 去掉冗余信息，只显示元信息，比如去掉编解码执行过程的log、版本声明、构建选项和库版本



<!-- ## 命令行参数详解 -->



## 常用命令（可直接使用）



### 1. 常见视频压缩

```
ffmpeg -i input.mp4 -vcodec libx264 -crf 30 out.mp4
```



### 2. 常见视频转换 webm 格式

* 方法1
```
ffmpeg -i input.mp4 -vcodec libvpx -b:v 1M -cpu-used -8 -deadline realtime out.webm
```
* 方法2
```
ffmpeg -i input.mp4 -c:v libvpx -b:v 2M -c:a libvorbis input.webm
```



### 3. 慢速播放

通过修改 `2.0` 进行慢速播放，当前为0.5倍速播放
```
ffmpeg -i input.mp4 -filter:v "setpts=2.0*PTS" out.mp4
```



### 4. 视频转视频帧

```
ffmpeg -i input.mp4 -vf fps=1 out%d.png
```



### 5. 视频帧转视频

```
cd ./图片文件夹
ffmpeg -framerate 1 -pattern_type glob -i 'out*.jpg'  -c:v libx264 -pix_fmt yuv420p out.mp4
```



### 6. 透明视频转换 webm

导出的4444透明通道编码格式，不被浏览器支持，所以要转换成 webm。
```
ffmpeg -i input.mov -f webm -c:v libvpx -b:v 2M -acodec libvorbis -auto-alt-ref 0 out.webm -hide_banner
```



### 7. 查看视频信息

```
ffmpeg -i input.mp4
```



<br/>

**以下为 2021 年 11 月 进修到的**

<br/>



### 8. 添加音轨

将外部音频加入到当前视频，比如添加背景音乐或旁白
```
ffmpeg -i input.aac -i input.mp4 out.mp4
```



### 9. 裁剪指令 + 命令行参数详解

截取原视频中的某个片段，输出为一个新视频。可以指定开始时间(start)、持续时间(duration)和结束时间(end)。<br/>

持续时间（00:05:00）：从 00:00:01 开始剪辑持续 5 秒，到 6 秒结束。<br/>
结束时间（00:08:00）：从 00:00:01 开始到第 8 秒的时候结束。

```
ffmpeg -ss [start] -i [input] -t [duration] -c copy [out]
ffmpeg -ss [start] -i [input] -to [end] -c copy [out]
```

* `-t duration` 
    * 可以是秒为单位或 `hh:mm:ss[.xxx]`
    * 作为输入选项的时候（在 `-i` 之前），限制从输入文件中读取数据的 duration
    * 当作为输出选项是（输出文件名之前），在达到 duration 后停止写入输入文件
    * `-to` 和 `-t ` 是相互排斥的，`-t ` 具有优先权
* `-ss start` 
    * 可以是秒为单位或 `hh:mm:ss[.xxx]`
* `-to end` 
    * 可以是秒为单位或 `hh:mm:ss[.xxx]` 
    * 在 end 位置，停止输出
* `-accurate_seek` 
    * 启用或禁用准确寻找输入文件，配合 `-ss` 选项使用。默认启用的，所以转码是准确
    * 使用 `-noaccurate_seek` 禁用它，在 `-c copy` 时使用，可能是有用的。


### 10. 视频转换 gif 格式 / 质量一般
```
ffmpeg -i input.mp4 input.gif 
```


## 参考链接
* [FFmpeg 视频处理入门教程](https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
* [ffmpeg的中文文档](https://www.longqi.cf/tools/2015/02/13/ffmpegcn/)
* [ffmpeg prores with alpha to webm vp9 renders grey](https://stackoverflow.com/questions/48395392/ffmpeg-prores-with-alpha-to-webm-vp9-renders-grey)

