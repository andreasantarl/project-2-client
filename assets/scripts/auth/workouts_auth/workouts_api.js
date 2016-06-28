'use strict';

const app = require('../../app.js');

const createNewWorkout = (data) => {
  data.user_id = app.user.id;
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
  return $.ajax({
    url: app.host + '/users/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const seeWorkouts = () => {
//   return $.ajax({
//     url: app.host + '/workouts',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

const deleteWorkout = (buttonId) => {
  return $.ajax({
    url: app.host + '/workouts/' + buttonId,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const editWorkout = (data) => {
  console.log("UpdateWorkout Ajax data  ", data);
  return $.ajax({
    url: app.host + '/workouts/' + data.workout.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const workoutsByDate = (data) => {
  return $.ajax({
    url: app.host + '/workouts/find/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  createNewWorkout,
  seeWorkouts,
  deleteWorkout,
  editWorkout,
  workoutsByDate,
};
