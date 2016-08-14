import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  renderTemplate() {
    this.render('city.bar.new', { into: 'application' });
  },

  actions: {
    save() {
      const city = this.modelFor('city');
      const newBar = this.get('store').createRecord('bar', this.currentModel);
      newBar.set('city', city);
      newBar.save().then(() => {
        this.transitionTo('city', city);
      });
    },

    cancel() {
      this.transitionTo('city', this.modelFor('city'));
    },
  },
});
