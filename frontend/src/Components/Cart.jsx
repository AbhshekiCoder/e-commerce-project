
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';


function Cart(){
    const [cart, setCart] = useState();
    const [data, setData] = useState();
   
    let item_id;
    useEffect(()=>{
        let userid = localStorage.getItem("user_id");
        
        let body = {
            userid: userid
        }
        let result =   axios.post('http://localhost:5000/carts', body )
        .then((result)=>{
            console.log(result.data);
            setCart(result.data);
            
            
            
          })

          axios.post('http://localhost:5000/price', body).then((result1)=>{
            setData(result1.data);
            console.log(data)
          
          })
       
        
     
    
    },[])
    let payment = async()=>{
      console.log("click");
      let userid = localStorage.getItem("user_id");
      let data = {
        userid: userid
      }
      await axios.post("http://localhost:5000/carts", data).then( async(result) =>{
        console.log(result.data);
        let stripe = await loadStripe("pk_test_51PauGq2Lcv7rdblxzjzMQaPLB5U41MemRItHaWFLUh3L9WkuYkkt4PUnxJTUDnmsY4brCiJcKBP8FOi0O1KNYEDj00LjmU5Y9H")
        let body = {
          product: result.data
        }
        const response = await axios.post("http://localhost:5000/payment", body).then((result1)=>{
          console.log(result1.data);
          stripe.redirectToCheckout({
            sessionId: result1.data.id
         
           })
           console.log(sessionId);
           localStorage.setItem("order", result1.data.id);
           
        });
      })
     
      
     
     
        
    }
  
    return(
        <>
        <div className=" mt-12 bg-white">
        <div className=" max-w-6xl m-auto ">
        <nav aria-label="breadcrumb mt-3 ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item max-md:text-sm text-gray-400"><Link to = "/">Home</Link></li>
    <li class="breadcrumb-item  max-md:text-sm " >Cart</li>
    
  </ol>
      </nav>
      <div className="cart mt-3">
      <table className='w-full border'>
      <tr>
      <th className=''>
            Product
        </th>
        <th className=''>
            Price
        </th>
        <th className=''>
            Quantity
        </th>
        <th className=''>
            Subtotal
        </th>

      </tr>
      {
        cart?cart.map((item)=>(
            <tr className='pt-3'>
        <td className='p-3 flex'>
        <div className='h-9 w-9'><img src = {item.product[2]} className='h-full w-full object-cover'/></div>
        <div className='text-sm font-extralight ml-3'>{item.product[0]}</div>
            
        </td>
        <td>
        {item.product[1]}
           
        </td>
        <td>
       
        <input type='number' name = "number" min = "1" max ="10" placeholder={item.count}   item={item.item_id}  className=' h-8 border' ></input>

       
        
        </td>
        <td>
        {item.total}
          
        </td>
      </tr>


        )):''
      }
     
   
        
      
      </table>
      <div className = "mt-3 flex ">
      <div className = " flex  w-2/4 items-center">
        <div className='  w-40  h-9 border-gray-500 shadow-md flex justify-center items-center border max-md:w-28'>
            Return To Shop
        </div>
      </div>
      <div className='  flex   w-2/4 justify-end'>
      <div className='w-40 h-9 border-gray-500 shadow-md flex justify-center items-center border max-md:w-28' >
           update cart
        </div>

      </div>
      </div>
      <div className='row mt-5 '>
      <div className='col-md flex items-center max-md:w-fit'>
      <input type = "text" className=' max-w-64   border-2 rounded-sm h-9 max-md:max-w-56' placeholder='coupon code'/><button className=' bg-red-500 text-white w-40 h-9 ml-3 max-md:w-32'>Apply Coupon</button>

      </div>
      <div className='col-md flex justify-end max-md:w-full max-md:justify-center'>
      <div className=' w-2/4 border-2 p-3 max-md:w-full'>
        <div className=''>
            Cart Total
        </div>
        <div className='flex border-b-2 p-3'>
        <div className=' text-gray-500 w-2/4'>Subtotal</div>
        <div className='flex justify-end w-2/4'>
        {data?data[0].total:''}

        </div>

         </div>
         <div className='flex  border-b-2 p-3'>
        <div className=' text-gray-500 w-2/4'>Shipping</div>
        <div className='flex justify-end w-2/4'>
        free

        </div>

         </div>
         <div className='flex   p-3'>
        <div className=' text-gray-500 w-2/4'>Total</div>
        <div className='flex justify-end w-2/4'>
        {data?data[0].total:''}

        </div>

         </div>
         <div className='flex justify-center mt-3 ' >
         <button className='text-white bg-red-500 m-auto w-44 h-9' onClick = {payment} >Proceed to checkout</button>

         </div>
      
        
      </div>
      </div>

      </div>

        </div>
       </div>
</div>
        </>
    )
}
export default Cart;