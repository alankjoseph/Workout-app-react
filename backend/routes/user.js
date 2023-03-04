const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


// login route
router.post('/login',userController.loginUser)

// signup rooute
router.post('/signup',userController.signupUser)

module.exports = router