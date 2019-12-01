---
title: Taro.createInterstitialAd(option)
sidebar_label: createInterstitialAd
---

创建插屏广告组件。
请通过 getSystemInfoSync 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。

## 类型

```tsx
(option: Option) => InterstitialAd
```

## 参数

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| adUnitId | `string` | 广告单元 id |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.createInterstitialAd | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html)
