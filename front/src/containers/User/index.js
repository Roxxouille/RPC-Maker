import { connect } from 'react-redux';
import User from '../../components/User';
import { activateLoad } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  activateLoad: () => {
    console.log('container activate');
    dispatch(activateLoad());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
