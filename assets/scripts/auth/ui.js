'use strict';

const app = require('../app.js');

// let userId;

const success = (data) => {
//  app.user = data.user; //
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
//  console.log("App. user is ", app.user);
  $("#loginModal").modal("hide");
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
