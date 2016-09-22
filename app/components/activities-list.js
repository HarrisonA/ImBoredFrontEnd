import Ember from 'ember';

export default Ember.Component.extend({
  // somePropName: value,    // Set some property to be available in this component's template
  // somePropName2: value,

  // component's life cycle hooks that allow you to insert functionality at different stages
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

  // actions: {
  //   actionFunctionName(someInput){
  //     action body goes here
  //  },
  // }
});
