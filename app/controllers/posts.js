import Ember from 'ember';
import cleanURI from '../utils/clean';

export default Ember.Controller.extend({
	actions: {
		edit: function(){
			this.set('isEditing',true);
		},
	    delete: function(){
			this.get('model').forEach(function(model){
				model.deleteRecord();
			});
			this.get('model').save();
			this.set('isEditing',false);
			this.transitionToRoute('index');
		},
	   save: function(){
			this.get('model').forEach(function(model){
				let titleURL = cleanURI(model.get('title'));
				model.set('titleURL',titleURL);
				model.save();
			});
			this.set('isEditing',false);
			this.transitionToRoute('index');
	   }
	}
});
