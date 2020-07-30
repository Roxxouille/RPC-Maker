import { connect } from 'react-redux';
import { autoLog, isLoading } from '../../actions/user';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  autoLog: () => {
    dispatch(isLoading());
    dispatch(autoLog());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
