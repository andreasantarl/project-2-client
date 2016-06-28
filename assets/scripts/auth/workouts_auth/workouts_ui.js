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

const editWorkoutSuccess = () => {
    $("#see-workouts-button").click();
};

const deleteWorkoutSuccess = () => {
  console.log("Dete Workout Success appuser", app.user);
  $("#see-workouts-button").click();
};

const editWorkoutFailure = (error) => {
  console.error(error);
};

// const findWorkoutByDate = (date, data) => {
//   $("#see-workouts-by-date").html("Here are your workouts on the date: " + index.findWorkoutInformation(date, data));
// };

const onDeleteWorkout = (event) => {
event.preventDefault();
let buttonId = $(event.target).attr('data-id');
api.deleteWorkout(buttonId)
.done(deleteWorkoutSuccess)
.fail(deleteWorkoutFailure);
};

const onEditWorkout = (event) => {
    event.preventDefault();
    let buttonId = $(event.target).find('.edit-workout').attr('data-id');
    let data = getFormFields(event.target);
    data.workout.id = buttonId;
    data.workout.user_id = app.user.id;
    api.editWorkout(data)
    .done(editWorkoutSuccess)
    .fail();
};

// $('#see-workouts-button').on('click', function (event) {
//         $(this).addClass('Clicked');
//       });
//
// $('#find-workout-button').on('click', function (event) {
//   event.preventDefault();
//         $(this).addClass('Clicked');
//       });

const findWorkoutByDate = (data) => {
  let date = $('#date-to-find').val();
console.log("workout date data:", date, data);
let workoutInfo = '<br>';
 for (let i = 0; i < data.workouts.length; i++) {
   let workout = data.workouts[i];
      let workoutDate = data.workouts[i].cardio_date;
      console.log("workout date: ", workoutDate);
      console.log("date passed:", date);
      if (date === workoutDate) {
        workoutInfo += "<input class='delete-workout' id='" + i + "' type='submit' name='submit' value='Delete workout'><br>Date: " + workout.cardio_date + "<br>";
          workoutInfo += "Description: " + workout.cardio_desc + "<br>";
          if (workout.cardio_duration !== '' && workout.cardio_duration !== null) {
           workoutInfo += "Duration: " + workout.cardio_duration + "<br>";
         }
          if (workout.cardio_distance !== '' && workout.cardio_distance !== null) {
            workoutInfo += "Distance: " + workout.cardio_distance + "<br>";
          }
          if (workout.cardio_notes !== '' && workout.cardio_notes !== null) {
            workoutInfo += "Notes: " + workout.cardio_notes + "<br>";
          }
          workoutInfo += "<br>";
         }
         if(workoutInfo === '<br>') {
         workoutInfo += "Please choose a date with a workout";
         }
       }
       return workoutInfo;
};

const seeWorkoutsSuccess = (data) => {
  app.user.workouts = data.workouts;
//   $('#see-workouts-button').on('click', function (event) {
//         //  $(this).addClass('Clicked');
//           $('#view-workouts').html('');
//            $('#view-workouts').html(workoutTemplate(app.user));
//            $('.delete-workout').on('click', onDeleteWorkout);
//            $('.workout-display').on('submit', onEditWorkout);
//         });
//
//   // $('#find-workout').on('click', function (event) {
//   //   debugger;
//   //   //  event.preventDefault();
//   //         $("#find-workout-button").addClass('Clicked');
//   //         let date = $('#date-to-find').val();
//   //         findWorkoutByDate(date, data);
//   //        });
//   $("#find-workout-button").on('click', findWorkoutByDate);
// //   if ($('#find-workout-button').hasClass('clicked')) {
// //
// //if (("#see-workouts-button").hasClass('Clicked'))
// // {
 $('#view-workouts').html('');
  $('#view-workouts').html(workoutTemplate(app.user));
  $('.delete-workout').on('click', onDeleteWorkout);
  $('.workout-display').on('submit', onEditWorkout);
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
