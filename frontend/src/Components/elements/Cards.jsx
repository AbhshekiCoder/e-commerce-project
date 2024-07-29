import { useState, useEffect } from 'react';
import item1 from '../pictures/item1.jpg';
import item2 from '../pictures/item2.jpg';
import item3 from '../pictures/item3.jpg';



import axios from 'axios';
function Cards({productdata}){
const [data1, setData1]= useState();
const [data2, setData2] = useState();
console.log(productdata);
        
useEffect(()=>{
 
    fetch('https://fakestoreapi.com/products/category/electronics?limit=4')
    .then(res=>res.json())
    .then((data)=>{
      setData1(data);
      console.log(data1)
    })
    fetch(`https://api.escuelajs.co/api/v1/products?offset=20&limit=4`)
        .then(res=>res.json())
        .then((data2)=>{
         setData2(data2)
        })
  
  },[])


  
    



    return(
        <>
        <div className='row  cards '>
       
    <div className='col-md  '>
          <h1 className='flex justify-center text-lg  font-bold'>pickup  when you left of</h1>
          <div  className=' flex flex-wrap   w-82 '>
         {
            productdata?productdata.map((item)=>(
            <div className='' key = {item._id}>
            <a href = "/">
            <img src = {item.image} className='h-32 w-36' alt = "..."/>
            </a>
            <div>{item.description.substring(0,10) + '...'}</div>
        
            

            </div>
         )):""
         }


        
          </div>
          
         
     </div>
         
         
         
          <div className='col-md  '>
          <h1 className='flex justify-center text-lg  font-bold'>pickup  when you left of</h1>
          <div className=' flex flex-wrap   w-82 '>
          {data1?data1.map((item)=>(
            <div className='ml-3'>
          <img src = {item.image} className = " w-36  h-32  " alt = "..."/>
          <div className='flex justify-center'>{item.title.substring(0,10) + '...'}</div>
          </div>

          )):""}
        
          
  
          </div>
          
          </div>
          <div className='col-md  '>
          <h1 className='flex justify-center text-lg  font-bold'>keep shoping for</h1>
          <div className=' flex flex-wrap   w-82 '>
          {data2?data2.map((item)=>(
            <div className='ml-3'>
          <img src = {item.images[0]} className = " w-36  h-32  " alt = "..."/>
          <div className='flex justify-center'>{item.title.substring(0,10) + '...'}</div>
          </div>

          )):""}
  
          </div>
          
          </div>
          <div className='col-md  '>
          <h1 className='flex justify-center text-lg  font-bold'>continue shoping deals</h1>
          <div className=' flex flex-wrap   w-82 '>
          <div className=''>
          <img src = {item1} className = " w-36  h-32  " alt = "..."/>
          <div className='flex justify-center'>Amegan 5457q36</div>
          </div>
          <div className=' ml-3'>
          <img src = {item2} className='h-32 w-36' alt = "..."/>
          <div className='flex justify-center'>amskjjd</div>
  
          </div>
          <div className=''>
          <img src = {item3}  className =' h-32 w-36' alt = "..."/>
          <div className='flex justify-center'>sd card reader</div>
  
          </div>
          <div className='ml-3'>
          <img src = {item3}  className =' h-32 w-36' alt = "..."/>
          
          </div>
          
  
          </div>
          
          </div>
         
          
  
          </div>
  
        </>
    )
}
export default Cards;