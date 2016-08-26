import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // get the model from the cities route
    let cityModel = this.modelFor('cities');
    return cityModel;
  },
});
