import { connect } from 'react-redux';
import Command from 'src/components/Account/User/Command';

const mapStateToProps = (state) => ({
  commands: state.user.commands,
});

export default connect(mapStateToProps, null)(Command);
