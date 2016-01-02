import Ember from 'ember';
const {get, set} = Ember;

export default Ember.Component.extend({
	isEditing: false,
	   classNames: 'edit',
	   isAllowed: Ember.computed('model.firstObject.user.username','session.currentUser.username', function(){
		return get(this,'model.firstObject.user.username') === get(this,'session.currentUser.username');
	   }),
	   actions:{
		   save(post){
			   let sessionName = get(this,'session.currentUser.username');
			   if(sessionName === post.get('user.username')){
				   set(this, 'isEditing', false);
				   this.setProperties({
					   body: '',
					   post: ''
				   });
				   this.sendAction('save',post);

			   }
			   else{
				   alert('Sorry not authorized');
			   }

		   },
	    edit(){
			set(this, 'isEditing', true);
		},
		delete(post){
				this.sendAction('delete',post);
				set(this,'isEditing',false);
		},
		createComment(author, body, post){
			this.sendAction('createComment',author, body, post);
		}	
	}
});
