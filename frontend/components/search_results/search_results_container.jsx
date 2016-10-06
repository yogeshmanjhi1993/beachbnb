import { connect } from 'react-redux';
import SearchResults from './search_results';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: asArray(state.spots)
});

const mapDispatchToProps = dispatch => ({

});

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

export default SearchResultsContainer;
