import { connect } from 'react-redux';
import SignIn from '../../components/User/SignIn';
import { changeField } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    console.log('entrée container');
    dispatch(changeField(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
