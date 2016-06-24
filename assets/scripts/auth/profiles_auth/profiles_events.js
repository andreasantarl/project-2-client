'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./profiles_api');
const ui = require('./profiles_ui');

const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.setProfile(data)
  .done(ui.profileSuccess)
  .fail(ui.profileFailure);
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateProfile(data)
  .done(ui.profileUpdateSuccess)
  .fail(ui.profileUpdateFailure);
};

const addHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  $('#update-profile').on('submit', onUpdateProfile);
};
//
module.exports = {
  addHandlers,
};
