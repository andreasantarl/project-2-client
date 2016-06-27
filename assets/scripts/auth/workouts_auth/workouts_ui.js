'use strict';

const api = require('./workouts_api.js');
const app = require('../../app.js');
// const index = require('../../workouts_index.js');
// const workoutEvents = require('./workouts_events.js');
const workoutTemplate = require('../../templates/display_workouts_buttons.handlebars');
const ui = require('./workouts_ui.js');

//const events = require('./workouts_events.js');
const getFormFields = require('../../../../lib/get-form-fields');

const createWorkoutSuccess = (data) => {
//  console.log('New workout created!');
//  app.user = data.user;
  $('.clear_field').val('');
  console.log("CreateWorkout data: ", data);
};

const createWorkoutFailure = (error) => {
  console.error(error);
};

const seeWorkoutsAll = (data) => {
 // $('#view-workouts').html("Check out all of the hard work you've put in: <br><br>" + index.workoutIterator(data));
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
    app.user.id = data.user_id;
    let buttonId = $(this).find('[type="hidden"]').val();
    let data = getFormFields(event.target);
    api.editWorkout(data, buttonId)
    .done(editWorkoutSuccess)
    .fail();
  });
  // if ($('#find-workout-button').hasClass('clicked')) {
  //   let date = $('#date-to-find').val();
  //   findWorkoutByDate(date, data);
  // }
  // if ($('#see-workouts-button').hasClass('clicked')) {
  //   // seeWorkoutsAll(data);
  // }
  // $('.edit-workout').on('submit', events.onEditWorkout);
  // $('.delete-workout').on('submit', events.onDeleteWorkout);
};

const deleteWorkout = (event) => {
  workoutEvents.onDeleteWorkout();
  // event.preventDefault();
  // let buttonId = $(event.target).attr('data-id');
  // api.deleteWorkout(buttonId)
  // .done(deleteWorkoutSuccess)
  // .fail(deleteWorkoutFailure);
};


const seeWorkoutsFailure = (error) => {
  console.error(error);
};

const deleteWorkoutSuccess = () => {
  console.log("Deleted!");
  // app.user.workouts[buttonId].id = null;
  api.seeWorkouts()
  .done(seeWorkoutsSuccess)
  .fail();
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
