import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', function() {
    this.route('new');

    this.route('comment', function() {
      this.route('new');
    });
  });
});

export default Router;
