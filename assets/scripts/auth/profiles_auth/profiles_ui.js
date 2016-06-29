'use strict';

const profileTemplate = require('../../templates/profile.handlebars');

const app = require('../../app.js');

const profileSuccess = (data) => {
  console.log('Profile created!');
  app.user.profile = data.profile;
};

const profileFailure = (error) => {
  console.error(error);
};

const profileUpdateSuccess = (data) => {
  console.log('Profile data:', data);
  //app.user = data.user; //

//  app.user = data.user;
};

const profileUpdateFailure = (error) => {
  console.error(error);
};

const showProfileSuccess = (data) => {
//  let profileId = data.user_id;
//app.user = data.user; //
  console.log("Show profile data:", data);
  // //let profile_user = profile.user_id;

    //$("#view-profile").html(profileTemplate(data));
   $("#view-profile").html("Profile Data: <br> First Name: " + data.profile.first_name + "<br>Last Name: " + data.profile.last_name);
};

const profileShowFailure = (error) => {
  console.error(error);
};

module.exports = {
  profileSuccess,
  profileFailure,
  profileUpdateSuccess,
  profileUpdateFailure,
  showProfileSuccess,
  profileShowFailure,
};
