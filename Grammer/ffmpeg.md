# 📺 FFmpeg 进修 + 常用命令 

> [FFmpeg](https://www.ffmpeg.org/)是视频处理的开源软件，适用于视频 / 音频的编解码。
<br/><br/>

* 目的：由于先拥有了常用命令，但不知道每个参数都能做什么，一直要用了就复制粘贴复制粘贴，就萌发了学习的想法，想知道每个部分都是做什么😄。


* [概念](#-概念)
    * [容器](#-容器)
    * [编码格式（codec）](#-编码格式codec)
    * [编码器（encoders）](#-编码器encoders)
* [使用格式](#-使用格式)
* [常用的命令行参数](#-常用的命令行参数)
* [常用命令（可直接使用）](#-常用命令可直接使用)
    * [1. 常见视频压缩](#1-常见视频压缩)
    * [2. 常见视频转换 webm 格式](#2-常见视频转换-webm-格式)
    * [3. 慢速播放](#3-慢速播放)
    * [4. 视频转视频帧](#4-视频转视频帧)
    * [5. 视频帧转视频](#5-视频帧转视频)
    * [6. 透明视频转换 webm](#6-透明视频转换-webm)
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

## 使用格式
- [ ] 待学习

## 命令行参数详解
- [ ] 待学习

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

## 参考链接
* [FFmpeg 视频处理入门教程](https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
* [透明视频](https://stackoverflow.com/questions/48395392/ffmpeg-prores-with-alpha-to-webm-vp9-renders-grey)