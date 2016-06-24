'use strict';

const app = require('../../app.js');

const profileSuccess = (data) => {
  console.log('Profile created!');
  app.user = data.user;
};

const profileFailure = (error) => {
  console.error(error);
};

// const profileUpdateSuccess = (data) => {
//   console.log('Profile updated!!');
//   app.user = data.user;
// };
//
// const profileUpdateFailure = (error) => {
//   console.error(error);
// };

const showProfileSuccess = (data) => {
//  let profileId = data.user_id;

  console.log("Show profile data:", data);
  // //let profile_user = profile.user_id;
  // $("#display-profile").append(profile);
};

const profileShowFailure = (error) => {
  console.error(error);
};

module.exports = {
  profileSuccess,
  profileFailure,
  // profileUpdateSuccess,
  // profileUpdateFailure,
  showProfileSuccess,
  profileShowFailure,
};
