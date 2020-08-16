import axios from 'axios';
import {
  SUBMIT_PROFILE, SUBMIT_PASSWORD, getValidation, getValidationProfile, errorSubscription, changeProfile, errorProfile, GET_DATA, setData, SUBMIT_FORM,
} from '../actions/profile';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_PROFILE: {
      console.log('submit');
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      const state = store.getState();
      const zipCode = parseInt(state.profile.infos.zip_code);
      console.log(state.profile);
      axios.put(`http://54.173.92.69/api/user/${slug}`, {
        email: state.profile.infos.email, lastname: state.profile.infos.lastname, firstname: state.profile.infos.firstname, city: state.profile.infos.city, adress: state.profile.infos.adress, zipCode,
      }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(changeProfile(response));
          store.dispatch(getValidationProfile(response.data.status));
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(errorProfile(error.response.data));
        });
      break;
    }
    case SUBMIT_PASSWORD: {
      console.log('submit');
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      const state = store.getState();
      console.log(state.profile);
      axios.post(`http://54.173.92.69/api/user/edit-password/${slug}`, {
        password: state.profile.infos.password,
      }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(changeProfile(response.data.status));
          store.dispatch(getValidation(response.data.status));
          console.log(response.data.status);
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
      axios.get(`http://54.173.92.69/api/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(setData(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
