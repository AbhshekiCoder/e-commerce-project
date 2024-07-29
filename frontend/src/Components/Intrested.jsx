import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Intrested(){
    const [products, setProducts] = useState();
    const [slide2, setSlide2] = useState();
    useEffect(()=>{
        let userid = localStorage.getItem("user_id");
        let body = {
            userid: userid
        }
        let result =   axios.post('http://localhost:5000/products1', body )
         .then((result)=>{
            console.log(result.data);
            setProducts(result.data);
         })
         fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then((data)=>{
              setSlide2(data);
              console.log(data);
             
            })

    },[])
    function  Left2(){
        document.querySelector('.contentcontainer').scrollLeft -= 100;
      
        }
        function  Right2(){
          document.querySelector('.contentcontainer').scrollLeft += 100;
      
        }

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

      <div className=" max-w-5xl m-auto bg-white border">
            <div className="mt-5 ">
            <div className="flex p-3">
                <div className="w-2/4">WishList(4)</div>
                <div className="w-2/4 flex justify-center"><button className=" w-40 h-9 bg-transparent border">Move All to bag</button></div>
            </div>
            <div className="mt-5">
            <div className='contentcontainer overflow-x-auto flex  mt-3'>
   {products?products.map((item)=>(
      <div className=' w-52 ml-9  bg-gray-100' key = {item.id} >
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'><div className='mt-2'><i className= "fa-solid fa-trash  rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.product[2]} alt = "..." className='   h-40   w-36' />
</Link>
    
      </div>
      <div className=' text-sm flex justify-center'>
     {item.product[0].substring(0, 20)+"..."}
      </div>
      <button className="border w-full h-9 bg-black text-white  font-bold">Add to cart</button>
     
   

      </div>
      



    )): ""}
     

    
      

      </div>
          
           

            </div>

            </div>


            <div className='content-container   bg-white  p-3 mt-28'>
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>just for you</div></div>
     <div className='flex mt-3 items-center'>
     
    
     <div className='button1 flex   '>
      <button className='rounded-circle' onClick={Left2}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='rounded-circle' onClick = {Right2}><i class="fa-solid fa-arrow-right"></i></button>
     </div>
    

     </div>
     <div className='contentcontainer contentcontainer2 overflow-x-auto flex  mt-3' id = 'contentcontainers'>
   {slide2?slide2.map((item)=>(
      <div className=' w-52 ml-9 ' key = {item.id}>
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'><div className='mt-2'><i class="fa-regular fa-eye rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.image} alt = "..." className='   h-40   w-36' name = {item.id}/>
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

        </div>

        </>
    )
}
export default Intrested;