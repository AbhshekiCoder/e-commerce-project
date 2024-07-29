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
 
  let counts = count - 1;
  
  
  const client = new MongoClient(url);
  const db = client.db("e-commerce");
    const collection = db.collection("cart");
    console.log(count)
 
    collection.find({$and:[{userid: userid}, {item_id: itemid}]}).toArray().then(result =>{
      if(counts < 1){
       
         
          collection.deleteOne({$and:[{userid: userid}, {item_id: itemid}]});
        
       
       
      

      
      }
      else{
        if(result){
          let total = counts * result[0].price;
          collection.updateOne(
            {userid: userid, item_id: itemid },
            {$set: {"count": counts, "total": total}}
     
          )
        }
      }
    })
   
});
module.exports = router;

