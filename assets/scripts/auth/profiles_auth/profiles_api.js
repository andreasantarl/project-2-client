'use strict';

const app = require('../../app.js');

const setProfile = (first_name,last_name) => {
//console.log(app);
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
            "profile": {
                "user_id": app.user.id,
                 "first_name": first_name,
                 "last_name": last_name,
            }
          },
  });
};

const showProfile = (profile_id) => {
//  console.log(app);
  return $.ajax({
    url: app.host + '/profiles/' + app.user.profile.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateProfile = (first, last) => {
  //data.user_id = app.user.user_id;
  console.log(app);
  //console.log(data);
//  console.log("UpdateProfile Ajax data  ", data);
  return $.ajax({
    url: app.host + '/profiles/' + app.user.profile.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
            "profile": {
                 "first_name": first,
                 "last_name": last,
            }
          },
  });
};

module.exports = {
  setProfile,
  showProfile,
  updateProfile,
};
