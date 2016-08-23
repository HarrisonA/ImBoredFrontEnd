import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let cityModel = this.modelFor('cities');
    return cityModel;
  },
});
