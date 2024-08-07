import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import signup from '../pictures/signup.jpeg';
import { useEffect } from "react";
function Signin(){
  const navigate = useNavigate();
  let userid = localStorage.getItem("user_id");
  useEffect(()=>{
    if(userid){
      navigate('/');
    }

  },[])
  
  
    const SignIn =async(e)=>{
        e.preventDefault();
        console.log("clicked")

        let form = document.forms['signin-form'];
        let email = form.email.value;
        let password = form.password.value;
        console.log(email)
        var body = {
            email: email,
            password: password,
          
    
        }
       // let formData2 = new FormData();
        //formData2.append('email', `${email}`);
        let result1 = await axios.post("https://e-commerce-project-utq7.vercel.app/signin", body)
        .then(function (response) {
            // Handle success
            alert(response.data.success);
         //   localStorage.setItem("user_id", response.data);
          //  setUser_Id(response.data);
          if(response.data.email == email){
            localStorage.setItem("user_id", response.data.email);

          }
          if(response.data.success == "successfully login"){
           // window.location.reload();
        
           navigate('/Dashboard');
          
          }
          
          
        
        })
        .catch(function (error) {
            // Handle error
      
            console.log(error);
        });

    }
    return(
        <>
        <div className=' mt-16 bg-white'>
    <div className = " signup  row max-w-5xl">
    <div className='col-md max-w-2xl'>
    <img src = {signup} className='w-full'/>

    </div>
    <div className='col-md flex justify-center items-center'>
    <div className='form'>
      <h1 className='text-2xl font-medium'>Login to Exclusive</h1>
      <p className='mt-3'>Enter your details below</p>
      <form className='mt-3' name = "signin-form" onSubmit={SignIn}>
      
      <div className="form-item">
      <input className='mt-3 border-none w-full' name = "email" placeholder='email and Phone no' required></input>
      </div>
      <div className="form-item">
      <input className='mt-3 border-none w-full ' name = "password" placeholder='password' required></input>
      </div>
      <div className="mt-3 flex ">
      <button className=' text-white bg-red-500 h-10  w-32 mt-3' type="submit">Login</button>
      <div className=" w-2/4 text-red-500 flex  justify-center items-center ml-3">forget password?</div>

      </div>
     
      </form>
      
 
    </div>
      
      </div>
  
 

    </div>
    </div>


        </>
    )

}
export default Signin;
