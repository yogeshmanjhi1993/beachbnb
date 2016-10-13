import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SpotsReducer from './spots_reducer';
import FiltersReducer from './filters_reducer';
import LocationReducer from './location_reducer';
import SpotformReducer from './spotform_reducer';
import BookingReducer from './booking_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotsReducer,
  filters: FiltersReducer,
  location: LocationReducer,
  spotFields: SpotformReducer,
  bookings: BookingReducer,
  reviews: ReviewReducer
});

export default RootReducer;
