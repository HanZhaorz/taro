---
title: Worker
sidebar_label: Worker
---

## 方法

### onMessage

监听主线程/Worker 线程向当前线程发送的消息的事件。

```tsx
(callback: OnMessageCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnMessageCallback` | 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html)

### postMessage

向主线程/Worker 线程发送的消息。

```tsx
(message: Record<string, any>) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| message | `Record<string, any>` | 需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。 |

## 示例代码

worker 线程中
```tsx
worker.postMessage({
msg: 'hello from worker'
})
```

主线程中
```tsx
const worker = wx.createWorker('workers/request/index.js')
worker.postMessage({
msg: 'hello from main'
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html)

### terminate

结束当前 Worker 线程。仅限在主线程 worker 对象上调用。

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html)

## 参数

### OnMessageCallback

```tsx
(result: OnMessageCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnMessageCallbackResult` |

### OnMessageCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| message | `Record<string, any>` | 主线程/Worker 线程向当前线程发送的消息 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Worker.onMessage | ✔️ |  |  |  |  |  |  |  |
| Worker.postMessage | ✔️ |  |  |  |  |  |  |  |
| Worker.terminate | ✔️ |  |  |  |  |  |  |  |
