import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  // NOTE: Because bar/new is a *subroute* of city,
  // renderTemplate is needed to display city/bar/new.hbs
  renderTemplate() {
    this.render('city.bar.new', { into: 'application' });
  },

  actions: {
    save() {

      // assign the current city to a variable
      const city = this.modelFor('city');

      // NOTE: this.currentModel is model containing the input values
      // from form in the .hbs file
      const newBar = this.get('store').createRecord('bar', this.currentModel);

      newBar.set('city', city);  //assign the city to this new bar
      newBar.save().then(() => {
        this.transitionTo('city', city);  //return to the city page
      });
    },

    cancel() {
      this.transitionTo('city', this.modelFor('city'));
    },
  },
});
