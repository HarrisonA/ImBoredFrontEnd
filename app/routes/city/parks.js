import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let cityModel = this.modelFor('city');
    return cityModel;
  },

  renderTemplate() {
    this.render('city.parks', { into: 'application' });
  },
});

// renderTemplate is needed to show the tempate of this child route
// without it, the parent route would still show for this URL
