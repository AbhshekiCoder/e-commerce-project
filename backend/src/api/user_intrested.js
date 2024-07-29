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
router.post('/', (req, res)=>{
    const userid = req.body.userid;
  const itemid = req.body.item_id;
  const product = req.body.products;
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
    const collection = db.collection("user_intrested");
    let obj = {
      userid: userid,
      itemid: itemid,
      product: product
    }

    collection.find({$and:[{userid: userid}, {itemid: itemid}]}).toArray().then(result =>{
      if(result.length == 0){
        collection.insertOne(obj);
        res.send(result);
        var data;
       
      }
      else{
        collection.deleteOne({$and:[{userid: userid}, {itemid: itemid}]});
        res.send(result);
      }
  
    });


  
})
module.exports = router;