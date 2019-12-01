---
title: InterstitialAd
sidebar_label: InterstitialAd
---

插屏广告组件。插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用），默认是隐藏的，需要调用 InterstitialAd.show() 将其显示。

## 方法

| Name | Type | Description |
| --- | --- | --- |
| destroy | `() => void` | 销毁插屏广告实例。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html) |
| offClose | `(callback: OffCloseCallback) => void` | 取消监听插屏广告关闭事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html) |
| offError | `(callback: OffErrorCallback) => void` | 取消监听插屏错误事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html) |
| offLoad | `(callback: OffLoadCallback) => void` | 取消监听插屏广告加载事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html) |
| onClose | `(callback: OnCloseCallback) => void` | 监听插屏广告关闭事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html) |
| onError | `(callback: OnErrorCallback) => void` | 监听插屏错误事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html) |
| onLoad | `(callback: OnLoadCallback) => void` | 监听插屏广告加载事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html) |
| load | `() => Promise<any>` | 加载插屏广告。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html) |
| show | `() => Promise<any>` | 显示插屏广告。<br /><br />**错误码信息表**<br /><br /><br />如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。<br /><br />| 代码 | 异常情况 | 理由 |<br />| ------ | -------------- | -------------------------- |<br />| 2001  | 触发频率限制  | 小程序启动一定时间内不允许展示插屏广告 |<br />| 2002  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告 |<br />| 2003  | 触发频率限制  | 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告 |<br />| 2004  | 广告渲染失败  | 该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败 |<br />| 2005  | 广告调用异常  | 插屏广告实例不允许跨页面调用 |<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html) |

## 参数

### OffCloseCallback

插屏广告关闭事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OffErrorCallback

插屏错误事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OffLoadCallback

插屏广告加载事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OnCloseCallback

插屏广告关闭事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OnErrorCallback

插屏错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

### OnLoadCallback

插屏广告加载事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OnErrorCallbackResult

| Name | Type | Description |
| --- | --- | --- |
| errCode | `1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008` | 错误码<br />[参考地址](https://nervjs.github.io/taro/docs/apis/General#AdErrCode) |
| errMsg | `string` | 错误信息 |


## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| destroy | ✔️ |  |  |  |  |  |  |  |
| offClose | ✔️ |  |  |  |  |  |  |  |
| offError | ✔️ |  |  |  |  |  |  |  |
| offLoad | ✔️ |  |  |  |  |  |  |  |
| onClose | ✔️ |  |  |  |  |  |  |  |
| onError | ✔️ |  |  |  |  |  |  |  |
| onLoad | ✔️ |  |  |  |  |  |  |  |
| load | ✔️ |  |  |  |  |  |  |  |
| show | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html)
