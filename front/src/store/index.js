import { createStore, compose, applyMiddleware } from 'redux';
import login from '../reducers/login';
import user from '../middleware/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
  ),
);

const store = createStore(login, enhancers);

export default store;
