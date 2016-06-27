'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./workouts_api.js');
const ui = require('./workouts_ui.js');
// const app = require('./../../app');
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
  debugger;
  let buttonId = $(event.target).attr('data-id');
  // console.log("Delete button id: ", buttonId);
  // console.log("Delete data: ", app.user);
  api.deleteWorkout(buttonId)
  .done(ui.deleteWorkoutSuccess)
  .fail(ui.deleteWorkoutFailure);
  //event.onSeeWorkouts();
  api.seeWorkouts()
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};

const onEditWorkout = (event) => {
  //debugger;
  event.preventDefault();
  console.log('here');
  // let buttonId = $(event.target).attr('id');
  // let data = getFormFields(event.target);
  // console.log("datea ", data);
  // api.editWorkout(data, buttonId)
  // .done(ui.editWorkoutSuccess)
  // .fail(ui.editWorkoutFailure);

  //event.onSeeWorkouts();
};

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
  $('#find-workout').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
//  $('.delete-workout').on('click', onDeleteWorkout);
  //$('#view-workouts.fieldset.edit-workout').on('submit',onEditWorkout);
  // $('#view-workouts').on('click', 'input.edit-workout', onEditWorkout);
  //$('#find-workout').on('click', onDeleteWorkout);
};

module.exports = {
  addHandlers,
  onEditWorkout,
  onDeleteWorkout,
};
