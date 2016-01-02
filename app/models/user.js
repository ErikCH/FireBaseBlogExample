import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment')
});
