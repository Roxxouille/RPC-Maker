import { connect } from 'react-redux';
import Pc from 'src/components/Account/User/Pc';

const mapStateToProps = (state) => ({
  commands: state.user.commands,
});

export default connect(mapStateToProps, null)(Pc);
