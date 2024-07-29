const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mongoose = require('mongoose');
//const  session = require('express-session');


//const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient, ObjectId} = require('mongodb');

app.use(bodyParser.json())
const router = express.Router();
router.post('/', (req, res)=>{
    const userid = req.body.userid;
  const itemid = req.body.itemid;
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
    const collection = db.collection("products");
     const objectid = new ObjectId(itemid);
      collection.find({_id: objectid} ).toArray().then(result =>{
      
      res.contentType('application/json');
      res.send(JSON.stringify(result));
  
    });
})
module.exports = router;