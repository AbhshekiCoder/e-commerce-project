const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient, ObjectId} = require('mongodb');
const  session = require('express-session');

app.use(express.json());
app.use(bodyParser.json())
const router = express.Router();

router.post('/', async(req, res)=>{
    const itemid = req.body.itemid;
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
    const collection = db.collection("products");
    let id = new ObjectId(itemid)

    collection.find({ _id: id}).toArray().then(result =>{
      
      res.contentType('application/json');
      res.send(JSON.stringify(result));
  
    });


})
module.exports = router;