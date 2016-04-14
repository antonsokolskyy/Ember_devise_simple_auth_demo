import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ENV from '../../config/environment';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function(params, transition) {

    let url = ENV.APP.confirmationEndpoint+'?confirmation_token='+transition.queryParams['confirmation_token'],
        self = this;

    let confirmEmail = new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        dataType: 'json',
        url: url,
        type: 'GET',
        success: function(response) {
          resolve(response);
        },
        error: function(xhr) {
          reject(xhr);
        }
      });
    });

    confirmEmail.then(function() {
      self.controller.set('successfulConfirmation', true);
    }, function(xhr) {
      self.parseErrorResponse(xhr);
      self.controller.set('successfulConfirmation', false);
    });
  },

  parseErrorResponse: function(xhr) {
    let errors = {};
    try {
      errors = Ember.$.parseJSON(xhr.responseText)["errors"];
    } catch (e) {
      errors["other"] = [xhr.statusText];
    }
    this.controller.set('errors', errors);
  }
});
