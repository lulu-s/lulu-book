
# gltf模型转换USDZ，在ios端查看模型（AR体验）

## 简介
在 iOS12 及其以上，系统内置的 APP 默认支持打开 USDZ，包括 Safari 浏览器、文件、信息、邮件、新闻、备忘录，打开 USDZ 文件后，可以通过 3D 与 AR 的形式进行查看；

## 将模型转 USDZ

## 方式二，使用 Apple 提供的 Python 工具包转换

### 优点：
1. 可以支持动画；
2. 可以支持fbx、obj、gltf、glb格式

### 安装步骤

1. 提示：`xcode-select: error: command line tools are already installed, use "Software Update" to install updates`，`Software Update` 也无效。执行以下命令ok了
```
softwareupdate --list
```

2. 安装 Command Line Tools for Xcode，执行以下命令会出现弹窗，询问是否要安装命令行工具，一直下一步就行，最后提示软件已经安装。
```
xcode-select --install     
```

3. 下载 Apple USDPython 0.64 转换工具 [下载地址](https://developer.apple.com/download/all/?q=usdz)，需要登陆苹果账号，签协议成为苹果开发者。双击 pkg 安装，完成后在 usdpython 文件夹下双击打开 `USD.command`

4. 用法，在 USD.command 终端内执行。
```
usdzconvert someobject.obj
```

5. 创建环境变量
    * 首先移动到根目录下
    ```
    cd /Users/<UserName>
    ```
    * 使用 parent working directory 检查目录是否正确
    ```
    pwd
    ```
    * 查看目录内容，包括隐藏文件
    ```
    ls -a
    ```
    * 检查是否有 `.zshrc` 文件，如果有就打开 `.open ~/.zshrc`，如果没有就创建它 `touch ~/.zshrc`，然后增加环境变量，就能全局使用了。
    ```txt
    # usdpython
    export PATH="/Applications/usdpython/USD:$PATH"
    export PATH="/Applications/usdpython/usdzconvert:$PATH"
    export PYTHONPATH="/Applications/usdpython/USD/lib/python:$PYTHONPATH"

    echo "Now I can use USDPython commands here."

    export PYTHONPATH="/Applications/Autodesk/FBXPythonSDK/2020.0.1/lib/Python27_ub:$PYTHONPATH"
    # usdpython end
    ```
    * 保存后，重启终端，检测是否成功 `usdzconvert -h`


0. （可选，转换FBX需要安装FBX Python SDK）下载[FBX Python SDK](https://www.autodesk.com/content/dam/autodesk/www/adn/fbx/20195/fbx20195_fbxpythonsdk_mac.pkg.tgz)


### 参考：
  * [导出或将模型转换为USDZ_CotZero-程序员宅基地](https://www.cxyzjd.com/article/u013094476/100565690)
  * [https://stackoverflow.com/questions/42538171/how-to-update-xcode-command-line-tools](https://stackoverflow.com/questions/42538171/how-to-update-xcode-command-line-tools)
  * [How to create USDZ file using Xcode converter?](https://stackoverflow.com/questions/50846627/how-to-create-usdz-file-using-xcode-converter)



## 使用 model-viewer 创建 USDZ 可查看页面
模型是在 model-viewer 官网下载的，然后用上一步转换方法转成的 USDZ。启动一个静态服务器就可以在手机上体验了。比如 `http-server`。
```
<!doctype html>
<html>

<head>
    <title>3D Test</title>
</head>

<body>
    <div id="holder">
        <div id="model">
            <model-viewer src="NeilArmstrong.glb" alt="A 3D model of a robot" auto-rotate="" camera-controls="" background-color="#455A64"
            ar ios-src="NeilArmstrong.usdz"></model-viewer>
        </div>
    </div>

    <!-- Loads model-viewer for modern browsers -->
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
    <!-- Loads model-viewer for older browsers -->
    <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>

</body>

</html>
```