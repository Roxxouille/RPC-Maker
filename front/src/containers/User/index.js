import { connect } from 'react-redux';
import User from '../../components/User';
import { activateLoad, getCommands } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  isLoading: state.user.isLoading,
  role: state.user.role,
  commands: state.user.commands,
  builderId: state.user.builderId,
});

const mapDispatchToProps = (dispatch) => ({
  activateLoad: () => {
    dispatch(activateLoad());
  },
  getCommands: () => {
    dispatch(getCommands());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
