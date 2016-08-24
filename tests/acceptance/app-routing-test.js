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

test('should link to random activity page.', function (assert) {
  visit('/');
  click('a:contains("random")');
  andThen(function () {
    assert.equal(currentURL(), '/random', "should navigate to random activity page");
  });
});

// *********
// The following tests are just checking one city and just checking "bars"
// The other cities (and activities) are not being checked yet
// *******

// NOTE this test will fail if Oakland city id changes
test('should link to Oakland activity page.', function (assert) {
  visit('/');
  click('a:contains("Oakland")');
  andThen(function () {
    assert.equal(currentURL(), '/cities/1', "should navigate to Oakland activity page");
  });
});

// NOTE this test will fail if Oakland city id changes
test('should link to Oakland bars page.', function (assert) {
  visit('/cities/1');
  click('a:contains("Bars")');
  andThen(function () {
    assert.equal(currentURL(), '/cities/1/bars', "should navigate to Oakland bars page");
  });
});

// NOTE this test will fail if Oakland city id changes
test('should link back to cities list.', function (assert) {
  visit('/cities/1');
  click('a:contains("Back to")');
  andThen(function () {
    assert.equal(currentURL(), '/cities', "should navigate to cities page");
  });
});

// NOTE this test will fail if Oakland city id changes
test("should link to 'Add a bar' page.", function (assert) {
  visit('/cities/1/bars');
  click('a:contains("Add a new bar")');
  andThen(function () {
    assert.equal(currentURL(), '/cities/1/bars/new', "should navigate to 'Add a bar' page");
  });
});
