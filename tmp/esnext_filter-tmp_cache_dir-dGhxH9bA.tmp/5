import Ember from 'ember';

export default Ember.Component.extend({
  paste: function(e) {
    this.set('pastedText', e.originalEvent.clipboardData.getData('text/plain') || e.originalEvent.clipboardData.getData('text/html'));
  }
});
