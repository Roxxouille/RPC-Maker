import axios from 'axios';
import {
  SEND_MESSAGE,
} from '../actions/contact';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      
      break;
    }

    default:
      next(action);
      break;
  }
};
