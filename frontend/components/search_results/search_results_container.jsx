import { connect } from 'react-redux';
import SearchResults from './search_results';
import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  spots: asArray(state.spots)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

export default SearchResultsContainer;
