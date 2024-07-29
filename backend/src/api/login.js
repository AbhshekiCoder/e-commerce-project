const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mongoose = require('mongoose');
//const  session = require('express-session');


//const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
app.use(bodyParser.json())
//app.use(cors());
//var fs = require('fs');
//var path = require('path');
//app.set("view engine", "ejs");
//require('dotenv').config();


const router = express.Router();
router.post('/' , async(req, res)=>{
    var email1 = req.body.email;
    var password1 = req.body.password;
    console.log(email1)
    console.log(password1);
    const client = new MongoClient(url);
       const db = client.db("e-commerce");
       const collection = db.collection("users");
     collection.find({ $and: [{email: email1},{ password: password1}] }).toArray().then(result=>{
      if(result.length === 0){
        res.json({
          success: "invalid email and password",
        
      });
  
      }
      else{
        res.json({
          success: "successfully login",
          email: email1
      });
      
      }
     });
      
    
   })
   module.exports = router;