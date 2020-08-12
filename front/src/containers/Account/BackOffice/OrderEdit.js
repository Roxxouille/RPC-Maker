import { connect } from 'react-redux';
import OrderEdit from 'src/components/Account/BackOffice/OrderEdit';
import { submitItems, changeOneItem, getCommand, getItems } from 'src/actions/backoffice';

const mapStateToProps = (state) => ({
  command: state.backoffice.command,
  items: state.backoffice.items,
});

const mapDispatchToProps = (dispatch) => ({
  getCommand: (id) => {
    dispatch(getCommand(id));
  },
  getItems: () => {
    dispatch(getItems());
  },
  changeItem: (id, nameCat) => {
    dispatch(changeOneItem(id, nameCat));
  },
  submitItems: () => {
    dispatch(submitItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit);
