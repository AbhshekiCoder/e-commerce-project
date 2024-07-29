import {Link} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar({profile, submit}){
   
 

   
   
    

    return(
        <>
        <div className='headbar sticky-top bg-white '>
        <div className='flex items-center navbar-toggle  bg-black h-9 '><div className='navbar1 flex justify-end text-white text-sm  max-md:hidden' >Summer sale for all Swin and Suits and Free Express Delivery <a href = "#" className=' underline border-white ml-3 max-md:ml-1 '>ShopNow</a></div><div className='flex justify-end ml-52'><select className='mr-12'>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
            
        </select></div></div>
            <div className="navbar   flex items-center max-md:w-full ">
           
            <ul className="navbar-list  max-md:w-full ">
          
            <li className="logo float-left font-bold text-md">
            <Link to="/" className="list-item  text-xl mb-3">
              Exclusive
            </Link>
          

            </li>
            <li className="navbar-item float-left ml-16 text-md">
            <Link to="/" className='font-bold text-base  flex'>
              Home

            </Link>


            </li>
          
            <li className="navbar-item float-left ml-16 text-md">
             <Link to="/Contact" className=" font-bold text-base  flex" >
               Contact
             </Link>

            </li>
            <li className="navbar-item float-left ml-16 text-md">
             <a href="/" className="  font-bold text-base  flex">
             <span className=" flex items-end">About</span>
             </a>

            </li>
            <li className="navbar-item float-left ml-16 text-md">
             <Link to="/Signup" className=" font-bold text-base  flex">
             <span className=" flex items-end">Signup</span>
             </Link>

            </li>
             
             
            <li className="navbar-item float-left ml-16 text-md  flex items-center  bg-gray-200  rounded-tl-md rounded-bl-md max-md:hidden">
           <form name = "form">
           <input className="search-from  h-7 rounded-tl-md rounded-bl-md  bg-gray-200 " placeholder="what are you looking for"  name = "product" onChange={submit}/>
          </form>
           <span className=" w-7 h-7  flex justify-center  bg-gray-200"><Link to ="/Data"><i className="fa fa-search text-xl  h-9  " ></i></Link></span>
 
            </li>
            <li className="navbar-item float-left ml-16 text-md  flex items-center max-md:hidden">
             <Link to="/Intrested" className=" font-bold text-base    flex items-center">
             <i class="fa-regular fa-heart text-xl"></i>
             </Link>

            </li>
            <li className="navbar-item float-left ml-16 text-md flex items-center max-md:hidden ">
             <Link to="/Cart" className=" font-bold text-base grid">
             <p className='carts absolute text-white z-10 ml-3 text-sm'></p>
             <i class="fa-solid fa-cart-shopping text-2xl "></i>
            
             </Link>

            </li>
             <li className="navbar-item float-left  ml-11 text-md flex  items-center max-md:hidden">
            
             <i class="fa-solid fa-circle-user text-red-500 text-xl " onClick={profile}></i>
        

            </li>
            <li className = "navbar-items">
           
            <i class="fa-solid fa-bars"></i>


            </li>
            <li className = "navbar-items">
            <Link to = "/Cart">
            <i class="fa-solid fa-cart-shopping text-md "></i>
          

            </Link>
           
            </li>
             
             
             
             
             
        </ul>
        
        </div>

        </div>
       
        </>
    )

}
export default Navbar;