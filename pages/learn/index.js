// pages/learn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'xx',
        name: '小学语文',
        open: false,
        pages: ['一年级语文', '二年级语文', '三年级语文', '四年级语文', '五年级语文', '六年级语文']
      },
      {
        id: 'zx',
        name: '中学语文',
        open: false,
        pages: ['初一语文', '初二语文', '初三语文', '高一语文', '高二语文', '高三语文']
      },
      {
        id: 'dx',
        name: '大学语文',
        open: false,
        pages: ['大一语文', '大二语文', '大三语文', '大四语文']
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