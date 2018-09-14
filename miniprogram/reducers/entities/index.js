import { combineReducers }  from '../../libs/redux.js';
import topics from './topics';
import users from './users';
import comments from './comments';

const entities = combineReducers({
    topics,
    users,
    comments
})
export default entities