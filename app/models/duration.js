const mongoose = require('mongoose');

const schemaduration = mongoose.Schema({
  duration: {
    required: true,
    type: String
  }
});

const durationModel = mongoose.model('durations', schemaduration);

module.exports = durationModel;