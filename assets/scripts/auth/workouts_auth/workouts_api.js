'use strict';

const app = require('../../app.js');

const createNewWorkout = (data) => {
  data.user_id = app.user.id;
//  console.log("CreateWorkout Ajax data  ", data);
  return $.ajax({
    url: app.host + '/workouts',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'workouts': data
    }
  });
};

const seeWorkouts = () => {
//  console.log("App data", app);
  return $.ajax({
    url: app.host + '/workouts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const findWorkout = (data) => {
// //  console.log("Data data", data);
// //    console.log("App data", app);
//     data.user_id = app.user.id;
//     console.log(app.user.workouts);
//   //  let workoutId =
//   //  data.workout.cardio_date = app.workouts.cardio_date;
//   //  data.cardio_desc = app.cardio_desc;
//
// //  console.log("Data data", data);
//   return $.ajax({
//     url: app.host + '/workouts/' + 10,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

//
// cardio_date
// :
// "2016-06-29"
// cardio_desc
// :
// "sdfsdfsd"
// cardio_distance
// :
// null
// cardio_duration
// :
// null
// cardio_notes
// :
// ""
// created_at
// :
// "2016-06-25T15:42:18.660Z"
// id
// :
// 1
// updated_at
// :
// "2016-06-25T15:42:18.660Z"
// user_id
// :
// 1

module.exports = {
  createNewWorkout,
  seeWorkouts,
  // findWorkout,
};
