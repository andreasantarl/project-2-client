'use strict';

const app = require('../../app.js');

const createNewWorkout = (data) => {
  data.user_id = app.user.id;
  //data.id = app.user.id;
  console.log("CreateWorkout Ajax data  ", data);
  return $.ajax({
    url: app.host + '/workouts',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'workouts': data
    }
  });
};

module.exports = {
  createNewWorkout,
};
