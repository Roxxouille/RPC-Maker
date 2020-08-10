import { connect } from 'react-redux';
//import Order from '../../components/BackOffice/Order';
import Order from 'src/components/Account/BackOffice/Order'
import { getCommand } from 'src/actions/backoffice';

const mapStateToProps = (state) => ({
  command: state.backoffice.command,
  isLoading: state.backoffice.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCommand: (id) => {
    dispatch(getCommand(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
