# 微信小程序跳转App、H5、小程序


> 在业务中接触了微信小程序，客户对引流用户非常在意，每次都会提该需求，经常做就存档一下。前提使用的小程序账户都是企业版非个人版本。


<br/>

## 跳转H5
1. 在微信公众平台-小程序后台配置业务域名，要将校验文件放置到域名根目录下，才可配置成功，通过 `https://url/校验文件名.txt` 可测试成功与否。
2. 使用 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 配置路径
3. 如需传参通过 `?key=value` 形式一起传输，在另一端接收 URL 上的参数便可。
```
<web-view :src="`https://soss-apps.emerge.ltd/apps/horizon-miniapp-copy/index.html#/?timestamp=${timestamp}`" />
```



<br/>

## 跳转小程序
* 通过 [wx.navigateToMiniProgram](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html)
```js
Taro.navigateToMiniProgram({ // 我用的taro，原生用 wx.navigateToMiniProgram 就行
  appId: appId,
  path: 'page/index/index?id=123',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'develop',
  success(res) {
    // 打开成功
  }
})
```



<br/>

## 跳转App
2021.5月开始小程序不再支持跳转到App，那要怎么跳转App呢，看了一下腾讯视频的小程序是利用客服消息发送App下载地址，感觉此方法体验甚好，就参考了很多文档实测了一下。


### 消息推送配置 

> 👉 [消息推送配置指南](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html) 介绍的很清楚，也可以只看这个。


![消息推送配置](https://github.com/lulu-s/lulu-book/blob/master/Blog/wechat/%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E9%85%8D%E7%BD%AE.png)

首先要开始微信的消息推送功能，在**微信公众平台-小程序后台-开发管理-消息推送**，选择启用，这个部分需要管理员或开发者进行扫码确认。

确认成功会跳转到配置页面，按需求配置即可，这里选择了安全模式 + JSON。域名填写你自己的就好。


![消息推送配置.png](https://github.com/lulu-s/lulu-book/blob/master/Blog/wechat/%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E9%85%8D%E7%BD%AE.png)


### Token验证

微信服务器将发送 **GET** 请求到填写的服务器地址 URL 上，进行 **Token** 验证，所以要先新建好服务器并上线。<br/>

👇 该图是关于返回的参数 + 如何创建 GET 请求


![get方法.png](https://github.com/lulu-s/lulu-book/blob/master/Blog/wechat/get%E6%96%B9%E6%B3%95.png)

**main.mjs** 根据设定好的要求，按步骤创建get方法用于接收get请求。这里使用了ES6，需要对 **package.json** 增加 `"type": "module"`。

```js

import express from "express";
import request from "request"
import cors from "cors";
import bodyparser from "body-parser";
import CryptoJS from "crypto-js";
var app = express();
app.use(cors({ origin: "*" }));
app.use(bodyparser.json());

var config = {
    token: 'sxRGsggaA7XaYlSKuKVJkThLs', // 和配置消息推送的token一致
    content: "下载腾讯视频App，享受更多播放特权，请戳→http://m.v.qq.com/activity/downapp_activity.html", // 借用腾讯下载app的链接，做的demo
    EncodingAESKey: "你的EncodingAESKey",
    APPID: "你的APPID",
    APPSECRET: "你的APPSECRET",
    access_token: ""
}

