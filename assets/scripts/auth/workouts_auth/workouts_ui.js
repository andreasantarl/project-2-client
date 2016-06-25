'use strict';

const app = require('../../app.js');
const index = require('../../workouts_index.js');

const createWorkoutSuccess = (data) => {
  console.log('New workout created!');
  app.user = data.user;
};

const createWorkoutFailure = (error) => {
  console.error(error);
};

const seeWorkoutsSuccess = (data) => {
  console.log('See all workout data', data);
  $('#view-workouts').html("Check out all of the hard work you've put in: <br><br>" + index.workoutIterator(data.workouts));
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
