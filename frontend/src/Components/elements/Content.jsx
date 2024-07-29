import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Laptops from '../pictures/laptop.png';
import Smartphone from '../pictures/phones.png';
import Watches from '../pictures/watches.png';
import Headphones from '../pictures/headphones.png';
import Games from '../pictures/games.png';
import Camera from '../pictures/camera.png';
import Accessories from '../pictures/Accessories.png';
import ad from '../pictures/ad.png';
import ad2 from '../pictures/ad2.png';
import ad3 from '../pictures/ad3.jpeg';
import ad4 from '../pictures/ad4.png';
import p from '../pictures/p.png';

function Content({deals, image, cards}){
  const [slide2, setSlide2] = useState();
  const [card, setCard] = useState();
  const [slide3, setSlide3] = useState();
  const [Minutes, setMinutes] = useState();
  const [Days, setDays] = useState();
  const [Seconds, setSeconds] = useState();
  const [Hours, setHours] = useState();
  const [category, setCategory] = useState();


    function  Left(){
      document.querySelector('.contentcontainer').scrollLeft -= 100;
    
      }
      function  Right(){
        document.querySelector('.contentcontainer').scrollLeft += 100;
    
      }
      function  Left1(){
       
    
        document.querySelector('#category').scrollLeft -= 100;

      
        }
        function  Right1(){
          
          document.querySelector('#category').scrollLeft += 100;
      
        }
        function  Left2(){
          document.getElementsByClassName('contentcontainer2').scrollLeft -= 100;
        
          }
          function  Right2(){
            document.getElementsByClassName('contentcontainer2').scrollLeft += 100;
        
          }

      
useEffect( ()=>{
 
  fetch('https://fakestoreapi.com/products?limit=10')
  .then(res=>res.json())
  .then((data)=>{
    setSlide2(data);
   
  })
  fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  .then(res=>res.json())
  .then((data)=>{
    console.log(data)
    setCard(data);
   
  })
  fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=20')
  .then(res=>res.json())
  .then((data)=>{
    console.log(data)
    setSlide3(data);
   
  });

  

},[])
 useEffect( ()=>{
    axios.post('http://localhost:5000/Products_Category' ).then( function (response){
    console.log(response.data);
    setCategory(response.data);
  },[])

  axios.get(
    "https://fake-e-commerce-api.onrender.com/product/limit/6/10")
  .then((res) => {
    console.log(res.data);
    setSlide2(res.data);
    })
    axios.get(
    "https://fake-e-commerce-api.onrender.com/product/limit/2/10")
  .then((res) => {
    console.log(res.data);
    setSlide3(res.data);
    })

 }, [])
var CountDown = new Date("July 30, 2024, 11:30:00" ).getTime();

 
setInterval(()=>{
  var nowDate = new Date().getTime();
  var distance =  CountDown - nowDate;
  setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
  setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  
  

},1000)

function rating(){
let array = [0, 1, 2, 3, 4]
 return(
  array.map((element) =>{
    return <i class="fa-solid fa-star text-orange-300" key = {element}></i>
    
   
   })
  

  
 )

 
}

    return(
        <>
            
      <div className='content-container   bg-white  p-3 max-md:w-full'>
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>Today's</div></div>
     <div className='flex mt-3 items-center'>
     <div className='text-2xl font-bold max-md:text-lg max-sm:text-base'>
      Flash Sales
     </div>
     <div className='deal grid grid-cols-4  w-fit'>
     <div className=''>
      <div className=' font-normal max-md:font-thin '>Days</div>
      <div className=' flex '><p className='text-4xl font-bold max-md:text-xl max-sm:text-lg '>{Days}</p><span className='text-red-300 ml-3  flex items-center text-xl font-bold '>:</span></div>
     </div>
     <div className=''>
     <div className=' font-normal max-md:font-thin  '>Hours</div>
     <div className=' flex'><p className='text-4xl font-bold  max-md:text-xl max-sm:text-lg max-sm:ml-2'>{Hours}</p><span className='text-red-300 ml-3 flex items-center text-xl font-bold '>:</span></div>
     </div>
     <div className=''>
     <div className=' font-normal  max-md:font-thin  '>Minutes</div>
      <div className=' flex'><p className='text-4xl font-bold  max-md:text-xl max-sm:text-lg  max-sm:ml-2'>{Minutes}</p><span className='text-red-300 ml-3  flex items-center text-xl font-bold'>:</span></div>
     </div> 
     <div className='ml-3'>
     <div className=' font-normal  max-md:font-thin  '>Seconds</div>
      <div className=' flex'><p className='text-4xl font-bold  max-md:text-xl max-sm:text-lg'>{Seconds}</p></div>
     </div>
     </div>
     <div className='button flex  '>
      <button className='rounded-circle' onClick={Left}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='rounded-circle' onClick = {Right}><i class="fa-solid fa-arrow-right"></i></button>
     </div>
    

     </div>
      <div className='contentcontainer overflow-x-auto flex  mt-3'>
   {deals?  deals.map((item)=>(
    
      <div className=' w-52 ml-9 ' key = {item._id}>
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'>{localStorage.getItem("item").includes(item._id)?<i class="fa-solid fa-heart rounded-circle flex justify-center text-red-600 items-center bg-white p-1"></i>:<i class="fa-regular fa-heart rounded-circle flex justify-center items-center bg-white p-1"></i>}<div className='mt-2'><i class="fa-regular fa-eye rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.images[0]} alt = "..." className='   h-40   w-36' name = {item.id} onClick={image} title = {item.title}/>
</Link>
    
      </div>
      <div className=' text-sm flex justify-center'>
     {item.title.substring(0, 20)+"..."}
      </div>
      <div className='flex mt-3 items-center'>
      <div className='text-red-500'>${item.price}</div><div className=''><div className=' text-gray-500 line ml-3'>${item.price + 100}</div></div>

      </div>
      <div className='rating flex mt-3'>
      {rating()}

      </div>
     

      </div>



    )): ""}
     

    
      

      </div>
      <button>View All Products</button>
     
      </div>
      <div className='content-container   bg-white  p-3'>
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>Categories</div></div>
     <div className='flex mt-3 items-center'>
     <div className='text-2xl font-bold max-md:text-lg max-sm:text-base'>
      Browse By Category
     </div>
    
     <div className='button1 flex   '>
      <button className='rounded-circle' onClick={Left1}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='rounded-circle' onClick = {Right1}><i class="fa-solid fa-arrow-right"></i></button>
     </div>
    

     </div>
      <div className='contentcontainer overflow-x-auto flex  mt-3' id = "category">
   {category?category.map((item)=>(
      <div className=' w-52 ml-9 grid justify-center border-2 p-4  max-md:p-3' key = {item.id}>
      <div className='contentcards w-28 grid justify-center '>
      <Link to = "/ShowProduct"><img className=' w-28 h-28 max-md:w-16 max-md:h-16' src = {item.image} alt = '...'/>
</Link>
    
      </div>
      <div className='flex justify-center mt-3 text-black'>
      {item.type}

      </div>
     

      </div>



    )): ""}
     

    
      

      </div>
      <button>View All Products</button>
     
      </div>

      <div className='ads bg-black row '>
      <div className='col-md flex justify-center'>
      <div>
      <div className='text-green-400 mt-5'>Categories</div>
      <h1 className='mt-3 text-white text-3xl w-72'>Enhance Your Music Experience</h1>
      <div className='flex mt-3'>
        <div className='rounded-circle  w-12 h-12  bg-white'>
        <div className=' text-sm flex justify-center font-bold'>{Hours}</div>
        <p className=' text-xs flex justify-center'>Hours</p>

        </div>
        <div className='rounded-circle  w-12 h-12  bg-white ml-3'>
        <div className=' text-sm flex justify-center font-bold'>{Days}</div>
        <p className=' text-xs flex justify-center'>Days</p>

        </div>
        <div className='rounded-circle  w-12 h-12  bg-white ml-3'>
        <div className=' text-sm flex justify-center font-bold'>{Minutes}</div>
        <p className=' text-xs flex justify-center'>Minutes</p>

        </div>
        <div className='rounded-circle  w-12 h-12  bg-white ml-3'>
        <div className=' text-sm flex justify-center font-bold'>{Seconds}</div>
        <p className=' text-xs flex justify-center'>Seconds</p>

        </div>
      </div>
      </div>
      

      </div>
      <div className='col-md flex '>
      <img src ={ad} className='' />

      </div>


      </div>

      <div className='content-container   bg-white  p-3'>
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>Our Products</div></div>
     <div className='flex mt-3 items-center'>
     <div className='text-2xl font-bold max-md:text-lg max-sm:text-base'>
      Explore Our Products
     </div>
    
     <div className='button1 flex   '>
      <button className='rounded-circle' onClick={Left2}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='rounded-circle' onClick = {Right2}><i class="fa-solid fa-arrow-right"></i></button>
     </div>
    

     </div>
     <div className='contentcontainer contentcontainer2 overflow-x-auto flex  mt-3' id = 'contentcontainer2'>
   {slide2?slide2.map((item)=>(
      <div className=' w-52 ml-9 ' key = {item.id}>
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'><i class="fa-regular fa-heart rounded-circle flex justify-center items-center bg-white p-1"></i><div className='mt-2'><i class="fa-regular fa-eye rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.image} alt = "..." className='   h-40   w-36' name = {item.id} onClick={image}/>
</Link>
    
      </div>
      <div className=' text-sm flex justify-center'>
     {item.name}
      </div>
      <div className='flex mt-3 items-center'>
      <div className='text-red-500'>${item.price}</div><div className=''><div className=' text-gray-500 line ml-3'>${item.price + 100}</div></div>

      </div>
      <div className='rating flex mt-3'>
      {rating()}

      </div>
     

      </div>



    )): ""}
     

    
      

      </div>
       <div className='contentcontainer contentcontainer2 overflow-x-auto flex  mt-6' id = 'contentcontainer2'>
   {slide3?slide3.map((item)=>(
      <div className=' w-52 ml-9 ' key = {item.id}>
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'><i class="fa-regular fa-heart rounded-circle flex justify-center items-center bg-white p-1"></i><div className='mt-2'><i class="fa-regular fa-eye rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.image} alt = "..." className='   h-40   w-36' name = {item.id} onClick={image}/>
</Link>
    
      </div>
      <div className=' text-sm flex justify-center'>
     {item.name}
      </div>
      <div className='flex mt-3 items-center'>
      <div className='text-red-500'>${item.price}</div><div className=''><div className=' text-gray-500 line ml-3'>${item.price + 100}</div></div>

      </div>
      <div className='rating flex mt-3'>
      {rating()}

      </div>
     

      </div>



    )): ""}
     

    
      

      </div>
      <button>View All Products</button>
     
      </div>

      <div className='ad2  mt-3 bg-white ' >
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>Featured</div></div>
     <div className='flex mt-3 items-center'>
     <div className='text-2xl font-bold max-md:text-lg max-sm:text-base'>
      New Arrival
     </div>
     </div>
     <div className='row '>
      <div className='col-md ads1 '>
      <div className='z-10 content'>
        <h1 className='text-3xl text-white max-md:text-xl'>Play Station 5</h1>
        <p className='text-white  w-60 mt-3 max-md:text-sm'>Boly and white Version of the PS6 comming soon</p>
        <a href = "#" className='text-white mt-3 max-md:text-sm'>Shop Now</a> 
      </div>
    
      <div className='ads1-image'>
      <img src = {ad2}/>
      

      </div>
     
      </div>
      <div className='col-md'>
      <div className='flex ads2 flex-wrap '>
      <div className=' ads-image'>
      <div className='z-10 content1 absolute mt-10 ml-3'>
        <h1 className='text-3xl text-white max-md:text-xl'>Women’s Collections</h1>
        <p className='text-white  w-60 mt-3 max-md:text-sm'>Featured woman collections that give you another vibe.</p>
        <a href = "#" className='text-white mt-3 max-md:text-sm'>Shop Now</a>
      </div>
      <img src = {ad3}  />
    
      </div>
      <div className=' ads-image2'>
      <div className='z-10 content1 absolute mt-16 ml-3'>
        <h1 className='text-md text-white max-md:text-sm'>Speakers</h1>
        <p className='text-white  w-60 mt-3 text-sm max-md:text-xs'>Amazon wireless speakers.</p>
        <a href = "#" className='text-white mt-3  text-sm max-md:text-xs'>Shop Now</a>
      </div>
      <img src = {ad4}  />
    
      </div>
      <div className=' ads-image2'>
      <div className='z-10 content1 absolute mt-16 ml-3'>
        <h1 className='text-md text-white max-md:text-sm'>Perfume</h1>
        <p className='text-white  w-60 mt-3 text-sm max-md:text-xs'>GUCCI INTENSE OUD EDP.</p>
        <a href = "#" className='text-white mt-3  text-sm max-md:text-xs'>Shop Now</a>
      </div>
      <img src = {p} className='ad1-image'  />
    
      </div>



      </div>
    
      </div>
      </div>
      <div className='row mt-5  max-md:w-full'>
      <div className='col-md '>
      <div className='flex justify-center'>
      <div className='rounded-circle p-2 bg-gray-300 max-md:p-1 '>
      <i class="fa-solid fa-truck text-gray-200 bg-black rounded-circle p-3 flex justify-center items-center text-3xl max-md:text-2xl max-md:p-2"></i>

      </div>

      </div>
      <div className='flex justify-center font-bold mt-3 max-md:text-sm'>
      free And Fast Delivery
     </div>
     <div className='flex justify-center max-md:text-sm'>
     Free delivery for all orders over $140
     </div>

      </div>
      <div className='col-md max-md:mt-3'>
      <div className='flex justify-center '>
      <div className='rounded-circle p-2 bg-gray-300 max-md:p-1'>
      <i class= 'fa-solid fa-headphones text-gray-200 bg-black rounded-circle p-3 flex justify-center items-center text-3xl max-md:text-2xl max-md:p-2'></i>

      </div>

      </div>
      <div className='flex justify-center font-bold mt-3 max-md:text-sm'>
      24/7 CUSTOMER SERVICE
     </div>
     <div className='flex justify-center max-md:text-sm'>
     Friendly 24/7 customer support
     </div>

      </div>
      <div className='col-md max-md:mt-3'>
      <div className='flex justify-center '>
      <div className='rounded-circle p-2 bg-gray-300 max-md:p-1'>
      <i class="fa-solid fa-shield-halved text-gray-200 bg-black rounded-circle p-3 flex justify-center items-center text-3xl max-md:text-2xl max-md:p-2"></i>

      </div>

      </div>
      <div className='flex justify-center font-bold mt-3 max-md:text-sm'>
      MONEY BACK GUARANTEE
     </div>
     <div className='flex justify-center max-md:text-sm'>
     We reurn money within 30 days
     </div>

      </div>

      </div>

     </div>
     
     

     

     
     
        </>
    )
}
export default Content;