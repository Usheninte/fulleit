import { Eits } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';

import './eit.html';

import '../../../startup/client/routes';

Template.eit.onCreated(function() {
  Meteor.subscribe('eits.all');
});

Template.eit.helpers({
  eits() {
    return Eits.find({}, { sort: { createdAt: -1 } });
  },
});

Template.eit.events({
  'submit .eit-add'(event) {
    event.preventDefault();

    // collect form data
    let target = event.target;
    let firstname = target.firstname;
    let surname = target.surname;
    let country = target.country;
    let age = target.age;

    // add eit data to db
    Meteor.call(
      'eits.insert',
      firstname.value,
      surname.value,
      country.value,
      age.value,
    );

    // clear form
    firstname.value = '';
    surname.value = '';
    country.value = '';
    age.value = '';
  },
});

Template.eit.events({
  'click .toggle-checked'() {
    Meteor.call('eits.setChecked', this._id, !this.checked);
  },

  'click .delete'() {
    event.preventDefault(event);
    Meteor.call('eits.remove', this._id);
  },

  'click .bulk-delete'() {
    Meteor.call('eits.bulkDelete');
  },

  'click .edit-btn'() {
    Meteor.call('eits.edit', this._id);
  },
});
