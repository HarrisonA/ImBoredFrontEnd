import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('activity-randomizer', 'Integration | Component | activity randomizer', {
  integration: true
});

const fillerAct1 = {
  name: "Solas Night Club",
  url: "http://www.madoakbar.com/",
  description: "Outdoor/Indoor Bar",
  why: "Chill, lots of space, cool crowd",
  numofvisits: 4,
  photo:"http://placehold.it/350x150",
  notes: "none",
  hide:false
};

const testBarsArr = Ember.A([fillerAct1]);
const testFamiliesArr = Ember.A([fillerAct1]);
const testMoviesArr = Ember.A([fillerAct1]);
const testParksArr = Ember.A([fillerAct1, fillerAct1]);
const testRestaurantsArr = Ember.A([fillerAct1]);
const testSportsArr = Ember.A([fillerAct1]);
const testTravelsArr = Ember.A([fillerAct1]);

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

test('it renders on component load', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('cityModel', dummyCityObj);

  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);

  // Trim removes extra white spaces.
  assert.equal(this.$().text().trim(), 'San Jose', 'Only the city name is displayed on component load');
  assert.equal(this.$('h2').text().trim(), 'San Jose', 'City name rendered correctly');
});

test('it toggles action when city name is clicked', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('cityModel', dummyCityObj);

  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);

  this.$('h2').click();

  // Side note: Ok is just a truth test
  // Check that activity info is rendered on click
  assert.ok(this.$("p:nth-of-type(1):contains(About:)"), "About is rendered from nested component activities-list");

  // Clicking the city name should hide the activity info
  this.$('h2').click();
  assert.equal(this.$().text().trim(), 'San Jose', 'Clicking the city name removes the activity info and only displays city name');

  this.$('h2').click();
  assert.ok(this.$("p:nth-of-type(1):contains(About:)"), "Clicking the city name re-renders the activity info");
});

// Special case only for the city of Oakland. Display developer message.
test("Displays message if city is Oakland (Computed Property function identifies the city)", function (assert) {
  const dummyOaklandObj = Ember.Object.extend({
    name: 'Oakland',
  }).create();

  this.set('cityModel', dummyOaklandObj);
  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);
  assert.equal(this.$('small').text().trim(), "(The developer of this app is from Oakland!!!)", 'Msg displayed when city is Oakland');


  const dummySFObj = Ember.Object.extend({
    name: 'SF',
  }).create();

  this.set('cityModel', dummySFObj);
  this.render(hbs`{{activity-randomizer currentCity=cityModel}}`);
  assert.notEqual(this.$('small').text().trim(), "(The developer of this app is from Oakland!!!)", 'Msg is not displayed when city is not Oakland');

});
