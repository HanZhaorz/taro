declare namespace Taro {
  /**
   * 此接口可获取支付宝会员的基础信息
   * @supported alipay
   */
  function getOpenUserInfo(): Promise<string>
}
