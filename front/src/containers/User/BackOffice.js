import { connect } from 'react-redux';
import BackOffice from '../../components/User/BackOffice';
import { getCommands } from '../../actions/backoffice';

const mapStateToProps = (state) => ({
  commands: state.backoffice.commands,
});

const mapDispatchToProps = (dispatch) => ({
  getCommands: () => {
    dispatch(getCommands());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BackOffice);
