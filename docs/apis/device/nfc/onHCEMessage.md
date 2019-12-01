---
title: Taro.onHCEMessage(callback)
sidebar_label: onHCEMessage
---

监听接收 NFC 设备消息事件，仅能注册一个监听

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

接收 NFC 设备消息事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `ArrayBuffer` | `messageType=1` 时 ,客户端接收到 NFC 设备的指令 |
| messageType | `1 | 2` | 消息类型 |
| reason | `number` | `messageType=2` 时，原因 |

### messageType

消息类型

| 参数 | 说明 |
| --- | --- |
| 1 | HCE APDU Command类型，小程序需对此指令进行处理，并调用 sendHCEMessage 接口返回处理指令 |
| 2 | 设备离场事件类型 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onHCEMessage | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html)
