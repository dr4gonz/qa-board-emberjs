import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  routing: Ember.inject.service('-routing'),
  actions: {
    showUpdateForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
      };
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      this.set('updateQuestionForm', false);
      question.save();
    },
    deleteQuestion(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        var answer_deletions = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return question.destroyRecord();
        });
      }
      this.get('routing').transitionTo('index');
    }
  }
});
