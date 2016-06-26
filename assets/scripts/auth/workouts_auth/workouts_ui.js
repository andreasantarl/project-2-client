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
  // let displayBooks = function(books){
  //   let bookListingTemplate = require('../templates/book-listing.handlebars');
  //     $('.content').text("");
  //     $('.content').append(bookListingTemplate(books));
  //   };
};

const findWorkoutByDate = (date, data) => {
  $("#see-workouts-by-date").html("Here are your workouts on the date: " + index.findWorkoutInformation(date, data));
};

const seeWorkoutsSuccess = (data) => {
  app.user = data.user;
  if ($('#find-workout').hasClass('clicked')) {
    let date = $('#date-to-find').val();
    findWorkoutByDate(date, data);
  }
  if ($('#see-workouts').hasClass('clicked')) {
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
