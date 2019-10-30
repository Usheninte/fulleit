import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import { Accounts } from 'meteor/accounts-base';

import { Eits } from './links';
import './methods';

if (Meteor.isServer) {
  describe('Eits', () => {
    describe('methods', () => {
      let userId = Random.id();
      const username = 'userzero';

      before(() => {
        // Create user if not already created
        let user = Meteor.users.findOne({ username: username });
        if (!user) {
          userId = Accounts.createUser({
            username: username,
            email: username,
            password: '1234567890',
          });
        } else {
          userId = eit._id;
        }
      });

      beforeEach(() => {
        Tasks.remove({});
        eitId = Eits.insert({
          firstname,
          surname,
          country,
          age,
          createdAt: new Date(),
          editor: Meteor.userId(),
        });
      });
    });
  });
}
