import ActionTypes from '../../const/ActionTypes/index';

const comments = (state = {}, action) => {
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.comments
            }
        }
        case ActionTypes.TOPIC_ACTIONS.COMMENT_TOPIC: {
            console.log('进入comments实体');
            const { comment } = action;
            return {
                ...state,
                [comment.id]: comment
            }
        }
        default: return state;
    }
}
export default comments;