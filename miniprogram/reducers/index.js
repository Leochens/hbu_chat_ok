import { combineReducers }  from '../libs/redux.js';
import entities from './entities/index.js';
import topicList from './topicList';
import ui from './ui';



const RootReducer = combineReducers({
    entities,
    topicList
})
export default RootReducer;