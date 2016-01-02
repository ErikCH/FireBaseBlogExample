import Ember from 'ember';

export default Ember.Component.extend({
	post: {},
	classNames: 'new',
	actions:{
		save(post){
			this.sendAction('save',post.title, post.body);
			Ember.set(this,'post.title','');
			Ember.set(this,'post.body','');

		}
	}
});
