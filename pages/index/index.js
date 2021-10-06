// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  //页面跳转函数
  goToStartPage: function() {
    wx.navigateTo({
      url:'/pages/start/start',
    })
  },
  goToRulestPage: function() {
    wx.navigateTo({
      url:'/pages/rules/rules',
    })
  },
  goToHelpPage: function(e) {
    wx.navigateTo({
      url:'/pages/help/help',
    })
  },
  //分享到微信好友
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来一起玩吧！！！',
      path: '/page/index/index',
      imageUrl:'http://m.qpic.cn/psc?/V53b6AhA0HpGbV45Hl7U09DkVH0EnDXo/45NBuzDIW489QBoVep5mcY7UPccl7FistZs7X4KF8Ys066phmRBQ4DiNw5Xk0LBXgEnYtNmerJTZ4yjsETpYZ0B*jWxADnZEqDaGTE*9t8g!/b&bo=QAG5AAAAAAADF8o!&rf=viewer_4',
      success: function (res) {
        console.log("分享成功")
      },
      fail: function (res) {
        console.log("分享失败")
      }}
    },
  //分享到朋友圈
  onShareTimeline: function() {
    return {
      title: '博饼小游戏，快来一起玩吧',
      path: '/page/index/index',
      imageUrl:'http://m.qpic.cn/psc?/V53b6AhA0HpGbV45Hl7U09DkVH0EnDXo/45NBuzDIW489QBoVep5mcY7UPccl7FistZs7X4KF8Ys066phmRBQ4DiNw5Xk0LBXgEnYtNmerJTZ4yjsETpYZ0B*jWxADnZEqDaGTE*9t8g!/b&bo=QAG5AAAAAAADF8o!&rf=viewer_4',
      query: 'kjbfrom=pyq'
    }
  }
})
