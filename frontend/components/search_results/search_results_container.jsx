import { connect } from 'react-redux';
import SearchResults from './search_results';
import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { updateLocation } from '../../actions/location_actions';

const mapStateToProps = state => ({
  spots: asArray(state.spots),
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateLocation: (location) => dispatch(updateLocation(location))
});

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

export default SearchResultsContainer;
