var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dashboard', (req,res)=>{
  res.render('dashboard', {title: "Estatísticas"})
})

router.get('/readers', (req,res)=>{
  res.render('readers', {title: "Leitores"})
})

router.get('/books', (req,res)=>{
  res.render('books', {title: "Livros"})
})

router.get('/tables', (req,res)=>{
  res.render('table', {title: "Mesas"})
})

router.get('/pratiles', (req,res)=>{
  res.render('pratiles', {title: "Prateleiras"})
})

router.get('/profile', (req,res)=>{
  res.render('profile', {title: "Perfil"})
})

router.get('/users-systems', (req,res)=>{
  res.render('users', {title: "Utilizadores"})
})

router.get('/about', (req,res)=>{
  res.render('about', {title: "Sobre"})
})

module.exports = router;
