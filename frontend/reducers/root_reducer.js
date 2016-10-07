import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SpotsReducer from './spots_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotsReducer,
  filters: FiltersReducer
});

export default RootReducer;
