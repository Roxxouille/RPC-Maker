import { connect } from 'react-redux';
import Edit from '../../components/User/Edit';
import { changeProfile, submitProfile, getData } from '../../actions/profile';

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
