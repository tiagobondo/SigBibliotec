var express = require('express');
var router = express.Router();

//import models
const readersModel = require('../app/models/readers');
const booksModel = require('../app/models/books');
const tablesModel = require('../app/models/tables');
const pratilesModel = require('../app/models/pratiles');
//
const categoryBookModel = require('../app/models/categoryBook');
const docTypeModel = require('../app/models/docType');
const durationModel = require('../app/models/duration');
const summaryModel = require('../app/models/summary');

//import config/dataBase
const dataBase = require('../app/config/database');
//Connected with database 

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: "Login" })
})
router.post('/', (req, res) => {
  const { userName, password } = req.body;
})

router.get('/dashboard', async (req, res) => {
  const counterReaders = await readersModel.find().countDocuments();
  const counterBooks = await booksModel.find().countDocuments();
  const counterTables = await tablesModel.find().countDocuments();
  const counterPratiles = await pratilesModel.find().countDocuments();

  res.render('dashboard', { title: "Estatísticas", nReaders: counterReaders, nBooks: counterBooks, nTables: counterTables, nPratiles: counterPratiles })
})

router.get('/readers', async (req, res) => {
  const readers = await readersModel.find().limit(6);
  const docTypes = await docTypeModel.find();
  const durations = await durationModel.find();
  const summaries = await summaryModel.find();
  const books = await booksModel.find();
  const tables = await tablesModel.find();
  res.render('readers', { title: "Leitores", books: books, docTypes: docTypes, durations: durations, summaries: summaries, readers: readers, tables: tables });
})//Listando
router.post('/readers', async (req, res) => {
  const { fullName, docType, docNumber, dateRegister, livro, quantidadeLivro, categoriaLivro, assunto, duracao, table } = req.body;

  try {
    const data = new readersModel({
      fullName,
      docType,
      docNumber,
      dateRegister,
      livro,
      quantidadeLivro,
      categoriaLivro,
      assunto,
      duracao,
      table
    });
    const response = await data.save();//Save data in DB

    if (response) {
      res.send(`
        <script>
        alert("Cadastrado com sucesso!");
        window.location.href='/readers';
        </script>  
      `)
    }
  } catch (error) {
    console.log(error);
  }
})//Cadastrando
router.post('/readers/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await readersModel.deleteOne({
      _id: id
    });
    if (response) {
      res.redirect('/readers');
    } else {
      console.log('Error')
    }
  } catch (error) {
    console.log(error);
  }

})//Deletando 
router.post('/readers/update/:id', async (req, res) => {
  const { id } = req.params;
  const { fullNameEdit } = req.body;

  try {
    const response = await readersModel.updateOne(
      {
        _id: id
      },
      {
        $set: {
          fullName: fullNameEdit
        }
      }
    )
    if (response) {
      res.send(`
        <script>
          alert('Editado com sucesso!');
          window.location.href="/readers";
        </script>  
      `)
    } else {

    }
  } catch (error) {
    console.log(error);
  }
})//Actualizando

router.get('/books', async (req, res) => {
  const categoryBooks = await categoryBookModel.find();
  const pratiles = await pratilesModel.find();
  const books = await booksModel.find();
  res.render('books', { title: "Livros", categoryBooks: categoryBooks, books: books, pratiles: pratiles });
})//Listando
router.post('/books', async (req, res) => {
  const { book, categoryBook, numberBooks, editor, edition, author, provider, pratile } = req.body;

  try {
    const data = new booksModel({
      book,
      categoryBook,
      numberBooks,
      editor,
      edition,
      author,
      provider,
      pratile
    })

    const response = await data.save();

    if (response) {
      res.send(
        `<script>
            alert('Cadastrado com Sucesso!');
            window.location.href="/books";
        </script>`
      )
    }
  } catch (error) {
    console.log(error);
  }
})//Cadastrando
router.post('/books/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await booksModel.deleteOne({
      _id: id
    });
    if (response) {
      res.redirect('/books');
    } else {
      console.log('Error')
    }
  } catch (error) {
    console.log(error);
  }

})//Deletando
router.post('/books/update', async (req, res) => {
  const { id, book, categoryBook, numberBooks, editor, edition, author, provider, pratile } = req.body;

  try {
    const response = await booksModel.updateOne(
      {
        _id: id
      },
      {
        $set: {
          book,
          categoryBook,
          numberBooks,
          editor,
          edition,
          author,
          provider,
          pratile
        }
      }
    )
    if (response) {
      res.send(`
        <script>
          alert('Editado com sucesso!');
          window.location.href="/books";
        </script>  
      `)
    } else {

    }
  } catch (error) {
    console.log(error);
  }
})//Actualizando

