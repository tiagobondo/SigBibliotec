const mongoose = require('mongoose');

const schemaBooks = mongoose.Schema({
  book:{
    required: true,
    type:String
  },
  
  categoryBook:{
    required:true,
    type:String
  }, 
  
  numberBooks:{
    required:true,
    type: String
  }, 
  
  editor:{
    required: true,
    type: String
  }, 
  
  edition:{
    required: true,
    type: String
  }, 
  
  author:{
    required: true,
    type: String
  }, 
  
  provider:{
    required: true,
    type: String
  },

  pratile:{
    required: true,
    type: String
  }
})

const booksModel = mongoose.model('books', schemaBooks);

module.exports = booksModel;