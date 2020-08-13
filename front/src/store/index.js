import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import user from '../middleware/user';
import contact from '../middleware/contact';
import profile from '../middleware/profile';
import backoffice from '../middleware/backoffice';
import devis from '../middleware/devis';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    contact,
    profile,
    backoffice,
    devis,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
