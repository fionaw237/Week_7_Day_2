const PubSub = require('../helpers/pub_sub.js');
const SolarSystem = require('../models/solar_system.js')

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet', (event) => {
    const planetObject = event.detail;
    this.render(planetObject);
  })
}

ResultView.prototype.render = function(planet){
  this.container.innerHTML = "";
  const heading = this.createHeading(planet);
  this.container.appendChild(heading);
  const detailsList = this.getDetailsList(planet);
  this.container.appendChild(detailsList);
  // const planetImageDiv = document.createElement('div')
  // planetImageDiv.classList.add('planet-image')
  // const planetImage = document.createElement('img')
  this.container.style.backgroundImage = `url(${planet.image})`;
  // this.container.appendChild(planetImage);
  // planetImageDiv.appendChild(planetImage);
  // this.container.appendChild(planetImageDiv);
}

ResultView.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
}

ResultView.prototype.getDetailsList = function(planet){
  const detailsList = document.createElement('ul')
  var planetKeys = [];
  for (var key in planet) {
    planetKeys.push(key);
  }
  planetKeys.shift();
  const imageURL = planetKeys.pop();
  planetKeys.forEach((key) => {
    const propertyLi = document.createElement('li');
    propertyLi.textContent = `${key}: ${planet[key]}`;
    detailsList.appendChild(propertyLi);
  })
  return detailsList;
}

module.exports = ResultView;

// name: 'Mercury',
// orbit: 87.969,
// day: 58.646,
// surfaceArea: 0.147,
// volume: 0.056,
// gravity: 0.38,
// moons: 0,
// image: 'images/mercury.jpg'
