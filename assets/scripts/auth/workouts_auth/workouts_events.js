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

const addClassClicked = (event) => {
  $(event.target).addClass('clicked');
};

const onSeeWorkouts = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.seeWorkouts(data)
  .done(ui.seeWorkoutsSuccess)
  .fail(ui.seeWorkoutsFailure);
};
// (function(event){
//   console.log(event.target.id);
// });

const onDeleteWorkout = (event) => {
  console.log("Billshue");
  event.preventDefault();
  let buttonId = $('.delete-workout').attr('id');
  console.log("Delete button id: ", buttonId);

};



const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts).on('click', addClassClicked);
  $('#find-workout').on('submit', onSeeWorkouts).on('click', addClassClicked);
  $('.delete-workout').on('submit', onDeleteWorkout);
};

module.exports = {
  addHandlers,
};
