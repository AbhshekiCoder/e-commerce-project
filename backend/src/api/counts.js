const express = require('express')
const  bodyParser = require('body-parser');

const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const  session = require('express-session');

app.use(express.json());
app.use(bodyParser.json())
app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
  }))
const router = express.Router();
router.post('/', async( req, res)=>{
    let userid = req.body.userid;
    const client = new MongoClient(url);
    const db = client.db("e-commerce");
      const collection = db.collection("cart");
    
      let result1= await  collection.aggregate([
        {
          $match:{
            userid: userid
            
          }
  
       
        },
        {
          $group:{
            _id: null,
            total: {$sum: '$count'}
  
          }
        },
  
       
      ]).toArray()
      res.send(result1);

})
module.exports = router;
