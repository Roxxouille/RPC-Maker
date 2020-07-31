import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import userReducer from '../reducers/user';
import user from '../middleware/user';
import contact from '../middleware/contact';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    contact,
  ),
);

const store = createStore(rootReducer, enhancers);
console.log(store.getState());

export default store;
