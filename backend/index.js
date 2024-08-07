const express = require('express');
const cors = require('cors')

const mongoose = require('mongoose');
const  session = require('express-session');

//const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const app = express();
const { MongoClient, ObjectId} = require('mongodb');
app.use(bodyParser.json());
app.use(cors());
app.use(cors(
 {
 origin: ["https://e-commerce-project-bnjl.vercel.app"],
 methods: ["POST", "GET"],
 credentials: true
} 
));
const mongodbConnect = require('./src/config/config');
const dotenv = require('dotenv');
dotnv.config()

const stripe = require('stripe')("sk_test_51PauGq2Lcv7rdblxkMWS7M7aqUjmo0G83boutsqjNAvmzmv6TINlj3kvekfAhVjClyYjIWwf19KiSKwHL1Q9qA3P00FqBeVHYb")

//var fs = require('fs');
//var path = require('path');
//app.set("view engine", "ejs");
//require('dotenv').config();
mongodbConnect();
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'e-commerce-project-bnjl.vercel.app'); // Replace '*' with your frontend domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const login = require("./src/api/loginogin");
const register = require('./src/api/register');
const products = require('./src/api/products');
const user = require('./src/api/user');
const deals = require('./src/api/deals');
const Products_Category = require('./src/api/Products_Category');
const product_data = require('./src/api/product_data');
const items = require('./src/api/items');
const related_items = require('./src/api/related_items');
const carts1 = require('./src/api/carts1');
const cart = require('./src/api/cart');
const cart_adds = require('./src/api/cart_adds');
const size = require('./src/api/size');
const counts = require('./src/api/counts');
const carts = require('./src/api/carts');
const price = require('./src/api/price');
const user_intrested = require('./src/api/user_intrested');
const user_intrested1 = require('./src/api/user_intrested1');
const user_intrested2 = require('./src/api/user_intrested2');
const sizes = require('./src/api/sizes')
const products1 = require('./src/api/products1')
app.use('/signin', login);
app.use('/register', register);

app.use(session({
  secret: '123456',
  resave: true,
  saveUninitialized: true
}))

const url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 
//var multer = require('multer');
/** const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'images/'); // Change this to your desired directory
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
 
var upload = multer({storage: storage});
*/

app.use('/products', products)



 


    
     // If you want to check all "_id" which you are deleting, print the duplicates
    
   //    
      
app.use('/users', user);

app.use('/deals', deals);

app.use('/Products_Category', Products_Category);
  
app.use('/product_data', product_data);
 


app.use('/items', items)
  


app.use('/related_items', related_items);
app.use('/carts1', carts1)
app.use('/cart', cart);
app.use('/size', size);
app.use('/sizes', sizes)
app.use('/cart_adds', cart_adds);
app.use('/carts', carts);
app.use('/carts1', carts1);
app.use('/counts', counts);
app.use('/price', price);
app.use('/products1', products1);
app.use('/user_intrested', user_intrested);
app.use('/user_intrested1', user_intrested1);
app.use('/user_intrested2', user_intrested2);











app.post('/payment', async(req, res)=>{
  const product = req.body.product;
  
  const lineitems = product.map((item)=>({
    price_data:{
      currency: "inr",
      product_data:{
        name: item.product[0],
        images: [item.product[2]]
      },
      unit_amount: item.price * 100,
  
  
    },
    quantity: item.count,
  
  }))
  
  const session = await stripe.checkout.sessions.create({
   payment_method_types: ["card"],
    line_items: lineitems,
    mode: 'payment',
    success_url: 'http://localhost:5173/Orders',
    cancel_url: 'https://localhost:5173/Cancel',
  });
  res.send({id: session.id});
  console.log(session.id);

  
})
 /** 
app.post('/register', upload.single('image'), (req, res, next) => {
 const file = req.body.file;
 console.log(file)find().toArray().then(result =>{
 console.log(req.body.name)
    var obj = {
        name: req.body.name,
       
        img: {
            data: fs.readFileSync(path.join(__dirname + '/images/' + req.body.file)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});
 */
/** 
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
*/

// Code  for mongoose config in backend
// Filename - backend/index.js
 
// To connect with your mongoDB database
/** 
async function db(){
    console.log("connected");
    const client = new MongoClient(url);
    const db = client.db("projects");
    const collection = db.collection("user");
    var obj = {name: "shjsh"};
    collection.insertOne(obj);
    return collection;
}
db();
*/
/** 
async function db(){
  if( mongoose.connect(url)){
    console.log('connected');
    const db = client.db("projects");
   // const collection = db.collection("user");
   
    
    

  }
  
 
    
  
   
   
 // await client.db("projects").command({ ping: 1 });
 // console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
db();

const user = ()=>{
  const userSchema = new mongoose.Schema({
    name:String,
    email:String
  
  });
  mongoose.model("users", userSchema);
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("products", productSchema);

}
*/
/** 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '/images'); // Change this to your desired directory
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });
 

app.post("/register",upload.single('image'),  (req, res)=>{
 const img = {
    data: fs.readFileSync(path.join(__dirname + '/images/' + req.file.filename)),
    contentType: 'image/png'
}
  const imageUrl = 'images/' + req.body.image.file;
  const {name} = req.body;
  const image = req.body.image;
  console.log(imageUrl);
  
  
  console.log(name);
 
  const client = new MongoClient(url);
    const db = client.db("projects");
    const collection = db.collection("user");
    collection.find().toArray().then(result =>{
      
      res.contentType('application/json');
      res.send(JSON.stringify(result));
    })
  
  
})
*/

app.get('/', (req, res)=>{
  res.send("<h1>hello</h1>")
})
app.get('/Success', (req, res)=>{
   res.send("<h1>sucess<h1>")
})
app.listen(5000, ()=>{
 
}


