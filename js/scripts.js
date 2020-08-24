//business logic//
function Passport() {
  this.places = [];
}

Passport.prototype.addDestination = function(destination) {
  this.places.push(destination);
}
Passport.prototype.findByLocation = function(location) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]){
      if (this.places[i].location == location){
        return this.places[i];
      }
    }
  };
  return false;
}

function Destination(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}
Destination.prototype.showDetails = function() {
return 'I went to ' + this.location + ' in the ' + this.timeOfYear + ", while I was here I went to " + this.landmarks + '.';
}




let almaPassport = new Passport();
let springBreak = new Destination("Daytona Beach", "parties", "spring");
let camping = new Destination("Buck Lake", "lake", "summer");
let skiing = new Destination("Baker", 'snow', 'winter');
almaPassport.addDestination(springBreak);
almaPassport.addDestination(skiing);
almaPassport.addDestination(camping);

//User logic //
$(document).ready(function () {

  almaPassport.places.forEach( function (element) {
    $('#placesList').append('<li>' + element.location + '</li>');
  });

  $("#placesList li").click(function() {//$('li').on('click', function() {
    $('#resultList').text('');//<.text('') to blank out the .append list below 
    $('#resultCard').show();
    let place = almaPassport.findByLocation($(this).text());
    $('#resultHeader').text(place.showDetails())//place.location + '!');
    $('#resultList').append('<li>' + place.landmarks + '</li>');//<.append for HTML elements to add
    $('#resultList').append('<li>' + place.timeOfYear + '</li>');
  });

});

