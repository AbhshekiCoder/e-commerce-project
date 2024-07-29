import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile({modal, signin, userid}){

   console.log(userid)

const navigate = useNavigate();
const logout =()=>{
    localStorage.removeItem("user_id");
    document.querySelector('.profile').style.display = "none";
    navigate("/");

}
   
   
    return(
       
        <>
        <div className="profile w-48 h-56 border p-3 modal " onMouseLeave={modal}>
        <div className="flex items-center text-white mt-3"><i class="fa-regular fa-user"></i><div className="ml-3 text-sm">Manage My Account</div></div>
        <div className="flex items-center text-white mt-3"><i class="fa-solid fa-bag-shopping"></i><div className="ml-3 text-sm ">Manage Orders</div></div>
        <div className="flex items-center text-white mt-3"><i class="fa-regular fa-circle-xmark"></i><div className="ml-3 text-sm">My Cancelletion</div></div> 
        <div className="flex items-center text-white mt-3"><i class="fa-regular fa-star"></i><div className="ml-3 text-sm">Manage My Reviews</div></div> 
        {userid == null?<div className="flex items-center text-white mt-3" id = "signin"><i class="fa-solid fa-right-to-bracket"></i><div className="ml-3 text-sm"><Link to="/Signin">Signin</Link></div></div>:<div className="flex items-center text-white mt-3"  id = "signup"><i class="fa-solid fa-right-from-bracket"></i><div className="ml-3 text-sm flex items-center" onClick={logout}>Logout</div></div>  }
        
       
        </div>
     
            
      
        


        

        </>
    )

}
export default Profile;