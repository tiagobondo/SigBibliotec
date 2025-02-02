const jwt = require('jsonwebtoken')

require('dotenv').config()

const authenticate = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {

  } else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET)
      req.user = decoded
      next()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = authenticate