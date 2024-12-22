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
  const docTypes = await docTypeModel.find();
  const durations = await durationModel.find();
  const summaries = await summaryModel.find();
  const books = await booksModel.find();
  res.render('readers', { title: "Leitores", books:books, docTypes:docTypes, durations:durations, summaries:summaries});
})
router.post('/readers', async (req, res) => {
  const { fullName, docType, docNumber, dateRegister, livro, quantidadeLivro, categoriaLivro, assunto, duracao } = req.body;

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
      duracao
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
})

router.get('/books', async(req, res) => {
  const categoryBooks = await categoryBookModel.find();
  res.render('books', { title: "Livros", categoryBooks:categoryBooks });
})
router.post('/books', async (req, res) => {
  const { book, categoryBook, numberBooks, editor, edition, author, provider } = req.body;

  try {
    const data = new booksModel({
      book,
      categoryBook,
      numberBooks,
      editor,
      edition,
      author,
      provider
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
})

router.get('/tables', (req, res) => {
  res.render('table', { title: "Mesas" })
})
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
})

router.get('/pratiles', (req, res) => {
  res.render('pratiles', { title: "Prateleiras" })
})
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
})

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
