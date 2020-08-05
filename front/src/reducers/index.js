import { combineReducers } from 'redux';
import user from './user';
import contact from './contact';
import profile from './profile';
import backoffice from './backoffice';

export default combineReducers({
  user,
  contact,
  profile,
  backoffice,
});
