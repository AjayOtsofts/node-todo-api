var mongoose = require('mongoose');

var users = mongoose.model('users', {

  Email:{
      type: String,
      required: true,
      trim: true
  },
  Password: {
    type: String,
    required: true,
    trim: true
  }
});
module.exports = {users};
