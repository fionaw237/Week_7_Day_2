const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('MenuView:selected-planet', (event) => {
    const planetName = event.detail;
    const planet = this.findByName(planetName);
    PubSub.publish('SolarSystem:planet', planet)
  })
}

SolarSystem.prototype.findByName = function(planetName){
  const foundPlanet = this.planets.find((planet) => {
    return planet.name === planetName;
  })
  return foundPlanet;
}

module.exports = SolarSystem;
