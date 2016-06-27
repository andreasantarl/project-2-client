'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./workouts_api');
const ui = require('./workouts_ui');
//const index = require('./../../workouts_index');

const onCreateWorkout = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createNewWorkout(data)
  .done(ui.createWorkoutSuccess)
  .fail(ui.createWorkoutFailure);
};

const onSeeWorkouts = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.seeWorkouts(data)
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts).on('click', function() {
    $(this).addClass('clicked');
  });
  $('#find-workout').on('submit', onSeeWorkouts).on('click', function() {
    $(this).addClass('clicked');
  });
  $('#')
};

module.exports = {
  addHandlers,
};
