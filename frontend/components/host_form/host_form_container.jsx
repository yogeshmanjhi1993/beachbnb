import { connect } from 'react-redux';
import HostForm from './host_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

const HostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);

export default HostFormContainer;
