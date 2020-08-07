import { connect } from 'react-redux';
import BackOffice from '../../components/BackOffice';
import { getCommands, getClients } from '../../actions/backoffice';
import { activateLoad } from '../../actions/user';

const mapStateToProps = (state) => ({
  commands: state.backoffice.commands,
  user: state.user,
  clients: state.backoffice.clients,
});

const mapDispatchToProps = (dispatch) => ({
  getCommands: () => {
    dispatch(getCommands());
  },
  getClients: () => {
    dispatch(getClients());
  },
  activateLoad: () => {
    dispatch(activateLoad());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BackOffice);
