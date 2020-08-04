import { combineReducers } from 'redux';
import user from './user';
import contact from './contact';
import profile from './profile';

export default combineReducers({
  user,
  contact,
  profile,
});
