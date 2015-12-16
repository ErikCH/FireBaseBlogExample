import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		return this.store.query('post', {orderBy: 'titleURL',equalTo: param.titleURL });
	}
});
