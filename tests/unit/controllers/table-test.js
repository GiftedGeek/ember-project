import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import TableController from '../../../app/controllers/table';

module('Unit | Controller | table', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:table');
    assert.ok(controller);
  });

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:table');
    TableController.createSymbol();
    assert.equal(controller.createSymbol(), String)
  });
});
