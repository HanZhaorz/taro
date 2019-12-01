---
title: LogManager
sidebar_label: LogManager
---

日志管理器实例，可以通过 Taro.getLogManager 获取。

使用说明
最多保存5M的日志内容，超过5M后，旧的日志内容会被删除。
对于小程序，用户可以通过使用 button 组件的 open-type="feedback" 来上传打印的日志。
对于小游戏，用户可以通过使用 wx.createFeedbackButton 来创建上传打印的日志的按钮。
开发者可以通过小程序管理后台左侧菜单“反馈管理”页面查看相关打印日志。

基础库默认会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志。

## 方法

### debug

写 debug 日志

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html)

### info

写 info 日志

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html)

### log

写 log 日志

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html)

### warn

写 warn 日志

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html)

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LogManager.debug | ✔️ |  |  |  |  |  |  |  |
| LogManager.info | ✔️ |  |  |  |  |  |  |  |
| LogManager.log | ✔️ |  |  |  |  |  |  |  |
| LogManager.warn | ✔️ |  |  |  |  |  |  |  |
