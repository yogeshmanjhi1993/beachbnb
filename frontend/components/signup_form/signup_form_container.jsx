import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
