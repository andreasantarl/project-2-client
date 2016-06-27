'use strict';

//const ui = require('./auth/workouts_auth/workouts_ui');

// create function that displays all of the values in an object with arrays
function workoutIterator(data) {
  console.log("Workout iterator data: ", data);
  let workoutInfo = '';
  for (let i = 0; i < data.length; i++) {
    let workout = data[i];
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
  return workoutInfo;
}

// function findWorkoutInformation(date, data) {
//   let workoutObj = data.workouts;
//   for (let i = 0; i < workoutObj.length; i++) {
//     console.log("Dates: ", workoutObj[i].cardio_date);
//     if (workoutObj[i].cardio_date === date) {
//   //    let newArray = [];
//   //    newArray.push(workoutObj[i]);
//   //    console.log("New array: ", newArray);
//       console.log("Print workout iterator data: ", workoutIterator(data.workoutObj[i]));
//   }
// }
  //while (workoutObj.date === date){
//  console.log("Print workout iterator data: ", workoutIterator(workoutObj[i]));
//}

function findWorkoutInformation(date, data) {
  let workoutInfo = '<br>';
  for (let i = 0; i < data.workouts.length; i++) {
    let workout = data.workouts[i];
    if (workout.cardio_date === date) {
       workoutInfo += "<input class='delete-workout' id='" + i + "'type='submit' name='submit' value='Delete workout><br>Date: " + workout.cardio_date + "<br>";
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
   }
    if(workoutInfo === '<br>') {
      workoutInfo = "Please choose a date with a workout";
    }
  return workoutInfo;
}

module.exports = {
  workoutIterator,
  findWorkoutInformation,
};
