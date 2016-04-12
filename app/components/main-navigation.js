import Ember from 'ember';

export default Ember.Component.extend({
  // inject session service
  session: Ember.inject.service('session'),
  actions: {
    login() {
      // send action which is transitionToLoginRoute
      this.sendAction('login');
    },
    logout() {
      // invalidate session
      this.get('session').invalidate();
    }
  }
});
