const mongoose = require('mongoose');

const schemaCategoryBooks = mongoose.Schema({
  categoryBook: {
    required: true,
    type: String
  }
});

const categoryBookModel = mongoose.model('categoryBooks', schemaCategoryBooks);

module.exports = categoryBookModel;