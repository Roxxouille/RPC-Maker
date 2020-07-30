import { connect } from 'react-redux';
import Login from '../../components/User/Login';
import { changeField, login, isLoading } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  error: state.error,
  isLogged: state.isLogged,
  isLoading: state.isLoading,
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
