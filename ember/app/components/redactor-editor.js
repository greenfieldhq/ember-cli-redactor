import Ember from 'ember';

var RedactorEditorComponent = Ember.Component.extend({
  actions: {
    save: function() {
      this.sendAction();
    }
  },
  didInsertElement: function() {
    this._super();
    Ember.$('.redactor_content').redactor({
        air: true
    });
  }
});

export default RedactorEditorComponent;
