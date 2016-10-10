import { connect } from 'react-redux';
import HostForm from './host_form';
import { updateField } from '../../actions/spotform_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value))
});

const HostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);

export default HostFormContainer;
