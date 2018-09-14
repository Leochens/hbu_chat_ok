import ActionTypes from '../const/ActionTypes/index' 
const topicList = (state = [], action) => {
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return action.res.result;
        }
        default: return state;
    }
}
export default  topicList;