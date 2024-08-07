import axios from 'axios';
import { useState, useEffect} from 'react';
import signup from '../pictures/signup.jpeg';
import google_icon from '../pictures/google.svg';
import { Link } from 'react-router-dom';
//import bcrypt from 'bcryptjs';
function Signup(){
  const [password1, setPassword1] = useState("null");
  const [password2, setPassword2] = useState("null");
  

  
  

  const firstpassword = (e)=>{
    
    password = e.target.value;
    setPassword1(e.target.value);

   
    
  }
 
  const Secondpassword = (e)=>{
   
    setPassword2(e.target.value);
    

 
}

        

    const handleOnClick = async (e) => {
     
     
        e.preventDefault();
        let form = document.forms['signup'];
 // var passwords = form.password1.value;
  
       
        var  email = form.email.value;
        
        
     //   const hashpassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
        var name  = form.name.value;
        var password = form.password.value;
         //   setImageFile(form.image.files[0])
       // console.log(form.image.files[0])
     
     /**   // console.log(imageFile)
        const formData = new FormData();
       //   formData.append('imageFile', imageFile);
          formData.append('Email', email);
          
      
         setFormData(formData);
         console.log(formdata)
      
   

     
      let result1 = await axios.post("http://localhost:5000/register", {formdata});
     */
    console.log(form.name.value);
    console.log(email);
      var body = {
        email: email,
        name: name,
        password: password,
       
     
    }
   // let formData2 = new FormData();
    //formData2.append('email', `${email}`);
    //let result1 = await axios.post("http://localhost:5000/register", {formData});
    axios({
      method: 'post',
      url: '"https://e-commerce-project-utq7.vercel.app/register', // Replace with your backend API endpoint
      data: body
     
  })
  .then(function (response) {
      // Handle success
      alert(response.data);
    
  
  })
  .catch(function (error) {
      // Handle error

      console.log(error);
  });
  /** 
    axios({
        method: 'post',
        url: 'http://localhost:5000/register',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
      
    }
    */
       
      
          
         // method: "POST",
          //body: JSON.stringify(data),
         // headers: {
         //   'Content-Type': 'application/json'
         // },
         
        
  }
      

    
    
    return(
     
        
    <div className=' mt-16 bg-white'>
    <div className = " signup  row max-w-5xl">
    <div className='col-md max-w-2xl'>
    <img src = {signup} className='w-full'/>

    </div>
    <div className='col-md flex justify-center items-center'>
    <div className='form'>
      <h1 className='text-2xl font-medium'>Create an account</h1>
      <p className='mt-3'>Enter your details below</p>
      <form className='mt-3' name = "signup" onSubmit={handleOnClick}>
      <div className="form-item">
      <input className='mt-3 border-none w-full' name = "name" placeholder='Name' required></input>
      </div>
      <div className="form-item">
      <input className='mt-3 border-none w-full'  name = "email" placeholder='email and Phone no' required></input>
      </div>
      <div className="form-item">
      <input className='mt-3 border-none w-full ' name = "password" placeholder='password' required></input>
      </div>
      <button className=' text-white bg-red-500 h-10 w-full mt-3'  type = "submit">Create An Account</button>
      <button className='w-full border flex items-center justify-center h-10 mt-3 '><img src = {google_icon} className='mr-3'/>Signup with google</button>
     
      </form>
      <div className='mt-3 text-gray-500  flex justify-center'>Already have account?<Link to = "/Signin">Login</Link></div>
    </div>
      
      </div>
  
 

    </div>
    </div>
 



    )

}
export default Signup;
