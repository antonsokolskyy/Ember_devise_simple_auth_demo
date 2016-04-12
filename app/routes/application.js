import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// extends Ember.Route with ember-simple-auth's application-route-mixin
export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    transitionToLoginRoute() {
      this.transitionTo('login');
    }
  }
});