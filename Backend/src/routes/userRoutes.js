const express = require("express")
const routes = express.Router()
const {signup , signin} = require("../controller/userController")

routes.post('/singup' , signup)
routes.post('/login' , signin)



module.exports = routes