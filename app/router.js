import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: '/:titleURL'}, function() {
    this.route('edit');
    this.route('comments');
  });
  this.route('new');
});

export default Router;
