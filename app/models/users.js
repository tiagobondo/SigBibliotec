const mongoose = require('mongoose');

const date = new Date();
const date_now = date.toDateString();

const schemaUser = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  passwordRec:{
    type: String,
    required: true
  },

  accountType: {
    type: String,
    required: true
  },

  fullName: {
    type: String
  },

  docType: {
    type: String
  },

  numberDoc: {
    type: String
  },

  dataRegister: {
    type: String,
    value:date_now
  }
})

const usersModel = mongoose.model('users', schemaUser);

module.exports = usersModel;