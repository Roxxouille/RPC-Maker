import { connect } from 'react-redux';
import Edit from '../../components/User/Edit';
import { changeProfile, submitProfile } from '../../actions/profile';

const mapStateToProps = (state) => ({
  infos: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfile: (name, value) => {
    dispatch(changeProfile(name, value));
  },
  submitProfile: () => {
    dispatch(submitProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
