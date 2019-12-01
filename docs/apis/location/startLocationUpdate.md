---
title: Taro.startLocationUpdate(option)
sidebar_label: startLocationUpdate
---

开启小程序进入前台时接收位置消息

**注意**
- 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。

## 类型

```tsx
(option?: Option) => void
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.startLocationUpdate | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)
