import { connect } from 'react-redux';
import HostForm from './host_form';
import { updateField } from '../../actions/spotform_actions';
import { createSpot } from '../../actions/spot_actions';
import { receiveErrors, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  spotFields: state.spotFields,
  spots: state.spots,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
  createSpot: spot => dispatch(createSpot(spot)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors())
});

const HostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);

export default HostFormContainer;
