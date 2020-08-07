import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { changeContact, sendMail } from '../../actions/contact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  content: state.contact.content,
  firstname: state.contact.firstname,
  lastname: state.contact.lastname,
  status: state.contact.status,
});

const mapDispatchToProps = (dispatch) => ({
  changeContact: (name, value) => {
    dispatch(changeContact(name, value));
  },
  contactSubmit: () => {
    dispatch(sendMail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
