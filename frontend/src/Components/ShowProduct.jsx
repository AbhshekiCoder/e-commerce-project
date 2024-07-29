import { useState, useEffect } from "react";
import '../Components/main.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Reload from "./Reload";

function ShowProduct({title, title1}){
   const [product, setProduct] = useState();
   const [num, setNum] = useState(0);

   const [category, setCategory] = useState();
   const [slide1, setSlide1] = useState();
   const [number, setNumber] = useState(0);
   const [count, setCount] = useState(0);
   const [itemid, setItemId] = useState();
   const [userIntrested, setUserIntrested] = useState();
   
   
   var array = [];
  var sizes = 0;
  
  useEffect(()=>{
      let body = {
         title: title
      }

      axios.post("http://localhost:5000/product_data", body).then((result)=>{
       //  console.log(result.data);
         setProduct(result.data);
         setCategory(result.data[0].category);
         console.log(product);
         setItemId(result.data[0]._id);
         console.log(itemid);
         if(result){
            let userid = localStorage.getItem("user_id");
         let body = {
         itemid: result.data[0]._id,
         userid: userid
      }
       axios.post('http://localhost:5000/items', body).then((result1)=>{
         if(result1.data.length > 0){
            setNumber(result1.data[0].count)
            setCount(result1.data[0].count);
            console.log(result.data.length);
           

         }
         else{
            setCount(0);
         }
        
         
       
       })
       .catch((err)=>{
         
   
       })
    
       let data = {
         itemid: result.data[0]._id,
         userid: userid

       }
       axios.post('http://localhost:5000/sizes', data).then((result2)=>{
        
        document.getElementById(result2.data[0].size).style.backgroundColor = "green";
        array.push(result2.data[0].size);
        sizes = result2.data[0].size;


         }).catch((err)=>{
           
     
         })
         }
      
      })
      /** 
      fetch(` https://api.escuelajs.co/api/v1/products/?title=${title}`)
      .then(res=>res.json())
      .then(async(data)=>{
       setProduct(data);
      var nums = data[0].category.name;

       console.log(nums);
       setCategory(nums);
     
        
       
       var product ={
         title: data[0].title,
         price: data[0].price,
         description: data[0].description,
         images: [data[0].images[0], data[0].images[1], data[0].images[2]],
         category: data[0].category.name

       
      }

      axios({
       method: 'post',
       url: 'http://localhost:5000/products', // Replace with your backend API endpoint
       data: product
      
   })
   .then(function (response) {
       // Handle success
       
     
   
   })
       
       
       
        });
        */

     

   },[])
   useEffect( ()=>{
      let body = {
         category: category,
      }
    let result =   axios.post('http://localhost:5000/related_items', body )
     .then((result)=>{
         console.log(result.data);
         setSlide1(result.data);
       })
       .catch((err)=>{
         
 
       })
 
       
     
       
   }, [category])
   /** 
  useEffect(()=>{
   let userid = localStorage.getItem("user_id");
   let body ={
      userid : userid

   }
   
   let result =   axios.post('http://localhost:5000/cart_number', body )
     .then((result)=>{
      let count = result.data[0].count
     // setNumber(result.data[0].count);
      
    
     
      console.log(count);
    
         
       
       })
       .catch((err)=>{
         
 
       })
 
       


  },[])
  */

   
     console.log(number);
   const btn = ()=>{
    document.querySelector('.icon').scrollLeft =+ 50;
    document.querySelector('.right').style.display = "block";
    document.querySelector('.left').style.display = "none";
   }
   const btn1 =()=>{ 
    document.querySelector('.icon').scrollLeft =- 100;
    document.querySelector('.right').style.display = "none";
    document.querySelector('.left').style.display = "block";


    
    

   }


   
   function img(){
      setNum(0)
      console.log(num)
   }
   function img2(){
      setNum(1)
      console.log(num)
   }
   function img3(){
      setNum(2)
      console.log(num)
   }
   function rating(){
      let array = [0, 1, 2, 3, 4]
       return(
        array.map((element) =>{
          return <i class="fa-solid fa-star text-orange-300 text-sm" key = {element}></i>
          
         
         })
      )
      }
      useEffect(()=>{
       
         
        }, [count])
      let Right = ()=>{
         document.querySelector('.contentcontainer3').scrollLeft += 100;

      }
      let Left = ()=>{
         document.querySelector('.contentcontainer3').scrollLeft -= 100;
      }
      function counts(e){

         console.log(count);
         setCount(count + 1);
         console.log(count);
         let itemid = e;
         setItemId(itemid);
         console.log(itemid);
       
         let userid = localStorage.getItem("user_id");
         var obj = {
            itemid: itemid,
            userid: userid,
            count: count
         }
         var value = JSON.stringify(obj);

        
         localStorage.setItem("cart", value);
         let data = {
            itemid: itemid
         }
            let result2 =   axios.post('http://localhost:5000/carts1', data )
            .then((result1)=>{
              
                  console.log(result1.data[0].title);
                  let body = {
                     count: count,
                     item_id: itemid,
                     userid: userid,
                     products: [ result1.data[0].title,  result1.data[0].price, result1.data[0].images[0]  ]
                   
                
                  }
                  let result =   axios.post('http://localhost:5000/cart', body )
                  .then((result)=>{
                      console.log(result.data);
                      
                      
                    })
                    .catch((err)=>{
                      
                
                    })
               })
                
               
               
            

         }
       
       
       
       
        
       
       
       
   
       function adds(e){
        console.log("clicked")
         setCount(count - 1);
        
         let itemid = e;
         console.log(itemid);

         let userid = localStorage.getItem("user_id");
         var obj = {
            itemid: itemid,
            userid: userid,
            count: count
         }
         var value = JSON.stringify(obj);
   
         localStorage.setItem("cart", value);
      
         let body = {
            count: count ,
            item_id: itemid,
            userid: userid
       
         }
         let result =   axios.post('http://localhost:5000/cart_adds', body )
         .then((result)=>{
             console.log(result.data);
             
           })
           .catch((err)=>{
             
       
           })
       

       }
      
      function size(e, id, div){
         let userid = localStorage.getItem("user_id");
        
         let data = {
            itemid: id,
            userid: userid
   
          }
         axios.post('http://localhost:5000/sizes', data).then((result2)=>{
            console.log(result2.data[0].size);
            document.getElementById(result2.data[0].size).style.backgroundColor = "white";
         
         })
         console.log(array);

         console.log(sizes);
       //  document.getElementById(sizes).backgroundColor = "white";
         let itemid = id;
         document.getElementById(e).style.backgroundColor = "green";
         document.getElementById(e).style.color = "white";
        
         let next = e;
         let previous = e;

       
         array.push(previous);
         console.log(array);

       
         console.log(itemid);
         console.log("click");
         array.map((element)=>(
            document.getElementById(element).style.backgroundColor = "white",
           document.getElementById(element).style.color = "black"
         ))
         document.getElementById(next).style.backgroundColor = "green";
         document.getElementById(next).style.color = "white";
         let body = {
            size: e,
            itemid: itemid,
            userid: userid
         }
         let result =   axios.post('http://localhost:5000/size', body )
         .then((result)=>{
            
             
             
           })
           .catch((err)=>{
             
       
           })

         

      }
      function User_intrested(e){
         let itemid = e;
         let userid = localStorage.getItem('user_id');
         let data = {
            userid: userid,
            itemid: itemid
         }
       
            let result2 =   axios.post('http://localhost:5000/user_intrested1', data )
            .then((result1)=>{
              
                  console.log(result1.data[0].title);
                  let body = {
                     
                     item_id: itemid,
                     userid: userid,
                     products: [ result1.data[0].title,  result1.data[0].price, result1.data[0].images[0]  ]
                   
                
                  }
                  let result =   axios.post('http://localhost:5000/user_intrested', body )
                  .then((result)=>{
                     
            if(result.data.length == 0){
               setUserIntrested(0);
               console.log(userIntrested)
               let userintrested = document.getElementById("user_intersted");
               userintrested.classList.remove("fa-regular");
               userintrested.classList.add("fa-solid");
             
                  let data= JSON.parse(localStorage.getItem('item')||'[]')
                  data.push(itemid);
                  localStorage.setItem('item',JSON.stringify(data));

                  
            }
            else{
               setUserIntrested(1);
               console.log(userIntrested)
               let userintrested = document.getElementById("user_intersted");
               userintrested.classList.remove("fa-solid");
               userintrested.classList.add("fa-regular");
            }
           
             
           })
           .catch((err)=>{
             
       
           })
         
               })
       

      }
      useEffect(()=>{
         console.log(itemid);
    
         let userid = localStorage.getItem('user_id');
         let body = {
            userid: userid,
            itemid: itemid
            
         }
         let result =   axios.post('http://localhost:5000/user_intrested2', body )
         .then((result)=>{
            if(result.data != 0){
               console.log('shghs')
             
               console.log(userIntrested);
               let userintrested = document.getElementById("user_intersted");
               userintrested.classList.remove("fa-regular");
               userintrested.classList.add("fa-solid");
   
            }
          else{
              
               console.log("clciked")
               let userintrested = document.getElementById("user_intersted");
               userintrested.classList.remove("fa-solid");
               userintrested.classList.add("fa-regular");
   
            }
   
   })
        }, [itemid])
        useState(()=>{
         let userid = localStorage.getItem('user_id');
         let body = {
            userid: userid

         }
         let result =   axios.post('http://localhost:5000/counts', body )
         .then((result)=>{
            console.log(result.data);
            document.querySelector('.carts ').innerHTML = result.data[0].total;
         })

        },[count])
       
     
      
   
         
    return(
        <>
        <div className="products bg-white mt-10">
        <div className=" max-w-7xl m-auto">
        <nav aria-label="breadcrumb mt-3 ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item max-md:text-sm text-gray-400"><Link to = "/">Account</Link></li>
    <li class="breadcrumb-item  max-md:text-sm text-gray-400" >{product?product[0].category.name:''}</li>
    <li class="breadcrumb-item active  max-md:text-sm" aria-current="page">{product?product[0].title:''}</li>
  </ol>
      </nav>
      {product?product.map((item)=>(
      <div className="row max-md:w-full  max-md:flex max-md:justify-center" key = {item.title}>
     
         
         <div className="col-3 border max-md:w-full">
         <div className="product-filter max-sm:flex">
            <div>
            <img src = {item.images[0]} onMouseOver = {img}/>

            </div>
            <div>
            <img src = {item.images[1]} onMouseOver={img2}/>

            </div>
            <div>
            <img src = {item.images[2]} onMouseOver={img3}/>

            </div>
         </div>


         </div>
         <div className="col-md border product-img max-md:w-full max-md:flex max-md:justify-center">
         <img src = {item.images[num]}/>
           

         </div>
         <div className="col-md border p-3 max-md:w-full">
         <div className=" border-b-2 h-fit pb-3">
         <div className="text-xl font-bold max-md:text-sm">{item.title}</div>
         <div className="rating flex items-center mt-3 max-md:text-sm" ><div>{rating()}</div> <p className=" text-gray-400 ml-3 max-md:text-sm">(50 reviews) |</p><p className=" text-green-400 ml-3">in stocks</p></div>
         <div className="price mt-3">${item.price}</div>
         <div className="description mt-3 font-normal text-sm ">{item.description}</div>
         </div>
          <div className="mt-3">
          <div className="flex items-center">
            <div className=" font-semibold">colors:</div><div className=" flex items-center"><button className="rounded-circle h-4 w-4 bg-blue-400 ml-5"></button><button className="rounded-circle h-4 w-4 bg-green-600 ml-3"></button></div>
          </div>
          <div className="size flex mt-3 ">
          <div className="flex items-center">
            Size: 
          </div>
          <div className="flex flex-wrap ml-3 items-center">
          <div className="h-6 w-6 text-sm border-2 ml-3 flex items-center justify-center size"   size = "XS" id ="XS" onClick={()=>size('XS', item._id, this)}>XS</div>
          <div className="h-6 w-6 text-sm border-2 ml-3 flex items-center justify-center size"   size="S" id = "S" onClick={()=>size('S', item._id, this)} >S</div>
          <div className="h-6 w-6 text-sm border-2 ml-3 flex items-center justify-center size"   size="L" id = "L" onClick={()=>size('L', item._id, this)}>L</div>
          <div className="h-6 w-6 text-sm border-2 ml-3 flex items-center justify-center size"  size="XL" id = "XL" onClick={()=>size('XL', item._id, this)}>XL</div>
         

          </div>
          

          </div>
          <div className="cart row">
          <div className="col-md flex mt-3">
          <div><button className="h-9 w-9 border"  itemid = "hello" onClick={()=>counts(item._id)} ><i class="fa-solid fa-plus"></i></button></div>
          <div className=" w-28 border flex justify-center items-center count">{count?count:''}</div>
          <div><button className="h-9 w-9 border add block" style={{display: count == 0?'none':'block'}} onClick={()=>adds(item._id)} ><i class="fa-solid fa-minus"></i></button></div>

          </div>
          <div className="col-md flex items-center ">
          <button className="text-white bg-red-500 w-28 h-9 mt-3 rounded-md">Buy Now</button>
            
          </div>
          <div className="col-md  flex items-center">
          <button className="border-2 h-9 w-9 mt-3 rounded-sm"><i class="fa-regular fa-heart text-xl text-red-600" id = "user_intersted" onClick = {()=>User_intrested(item._id)}></i></button>
          </div>
 
          </div>
          <div className="border-2  flex flex-wrap mt-3 p-2">
          <div className=" flex items-center">
          <i class="fa-solid fa-truck-fast text-2xl text-gray-300"></i>

          </div>
          <div className=" ml-3 ">
          <div className="text-sm flex items-center">Free Delivery</div>
          <div className="text-sm flex items-center">Enter your postal code for Delivery Availability</div>
            
         </div>

          </div>
          <div className="border-2 flex  flex-wrap p-2">
          <div className=" flex items-center  ">
          <i class="fa-solid fa-rotate text-2xl text-gray-300"></i>

          </div>
          <div className=" ml-3 ">
          <div className="text-sm flex items-center">Return Delivery</div>
          <div className="text-sm flex items-center">Free 30 Days Delivery Returns. Details</div>
            
         </div>

          </div>


          </div>
         
         </div>
         
      

     
         
         
      </div>
   )):''}
      
      <div className='content-container   bg-white  p-3'>
      <div className='flex'><div className=' h-7 w-3 bg-red-500'></div><div className='ml-3 text-red-500 font-medium'>Related items</div></div>
     <div className='flex mt-3 items-center'>
     <div className='button flex  w-full justify-end pr-3 '>
      <button className='rounded-circle' onClick={Left}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='rounded-circle' onClick = {Right}><i class="fa-solid fa-arrow-right"></i></button>
     </div>
    
    
    

     </div>
    {
      
       <div className='contentcontainer contentcontainer3 overflow-x-auto flex  mt-6' id = 'contentcontainer3'>
   {slide1?slide1.map((item)=>(
      <div className=' w-52 ml-9 ' key = {item.id}>
      <div className='content-header flex  bg-gray-100'>
        <div className=' w-12 bg-red-500 text-white flex justify-center'>-40%</div>
        <div className='content-footer  bg-gray-100'><div className='p-2'><i class="fa-regular fa-heart rounded-circle flex justify-center items-center bg-white p-1"></i><div className='mt-2'><i class="fa-regular fa-eye rounded-circle flex justify-center items-center bg-white p-1"></i></div>
        </div></div>
      </div>
      <div className='contentcards    w-48  grid justify-center bg-gray-100'>
      <Link to = "/ShowProduct">  <img src = {item.images[0]} alt = "..." className='   h-40   w-36' name = {item.id} />
</Link>
    
      </div>
      <div className=' text-sm flex justify-center'>
     {item.title.substring(0, 10)+'...'}
      </div>
      <div className='flex mt-3 items-center'>
      <div className='text-red-500'>${item.price}</div><div className=''><div className=' text-gray-500 line ml-3'>${item.price + 100}</div></div>

      </div>
      <div className='rating flex mt-3'>
      {rating()}

      </div>
     

      </div>



    )):  <Reload/>}
     

    
      

      </div>
      
    }
     
      </div>
      </div>
     
      </div>

      


      
    
        
       

        </>
    )
}
export default ShowProduct;