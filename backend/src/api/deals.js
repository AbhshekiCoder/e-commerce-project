const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const  session = require('express-session');
const register = require('../model/register');
app.use(express.json());
app.use(bodyParser.json())
const router = express.Router();

router.post('/', async(req, res)=>{
    const client = new MongoClient(url);
    const db = client.db("e-commerce");
      const collection = db.collection("products");
      
      collection.find().toArray().then(result =>{
        res.contentType('application/json');
        res.send(JSON.stringify(result));
        
      });
  
  
  })
  module.exports = router;
