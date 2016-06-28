'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./workouts_api.js');
const ui = require('./workouts_ui.js');

const onCreateWorkout = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createNewWorkout(data)
  .done(ui.createWorkoutSuccess)
  .fail(ui.createWorkoutFailure);
};

// const addClassClicked = (event) => {
//   $(event.target).addClass('clicked');
// };

const onSeeWorkouts = (event) => {
  event.preventDefault();
  api.seeWorkouts()
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};


const onDeleteWorkout = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  api.deleteWorkout(buttonId)
  .done(ui.deleteWorkoutSuccess)
  .fail(ui.deleteWorkoutFailure);
  api.seeWorkouts()
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};

const onEditWorkout = (event) => {
  event.preventDefault();
  console.log('here');
};

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
  $('#find-workout').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
};

module.exports = {
  addHandlers,
  onEditWorkout,
  onDeleteWorkout,
};
