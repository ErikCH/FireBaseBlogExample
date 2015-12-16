import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	author: DS.attr('string'),
	comments: DS.hasMany('comment' ),
	titleURL: DS.attr('string')
  
});
