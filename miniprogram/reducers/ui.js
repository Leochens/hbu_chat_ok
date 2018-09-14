import ActionTypes from '../const/ActionTypes/index'


const ui = (state = {
    commentInputIsActive: false,
}, action) => {
    switch (action) {
        // 是否显示评论框
        case ActionTypes.UI_ACTIONS.TOGGLE_SHOW_COMMENT_INPUT: {
            return {
                ...state,
                commentInputIsActive: !state.commentInputIsActive
            }
        }
        default: return state;
    }

}


export default ui;