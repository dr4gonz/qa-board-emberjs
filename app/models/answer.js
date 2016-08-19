import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.store(),
  body: DS.store(),
  question: DS.belongsTo('question', {async: true})
});
