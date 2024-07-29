const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const  session = require('express-session');

app.use(express.json());
app.use(bodyParser.json())
const router = express.Router();

router.post('/', async(req, res)=>{
    const userid = req.body.userid;
  const itemid = req.body.item_id;
  const count = req.body.count;
  const products = req.body.products;
  const price = products[1]
  let counts = count + 1;
  let total = counts * price;
  let obj = {
    count: counts,
    item_id: itemid,
    userid: userid,
    product: products,
    price: price,
    size: 0,
    total: total
  }
  
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
    const collection = db.collection("cart");
    console.log(count)
    collection.find({$and:[{userid: userid}, {item_id: itemid}]}).toArray().then(result =>{
      if(result.length == 0){
        console.log('sdd')
        collection.insertOne(obj);
      
      }
      else{
        console.log('update');
       

        
        collection.updateOne(
          {userid: userid, item_id: itemid },
          {$set: {"count": counts, "total": total}}
        )
      }
    
    });
})
module.exports = router;