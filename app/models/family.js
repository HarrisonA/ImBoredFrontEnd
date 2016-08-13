import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  relationship: DS.attr('string'),
  numofvisits: DS.attr('integer'),
  photo: DS.attr('string'),
  notes: DS.attr('text'),
  hide: DS.attr('boolean'),
  city: DS.belongsTo('city'),
});
