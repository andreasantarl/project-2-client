'use strict';

const app = require('../../app.js');

const setProfile = (data) => {
  data.user_id= app.user.id;
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

const showProfile = () => {
  console.log("App data", app);
  return $.ajax({
    url: app.host + '/profiles/' + app.user.profile.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const updateProfile = (data) => {
//   console.log("Update profile data : ", data);
//   //data.user_id = app.user.user_id;
//   data.id = app.user.id;
//   console.log ("App User data", app);
//   // data.id = app.profiles;
//   console.log("UpdateProfile Ajax data  ", data);
//   return $.ajax({
//     url: app.host + '/profiles/' + app.user_id,
//     method: "PATCH",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: {
//       'profile': data
//     }
//   });
// };

module.exports = {
  setProfile,
  showProfile,
  // updateProfile,
};
