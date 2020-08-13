import { connect } from 'react-redux';
import Devis from 'src/components/Devis';
import { changeDevis, changeStepState, submitStep, changeArrayDevis } from 'src/actions/devis';

const mapStateToProps = (state) => ({
  devis: state.devis,
});

const mapDispatchToProps = (dispatch) => ({
  changeDevis: (name, value) => {
    dispatch(changeDevis(name, value));
  },
  changeStepState: (step) => {
    dispatch(submitStep(step));
  },
  forceChangeStep: (step) => {
    dispatch(changeStepState(step));
  },
  changeArrayDevis: (name, value) => {
    dispatch(changeArrayDevis(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Devis);
