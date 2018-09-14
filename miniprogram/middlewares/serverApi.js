//sna
const callServerApi = (url, param, normalizeFunc) => {
  
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data:param,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          console.log('网络请求结束的最原始数据',res);

            if (res.statusCode === 200 ){
                return resolve( normalizeFunc ? normalizeFunc(res) : res);
            }
            return reject(res);
        },
        fail: function() {
          // fail
          return reject(err);
        },
        complete: function() {
          // complete
        }
      })
    })
}

export default store => next => action => {
    if (!action.SERVER_API) {
        return next(action)
    }
    const {
        type,
        url,
        param,
        normalizeFunc
    } = action.SERVER_API;

    if(typeof(type)!=='string' || typeof(url)!=='string'){
        throw new Error('type 和 url 必须为字符串')
    }
    if(typeof(param)!=='object'){
        throw new Error('param必须为对象')
    }

    next({
        type: `${type}_REQ`
    })
    return callServerApi(url,param,normalizeFunc).then(res => {
        return next({
            type:`${type}_SUC`,
            res
        })
    }
    ).catch(err => {
        return next({
            type:`${type}_FAI`,
            err
        })
    });
};

