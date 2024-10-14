const express = require("express");
const data = require("./src/config/config")
const userRoutes = require("./src/routes/userRoutes");
const { parse } = require("dotenv")
const bodyParser = require("body-parser");
const app = express()
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you need to send cookies or auth headers
})); 

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use("/api/auth" , userRoutes)




app.listen(port , () => {
    console.log(`server is connected successfull port no ${port}`)
})