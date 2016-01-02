import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		submitComment(author, body){
			let post = this.get('post');
			//this.attrs.store(author,body,post);
			this.sendAction('store',author,body,post);
			this.setProperties({
				body: ''
			});
		}
	}
});