app.get("/url", (req, res) => {
    console.log(req.query);
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    var ciphertext = CryptoJS.SHA1([config.token, timestamp, nonce].sort().join(''));
    if (signature == ciphertext.toString()) {
        res.send(echostr);
    } else {
        res.send({
            status: 400,
            data: "check msg error"
        });
    }
});
app.listen(process.env.PORT)
```
接下来就可以点提交键啦～～，成功配置后会跳转回到开发配置页面，此时你的相关配置就在这能查看到。
![消息推送完成](https://github.com/lulu-s/lulu-book/blob/master/Blog/wechat/%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E5%AE%8C%E6%88%90.png)


### 小程序跳转客服消息
👉 参考微信组件 [button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
```js
<button open-type="contact">前方客服会话获取下载链接</button>
```



### 配置AccessToken（非安全模式不需要这部）
👉 参考微信接口 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)

**main.mjs**
```js
function get_access_token() {
    return new Promise((resolve, reject) => {
        request(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.APPID}&secret=${config.APPSECRET}`, { json: true }, (err, res, body) => {
            if (err) {
                reject(err)
            } else {
                resolve(body)
            }
        });
    })
}

var out_time = 7100 * 1000
var last_time = 0;

async function get_token() {
    if (Date.now() - out_time > last_time) {
        var cur = await get_access_token()
        config.access_token = cur.access_token;
        last_time = Date.now();

        console.log('当前token：', config.access_token)
        console.log('过期时间：', new Date(last_time + out_time).toString(), '+8小时'); // 在服务器部署的是UTC时间，和北京时间差8小时。。
    }
    return config.access_token;
}
setInterval(get_token, 5000)
get_token();

```


### 配置客服自动回复

> 如非安全模式，参考 👉 [消息推送回复](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/development/weixin/callback.html#%E4%BA%8C%E3%80%81%E4%B8%BB%E5%8A%A8%E5%9B%9E%E5%A4%8D) 就行内部代码很详细。



配置选择安全模式的话，需要对接收信息进行解密。 以下为
**wx-crypto.mjs** 解密模块
```js
import crypto from 'crypto'; // 加密模块

function decodePKCS7(buff) {
    let pad = buff[buff.length - 1];
    if (pad < 1 || pad > 32) {
        pad = 0;
    }
    return buff.slice(0, buff.length - pad);
};

// 微信转发客服消息解密
function decryptContact(key, iv, crypted) {
    const aesCipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    aesCipher.setAutoPadding(false);
    let decipheredBuff = Buffer.concat([aesCipher.update(crypted, 'base64'), aesCipher.final()]);
    decipheredBuff = decodePKCS7(decipheredBuff);
    const lenNetOrderCorpid = decipheredBuff.slice(16);
    const msgLen = lenNetOrderCorpid.slice(0, 4).readUInt32BE(0);
    const result = lenNetOrderCorpid.slice(4, msgLen + 4).toString();
    return result;
};

// 解密微信返回给配置的消息服务器的信息
function decryptWXContact(wechatData, EncodingAESKey) {
    if (!wechatData) {
        wechatData = '';
    }
    //EncodingAESKey 为后台配置时随机生成的
    const key = Buffer.from(EncodingAESKey + '=', 'base64');
    const iv = key.slice(0, 16);
    const result = decryptContact(key, iv, wechatData);
    const decryptedResult = JSON.parse(result);
    console.log(decryptedResult);
    return decryptedResult;
};

export {decryptWXContact}
```


**main.mjs** post方法，接收信息解密 + 返回消息。
```js
import { decryptWXContact } from "./wx-crypto.mjs"
app.post("/url", async (req, res) => {
    const { ToUserName, Encrypt } = req.body // ToUserName 推送接收的账号
    
    if (!Encrypt) return res.send('success'); //配置时选的安全模式 因此需要解密

    const decryptData = decryptWXContact(Encrypt, config.EncodingAESKey);
    if (!decryptData) return res.send('success');

    if (decryptData.MsgType == 'text') {
        await sendmess(config.access_token, {
            access_token: config.access_token,
            touser: decryptData.FromUserName,
            msgtype: 'text',
            text: {
                content: decryptData.Content == '下载' ? config.content || '' : '感谢您关注xxx小程序'
            },
            image: {},
            link: {},
            miniprogrampage: {}
        })
    }
    res.send('success') // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

function sendmess(access_token, mess) {
    return new Promise((resolve, reject) => {
        var options = {
            'method': 'POST',
            'url': `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${config.access_token}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "access_token": `${config.access_token}`,
                ...mess
            })
        }
        request(options, function (error, response) {
            if (error) reject(error);
            resolve(response.body)
        });
    })
}
```


### 成果

![完成.jpg](https://github.com/lulu-s/lulu-book/blob/master/Blog/wechat/%E5%AE%8C%E6%88%90.jpg)




<br/>



## 参考文档
* [微信公众平台接口调试工具](https://mp.weixin.qq.com/debug)
* [关于不再提供“小程序打开App技术服务”的通知](https://developers.weixin.qq.com/community/develop/doc/000c04d94c0588744a2cf4d9c5bc09)
* [小程序打怪之在线客服自动回复功能(node版)](https://juejin.cn/post/6844903864324325389)
* [node.js微信小程序配置消息推送](https://www.cnblogs.com/z937741304/p/10364874.html)
* [个人node代码块](https://github.com/lulu-s/lulu-book/blob/master/Note/code.md#Node)




____________________
欢迎指点和讨论👏 
我的全部输出 👉 [github](https://github.com/lulu-s/lulu-book)
