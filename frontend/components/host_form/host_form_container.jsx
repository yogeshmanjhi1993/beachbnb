import { connect } from 'react-redux';
import HostForm from './host_form';
import { updateField } from '../../actions/spotform_actions';
import { createSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  spotFields: state.spotFields,
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
  createSpot: spot => dispatch(createSpot(spot))
});

const HostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);

export default HostFormContainer;
