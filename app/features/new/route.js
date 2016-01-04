import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';

const {get, set } = Ember;

export default Ember.Route.extend({
	actions: {
		save(title,body){
			let user = null;
			let titleURL= cleanURI(title);
			let uid = get(this,'session.uid');
			let date = new Date();
			let post = this.store.createRecord('post',{
				title: title,
				body: body,
				author: 'test',
				titleURL:titleURL,
				date: date 
			});

			user = getOrCreateUser(uid,get(this,'session.currentUser.username'), 
								   get(this,'session.currentUser.profileImageURL'), 
								   this.store);
			user.then((userData)=>{
				userData.get('posts').addObject(post);
				post.save().then(()=> {
					return userData.save();
				});

			});

			set(this, 'title','');
			set(this, 'body','');
			this.transitionTo('index');
		}
	}
});
