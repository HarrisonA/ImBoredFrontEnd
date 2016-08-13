import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bars: DS.hasMany('bar'),
  families: DS.hasMany('family'),
  movies: DS.hasMany('movie'),
  parks: DS.hasMany('park'),
  restaurants: DS.hasMany('restaurant'),
  sports: DS.hasMany('sport'),
  travels: DS.hasMany('travel'),
});
