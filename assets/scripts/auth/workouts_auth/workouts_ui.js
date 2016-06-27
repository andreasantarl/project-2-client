'use strict';

const app = require('../../app.js');
const index = require('../../workouts_index.js');
//const getFormFields = require('../../../../lib/get-form-fields');

const createWorkoutSuccess = (data) => {
//  console.log('New workout created!');
  app.user = data.user;
  $('.clear_field').val('');
};

const createWorkoutFailure = (error) => {
  console.error(error);
};

const seeWorkoutsAll = (data) => {
 $('#view-workouts').html("Check out all of the hard work you've put in: <br><br>" + index.workoutIterator(data.workouts));
};

//attempt- failed- at using handlebars
//   let seeWorkoutsAll = (workouts) => {
//     let workoutListingTemplate = require('../../templates/display_workouts_buttons.handlebars');
//     $('#view-workouts').html(workoutListingTemplate(workouts));
// };

const findWorkoutByDate = (date, data) => {
  $("#see-workouts-by-date").html("Here are your workouts on the date: " + index.findWorkoutInformation(date, data));
};

const seeWorkoutsSuccess = (data) => {
  app.user = data.user;
  if ($('#find-workout-button').hasClass('clicked')) {
    let date = $('#date-to-find').val();
    findWorkoutByDate(date, data);
  }
  if ($('#see-workouts-button').hasClass('clicked')) {
    seeWorkoutsAll(data);
  }
};


const seeWorkoutsFailure = (error) => {
  console.error(error);
};

module.exports = {
  createWorkoutSuccess,
  createWorkoutFailure,
  seeWorkoutsSuccess,
  seeWorkoutsFailure,
};
