import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    // console.log("activity list componenet instantiated");
  },

  willInsertElement() {
    // console.log("before activity list componenet is inserted");
  },

  didInsertElement() {
    // console.log("after activity list componenet is inserted");
  },

  willDestroyElement() {
    // console.log("activity list is about to be removed from DOM");
  },
});
