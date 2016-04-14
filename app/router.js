import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('protected');
  this.route('registration');

  this.route('users', function() {
    this.route('confirmation');
  });
});

export default Router;
