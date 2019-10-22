// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { FlowRouter } from 'meteor/kadira:flow-router';
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
    return Eits.remove({
      _id,
    });
  },

  'eits.setChecked'(_id, checked) {
    return Eits.update(_id, {
      $set: { checked: checked },
    });
  },

  'eits.bulkDelete'() {
    const checkedEits = Eits.find({ checked: true }).fetch();

    checkedEits.forEach(function(selected) {
      Eits.remove(selected._id);
    });
  },

  'eits.edit'(_id) {
    let id = FlowRouter.getParam(id);
    return Eits.findOne({ _id: id });
  },
});
