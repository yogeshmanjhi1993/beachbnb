# AirCLD
[Heroku Link](https://aircld.herokuapp.com/)

## Minimum Viable Product
AirCLD(chair lunch dinner) is a web application inspired by AirBnB.  It is built
using Ruby on Rails for the backedn and React/Redux for the front end.  By the end
of week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling.
* Hosting on Heroku
* New account creation/login and guest/demo login
* Front end authentication
* Spots with search(by location/availability) with Google Maps API
* Bookings
* Reviews
* **Bonus**: Messaging
* **Bonus**: User/host profiles

## Design Docs
* [View Wireframes](./wireframes/)
* [React Components](./component-hierarchy.md)
* [API Endpoints](./api-endpoints.md)
* [DB schema](./schema.md)
* [Redux Structure](./redux-structure.md)
* [Sample State](./sample-state.md)

## Implementation Timeline
### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with integrated front-end/back-end Authentication

* New Rails Project
* User model/migration
* Generate user/session/API routes
* Back end authentication (session/password)
* Static Pages controller and root view
* Set up Webpack and react/redux modules
* create APIUtil to interact with API routes
* Redux cycle for frontend authentication
* Basic landing page with text bar to be used for search
* Seed the DB
* Set up demo login

### Phase 2: Spot Model, API, and Components ()
