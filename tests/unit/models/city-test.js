import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('city', 'Unit | Model | city', {

  // Specify the other units that are required for this test.
  // Add the relationsships to needs below
  needs: ['model:bar', 'model:family', 'model:movie', 'model:park', 'model:restaurant', 'model:sport', 'model:travel'],
});

test('it exists', function (assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('Computed Property should correctly insert city name into string', function (assert) {
  const testCity = this.subject();  // get an instance of the city model

  // NOTE: Setting and getting on the model instance is ASYNCHRONOUS, thus Ember.run is needed
  // Without Ember.run, you the Error: Assertion Failed: You have turned on
  //testing mode, which disabled the run-loop's autorun. You will need to wrap
  //any code with asynchronous side-effects in a run

  Ember.run(this, function (){  // this is the context
    testCity.set('name', 'DisneyLand');
    let result  =  testCity.get('computedCityNameString');
    assert.equal(result, 'The city of DisneyLand rocks!', 'CP function correctly inserts city name into string');
  });
});

// Computed property on the city model - For reference
/*
computedCityNameString: Ember.computed('name', function () {
return `The city of ${this.get('name')} rocks!`;
*/
