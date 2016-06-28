'use strict';
//
const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./profiles_api');
const ui = require('./profiles_ui');
const app = require('../../app.js');

const onCreateProfile = (event) => {
  event.preventDefault();
  let user_id = app.user.id;
  $('#create-profile').find('[name=user_id]').val(user_id);
  let data = getFormFields(event.target);
  api.setProfile(data)
  .done(ui.profileSuccess)
  .fail(ui.profileFailure);
};

const onShowProfile = (event) => {
  event.preventDefault();
  let profile_id = app.user.profile.id;
  $('#show-profile').data('id', profile_id);
  api.showProfile(profile_id)
  .done(ui.showProfileSuccess)
  .fail(ui.profileShowFailure);
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  let user_id = app.user.id;
  $('#update-profile').find('[name=user_id]').val(user_id);
  let data = getFormFields(event.target);
  debugger;
  api.updateProfile(data)
  .done(ui.profileUpdateSuccess)
  .fail(ui.profileUpdateFailure);
};

const addHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  $('#show-profile').on('submit', onShowProfile);
  $('#update-profile').on('submit', onUpdateProfile);
};

module.exports = {
  addHandlers,
};
