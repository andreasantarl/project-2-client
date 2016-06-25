'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./workouts_api');
const ui = require('./workouts_ui');

const onCreateWorkout = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("Create workout data", data);
  api.createNewWorkout(data)
  .done(ui.createWorkoutSuccess)
  .fail(ui.createWorkoutFailure);
};

const onSeeWorkouts = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("Create workout data", data);
  api.seeWorkouts(data)
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts);
  $('#find-workout').on('submit', onFindWorkout);
};

module.exports = {
  addHandlers,
};
