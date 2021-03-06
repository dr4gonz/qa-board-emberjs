import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        date: moment().format('h:mm a, M/D/YYYY'),
        body: this.get('body'),
        question: this.get('question'),
        vote: 0
      };
      this.set('author', null);
      this.set('body', null);
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
