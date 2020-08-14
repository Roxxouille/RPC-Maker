import axios from 'axios';
import {
  SUBMIT_PROFILE, errorSubscription, changeProfile, errorProfile, GET_DATA, setData, SUBMIT_FORM,
} from '../actions/profile';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_PROFILE: {
      console.log('submit');
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      const state = store.getState();
      const zipCode = parseInt(state.profile.zipCode);
      axios.put(`http://localhost:3000/user/${slug}`, { ...state.profile.infos, zipCode }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response.data);
          store.dispatch(changeProfile(response.data.status));
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(errorProfile(error.response.data));
        });
      break;
    }
    case GET_DATA: {
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      axios.get(`http://localhost:3000/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(setData(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case SUBMIT_FORM: {
      const state = store.getState();
      const { infos } = state.profile;
      axios.post('http://localhost:3000/user', { ...infos })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(errorSubscription(error.response.data));
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
