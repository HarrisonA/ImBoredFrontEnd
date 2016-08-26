import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getRandomActivity(city) {
      // TODO: figure out how to get all the activities associated with one city
      // then update the MVP code below to be DRY

      let numOfParks = city.get('parks.length');
      // note objectAt(1) means get the park[1] object from the list
      let randomPark = city.get('parks').objectAt(Math.floor(Math.random() * numOfParks));

      let numOfBars = city.get('bars.length');
      let randomBar = city.get('bars').objectAt(Math.floor(Math.random() * numOfBars));

      let numOfRests = city.get('restaurants.length');
      let randomRest = city.get('restaurants').objectAt(Math.floor(Math.random() * numOfRests));

      let actArray = [];
      actArray.push(randomPark);
      actArray.push(randomBar);
      actArray.push(randomRest);


      let randomElem = Math.floor(Math.random() * actArray.length);

      city.set('randomAct', actArray[randomElem]);
      this.toggleProperty('showActivity');
    },
  },
});
