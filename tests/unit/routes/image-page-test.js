import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | image-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:image-page');
    assert.ok(route);
  });
});
