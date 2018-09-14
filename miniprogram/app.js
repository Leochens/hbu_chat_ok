//app.js
const WeAppRedux = require('./libs/wechat-weapp-redux.js');
const {
  Provider
} = WeAppRedux;

import configureStore from './configStore.js';

const store = configureStore();
App(Provider(store)({
  onLaunch: function() {
    // console.log(store.getState())
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
}))