import { connect } from 'react-redux';
import Login from 'src/components/Account/Login';
import { changeField, login, isLoading } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  error: state.user.error,
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    dispatch(changeField(name, value));
  },
  login: () => {
    dispatch(isLoading());
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
