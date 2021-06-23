import Controller from '@ember/controller';

export default class LoginController extends Controller {
    @service session;

    @tracked error;
    @tracked username;
    @tracked password;

    @action
    async login (event) {
        event.preventDefault();
        await this.session.authenticate('authenticator:token', this.username, this.password);
    }
}
