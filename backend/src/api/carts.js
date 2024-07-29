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
const router = express.Router();
router.post('/', async(req, res)=>{
    let userid = req.body.userid;
    const client = new MongoClient(url);
    const db = client.db("e-commerce");
      const collection = db.collection("cart");
  
      collection.find({userid: userid}).toArray().then(result =>{
        res.send(result);
      //  console.log(result);
      
         
        
      })
      
})
module.exports = router;