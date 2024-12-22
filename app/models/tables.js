const mongoose = require('mongoose');

const schemaTables = mongoose.Schema({
  table:{
    required: true,
    type:String
  }, 
  
  people:{
    required: true,
    type:String
  }, 
  
  chairs:{
    required: true,
    type: String
  }
});

const tablesModel = mongoose.model('tables', schemaTables);

module.exports = tablesModel;