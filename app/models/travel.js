import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('text'),
  why: DS.attr('string'),
  numofvisits: DS.attr('integer'),
  photo: DS.attr('string'),
  notes: DS.attr('text'),
  hide: DS.attr('boolean'),
  city: DS.belongsTo('city'),
});
