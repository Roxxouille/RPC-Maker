import { connect } from 'react-redux';
import User from '../../components/User';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  username: state.username,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, null)(User);
