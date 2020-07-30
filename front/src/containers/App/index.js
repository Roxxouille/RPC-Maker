import { connect } from 'react-redux';
import { autoLog } from '../../actions/user';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  autoLog: () => {
    dispatch(autoLog());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
