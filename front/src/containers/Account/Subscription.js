import { connect } from 'react-redux';
import Subscription from 'src/components/Survey/Subscription';
import { inputSubscription, sendFormSubscription } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  infos: state.profile.infos,
});

const mapDispatchToProps = (dispatch) => ({
  changeSubscription: (name, value) => {
    console.log(name, value);
    dispatch(inputSubscription(name, value));
  },
  submitSubscription: () => {
    dispatch(sendFormSubscription());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
