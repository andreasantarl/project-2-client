'use strict';

const app = require('../../app.js');

const createNewWorkout = (data) => {
  data.user_id = app.user.id;
//  console.log("CreateWorkout Ajax data  ", data);
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

const seeWorkouts = () => {
    console.log("App data", app);
  //  console.log("Data data", data);
  return $.ajax({
    url: app.host + '/workouts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  createNewWorkout,
  seeWorkouts,
};
