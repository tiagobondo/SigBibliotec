const mongoose = require('mongoose');

const schemaPratiles = mongoose.Schema({
  pratiles:{
    required: true,
    type: String
  }, 
  
  capacityBooks:{
    required: true,
    type: String
  }
});

const pratilesModel = mongoose.model('pratiles', schemaPratiles);

module.exports = pratilesModel;