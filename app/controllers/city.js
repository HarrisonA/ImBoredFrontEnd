// This controller is needed in order to pass properties to the city template (.hbs)

import Ember from 'ember';

// Import the city model so that its relationships can be accessed
import City from '../models/city';

// Get the relationship object whose keys are has_many, belongs_to, etc
let relationshipsObj = Ember.get(City, 'relationshipNames');

export default Ember.Controller.extend({

  // get the names of the has_many relationships (ex: bars, parks, movies) from
  // the objects hasMany key
  activityCategories: relationshipsObj.hasMany,
});
