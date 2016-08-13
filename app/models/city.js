import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bars: DS.hasMany('bar', { async: true }),
  families: DS.hasMany('family', { async: true }),
  movies: DS.hasMany('movie', { async: true }),
  parks: DS.hasMany('park', { async: true }),
  restaurants: DS.hasMany('restaurant', { async: true }),
  sports: DS.hasMany('sport', { async: true }),
  travels: DS.hasMany('travel', { async: true }),
});

// Note: …when async is true, it will fetch the related entities when you actually request them…
