import { createStore, compose, applyMiddleware } from 'redux';
import userReducer from '../reducers/user';
import user from '../middleware/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
  ),
);
const store = createStore(userReducer, enhancers);

export default store;
