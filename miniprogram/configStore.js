import {
  createStore,
  compose,
  applyMiddleware
} from './libs/redux.js';
import {createLogger} from './libs/redux-logger.js';
// const devTools = require('./libs/remote-redux-devtools.js').default;
import serverApi from './middlewares/serverApi';
import rootReducer from './reducers/index.js';
// console.log(createLogger())
function configureStore() {
  return createStore(rootReducer, applyMiddleware(serverApi,createLogger()));
}

module.exports = configureStore;