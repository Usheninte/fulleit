// import { Eits } from '/imports/api/links/links.js';
// import { Meteor } from 'meteor/meteor';
// import './info.html';

// Template.info.onCreated(function() {
//   Meteor.subscribe('eits.all');
// });

// Template.info.helpers({
//   eits() {
//     return Eits.find({});
//   },
// });

// Template.info.events({
//   'submit .info-link-add'(event) {
//     event.preventDefault();

//     const target = event.target;
//     const title = target.title;
//     const url = target.url;

//     Meteor.call('eits.insert', title.value, url.value, error => {
//       if (error) {
//         alert(error.error);
//       } else {
//         title.value = '';
//         url.value = '';
//       }
//     });
//   },
// });
