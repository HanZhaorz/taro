---
title: Taro.onNetworkStatusChange(callback)
sidebar_label: onNetworkStatusChange
---

监听网络状态变化。

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

网络状态变化事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isConnected | `boolean` | 当前是否有网络连接 |
| networkType | `"wifi" | "2g" | "3g" | "4g" | "unknown" | "none"` | 网络类型 |

## 示例代码

```tsx
Taro.onNetworkStatusChange(function(res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onNetworkStatusChange | ✔️ |  |  |  |  | ✔️ | ✔️ |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html)
