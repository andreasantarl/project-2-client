'use strict';

const app = require('../app.js');

// let userId;

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log("App. user is ", app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

// const profileSuccess = (data) => {
//   console.log('Profile created!');
//   app.user = data.user;
// };
//
// const profileFailure = (error) => {
//   console.error(error);
// };

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  // profileSuccess,
  // profileFailure,
};
