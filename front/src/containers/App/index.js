import { connect } from 'react-redux';
import { autoLog } from '../../actions/user';
import App from '../../components/App';


/*
const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  error: state.recipes.error,
});*/

const mapDispatchToProps = (dispatch) => ({
  autoLog: () => {
    dispatch(autoLog());
  },
});

export default connect(null, mapDispatchToProps)(App);
