// pages/staPeo/staPeo.js
Page({
  data: {
    selectArray: [{
      "text": "1位玩家"
    }, {
      "text": "2位玩家"
    }, {
      "text": "3位玩家"
    }, {
      "text": "4位玩家"
    }]
  },
  getDate:function(e){
    console.log(e.detail)
  },
  goToGamePage: function(e) {
    wx.navigateTo({
      url:'/pages/staGame/staGame',
    })
  },
})