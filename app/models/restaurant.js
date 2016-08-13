import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('string'),
  why: DS.attr('string'),
  numofvisits: DS.attr('number'),
  photo: DS.attr('string'),
  notes: DS.attr('string'),
  hide: DS.attr('boolean'),
  city: DS.belongsTo('city'),
});
