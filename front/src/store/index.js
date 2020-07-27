import { createStore, applyMiddleware } from 'redux';
import signIn from '../reducers/signIn';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
const enhancers = composeEnhancers(
  applyMiddleware(

  ),
);*/


const store = createStore(signIn);



export default store;
