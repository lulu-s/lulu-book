## 树莓派调试jauns

### 安装阶段


#### 1. 连接树莓派
```
    $ ssh pi@192.168.1.149
    $ pi@192.168.1.149's password: 密码
```
#### 2. 更新 apt-get
```
    $ sudo apt-get update -y && sudo apt-get upgrade -y
```
#### 3. 安装 gstreamer，版本不对就找最新版安装。

#### 4. 安装jauns
```
    $ git clone https://github.com/meetecho/janus-gateway.git
    $ cd janus-gateway
    $ sh autogen.sh
    $ ./configure --disable-websockets --disable-data-channels --disable-rabbitmq --disable-docs --prefix=/opt/janus
    $ make
    $ sudo make install
    $ sudo nano janus.plugin.streaming.cfg

    [gst-rpwc]
    type = rtp
    id = 1
    description = RPWC H264 test streaming
    audio = yes
    audioport = 8005
    audiopt = 10
    audiortpmap = opus/48000/2
    video = yes
    videoport = 8004
    videopt = 96
    videortpmap = H264/90000
    videofmtp = profile-level-id=42e028\;packetization-mode=1
```

#### 5. 发送视频流
```
    $ gst-launch-1.0 rpicamsrc brightness=85 contrast=40 awb-mode=6 exposure-mode=0 ! video/x-raw,width=640,height=480 ! x264enc speed-preset=ultrafast tune=zerolatency byte-stream=true bitrate=200 threads=1 ! h264parse config-interval=1 ! rtph264pay ! udpsink host=127.0.0.1 port=8004 sync=false

    $ gst-launch-1.0 rpicamsrc ! video/x-raw,width=640,height=480 ! x264enc speed-preset=ultrafast tune=zerolatency byte-stream=true bitrate=200 threads=1 ! h264parse config-interval=1 ! rtph264pay ! udpsink host=ip port=8004

    $ raspivid --verbose --nopreview -hf -vf --width 640 --height 480 --framerate 30 --profile baseline --timeout 0 -o - | gst-launch-1.0 -v fdsrc ! h264parse ! rtph264pay config-interval=1 pt=96 ! udpsink host=ip port=8004

    $ raspivid --verbose --nopreview -hf -vf --width 640 --height 480 --framerate 15 --bitrate 1000000 --profile baseline --timeout 0 -o - | gst-launch-1.0 -v fdsrc ! h264parse ! rtph264pay config-interval=1 pt=96 ! udpsink host=ip port=8004
```

#### 6. 启动
```
    $ cd janus-gateway
    $ ./janus -F /opt/janus/etc/janus/ -d 7
    $  pi@raspberrypi:/opt/janus/share/janus/demos $ sudo http-server -p 80
```

### dns 配置

#### 1. 安装dns-proxy
```
    $ npm i dns-proxy -g
```
#### 2. 配置 dns, 新建 congif.json 文件，终端输入`nano config.json`，将下面的代码粘贴进去，修改域名配对关系即可。
```
    {
        "port": 53,
        // （电脑ip）手机端 wifi dns 要修改的和这个一样 
        "host": "192.168.1.x",
        "logging": "dns-proxy:query",
        "nameservers": [
            "8.8.8.8",
            "8.8.4.4"
        ],
        "servers": {},
        "domains": {
            // 域名配对关系
            "hello.test.com": "192.168.1.x"
        },
        "hosts": {
            "hihi.com": "127.0.0.1"
        }
    }
```
#### 3. 启动，记得调试完将dns修改回来
```
    sudo dns-proxy --config=config.json --debug
```


### https 配置
> 注意： 域名必须一致，否则会被认定为是失效的。

#### 1. 创建根证书
```
    $ openssl genrsa -des3 -out rootCA.key 2048
    $ Enter pass phrase for rootCA.key: your password
    $ openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
```
输入的信息，仅供参考
> Country Name (2 letter code) []:CN <br>
> State or Province Name (full name) []:Province <br>
> Locality Name (eg, city) []:City <br>
> Organization Name (eg, company) []:WIZ Technology Co. Ltd. <br>
> Organizational Unit Name (eg, section) []:WIZ Technology Co. Ltd. <br>
> Common Name (eg, fully qualified host name) []:WIZ Technology Root CA <br>

#### 2. 信任根证书
打开【钥匙串访问】，左侧【钥匙串】选择【系统】，【种类】选择【证书】，然后把刚才生成的根证书导入进来（根证书是rootCA.pem），双击此证书，在【信任】设置中，SSL和X.509基本策略两项选择【始终信任】。

