// pages/prise/findwork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPerson: true,
    firstPerson: '区域',
    secondPerson: '行业',
    thirdPerson: '规模',
    selectArea: false,
  },

  //点击选择类型
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  // 经验选择
  exprselect: function (e) {
    this.setData({
      thirdPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  // 行业选择
  typeSelect: function (e) {
    this.setData({
      secondPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  //区域选择
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  detail: function(){
    wx.navigateTo({
      url: '/pages/common/ocpDetail?user='+1,
    })
  },
  // 跳转到人才详情页面
  goInfo: function () {
    wx.navigateTo({
      url: '/pages/prise/priseInfo',
    })
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