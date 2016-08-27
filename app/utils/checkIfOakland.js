// This computed property function checks if the current city name is "Oakland"
import Ember from 'ember';

const { computed } = Ember;

export default function checkIfOakland(name) {
  return computed(name, function () {  // can't use an arrow function here (because it binds)

    // Do the computation
    const currName = this.get(name);
    return currName === "Oakland";  //must return a boolean
  });
}
