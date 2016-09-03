// NOTE: This file is connected to the route for cities

import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    // store is a service baked into ember
    return this.get('store').findAll('city');

    // Use of RSVP.hash to wait for the two promises to resolve
    // NOT NEEDED!
    // return Ember.RSVP.hash({
    //   cities: this.get('store').findAll('city'),
    //   bars: this.get('store').findAll('bar'),
    // });
  },
});
