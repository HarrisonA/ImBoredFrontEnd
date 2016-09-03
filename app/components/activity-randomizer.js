import Ember from 'ember';

// import the computed property function
import checkIfOakland from '../utils/checkIfOakland';

export default Ember.Component.extend({

  // Call the CP function and set the result (boolean) as the value for "isOakland" key,
  // NOTE: currentCity.name comes from model that's assigned to the
  // "currentCity" attr in /routes/random.js
  isOakland: checkIfOakland('currentCity.name'),

  actions: {
    getRandomActivity(currentCity) {
      // TODO: figure out how to get all the activities associated with one city
      // then update the MVP code below to be DRY

      let numOfParks = currentCity.get('parks.length');

      // note objectAt(1) means get the park[1] object from the list
      let randomPark = currentCity.get('parks').objectAt(Math.floor(Math.random() * numOfParks));

      let numOfBars = currentCity.get('bars.length');
      let randomBar = currentCity.get('bars').objectAt(Math.floor(Math.random() * numOfBars));

      let numOfRests = currentCity.get('restaurants.length');
      let randomRest = currentCity.get('restaurants').objectAt(Math.floor(Math.random() * numOfRests));

      let actArray = [];
      actArray.push(randomPark);
      actArray.push(randomBar);
      actArray.push(randomRest);

      let randomElem = Math.floor(Math.random() * actArray.length);

      currentCity.set('randomAct', actArray[randomElem]);
      this.toggleProperty('showActivity');
    },
  },
});
