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
  //debugger;
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  api.deleteWorkout(buttonId)
  .done(ui.deleteWorkoutSuccess)
  .fail(ui.deleteWorkoutFailure);
  onSeeWorkouts(event);

//update app.user

  // $('.delete-workout').on('click', function(event){
  //   event.preventDefault();
  //   let buttonId = $(event.target).attr('data-id');
  //   api.deleteWorkout(buttonId)
  //   .done(deleteWorkoutSuccess)
  //   .fail(deleteWorkoutFailure);
  // });
};

const onEditWorkout = (event) => {
  // event.preventDefault();
  // console.log('here');
  //
  // $('.workout-display').on('submit', function(event){
    event.preventDefault();
    let buttonId = $(event.target).find('.edit-workout').attr('data-id');
    let data = getFormFields(event.target);
    data.workout.id = buttonId;
    data.workout.user_id = app.user.id;
    api.editWorkout(data)
    .done(ui.editWorkoutSuccess)
    .fail();
    api.seeWorkouts()
    .done(ui.seeWorkoutsSuccess)
    .fail(ui.seeWorkoutsFailure);
};

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout);
  $('#see-workouts').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
  // $('#find-workout').on('submit', onSeeWorkouts);//.on('click', addClassClicked);
  // $('.delete-workout').on('click', onDeleteWorkout);
  // $('.workout-display').on('submit', onEditWorkout);
};

module.exports = {
  addHandlers,
  onEditWorkout,
  onDeleteWorkout,
};
