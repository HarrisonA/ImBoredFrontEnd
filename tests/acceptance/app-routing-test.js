import { test } from 'qunit';
import moduleForAcceptance from 'im-bored-front-end/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | app routing');

// Test the apps goals:
// Note Ember tests fail if nothing is actually tested

test('index should reroute to cities list', function (assert) {
  visit('/');

  // NOTE: andThen will wait until the prev andThen (asynch helper) finishes
  andThen(function () {
    assert.equal(currentURL(), '/cities', "should navigate to cities page");
  });
});

// test('should link to contact information.', function (assert) {
//   visit('/');
//   click('a:contains("Contact")');
//   andThen(function () {
//     assert.equal(currentURL(), '/contact', "should navigate to contact");
//   });
// });
