const mongoose = require("mongoose")
const schema = mongoose.Schema

const userModel = new schema({
    userName: {
        type : String , 
        required : true
    },
    email: {
        type : String , 
        reqiured: true
    },
    password : {
        type : String , 
        required : true
    }
})
const user = mongoose.model("user" , userModel)
module.exports = user