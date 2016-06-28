'use strict';

const app = require('../../app.js');

const setProfile = (data) => {
  data.user_id= app.user.id;
//  console.log("SetProfiles Ajax data  ", data);
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

const showProfile = (profile_id) => {
  return $.ajax({
    url: app.host + '/profiles/' + profile_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateProfile = (data) => {
  data.user_id = app.user.user_id;
  console.log("UpdateProfile Ajax data  ", data);
  return $.ajax({
    url: app.host + '/profiles/' + app.user.profile.id,
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
  showProfile,
  updateProfile,
};
