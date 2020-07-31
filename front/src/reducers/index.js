import { combineReducers } from 'redux';
import user from './user';
import contact from './contact';

export default combineReducers({
  user,
  contact,
});
