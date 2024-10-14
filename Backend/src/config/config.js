const mongoose = require("mongoose")
require("dotenv").config()
const URI = process.env.DB_URL

const connectionDB = async(req , res) =>{
    try {
        await mongoose.connect(URI)
        console.log("Data base connection is successfull...")
    } catch (error) {
        console.log(message.error)
    }
}
connectionDB()
module.exports = connectionDB