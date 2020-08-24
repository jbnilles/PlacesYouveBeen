
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




let almaPassport = new Passport();
let springBreak = new Destination("Daytona Beach", "parties", "spring");
let camping = new Destination("Buck Lake", "lake", "summer");
let skiing = new Destination("Baker", 'snow', 'winter');
almaPassport.addDestination(springBreak);
almaPassport.addDestination(skiing);
almaPassport.addDestination(camping);


$(document).ready(function () {

  almaPassport.places.forEach(element => {
  $('#placesList').append('<li>' + element.location + '</li>');
  });
  $("li").click(function() {//$('li').on('click', function() {
    alert($(this).text());
    //this.text();
  });
// $("li").click(function() {
//  $(".place-showing").toggle();
//  $(".place-hidden").toggle();
//});

});