#### 3. ios端下载根证书
第一步，通过 http-server 将根证书在手机端下载安装，在【通用】选择【描述文件】，信任你的根证书。
第二步，【通用】选择【关于本机】，滑动到页面底端，选择【证书信任设置】，勾选你的证书。

#### 4. 域SSL证书

##### 1. 创建 server.csr.cnf 文件， 将文本粘贴进去，修改 CN 为自己的域名，emailAddress 为邮箱
```
    // control + o 保存 control + x 退出
    $ sudo nano server.csr.cnf

    [req]
    default_bits = 2048
    prompt = no
    default_md = sha256
    distinguished_name = dn

    [dn]
    C=US
    ST=RandomState
    L=RandomCity
    O=RandomOrganization
    OU=RandomOrganizationUnit
    emailAddress=hello@example.com
    CN = localhost
```

##### 2. 创建一个v3.ext文件，修改 DNS.1 为自己的域名，以创建一个X509 v3证书。
```
    authorityKeyIdentifier=keyid,issuer
    basicConstraints=CA:FALSE
    keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
    subjectAltName = @alt_names

    [alt_names]
    DNS.1 = localhost
```

##### 3. (bk)创建证书密钥以localhost使用存储在其中的配置设置server.csr.cnf。该密钥存储在server.key。 <br>
     证书签名请求通过我们之前创建的根SSL证书颁发，创建出一个localhost的域名证书。输出是一个名为的证书文件server.crt。
```
    $ openssl req -new -sha256 -nodes -out server.csr -newkey rsa：2048 -keyout server.key -config <（cat server.csr.cnf）
    $ openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
```

##### 3. (2021.7)创建证书密钥以localhost使用存储在其中的配置设置server.csr.cnf。该密钥存储在server.key。 <br>
```
    $ openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key
```
输入的信息，仅供参考
> Country Name (2 letter code) []:CN <br>
> State or Province Name (full name) []:Province <br>
> Locality Name (eg, city) []:City <br>
> Organization Name (eg, company) []:WIZ Technology Co. Ltd. <br>
> Organizational Unit Name (eg, section) []:WIZ Technology Co. Ltd. <br>
> Common Name (eg, fully qualified host name) []:emerge.systems <br>

##### 4. (2021.7)证书签名请求通过我们之前创建的根SSL证书颁发，创建出一个localhost的域名证书。输出是一个名为的证书文件server.crt。 <br>
```
    $ openssl x509 -req -in server.csr -CA [rootCA.pem路径] -CAkey [rootCA.key路径] -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
    $ Enter pass phrase for rootCA.key: your password
```

#### 5. 信任域证书
重复第2步，下载域证书，并在描述文件内信任它。


### nginx 配置
> 根据参考中的 "jauns配置nginx" 进行配置 
#### 1. 命令 (停止 | 开启 | 重启)
```
    $ sudo /etc/init.d/nginx stop 
    $ sudo /etc/init.d/nginx start
    $ sudo /etc/init.d/nginx reload 
    $ sudo nginx -V
```

### 参考
* [Building a Raspberry Pi 2 WebRTC camera ———— 安装 jauns(new)](https://www.rs-online.com/designspark/building-a-raspberry-pi-2-webrtc-camera)
* [Hackspace Hat quick install (or: audio and video streaming from a Raspberry Pi to a remote or local WebRTC-compatible-browser) ———— 安装 jauns](https://planb.nicecupoftea.org/2015/10/17/hackspace-hat-quick-install-or-audio-and-video-streaming-from-a-raspberry-pi-to-a-remote-or-local-webrtc-compatible-browser/)
* [搭建Janus的HTTPS环境 ———— jauns配置nginx](https://blog.csdn.net/cgs1999/article/details/89881733)
* [dns-proxy ———— dns拦截](https://www.npmjs.com/package/dns-proxy)
* [【译】如何在5分钟内让HTTPS在您的本地开发环境中工作 ———— https证书](https://lamjack.github.io/2018/05/17/openssl-localhost-https/?nsukey=l4wVj8Of0bJiT%2Bu2A5iFrbNSRb5ElM7s3dm0Trij%2FfZ7XaTG86gvXJ6mRpNezhul0bRK9meBs8VuvqPxkUGB3VciSSSPpXIGlzb46rGQ%2FFewuXrP80HdoCWcNwzYk3WStmw46CWFqZMY0%2BgfLUji%2F%2BGqC3J%2FJ5X31EC8gJSepb8P%2FLbSeyQgWzQLkMGmxbktr8yBlV%2BrzMFsoF8sz%2F2GUw%3D%3D)



> 创建时间：2020.6.18