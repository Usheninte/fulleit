import { Eits } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './eit.html';

Template.eit.onCreated(function() {
  Meteor.subscribe('eits.all');
});

Template.eit.helpers({
  eits() {
    return Eits.find({});
  },
});

Template.eit.events({
  'submit .eit-add'(event) {
    event.preventDefault();

    const target = event.target;
    // collect form data
    const firstname = target.firstname;
    const surname = target.surname;
    const country = target.country;
    const age = target.age;

    Meteor.call(
      'eits.insert',
      firstname.value,
      surname.value,
      country.value,
      age.value,
      error => {
        if (error) {
          alert(error.error);
        } else {
          firstname.value = '';
          surname.value = '';
          country.value = '';
          age.value = '';
        }
      },
    );
  },
});
