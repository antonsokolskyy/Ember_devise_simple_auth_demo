import Ember from 'ember';

export default Ember.Component.extend({
  // inject session service
  session: Ember.inject.service('session'),
  actions: {
    authenticateWithDevise() {
      // read credentials
      let { identification, password } = this.getProperties('identification', 'password');
      // call session's method authenticate with devise authenticator ans credentials as parameters
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) =>{
        // catch error
        this.set('errorMessage', reason.error);
      });
    }
  }
});
