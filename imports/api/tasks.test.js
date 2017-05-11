import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      let taskId;

      it('creates a new task', () => {
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date()
        });
      })
    });
  });
}
