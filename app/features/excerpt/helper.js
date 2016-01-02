import Ember from 'ember';

export function excerpt(params) {
  return params[0].substring(0,15)+'...';
}

export default Ember.Helper.helper(excerpt);
