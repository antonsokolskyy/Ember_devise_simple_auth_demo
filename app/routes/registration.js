import Ember from 'ember';
// This mixin is used to make routes accessible only if the session is not authenticated
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin);
