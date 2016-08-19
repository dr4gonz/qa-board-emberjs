import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.store(),
  title: DS.store(),
  body: DS.store(),
  answers: DS.hasMany('answer', {async: true})
});
