import { connect } from 'react-redux';
import Devis from 'src/components/Devis';
import { changeDevis, changeStepState, submitStep, changeArrayDevis } from 'src/actions/devis';
import { getItems } from 'src/actions/backoffice';



const mapStateToProps = (state) => ({
  devis: state.devis,
  items: state.backoffice.items,
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
  getCategoriesItems: () => {
    dispatch(getItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Devis);
