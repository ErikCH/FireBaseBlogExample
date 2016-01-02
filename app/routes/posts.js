import Ember from 'ember';
import cleanURI from '../utils/clean';
import getOrCreateUser from '../utils/get-or-create-user';
const {get} = Ember;

export default Ember.Route.extend({
	model(param) {
		return this.store.query('post', {orderBy: 'titleURL',equalTo: param.titleURL });
	},
	   actions:{
		   delete(post){
			   post.deleteRecord();
			   post.save();
			   this.transitionTo('index');
		   },
	   save(post){
		   let titleURL = cleanURI(post.get('title'));
		   post.set('titleURL',titleURL);
		   post.save();
		   this.transitionTo('index');
	   },
	   createComment(author, body,post){
		   let user = null;
		   let comment = this.store.createRecord('comment', {
			   body: body
		   });
		   let uid = author.get('uid');
		   user = getOrCreateUser(uid,
				   get(this,'session.currentUser.username'), 
				   get(this,'session.currentUser.profileImageURL'), 
				   this.store);

		   user.then((userData)=>{
			   userData.get('comments').addObject(comment);
			   post.get('comments').addObject(comment);
			   console.log('test');
			   return comment.save().then(()=>{
										console.log('comment saved succesfully');
										return post.save();
									})
									.catch((error)=>{
										console.log(`comment:  ${error}`);
										comment.rollbackAttributes();
									})
									.then(()=>{
										console.log('post saved successfuly');
										return userData.save();
									})
									.catch((error)=>{
										console.log(`post:  ${error}`);
										post.rollbackAttributes();
								    })
									.then(()=>{
										console.log('user saved successfuly');
									})
									.catch((error)=>{
										console.log(`user:  ${error}`);
										user.rollbackAttributes();
								    });


		   });

	   }
   }
});
