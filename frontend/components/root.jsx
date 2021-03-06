import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home_container/home_container';
import SearchResultsContainer from './search_results/search_results_container';
import HostFormContainer from './host_form/host_form_container';
import WelcomeForm from './host_form/welcome_form';
import RoomForm from './host_form/room_form';
import LocationForm from './host_form/location_form';
import DescriptionForm from './host_form/description_form';
import SpotDetailContainer from './spot_detail/spot_detail_container';
import BookingDetailContainer from './booking_detail/booking_detail_container';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomeContainer} />
        <Route component={SearchResultsContainer} path="search" />
        <Route component={HostFormContainer} path="host">
          <IndexRoute component={WelcomeForm} />
          <Route component={RoomForm} path="/room" />
          <Route component={LocationForm} path="/location" />
          <Route component={DescriptionForm} path="/description" />
        </Route>
        <Route component={SpotDetailContainer} path="spots/:id" />
        <Route component={BookingDetailContainer} path="bookings/:id" />
      </Route>
    </Router>
  </Provider>
);

export default Root;