router.get('/tables', async (req, res) => {
  const tables = await tablesModel.find();
  res.render('table', { title: "Mesas", tables: tables });
})//Listando
router.post('/tables', async (req, res) => {
  const { table, people, chairs } = req.body;

  try {
    const data = new tablesModel({
      table,
      people,
      chairs
    })
    const response = await data.save();

    if (response) {
      res.send(
        `<script>
              alert('Cadastrado com sucesso!');
              window.location.href="/tables";
        </script>`
      )
    }

  } catch (error) {
    console.log(error);
  }
})//Cadastrando
router.post('/table/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await tablesModel.deleteOne({
      _id: id
    });
    if (response) {
      res.redirect('/tables');
    } else {
      console.log('Error')
    }
  } catch (error) {
    console.log(error);
  }
})//Dletando
router.post('/tables/update', async (req, res) => {
  const { id, table, people, chairs } = req.body;

  try {
    const response = await tablesModel.updateOne(
      {
        _id: id
      },
      {
        $set: {
          table,
          people,
          chairs
        }
      }
    )
    if (response) {
      res.send(`
        <script>
          alert('Editado com sucesso!');
          window.location.href="/tables";
        </script>  
      `)
    } else {

    }
  } catch (error) {
    console.log(error);
  }
})//Actualizando

router.get('/pratiles', async (req, res) => {
  const pratiles = await pratilesModel.find();
  res.render('pratiles', { title: "Prateleiras", pratiles: pratiles })
})//Listando
router.post('/pratiles', async (req, res) => {
  const { pratiles, capacityBooks } = req.body;

  try {
    const data = new pratilesModel({
      pratiles,
      capacityBooks
    })

    const response = await data.save();
    if (response) {
      res.send(
        `<script>
          alert('Cadastrado com sucesso!');
          window.location.href="/pratiles";
        </script>`
      )
    }
  } catch (error) {
    console.log(error);
  }
})//Cadastrando
router.post('/pratiles/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pratilesModel.deleteOne({
      _id: id
    });
    if (response) {
      res.redirect('/pratiles');
    } else {
      console.log('Error')
    }
  } catch (error) {
    console.log(error);
  }
})//Deletando
router.post('/pratiles/update', async (req, res) => {
  const { id, pratiles, capacityBooks } = req.body;

  try {
    const response = await pratilesModel.updateOne(
      {
        _id: id
      },
      {
        $set: {
          pratiles: pratiles,
          capacityBooks: capacityBooks
        }
      }
    )
    if (response) {
      res.send(
        `
          <script>
            alert('Editado com sucesso!');
            window.location.href = "/pratiles"
          </script>
        `
      )
    } else {

    }
  } catch (error) {
    console.log(error)
  }
})//Actualizando

router.get('/profile', (req, res) => {
  res.render('profile', { title: "Perfil" })
})

router.post('/profile', (req, res) => {
  const { pictureProfile } = req.body;
  console.log({ pictureProfile })
})

router.get('/users-systems', (req, res) => {
  res.render('users', { title: "Utilizadores" })
})

router.get('/about', (req, res) => {
  res.render('about', { title: "Sobre" })
})

router.post('/logout', (req, res) => {
  res.redirect('/');
})

module.exports = router;
