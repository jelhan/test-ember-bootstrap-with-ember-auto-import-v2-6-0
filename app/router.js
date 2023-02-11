import EmberRouter from '@ember/routing/router';
import config from 'test-ember-bootstrap-with-ember-auto-import-v2-6-0/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
