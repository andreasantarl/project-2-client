// 'use strict';
//
// const events = require('./auth/workouts_auth/workouts_events.js');
// const workoutTemplate = require('./templates/display_workouts_buttons.handlebars');
//
// // const eventHandler = () => {
// //   $('#update-workout').on('click', function () {
// //     console.log('button clicked');
// //   });
// // };
//   // $('.edit-workout').on('submit', events.onEditWorkout);
// //};
// // create function that displays all of the values in an object with arrays
// function workoutIterator(data) {
//   console.log("Workout iterator data: ", data);
//   let workouts = data;
//   debugger;
// };
//   // $('.edit-workout').on('click', events.onEditWorkout);
//   // $('.delete-workout').on('click', events.onDeleteWorkout);
//   // //$('#view-workouts').html(workoutTemplate(workouts));
//   // let workoutInfo = '';
//   // for (let i = 0; i < data.length; i++) {
//   //   let workout = data[i];
//   //   workoutInfo += "<input class='delete-workout'  id='" + i + "' type='submit' name='submit' value='Delete workout'>";
//   //   workoutInfo += "<form><fieldset><input class='edit-workout' data-id='" + i + "' type='submit' name='submit' value='Edit workout'>";
//   //   workoutInfo += "<br>Date: " + workout.cardio_date + "<br>";
//   //   workoutInfo += "Description: <input type='text' value='" + workout.cardio_desc + "'><br>";
//   //   if (workout.cardio_duration !== '' && workout.cardio_duration !== null) {
//   //     workoutInfo += "Duration: <input type='text' value='" + workout.cardio_duration + "'><br>";
//   //   }
//   //   if (workout.cardio_distance !== '' && workout.cardio_distance !== null) {
//   //     workoutInfo += "Distance: <input type='text' value='" + workout.cardio_distance + "'><br>";
//   //   }
//   //   if (workout.cardio_notes !== '' && workout.cardio_notes !== null) {
//   //     workoutInfo += "Notes: <input type='text' value='" + workout.cardio_notes + "'><br>";
//   //   }
//   //   workoutInfo += "<br></fieldset></form>";
//   // }
//   // return workoutInfo;
//   // eventHandler();
// // }
//
// // function findWorkoutInformation(date, data) {
// //   let workoutObj = data.workouts;
// //   for (let i = 0; i < workoutObj.length; i++) {
// //     console.log("Dates: ", workoutObj[i].cardio_date);
// //     if (workoutObj[i].cardio_date === date) {
// //   //    let newArray = [];
// //   //    newArray.push(workoutObj[i]);
// //   //    console.log("New array: ", newArray);
// //       console.log("Print workout iterator data: ", workoutIterator(data.workoutObj[i]));
// //   }
// // }
//   //while (workoutObj.date === date){
// //  console.log("Print workout iterator data: ", workoutIterator(workoutObj[i]));
// //}
//
// // function findWorkoutInformation(date, data) {
// //
// //   //console.log("findWorkoutInfo data: ", data, date);
// //       let workoutInfo = '<br>';
// //   for (let i = 0; i < data.workouts.length; i++) {
// //
// //       let workout = data.workouts[i];
// //       let workoutDate = data.workouts[i].cardio_date;
// //       console.log("workout date: ", workout.cardio_date);
// //       console.log("date passed:", date);
// //       if (date === workoutDate) {
// //         workoutInfo += "<form><fieldset><input class='delete-workout' id='" + i + "' type='submit' name='submit' value='Delete workout'>";
// //         workoutInfo += "<input class='edit-workout' id='" + i + "' type='submit' name='submit' value='Edit workout'>";
// //         workoutInfo += "Description: " + workout.cardio_desc + "<br>";
// //          if (workout.cardio_duration !== '' && workout.cardio_duration !== null) {
// //            workoutInfo += "Duration: <input type='text' value='" + workout.cardio_duration + "'><br>";
// //          }
// //          if (workout.cardio_distance !== '' && workout.cardio_distance !== null) {
// //            workoutInfo += "Distance: <input type='text' value='" + workout.cardio_distance + "'><br>";
// //          }
// //          if (workout.cardio_notes !== '' && workout.cardio_notes !== null) {
// //            workoutInfo += "Notes: <input type='text' value='" + workout.cardio_notes + "'><br>";
// //          }
// //          workoutInfo += "<br></fieldset></form>";
// //        }
// //        if(workoutInfo === '<br>') {
// //          workoutInfo += "Please choose a date with a workout";
// //        }
// //      }
// //      console.log("workoutInfo: ", workoutInfo);
// //   return workoutInfo;
// // }
//
// module.exports = {
//   workoutIterator,
//   // findWorkoutInformation,
// };
