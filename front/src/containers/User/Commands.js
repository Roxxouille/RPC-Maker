import { connect } from 'react-redux';
import Command from '../../components/User/Command';

const mapStateToProps = (state) => ({
  commands: state.user.commands,
});

export default connect(mapStateToProps, null)(Command);
