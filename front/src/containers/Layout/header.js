import { connect } from 'react-redux';
import Header from '../../components/Layout/header';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  username: state.username,
});

export default connect(mapStateToProps, null)(Header);
