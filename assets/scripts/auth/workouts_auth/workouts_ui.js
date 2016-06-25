'use strict';

const app = require('../../app.js');

const createWorkoutSuccess = (data) => {
  console.log('New workout created!');
  app.user = data.user;
};

const createWorkoutFailure = (error) => {
  console.error(error);
};

const seeWorkoutsSuccess = (data) => {
  console.log('See all workout data', data);
};

const seeWorkoutsFailure = (error) => {
  console.error(error);
};



module.exports = {
  createWorkoutSuccess,
  createWorkoutFailure,
  seeWorkoutsSuccess,
  seeWorkoutsFailure,
};
