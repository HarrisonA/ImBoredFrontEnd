import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('activity-randomizer', 'Integration | Component | activity randomizer', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  const testBarsArr = [];
  const testFamiliesArr = [];
  const testMoviesArr = [];
  const testParksArr = [];
  const testRestaurantsArr = [];
  const testSportsArr = [];
  const testTravelsArr = [];

  const dummyCityObj = Ember.Object.extend({
    name: 'San Jose',
    bars: testBarsArr,
    families: testFamiliesArr,
    movies: testMoviesArr,
    parks: testParksArr,
    restaurants: testRestaurantsArr,
    sports: testSportsArr,
    travels: testTravelsArr,
  }).create();

  this.set('cityModel', dummyCityObj);

  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);

  // Trim removes extra white spaces.
  assert.equal(this.$('h2').text().trim(), 'San Jose', 'City name rendered correctly');
});

/*test('should fire action when city name is clicked', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  const testBarsArr = [];
  const testFamiliesArr = [];
  const testMoviesArr = [];
  const testParksArr = [];
  const testRestaurantsArr = [];
  const testSportsArr = [];
  const testTravelsArr = [];

  const dummyCityObj = Ember.Object.extend({
    name: 'San Jose',
    bars: testBarsArr,
    families: testFamiliesArr,
    movies: testMoviesArr,
    parks: testParksArr,
    restaurants: testRestaurantsArr,
    sports: testSportsArr,
    travels: testTravelsArr,
  }).create();

  this.set('cityModel', dummyCityObj);

  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);


  //assert.equal(this.$('p:nth-of-type(1)').text(), "About:", "Activity 'About''is rendered from model");
});*/
