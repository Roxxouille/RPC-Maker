import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { changeContact, sendMail, cleanError, } from '../../actions/contact';

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  changeContact: (name, value) => {
    dispatch(changeContact(name, value));
  },
  contactSubmit: () => {
    dispatch(cleanError());
    dispatch(sendMail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
