---
title: Taro.onBeaconUpdate(callback)
sidebar_label: onBeaconUpdate
---

监听 iBeacon 设备更新事件，仅能注册一个监听

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

iBeacon 设备更新事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| beacons | `IBeaconInfo[]` | 当前搜寻到的所有 iBeacon 设备列表 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onBeaconUpdate | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
