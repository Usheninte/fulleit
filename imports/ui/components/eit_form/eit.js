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
    const firstname = target.firstname.value;
    const surname = target.surname.value;
    const country = target.country.value;
    const age = target.age.value;

    Meteor.call('eits.insert', firstname, surname, country, age);
  },
});
