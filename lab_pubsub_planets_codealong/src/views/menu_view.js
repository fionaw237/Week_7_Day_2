const PubSub = require('../helpers/pub_sub.js');

const MenuView = function(menuItems){
  this.menuItems = menuItems;
}

MenuView.prototype.bindEvents = function(){
  this.menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const selectedPlanet = event.target.id;
      PubSub.publish('MenuView:selected-planet', selectedPlanet);
    })
  })
}

module.exports = MenuView;
