# Redux Structure

## Auth Cycles
### Session API Request Actions
* signUp
0. called onSubmit from SignUpForm
0. POST /api/users
0. receiveCurrentUser is set as success callback
* logIn
0. called onSubmit from nav
0. receiveCurrentUser is set as success callback
* logOut
0. called onClick from nav
0. DELETE /api/session
0. removeCurrentUser is set as success callback
* fetchCurrentUser
0. called on didMount from App
0. GET /api/session
0. receiveCurrentUser is set as success callback

### Session API Respons Actions
* receiveCurrentUser
0. called as an API callback
0. currentUser is stored in state by SessionReducer
* removeCurrentUser
0. callsed as an API callback
0. SessionReducer removes currentUser from state

## Spot Cycles
### Spots API Request Actions
* createSpot
0. called from new spot form onSubmit
0. POST api/spots
0. receiveSingleSpot is set as success callback
* fetchAllSpots
0. called from SpotsIndex
0. GET api/spots
0. receiveAllSpots is set as success callback
* fetchSingleSpot
0. called from SpotContainer didMount
0. GET api/spots/:id
0. receiveSingleSpot is set as success callback
* destroySpot
0. called from delete button onClick
0. DELETE api/spots/:id
0. removeSpot is set as success callback

### Spots API Response Actions
* receiveAllSpots
0. called as an API callback
* SpotsReducer updates spots in the state
* receiveSingleSpot
0. called as an API callback
0. SpotsReducer updates spots[id] in state
* removeSpot
0. called as an API callback
0. SpotsReducer removes spots[id] from state
