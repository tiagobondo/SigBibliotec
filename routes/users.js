var express = require('express');
const usersModel = require('../app/models/users');
var router = express.Router();

const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/createAccount', async(req, res) => {
  const { userName, password, passwordRec, accountType } = req.body;

  //Implementacao da cripotografia da password

  try {
    const data = new usersModel({
      userName,
      password,
      passwordRec,
      accountType
    });
    const response = await data.save();//Save data in DB
    res.redirect('/')
  } catch (error) {
    res.status(500).json({ message: error});
  }
})

module.exports = router;
