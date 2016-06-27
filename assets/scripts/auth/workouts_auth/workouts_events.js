'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./workouts_api');
const ui = require('./workouts_ui');
const app = require('./../../app');
//const index = require('./../../workouts_index');

const onCreateWorkout = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createNewWorkout(data)
  .done(ui.createWorkoutSuccess)
  .fail(ui.createWorkoutFailure);
};

const addClassClicked = (event) => {
  $(event.target).addClass('clicked');
};

const onSeeWorkouts = (event) => {
  event.preventDefault();
  //let data = getFormFields(event.target);
  api.seeWorkouts()
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};


const onDeleteWorkout = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('id');
  console.log("Delete button id: ", buttonId);
  api.deleteWorkout(buttonId)
  .done(ui.deleteWorkoutSuccess)
  .fail(ui.deleteWorkoutFailure);
};


const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts).on('click', addClassClicked);
  $('#find-workout').on('submit', onSeeWorkouts).on('click', addClassClicked);
  $('#view-workouts').on('click', onDeleteWorkout);
  //$('#find-workout').on('click', onDeleteWorkout);
};

module.exports = {
  addHandlers,
};
