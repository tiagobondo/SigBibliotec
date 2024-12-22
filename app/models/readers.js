const mongoose = require('mongoose');

const schemaRedaders = mongoose.Schema({
  fullName:{
    required:true,
    type:String
  },

  docType:{
    required:true,
    type:String
  },

  docNumber:{
    required:true,
    type:String
  },

  dateRegister:{
    required:true,
    type:String
  },

  livro:{
    required:true,
    type:String
  },

  quantidadeLivro:{
    required:true,
    type:String
  },

  categoriaLivro:{
    required: true,
    type: String
  },

  assunto:{
    required:true,
    type: String
  },

  duracao:{
    required: true,
    type: String
  }
});

const readersModel = mongoose.model('readers', schemaRedaders);

module.exports = readersModel;
