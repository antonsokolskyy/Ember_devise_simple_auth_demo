import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// Extends Ember.Route with ember-simple-auth's authenticated-route-mixin in order to show this route if session is authenticated
export default Ember.Route.extend(AuthenticatedRouteMixin);