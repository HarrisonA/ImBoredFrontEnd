import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let cityModel = this.modelFor('city');
    return cityModel;
  },

  renderTemplate() {
    this.render('city.families', { into: 'application' });
  },
});
