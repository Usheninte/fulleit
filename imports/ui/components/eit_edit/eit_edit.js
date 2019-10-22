import { Eits } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './eit_edit.html';

Template.eit.onCreated(function() {
  Meteor.subscribe('eits.all');
});

Template.eit.helpers({
  eits() {
    return Eits.find({}, { sort: { createdAt: -1 } });
  },
});
