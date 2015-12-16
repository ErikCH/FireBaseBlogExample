import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('post');
	},
	actions:{
		login: function(){
			this.get('session').open('firebase', { provider: 'twitter'}).then(function(data) {
			      });
		},
		logout: function(){
			this.get('session').close();
		}	   
	}
});
