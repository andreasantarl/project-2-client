'use strict';

const api = require('./workouts_api.js');
const app = require('../../app.js');
const workoutTemplate = require('../../templates/display_workouts_buttons.handlebars');
const getFormFields = require('../../../../lib/get-form-fields');

const createWorkoutSuccess = (data) => {
  $('.clear_field').val('');
  console.log("CreateWorkout data: ", data);
};

const createWorkoutFailure = (error) => {
  console.error(error);
};

const seeWorkoutsAll = (data) => {
 // $('#view-workouts').html("Check out all of the hard work you've put in: <br><br>" + index.workoutIterator(data));
};

const deleteWorkoutFailure = (error) => {
  console.error(error);
};

const editWorkoutSuccess = (data) => {
  console.log(data);
};

const editWorkoutFailure = (error) => {
  console.error(error);
};

const findWorkoutByDate = (date, data) => {
  console.log("workout date data:", date, data);
  $("#see-workouts-by-date").html("Here are your workouts on the date: " + index.findWorkoutInformation(date, data));
};



const seeWorkoutsSuccess = (data) => {
  app.user.workouts = data.workouts;

  $('#view-workouts').html('');
  $('#view-workouts').html(workoutTemplate(app.user));

  $('.delete-workout').on('click', function(event){
    event.preventDefault();
    let buttonId = $(event.target).attr('data-id');
    api.deleteWorkout(buttonId)
    .done(deleteWorkoutSuccess)
    .fail(deleteWorkoutFailure);
  });

  $('.workout-display').on('submit', function(event){
    event.preventDefault();
    let buttonId = $(event.target).find('.edit-workout').attr('data-id');
    let data = getFormFields(event.target);
    data.workout.id = buttonId;
    data.workout.user_id = app.user.id;
    api.editWorkout(data)
    .done(editWorkoutSuccess)
    .fail();
  });
};

const deleteWorkout = (event) => {
  workoutEvents.onDeleteWorkout();
};


const deleteWorkoutSuccess = () => {
  console.log("Deleted!");
  api.seeWorkouts()
  .done(seeWorkoutsSuccess)
  .fail();
};

const seeWorkoutsFailure = (error) => {
  console.error(error);
};



module.exports = {
  createWorkoutSuccess,
  createWorkoutFailure,
  seeWorkoutsSuccess,
  seeWorkoutsFailure,
  deleteWorkoutSuccess,
  deleteWorkoutFailure,
  editWorkoutSuccess,
  editWorkoutFailure,
};
