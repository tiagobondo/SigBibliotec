const mongoose = require('mongoose');

const schemasummary= mongoose.Schema({
  summary: {
    required: true,
    type: String
  }
});

const summaryModel = mongoose.model('summaries', schemasummary);

module.exports = summaryModel;