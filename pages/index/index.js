// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
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
})

