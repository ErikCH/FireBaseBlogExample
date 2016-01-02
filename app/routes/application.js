import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({
	beforeModel(){
		return get(this,'session').fetch().catch(function(){});
	},
	model(){
		return this.store.findAll('post');
	},
	actions:{
		login(){
			get(this,'session').open('firebase', { provider: 'twitter'}).then(function(data) {
			      });
		},
		logout(){
			get(this,'session').close();
		}	   
	}
});
