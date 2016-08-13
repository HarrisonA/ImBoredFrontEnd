import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  relationship: DS.attr('string'),
  numofvisits: DS.attr('number'),
  photo: DS.attr('string'),
  notes: DS.attr('string'),
  hide: DS.attr('boolean'),
  city: DS.belongsTo('city'),
});
