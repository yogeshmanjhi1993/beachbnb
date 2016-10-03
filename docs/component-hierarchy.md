# Component Hierarchy

### SignUpContainer
* SignUpForm

### LogInContainer
* LogInForm

### HomeContainer
* Header
* Home
* SearchForm

### SpotContainer
* Photos
* BookingForm
* SpotInfo
* Map

### SearchResultsContainer
* Map
* SearchFilterForm
* ResultIndex

### NewSpotContainer
* Map
* NewSpotForm

## Routes
| Path | Component |
| ---- | --------- |
| '/sign-up' | "SignUpContainer" |
| '/log-in' | "LogInContainer" |
| '/' | "HomeContainer" |
| '/spots/:spot_id' | "Spot Container" |
| '/search' | "SearchResultsContainer" |
| '/new-spot' | "NewSpotContainer" |
