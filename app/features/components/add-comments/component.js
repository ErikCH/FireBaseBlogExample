import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		submitComment(author, body){
			alert(author);
			alert(body);
			let post = this.get('post');
			this.sendAction('store',author,body,post);
			this.setProperties({
				body: ''
			});
		}
	}
});
