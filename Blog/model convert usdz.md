
# 模型转换 USDZ 的 N 种方法，ios 端测试 USDZ 的 AR 体验

## 简介
在 iOS12 及其以上，系统内置的 APP 默认支持打开 USDZ，包括 Safari 浏览器、文件、信息、邮件、新闻、备忘录，打开 USDZ 文件后，可以通过 3D 与 AR 的形式进行查看；
<br/>


## 将模型转USDZ的多种方式实测

> `Playground` 太好用了，是在线的，在方法四里。

### 保存后的安装包
```
链接: https://pan.baidu.com/s/143SAcI7BkUqCWSucN4mlCQ 提取码: wfot
```


### 方式一，使用 Apple 提供的 Python 工具包转换

tips: 这种方式导出的usdz好像有问题（转换后的 USDZ，动画的方向反了，并且导出的模型比例也有问题，转换的非常小），也可能是我少用了某些参数的问题。


#### 1. 执行安装命令
`xcode-select --instal` 时候提示：`xcode-select: error: command line tools are already installed, use "Software Update" to install updates`，使用 `Software Update` 也无效。搜索了一下执行以下命令ok了
```shell
    softwareupdate --list
```

#### 2. 安装 Command Line Tools for Xcode
执行以下命令会出现弹窗，询问是否要安装命令行工具，一直下一步就行，最后提示软件已经安装。
```shell
    xcode-select --install     
```

#### 3. 下载 Apple USDPython 0.64 转换工具 
[下载地址](https://developer.apple.com/download/all/?q=usdz)需要登陆苹果账号，签协议成为苹果开发者。双击 pkg 安装，完成后在 usdpython 文件夹下双击打开 `USD.command`

#### 4. 用法
在 USD.command 终端内执行。
```shell
    usdzconvert someobject.obj
```

#### 5. 创建环境变量

##### 5.1 首先移动到根目录下

```shell
    cd /Users/<UserName>
```

##### 5.2 使用 parent working directory 检查目录是否正确
```shell
    pwd
```

##### 5.3 查看目录内容，包括隐藏文件
```shell
    ls -a
```

##### 5.4 检查是否有 `.zshrc` 文件，如果有就打开 `.open ~/.zshrc`，如果没有就创建它 `touch ~/.zshrc`，然后增加环境变量，就能全局使用了。
```txt
    # usdpython
    export PATH="/Applications/usdpython/USD:$PATH"
    export PATH="/Applications/usdpython/usdzconvert:$PATH"
    export PYTHONPATH="/Applications/usdpython/USD/lib/python:$PYTHONPATH"

    echo "Now I can use USDPython commands here."

    export PYTHONPATH="/Applications/Autodesk/FBXPythonSDK/2020.0.1/lib/Python27_ub:$PYTHONPATH"
    # usdpython end 
```

##### 5.5 测试
保存后，重启终端，检测是否成功 
```
    usdzconvert -h
```


#### 6. FBX（可选）
转换 FBX 需要安装FBX Python SDK）下载[FBX Python SDK](https://www.autodesk.com/content/dam/autodesk/www/adn/fbx/20195/fbx20195_fbxpythonsdk_mac.pkg.tgz)


### 方式二，使用 Reality Composer

唯一的不好就是，还是没有解决我的问题（转换后的 USDZ，动画的方向反了，但解决了比例的问题），并且在预览中能发现就是转换的问题。也是可以查看任何转换成功的 USDZ。

#### 1. 安装
下载 [Reality Composer 官网](https://developer.apple.com/augmented-reality/tools/) ｜ [安装包](https://developer.apple.com/services-account/download?path=/Applications/Reality_Converter/Reality_Converter_Beta.dmg)
#### 2. 使用
安装后，将模型拖拽进去，就能直接转换成 USDZ，并且还能预览！！使用体验大大升级。导出的文件直接就是 USDZ 的格式。


### 方式三，使用 Kivicube AR 模型编辑器

在 Reality Composer 中查看没问题，但在手机端显示的时候还是有比例问题，但动画是正常播放的。

#### 1. 安装
需要到[官网](https://www.yuque.com/kivicube/manual/kivicube-model-editor)关注公众号获取下载编辑器软件。 

#### 2. 使用
安装后，直接拖拽模型文件进去查看，选择 usdz 格式导出，在 Reality Composer 中查看实际样子。

### 方法四，在线转换

* [在线GLB到USDZ格式转换程序](https://products.aspose.app/3d/zh-cn/conversion/glb-to-usdz)，硬伤转换后没了贴图和动画。

* [Playground](https://spase.io/playground) 吹爆，这个完美的解决了我的问题

* [GLB to USDZ Online Converter](https://tools.alitasci.net/glbconverter/) 这个也很好用，并且比 `Playground` 压缩文件更小。


## 使用 model-viewer 创建 USDZ 可查看页面（ios）
模型是在 model-viewer 官网下载的，然后用上一步转换方法转成的 USDZ。启动一个静态服务器就可以在手机上体验了。比如 `http-server`。<br/>
增加了动画播放、ar等相关参数。
```
    <!doctype html>
    <html>

    <head>
        <title>3D Test</title>
        <style>
            .model {
                width: 100%;
                height: 600px;
            }
        </style>
    </head>

    <body>
        <div id="model">
            <model-viewer class="model" autoplay src="test.glb" alt="A 3D model of a robot" auto-rotate=""
                camera-controls="" background-color="#455A64" ar ios-src="test.usdz"></model-viewer>
        </div>

        <!-- Loads model-viewer for modern browsers -->
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
        <!-- Loads model-viewer for older browsers -->
        <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>

    </body>

    </html>
```



## 参考文档：
  * [导出或将模型转换为USDZ_CotZero-程序员宅基地](https://www.cxyzjd.com/article/u013094476/100565690)
  * [How to update Xcode Command Line Tools?](https://stackoverflow.com/questions/42538171/how-to-update-xcode-command-line-tools)
  * [How to create USDZ file using Xcode converter?](https://stackoverflow.com/questions/50846627/how-to-create-usdz-file-using-xcode-converter)
  * [如何使用Model-Viewer在Web上渲染3D模型](https://www.jianshu.com/p/c8e1526f97e5)
  * [Augmented Reality](https://modelviewer.dev/examples/augmentedreality/index.html#demo-container-2)
  * [model-viewer api](https://modelviewer.dev/examples/animation/index.html)
  * [Kivicube AR模型编辑器](https://www.yuque.com/kivicube/manual/kivicube-model-editor)
  * [Online GLB to USDZ Converter](https://alitasci.net/online-glb-to-usdz-converter/)
  * [What's a GLB, and what's a USDZ?](https://spase.io/blog/what-is-a-glb-usdz)


> 创建时间：2021.11.19