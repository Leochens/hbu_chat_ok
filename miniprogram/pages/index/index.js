//index.js
import {
  connect
} from '../../libs/wechat-weapp-redux.js'
import { bindActionCreators } from '../../libs/redux';
import ActionCreators from '../../actions/index';
const app = getApp()
const pageConfig = {
  data: {

  },
  onLoad: function () {
    const that = this;
    // 可以直接在this.data里获得store里的数据
    const { ServerActions } = this;
    console.log(this);

    ServerActions.actionFetchTopics && ServerActions.actionFetchTopics()
  },
  onGetChats: function () {
    wx.cloud.callFunction({
      name: 'chats',
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  }
}

const mapStateToData = state => {
  return {
    p: 'p'
  }
}
const mapDispatchToPage = dispatch => {
  return {
    ServerActions: bindActionCreators(ActionCreators.ServerActions, dispatch),
  }
}

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig)