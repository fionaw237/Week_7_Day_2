const PubSub = require('../helpers/pub_sub.js');

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
}

ResultView.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
}

module.exports = ResultView;
