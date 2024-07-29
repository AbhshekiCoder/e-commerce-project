const mongoose = require('mongoose');
require('dotenv').config();

//const url = process.env.port;
function mongodbConnect(){
    mongoose.connect("mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log('connected');

    }).catch((err)=>{
        console.log(err.message);
    })

}
module.exports = mongodbConnect ;

