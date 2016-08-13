import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('activity-randomizer', 'Integration | Component | activity randomizer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{activity-randomizer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#activity-randomizer}}
      template block text
    {{/activity-randomizer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
