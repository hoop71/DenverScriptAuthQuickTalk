import { connect } from 'react-redux';
import Application from '../components/Application';
import { signIn, signOut } from '../redux/actions/auth';

export default connect(
  ({ auth, users }) => ({ auth, users }),
  {
    signIn,
    signOut
  }
)(Application);
