# beachBnB

[beachBnb Live](http://www.beachbnb.co/)

beachBnB is a full-stack web application inspired by AirBnB.  It is built with Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Login/Signup via Google
Users are able to signup and login using their Google account.  This was implemented using Omniauth, which handles authentication for the app.

### Location Search via Google Maps API/Google Places Autocomplete API
I implemented Google Maps and Autocomplete to allow users to search spots to visit, based on a Google Maps location.  The Autocomplete API was used in the navigation menu search bar and the home page search bar.  When you select a location via the Autocomplete, it updates the location to search in the redux store and then opens a map, centered at the location you just searched.

### Spot Creation and Filtering
Users can create a spot via a multi-page spot form.  This form stores the new spot's attributes in the redux store, until they are ready to submit the spot.  Users can upload an image for the spot via the Paperclip Gem which is hooked up to AWS.  Once spots are created, Users can filter the spots based on their price and property type.

## Future Direction for the Project

Future features to be added include:

### Messaging between Guests and Hosts
I will implement a feature which will allow guests and hosts to communicate via an inbox system.  

### User Profiles
Allowing the users to view their own attributes and locations.  The profile page will allow the users to edit their info or delete their account.
