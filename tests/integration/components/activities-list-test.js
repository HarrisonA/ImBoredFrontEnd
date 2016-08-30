import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent ('activities-list', 'Integration | Component | activities list', {
  integration: true,
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  //this.render(hbs`{{activities-list}}`);
  //assert.equal(this.$().text().trim(), '');

  // Create a dummy model for the component (NOTE: could make this a plain obj
  // since were not using actions or anything from the compenents js file)
  const dummyActivityObj = Ember.Object.extend({
    name: "Solas Pub",
    url: "http://www.madoakbar.com/",
    description: "Outdoor/Indoor Bar",
    why: "Chill, lots of space, cool crowd",
    numofvisits: 4,
    photo:"http://placehold.it/350x150",
    notes: "none",
    hide:false,
  }).create();

  this.set('model', dummyActivityObj);

  // Template block usage:"
  this.render(hbs`{{activities-list activity=model}}`);

  assert.equal(this.$('strong').text(), "Solas Pub", "Activity 'name' is rendered from model");

  assert.equal(this.$('a').text(), "http://www.madoakbar.com/", "Activity url text is rendered from model");
  assert.equal(this.$('a').attr("href"), "http://www.madoakbar.com/", "Activity url is assigned to anchor tag src" );

  assert.equal(this.$('img').attr("src"), "http://placehold.it/350x150", "Photo url is assigned to image tag src");

  assert.equal(this.$('p:nth-of-type(1)').text(), "About: Outdoor/Indoor Bar", "Activity 'About''is rendered from model");
  assert.equal(this.$('p:nth-of-type(2)').text(), "Why? Chill, lots of space, cool crowd", "Activity 'Why' is rendered from model");
  assert.equal(this.$('p:nth-of-type(3)').text(), "Visits: 4", "Activity 'Visits''is rendered from model");
  assert.equal(this.$('p:nth-of-type(4)').text(), "Notes: none", "Activity 'Notes' is rendered from model");

});

/*Component template (for reference)
<div>
  <strong>{{activity.name}}</strong>
  <br>
  <a href={{activity.url}}>{{activity.url}}</a>
  <br>
  <img src={{activity.photo}} alt="photo missing">

  <p>About: {{activity.description}}</p>

  <p>Why? {{activity.why}}</p>

  <p>Visits: {{activity.numofvisits}}</p>

  <p>Notes: {{activity.notes}}</p>
</div>*/
