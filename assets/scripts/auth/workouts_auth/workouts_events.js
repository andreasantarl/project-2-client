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

const onSeeWorkouts = (event) => {
  event.preventDefault();
//  $(event.target).addClass('clicked');
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
  onSeeWorkouts(event);
};

const onEditWorkout = (event) => {
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
};

module.exports = {
  addHandlers,
  onEditWorkout,
  onDeleteWorkout,
};
