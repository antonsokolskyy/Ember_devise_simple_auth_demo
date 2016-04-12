import Ember from 'ember';
import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

// use Devise authenticator from ember-simple-auth
export default Devise.extend({
  serverTokenEndpoint: Ember.computed(function () {
    // from config/environment.js
    return ENV.APP.serverTokenEndpoint;
  })
});
