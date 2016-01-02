import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	titleURL: DS.attr('string'),
	comments: DS.hasMany('comment' ),
	user: DS.belongsTo('user'),
	date: DS.attr('date')
  
});
