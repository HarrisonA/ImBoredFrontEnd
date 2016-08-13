// NOTE: This file is connected to the route index "/" route
// and automatically redirects to the city list

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('cities');
  },
});
