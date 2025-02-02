var express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const readersModel = require('../app/models/readers');
const booksModel = require('../app/models/books');
const tablesModel = require('../app/models/tables');
const pratilesModel = require('../app/models/pratiles');
const usersModel = require('../app/models/users');

var router = express.Router();
require('dotenv').config()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/createAccount', async (req, res) => {
  const { userName, password, passwordRec, accountType } = req.body;

  try {
    if (userName == '') {
      //
    }
    if (password == '') {
      //
    }
    if (passwordRec == '') {
      //
    }

    if (password != passwordRec) {
      //
    } else {

      const saltRounds = 10
      const passwordCrypt = bcrypt.hashSync(password, saltRounds)
      const passwordRecCrypt = bcrypt.hashSync(passwordRec, saltRounds)

      const data = await usersModel({
        userName,
        password: passwordCrypt,
        passwordRec: passwordRecCrypt,
        accountType
      })

      const response = data.save()

      res.redirect('/')
    }

  } catch (error) {
    console.log(error)
  }
})

router.post('/login', async (req, res) => {
  const { userName, password } = req.body

  const counterReaders = await readersModel.find().countDocuments();
  const counterBooks = await booksModel.find().countDocuments();
  const counterTables = await tablesModel.find().countDocuments();
  const counterPratiles = await pratilesModel.find().countDocuments();

  try {
    const response = await usersModel.findOne({ userName })
    const verifyPassword = bcrypt.compareSync(password, response.password)

    if (verifyPassword === true) {
      const token = jwt.sign({ username: userName }, process.env.SECRET)

      res
        .cookie('token', token, {
          httpOnly: true,
        })
        .render('dashboard', { title: "Estatísticas", nReaders: counterReaders, nBooks: counterBooks, nTables: counterTables, nPratiles: counterPratiles })
    } else {
      return res
        .send(
          `
        <script>alert("Senha incorreta!");
        window.location.href='/';
        </script>`
        )
    }

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
