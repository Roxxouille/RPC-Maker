import { connect } from 'react-redux';
import Conversations from '../../components/BackOffice/Conversations';
import { getMessagesBack, changeMessageBack, sendMessageBack, changeActiveConv } from '../../actions/backoffice';

const mapStateToProps = (state) => ({
  clients: state.backoffice.clients,
  messages: state.backoffice.messages,
  username: state.user.username,
  newMessage: state.backoffice.newMessage,
  activeConv: state.backoffice.activeConv,
});

const mapDispatchToProps = (dispatch) => ({
  getMessagesBack: (slug, id) => {
    dispatch(changeActiveConv(slug, id));
    dispatch(getMessagesBack(slug));
  },
  changeMessageBack: (value) => {
    dispatch(changeMessageBack(value));
  },
  sendMessageBack: () => {
    dispatch(sendMessageBack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
