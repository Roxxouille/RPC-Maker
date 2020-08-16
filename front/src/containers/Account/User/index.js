import { connect } from 'react-redux';
import User from 'src/components/Account/User';
import { activateLoad, getCommands } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  isLoading: state.user.isLoading,
  role: state.user.role,
  commands: state.user.commands,
  builderId: state.user.builderId,
  level: state.user.level,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  image: state.user.image,
  email: state.user.email,
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
