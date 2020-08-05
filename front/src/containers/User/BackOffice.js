import { connect } from 'react-redux';
import BackOffice from '../../components/User/BackOffice';
import { getCommands, getClients } from '../../actions/backoffice';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(BackOffice);
