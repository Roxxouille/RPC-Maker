import axios from 'axios';
import { SUBMIT_PROFILE, changeProfile, errorProfile } from '../actions/profile';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_PROFILE: {
      console.log('submit');
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      const state = store.getState();
      const zipCode = parseInt(state.profile.zipCode);
      axios.put(`http://localhost:3000/user/${slug}`, { ...state.profile, zipCode }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
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
    default:
      next(action);
      break;
  }
};
