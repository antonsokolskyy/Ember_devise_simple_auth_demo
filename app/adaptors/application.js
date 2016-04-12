import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

// Adapter determines how data is persisted to a backend data store
// In this case we use JSON API Adapter from new DataAdapterMixin

// Extends DataStore JSON API Adapter with ember-simple-auth's data-adapter-mixin
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  // from config/environment.js
  host: ENV.APP.host,
  headers: {
    "ACCEPT": "application/vnd.api+json"
  }
});
