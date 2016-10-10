import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SpotsReducer from './spots_reducer';
import FiltersReducer from './filters_reducer';
import LocationReducer from './location_reducer';
import SpotformReducer from './spotform_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotsReducer,
  filters: FiltersReducer,
  location: LocationReducer,
  spotFields: SpotformReducer
});

export default RootReducer;
