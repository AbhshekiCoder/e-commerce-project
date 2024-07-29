import  bg from '../pictures/qr1.jpeg';
import google from '../pictures/googlepay.png';
import appstore from '../pictures/appstore.png'
function Footer(){
    return(
        <>
         <div className="footer w-full  text-white bg-black min-h-64 pt-16 pb-3 ">
         <div className="row   m-auto max-w-6xl ">
         <div className="col-md ">
         <p className="text-xl font-bold">Exclusive</p>
         <div className="font-bold mt-3 max-md:font-medium">Subscribe</div>
         <div className="mt-5 max-md:text-sm max-md:mt-3" style={{color: '#FAFAFA'}} >Get 10% off on your first order</div>
         <div className="border-2 mt-3 w-fit pr-1">
            <input type = "text" placeholder="Enter your email" className=" text-gray-400 border-none  bg-transparent h-9"></input><i class="fa-solid fa-magnifying-glass"></i>
         </div>

         </div>
         <div className="col-md max-md:mt-3 ">
         <p className="text-xl font-bold">Support</p>
         <div className=" text-gray-50 mt-3 max-md:text-sm max-md:mt-3"  style={{color: '#FAFAFA'}}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
         <div className="mt-3 max-md:text-sm max-md:mt-3">exclusive@gmail.com</div>
         <div className="mt-3 max-md:text-sm max-md:mt-3">+88015-88888-9999</div>

         </div>
         <div className="col-md  max-md:mt-3">
         <p className="text-xl font-bold">Account</p>
         <ul className="" type = "none">
         <li className="mt-3  max-md:text-sm max-md:mt-3">My Account</li>
         <li className="mt-3  max-md:text-sm max-md:mt-3">Login/Register</li>
         <li className="mt-3  max-md:text-sm max-md:mt-3">Cart</li>
         <li className="mt-3  max-md:text-sm max-md:mt-3">Wishlist</li>
         <li className="mt-3  max-md:text-sm max-md:mt-3">Shop</li>
        
         </ul>


         </div>
         <div className="col-md max-md:mt-3 ">
         <p className="text-xl font-bold ">Quick Link</p>
         <ul className="" type = "none">
         <li className="mt-3 max-md:text-sm max-md:mt-3">Privacy Policy</li>
         <li className="mt-3 max-md:text-sm max-md:mt-3">Terms of use</li>
         <li className="mt-3 max-md:text-sm max-md:mt-3">FAQ</li>
         <li className="mt-3 max-md:text-sm max-md:mt-3">Contact</li>
        
        
         </ul>


         </div>
         <div className="col-md">
         <p className="text-xl font-bold">Download App</p>
         <div className="flex flex-wrap mt-3   ">
         <div className=' max-sm:w-full max-md:text-sm max-md:mt-3'>Save $3 with App New User Only</div>
         <div className='  w-16 h-16 mt-3 max-sm:mt-0 '><img src = {bg} className='w-full h-full '/></div>
         <div className='mt-3 max-sm:mt-0 '>
         <div className='  w-20  h-9 ml-3'><img src = {google} className='w-full h-full '/>
         
        
          
         </div>
         <div className='  w-20  h-9 ml-3 '><img src = {appstore} className='w-full h-full img'/>
         
        
          
         </div>
         </div>
         <div className='flex mt-3 max-md:w-full'>
         <div className='text-white ml-5'>  
         <i class="fa-brands fa-facebook-f text-xl"></i>
        </div>
        <div className='text-white ml-5'>  
        <i class="fa-brands fa-twitter text-xl"></i>
        </div>
        <div className='text-white ml-5'>  
        <i class="fa-brands fa-instagram text-xl"></i>
        </div>
        <div className='text-white ml-5'>  
        <i class="fa-brands fa-linkedin-in text-xl"></i>
        </div>
       
         </div>

         </div>
         


         </div>
        
         </div>
         <div className='flex justify-center text-gray-500 mt-3'>Copyright Rimel 2022. All right reserved</div>

         </div>

        </>
    )
}
export default Footer;