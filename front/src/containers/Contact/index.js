import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { changeContact } from '../../actions/contact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  message: state.contact.message,
  firstname: state.contact.firstname,
  lastname: state.contact.lastname,
});

const mapDispatchToProps = (dispatch) => ({
  changeContact: (name, value) => {
    console.log('container');
    dispatch(changeContact(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
