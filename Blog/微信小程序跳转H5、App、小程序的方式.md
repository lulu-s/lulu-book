# 微信小程序跳转App、H5、小程序


> 在业务中接触了微信小程序，客户对引流用户非常在意，每次都会提该需求，经常做就存档一下。前提使用的小程序账户都是企业版非个人版本。


## 跳转App
2021.5月开始小程序不再支持跳转到App，那要怎么跳转App呢，看了一下腾讯视频的小程序是利用客服消息发送App下载地址，感觉此方法体验甚好，就参考了很多文档实测了一下。


### 消息推送

#### 启用
首先要开始微信的消息推送功能，在`微信公众平台-小程序后台-开发管理-消息推送`，选择启用，这个部分需要管理员或开发者进行扫码确认。

#### 配置

`开发者服务器接收消息推送`需要创建一个服务器端，这里使用的是 Node

![消息推送配置](https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "消息推送配置")



### 参考文档
* [官方消息推送配置指南](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html)
* [关于不再提供“小程序打开App技术服务”的通知](https://developers.weixin.qq.com/community/develop/doc/000c04d94c0588744a2cf4d9c5bc09)





## 跳转H5
* 在微信公众平台-小程序后台配置业务域名，要将校验文件放置到域名根目录下，才可配置成功，通过 `https://url/校验文件名.txt` 可测试成功与否。
* 使用 [webview](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 配置路径
* 如需传参通过 `?key=value` 形式一起传输，在另一端接收 URL 上的参数便可。
```
<web-view :src="`https://soss-apps.emerge.ltd/apps/horizon-miniapp-copy/index.html#/?timestamp=${timestamp}`" />
```


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



