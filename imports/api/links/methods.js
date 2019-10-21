// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Eits } from './links.js';

Meteor.methods({
  'eits.insert'(firstname, surname, country, age) {
    check(firstname, String);
    check(surname, String);
    check(country, String);
    check(age, String);

    return Eits.insert({
      firstname,
      surname,
      country,
      age,
      createdAt: new Date(),
    });
  },

  'eits.remove'(_id) {
    return Eits.remove({});
  },
});
