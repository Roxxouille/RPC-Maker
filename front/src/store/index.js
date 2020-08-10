import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import user from '../middleware/user';
import contact from '../middleware/contact';
import profile from '../middleware/profile';
import backoffice from '../middleware/backoffice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    contact,
    profile,
    backoffice,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
