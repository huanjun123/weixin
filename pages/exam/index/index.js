// pages/learn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'xx',
        name: '小学',
        open: false,
        pages: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
      },
      {
        id: 'zx',
        name: '中学',
        open: false,
        pages: ['初一', '初二', '初三', '高一', '高二', '高三']
      },
      {
        id: 'dx',
        name: '大学',
        open: false,
        pages: ['大一', '大二', '大三', '大四']
      }]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})