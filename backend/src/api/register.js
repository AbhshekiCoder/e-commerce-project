const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const  session = require('express-session');
const register = require('../model/register');
app.use(express.json());
app.use(bodyParser.json())
app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
  }))

const router = express.Router();
router.post("/", async(req, res)=>{
const email = req.body.email;
const name = req.body.name;

const password = req.body.password;
//const password1 = req.body.password1;
const address = req.body.address;
   try{
    var obj =  new register({
      email: email,
      name: name,
      password: password
  
  
     })
  
     const client = new MongoClient(url);
       const db = client.db("e-commerce");
       const collection = db.collection("users");
       await collection.find({email: email}).toArray().then(result=>{
        if(result.length > 0){
          res.send("email already registered");
          
        }
        else{
          collection.insertOne(obj);
          res.send("Registered successfully");
     

        }
       })
      
      
      // req.session.email = email;
      // req.session.save();
      // var session_id = req.session.email;
      // console.log(session_id);
    

   }catch(err){
    console.log(err.message);
    res.send(err.message);

   }
   
  
 
 

})
module.exports = router;

