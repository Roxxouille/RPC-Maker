import appReducer from './index';

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'UNSET_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
