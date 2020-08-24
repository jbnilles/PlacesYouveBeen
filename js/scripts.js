
function Passport() {
  this.places = [];
}

Passport.prototype.addDestination = function(destination) {
  this.places.push(destination);
}

function Destination(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let almaPassport = new Passport();
let springBreak = new Destination("Daytona Beach", "parties", "spring");
let camping = new Destination("Buck Lake", "lake", "summer");
let skiing = new Destination("Baker", 'snow', 'winter');
almaPassport.addDestination(springBreak);
almaPassport.addDestination(skiing);
almaPassport.addDestination(camping);

