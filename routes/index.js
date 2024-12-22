var express = require('express');
var router = express.Router();

//import models
const readersModel = require('../app/models/readers');

//import config/dataBase
const dataBase = require('../app/config/database');
//Connected with database 

/* GET home page. */
router.get('/', (req,res)=>{
  res.render('index', {title:"Login"})
})
router.post('/', (req, res)=>{
  const { userName, password } = req.body;
})

router.get('/dashboard', async(req,res)=>{
  const counterReaders = await readersModel.find().countDocuments();
  res.render('dashboard', {title: "Estatísticas", nReaders:counterReaders})
})

router.get('/readers', (req,res)=>{
  res.render('readers', {title: "Leitores"})
})
router.post('/readers', async (req,res)=>{
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

    if(response){
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

router.get('/books', (req,res)=>{
  res.render('books', {title: "Livros"})
})
router.post('/books', (req, res)=>{
  const { book, categoryBook, numberBooks, editor, edition, author, provider } = req.body;
  console.log(book)
})


router.get('/tables', (req,res)=>{
  res.render('table', {title: "Mesas"})
})
router.post('/tables', (req, res)=>{
  const { table, people, chairs } = req.body;
})

router.get('/pratiles', (req,res)=>{
  res.render('pratiles', {title: "Prateleiras"})
})
router.post('/pratiles', (req,res)=>{
  const {  pratiles, capacityBooks } = req.body;
})

router.get('/profile', (req,res)=>{
  res.render('profile', {title: "Perfil"})
})
router.post('/profile', (req, res)=>{
  const { pictureProfile } = req.body;
  console.log({pictureProfile})
})

router.get('/users-systems', (req,res)=>{
  res.render('users', {title: "Utilizadores"})
})

router.get('/about', (req,res)=>{
  res.render('about', {title: "Sobre"})
})

router.post('/logout', (req, res)=>{
  res.redirect('/');
})

module.exports = router;
