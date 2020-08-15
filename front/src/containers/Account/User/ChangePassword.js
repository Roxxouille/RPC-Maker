import { connect } from 'react-redux';
import ChangePassword from 'src/components/Account/User/ChangePassword';
import { changeProfile, submitPassword } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfile: (name, value) => {
    dispatch(changeProfile(name, value));
  },
  submitPassword: () => {
    dispatch(submitPassword());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
