const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
   email:{
    type: String,
    unique: true,
  


   },
   name:{
    type: String,
   },
   password:{
    type: String,
   },
   created_At:{
    type: Date,
    default: Date.now
   }
})
const register =  mongoose.model('users', userschema);
module.exports = register;