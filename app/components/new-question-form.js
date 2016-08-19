import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        date: moment().format('h:mm a, M/D/YYYY'),
      };
      this.sendAction('createPost', params);
    }
  }
});
