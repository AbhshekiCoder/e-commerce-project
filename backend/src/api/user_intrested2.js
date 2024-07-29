const express = require('express')
const  bodyParser = require('body-parser');
const app = express();

const { MongoClient} = require('mongodb');

app.use(express.json());
app.use(bodyParser.json());
const router = express.Router();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
router.post('/', async(req, res)=>{
    const userid = req.body.userid;
  const itemid = req.body.itemid;
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
 const collection = db.collection("user_intrested");
  collection.find({$and:[{userid: userid}, {itemid: itemid}]}).toArray().then(result =>{
   
      res.send(result);
    });
})
module.exports = router;