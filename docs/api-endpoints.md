# API Endpoints
## HTML API
### root
* GET / - loads React web app

## JSON API
### Users
* POST /api/users
* PATCH /api/users

### Session
* POST /api/session
* DELETE /api/session
* GET /api/session

### Spots
* GET /api/spots
* POST /api/spots
* GET /api/spots/:id
* PATCH /api/spots/:id
* DELETE /api/spots/:id

### Bookings
* GET /api/bookings
* POST /api/spots/:spot_id/bookings
* DELETE /api/spots/:spot_id/bookings/:booking_id
