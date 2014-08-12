import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GreenfieldENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('documents', function() {
    this.route('show', { path: ':document_id' });
    this.route('new');
  });
});

export default Router;
