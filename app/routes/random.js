import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let cityModel = this.modelFor('cities');

    //console.log("the city models:", cityModel);
    return cityModel;
  },
});
