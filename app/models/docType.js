const mongoose = require('mongoose');

const schemadocType = mongoose.Schema({
  docType: {
    required: true,
    type: String
  }
});

const docTypeModel = mongoose.model('docTypes', schemadocType);

module.exports = docTypeModel;