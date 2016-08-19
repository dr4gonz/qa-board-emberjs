import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.query('question', {
        orderBy: 'date'
      }).then((response) => {
        return response.toArray().reverse();
      }),
    });
  }
});
