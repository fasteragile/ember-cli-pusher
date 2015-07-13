import Ember from 'ember';
import ENV from '../config/environment';
import { Controller } from 'ember-pusher/controller';

export default {
  name: 'pusher',
  initialize: function(container, app) {
    container.register('pusher:main', Controller);
  }
};
