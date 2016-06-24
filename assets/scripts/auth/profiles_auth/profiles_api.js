'use strict';

const app = require('../../app.js');

const setProfile = (data) => {
  data.user_id = app.user.id;
  console.log("SetProfiles Ajax data  ", data);
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'profile': data
    }
  });
};

const updateProfile = (data) => {
  data.user_id = app.user.id;

  console.log ("App User data", app);
  // data.id = app.profiles;
  console.log("UpdateProfile Ajax data  ", data);
  return $.ajax({
    url: app.host + '/profiles/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'profile': data
    }
  });
};

module.exports = {
  setProfile,
  updateProfile,
};
