import { connect } from 'react-redux';
import Message from '../../components/User/Message';
import { activateLoad, getMessages, sendMessage, changeNewMessage } from '../../actions/user';

const mapStateToProps = (state) => ({
  builderId: state.user.builderId,
  messages: state.user.messages,
  username: state.user.username,
  newMessage: state.user.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getMessages: () => {
    dispatch(getMessages());
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
  changeNewMessage: (value) => {
    dispatch(changeNewMessage(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
