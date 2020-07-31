import { connect } from 'react-redux';
import User from '../../components/User';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  isLoading: state.user.isLoading,
});

export default connect(mapStateToProps, null)(User);
