import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
