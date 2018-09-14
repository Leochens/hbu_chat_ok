import ACTIONS from '../const/ActionTypes/index.js'
import { normalize } from '../libs/normalizr';
import Schemas from '../schemas/index'

const BASE_URL = 'http://localhost:3001';

export const actionFetchTopics = () => {
    return {
        SERVER_API:{
            type: ACTIONS.SERVER_ACTIONS.FET_TOPIC_LIST,
            url:BASE_URL+'/chats/chats',
            param: {},
            normalizeFunc: json => {
                console.log(json);
                const topics = normalize(json.data.messages.data,Schemas.topicSchema);
                console.log('扁平后',topics);
                return topics;
            }
        }
    }
}
