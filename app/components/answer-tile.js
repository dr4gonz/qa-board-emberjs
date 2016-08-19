import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      var params = {
        vote: answer.get('vote')
      };
      answer.set('vote', parseInt(params['vote']+1));
      answer.save();
    },
    downvote(answer) {
      var params = {
        vote: answer.get('vote')
      };
      answer.set('vote', parseInt(params['vote']-1));
      answer.save();
    }

  }
});
