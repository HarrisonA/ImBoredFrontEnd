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

  //  Create a dummy model for the component
  const dummyActivityObj = Ember.Object.extend({
      name: "Solas Pub",
      url: "http://www.madoakbar.com/",
      description: "Outdoor/Indoor Bar",
      why: "Chill, lots of space, cool crowd",
      numofvisits:0,
      photo:"http://static.wixstatic.com/media/cb3644_5f2ed69191e04daa8ef4feec40d245d1.jpg/v1/fill/w_348,h_463,al_c,q_90/cb3644_5f2ed69191e04daa8ef4feec40d245d1.jpg",
      notes: "none",
      hide:false,
    }).create();

  this.set('model', dummyActivityObj);

  // Template block usage:"
  this.render(hbs`{{activities-list activity=model}}`);

  assert.equal(this.$('strong').text(), "Solas Pub");
});

// Component template
// <div>
//   <strong>{{activity.name}}</strong>
//   <br>
//   <a href={{activity.url}}>{{activity.url}}</a>
//   <br>
//   <img src={{activity.photo}} alt="photo missing">
//
//   <p>About: {{activity.description}}</p>
//
//   <p>Why? {{activity.why}}</p>
//
//   <p>Visits: {{activity.numofvisits}}</p>
//
//   <p>Notes: {{activity.notes}}</p>
// </div>
