'use strict';

// create function that displays all of the values in an object with arrays
function workoutIterator(data) {
  console.log("Inital workout data ", data);
  let workoutInfo = '';
  for (let i = 0; i < data.length; i++) {
    let workout = data[i];
    workoutInfo += "Date: " + workout.cardio_date + "<br>";
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

module.exports = {
  workoutIterator,
};
