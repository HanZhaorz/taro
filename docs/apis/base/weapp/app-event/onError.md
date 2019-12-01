---
title: Taro.onError(callback)
sidebar_label: onError
---

监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [`App.onError`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onerrorstring-error) 的回调时机与参数一致。

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

小程序错误事件的回调函数

```tsx
(error: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error | `string` | 错误信息，包含堆栈 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onError | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html)
