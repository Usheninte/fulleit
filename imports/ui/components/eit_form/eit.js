import { Eits } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './eit.html';

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
    let firstname = target.firstname.value;
    let surname = target.surname.value;
    let country = target.country.value;
    let age = target.age.value;

    // add eit data to db
    Eits.insert({
      firstname,
      surname,
      country,
      age,
      createdAt: new Date(),
    });

    // clear form
    firstname = '';
    surname = '';
    country = '';
    age = '';
  },
});
