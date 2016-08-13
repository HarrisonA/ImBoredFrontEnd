import DS from 'ember-data';

// Eventually need to pdate the host url to that of the deployed rails app
export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000'
});
