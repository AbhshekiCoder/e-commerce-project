import { React, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import axios from 'axios'

import {   Routes, Route, useNavigate} from "react-router-dom";

import Data from './Components/Data';
import Main from './Components/Main';
import Profile from './Components/elements/Profile';
import Signup from './Components/elements/Signup';
import PrivateRoute from './Components/PrivateRoute';

import Signin from './Components/elements/Signin';
import Dashboard from './Components/Dashboard';
import PublicRoute from './Components/PublicRoute';
import ShowProduct from './Components/ShowProduct';

import Footer from './Components/elements/Footer';
import Contact from './Components/elements/Contact';
import Cart from './Components/Cart';
import Intrested from './Components/Intrested';
import Orders from './Components/elements/Orders';
import Cancel from  './Components/elements/Cancel';







 function App(){
  const navigate = useNavigate();
 // const [imageFile, setImageFile] = useState();

 // const [data, setData] = useState("");
 // const [userName, setUserName] = useState();

 const [userId, setUserId] = useState(null);

    
 

const [users, setUsers] = useState([]);
const [productdata, setProductData] = useState();
const [deals, setDeals] = useState();
const [searchdata, setSearchData] = useState();
const [title, setTitle] = useState();
const [title1, setTitle1] = useState();
const [images, setImages] = useState();
const [username, setUserName] = useState();
//const [carts, setCart] = useState('');




/** 
const btn1 = async()=>{
  console.log('click')
  await fetch("http://localhost:5000/user").then(res => res.json())
  .then(data =>{
    setData(data);
    

   
      
      
    })
  
   
     
  
  


}

*/

const update = async()=>{
  try{
    let result = await axios.get("http://localhost:5000/update",
     
    
      
  )
  console.log(result.data)
  
  }
  catch(err){
    console.log(err);
  
  }
   
}
/** 
const user = ()=>{
  if(data == "null"){
    return <div>hii</div>

  }
  else{
    return <div>
    {data.map(item => (
      <div key={item._id}>
        <div>{item.name}</div>
        <div><img src = {`../backend/${item.image}`} className = ' w-12 h-11'/></div>
      </div>
      
    ))}
  </div>
    

  }
}

/** 
var formdata;
    let fromData = async()=>{
      let input = document.forms['input'];
     formdata = input.name.value;
     
      const formData1 = new FormData();
        formData1.append('formdata', formdata);
    
        let result1 = await axios.post("http://localhost:5000/data", {formdata});
     
       setUserName(result1.data);
       console.log(userName)
     
    }
    */

    let profile =()=>{
      document.querySelector('.profile').style.display = "block";
      let userid = localStorage.getItem("user_id");
      if(userid){
        setUserId(userid);
      console.log(userId);

      }
      else{
        setUserId(null);
      }
      
      
      
     
     
    }
    let modal = ()=>{
      console.log("clicked")
      document.querySelector('.profile').style.display = "none";

    }
    let signup =()=>{
      document.querySelector('.signup').style.display = "block";
    }
    let signin =()=>{
      navigate("/Signin")
    }
    let btn2 =()=>{
      console.log("clicked")
      navigate("/Dashboard");
    }
    const result = async()=>{
      const body = {
        userid : userId
      }
      try{
        let result = await axios.get("http://localhost:5000/user",body
         
        
          
      )
     console.log(result.data[0]);
    
      setUsers(result.data)

    
      
      console.log(users[0])
    
      
      
      }
      catch(err){
        console.log(err);
      
      }
       
    }
useEffect(()=>{
  result();

},[])

useEffect(()=>{
  
      axios.get("http://localhost:5000/products")
    .then((res)=>{
      
        setProductData(res.data);
    })

    console.log(productdata)
  //  var userid = localStorage.getItem("user_id");
   // let body = {
    //  user_id: userid
   // }
    /** 
     axios.post('http://localhost:5000/cart_value', body)
    .then((result)=>{
      setCart(result.data);
      console.log(result.data);
    })
    */



},[]);
useEffect(()=>{
  
    axios.post('http://localhost:5000/deals').then((result)=>{
      setDeals(result.data);
      console.log(result.data);
      let obj;
      result.data.map((item, id)=>(
        obj = {
          id: item._id,
        }
       
      ))
     
      
    })
    let userid = localStorage.getItem("user_id");
    let body = {
      userid : userid
    }
    axios.post('http://localhost:5000/users', body).then((result)=>{
      setUserName(result.data[0].name);
      
      
    })



  
 /** 
  fetch('https://api.escuelajs.co/api/v1/products/?offset=1&limit=10')
            .then(res=>res.json())
            .then((data)=>{
              setDeals(data);
              console.log(deals);
              console.log(data);
            })
*/
},[])

const submit =(e)=>{
  let form = document.forms['form'];
  console.log(e.target.value);
  setSearchData(e.target.value);
  
}

 
 const cards = (e) =>{
  var title1 = e.target.title;
 
  setTitle1(title1);
  
 }
 const image = (e) =>{
  var title = e.target.title;
  console.log(title);
  setTitle(title)
 }
 
 return(
    <>
    <Navbar profile={profile} submit={submit} />
   <Profile modal = {modal}   signin = {signin} userid = {userId}/>
   
  

   
 
   <Routes>
  
   <Route element ={<PrivateRoute/>}>
   
   <Route path='/Dashboard' element={<Dashboard username = {username}/>}></Route>
   <Route path='/Data' element={<Data data = {searchdata}/>}></Route>
   <Route path='/ShowProduct' element= {<ShowProduct  title1 = {title1} title = {title}   />}></Route>
   <Route path='/Cart' element = {<Cart/>}></Route>
   <Route path='/Intrested' element = {<Intrested/>}></Route>

   </Route> 
   <Route element={<PublicRoute/>}>
   <Route path='/' element={<Main productdata={productdata} data = {deals} cards = {cards} image = {image}/>}></Route>
   <Route path='/Signup' element={<Signup/>}></Route>
   <Route path='/Signin' element = {<Signin/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
   <Route path='/Orders' element = {<Orders/>}></Route>
   <Route path='/Cancel' element={<Cancel/>}></Route>
   

   </Route>
  


   
  

   </Routes>
   
   
   <Footer/>
 
  

   
   
  
    
   
  
  
      
   






    </>
 )
}
export default App;
