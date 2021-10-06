// pages/start/start.js
Page({
  data: {

  },
  //页面跳转函数
  goToStandalonePage: function() {
    wx.navigateTo({
      url:'/pages/staPeo/staPeo',
    })
  },
})