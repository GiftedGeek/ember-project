import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TableRoute extends Route {
    // Authentication Part
    @service session
    beforeModel(transition) {
        this.session.requireAuthentication(transition, 'login');
    }
}
