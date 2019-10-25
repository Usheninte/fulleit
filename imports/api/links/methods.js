// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Eits } from './links.js';

Meteor.methods({
  'eits.insert'(firstname, surname, country, age) {
    if (!Meteor.user()) {
      return new Meteor.Error('Permission Denied');
    }

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
      editor: Meteor.userId(),
    });
  },

  'eits.remove'(_id) {
    if (!Meteor.user()) {
      return new Meteor.Error('Permission Denied');
    }

    let eit = Eits.findOne({ _id });

    if (Meteor.user() !== eit.editor) {
      return new Meteor.Error(
        'Permission Denied: You did not create this EIT.',
      );
    }

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
    if (!Meteor.user()) {
      return new Meteor.Error('Permission Denied');
    }

    const checkedEits = Eits.find({ checked: true }).fetch();

    checkedEits.forEach(function(selected) {
      Eits.remove(selected._id);
    });
  },

  'eits.setEdit'(_id) {
    let id = FlowRouter.getParam(id);
    return Eits.findOne({ _id: id });
  },

  'eits.edit'(_id, firstname, surname, country, age) {
    if (!Meteor.user()) {
      return new Meteor.Error('Permission Denied');
    }

    let eit = Eit.findOne({ _id });

    if (Meteor.user() !== eit.editor) {
      return new Meteor.Error(
        'Permission Denied: You did not create this EIT.',
      );
    }

    Eits.update(_id, {
      $set: {
        firstname: firstname,
        surname: surname,
        country: country,
        age: age,
      },
    });
  },
});
