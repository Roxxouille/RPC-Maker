import { connect } from 'react-redux';
import Edit from 'src/components/Account/User/Edit';
import ChangePassword from 'src/components/Account/User/ChangePassword';
import { changeProfile, submitProfile, getData } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfile: (name, value) => {
    dispatch(changeProfile(name, value));
  },
  submitProfile: () => {
    dispatch(submitProfile());
  },
  getData: () => {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
