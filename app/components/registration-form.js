import Ember from 'ember';

import ENV from '../config/environment';

export default Ember.Component.extend({
  successfulRegistration: false,

  actions: {
    register: function () {
      let self = this;

      let data = { user: {
          password_confirmation: this.get('password_confirmation'),
          password: this.get('password'),
          email: this.get('email')
        }
      };

      let promise = new Ember.RSVP.Promise(function (resolve, reject) {
        Ember.$.ajax({
          dataType: 'json',
          url: ENV.APP.registrationEndpoint,
          data: data,
          type: 'POST',
          success: function(response) {
            resolve(response);
          },
          error: function(xhr, textStatus) {
            reject(textStatus);
          }
        });
      });

      promise.then(function() {
        self.set('successfulRegistration', true);
        self.set('registrationError', false);
      }, function() {
        self.set('registrationError', true);
      });

    }

  }
});
