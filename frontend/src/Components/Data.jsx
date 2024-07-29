
import { useEffect, useState } from "react"
function Data({data}){
    
  const[products, setProducts] = useState();
  
      
       useEffect(()=>{
 
        fetch(`https://fakestoreapi.com/products/category/${data}?limit=4`)
        .then(res=>res.json())
        .then((data1)=>{
         setProducts(data1)
        if(data1 == 0){
          fetch(`https://api.escuelajs.co/api/v1/products/?title=${data}&limit=4`)
        .then(res=>res.json())
        .then((data2)=>{
         setProducts(data2)
        })

        }
         console.log(products)
          
        })
       
        
        
      
      },[data])
     
      
    
    return (
        <>
        <div className="flex w-full  mt-14 bg-white">
        
        <div className="data m-auto " style={{width: 1200}}>
        <div className="flex  flex-wrap" style={{width: 1230}}>
        {products?products.map((item)=>(
          <div className="data bg-white w-72 ml-4 p-3 border">
            <div className="image   w-64 h-72 flex justify-center p-3 bg-gray-300">
            <img  className=" w-60 h-64" src = {item.image?item.image:item.images[0]} />

            </div>
            <div className="title flex border-0">
            {item.title.substring(0, 20)+'...'}

            </div>
            <div className="description flex justify-center p-3  ">
            {item.description.substring(0,50)+'...'}

            </div>
            <div className="rating flex justify-center mt-3">
            
              <i className="fa fa-star  text-orange-300"></i>
              <i className="fa fa-star  text-orange-300"></i>
              <i className="fa fa-star  text-orange-300"></i>
              <i className="fa fa-star  text-orange-300"></i>
              <i className="fa fa-star  text-orange-300"></i>
            </div>
            <div className=" flex justify-center mt-3">
            <div className=" bg-blue-600 text-xs text-white  h-9 w-32 justify-center items-center">limited time deal</div>

            </div>
            <div className="price flex justify-center mt-3">
            {item.price}<span>Rs</span>

            </div>
            <div className="flex justify-center">
            <button className=" w-32 h-7 text-xs text-black bg-yellow-300">Add to cart</button>
              
            </div>

          </div>

          
        )):""}
          
        </div>

        </div>

        </div>
     
   </>
        
    )
}

export default Data