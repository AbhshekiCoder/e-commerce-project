import { Link } from "react-router-dom";
function Dashboard({username}){
    
    return(
        <>
        <div className="   mt-16 ">
        <div className=" max-w-5xl m-auto bg-white">

      
        <nav aria-label="breadcrumb mt-3 ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item max-md:text-sm text-gray-400"><Link to = "/">Home</Link></li>
    <li class="breadcrumb-item  max-md:text-sm text-gray-400" >My ACcount</li>
    <li class="breadcrumb-item active  max-md:text-sm d-flex" aria-current="page">{username?username: ''}</li>
  </ol>
      </nav>
      <div className="row mt-5 p-3">
        <div className="col-md max-w-80 p-3 ">
        <div className=" text-xl font-semibold mt-3">
            Manange My Account
        </div>
        <div className="flex pl-3   text-red-500  mt-3">
            My Profile
        </div>
        <div className="flex  pl-3 text-gray-500  mt-3">
            Adress Book
        </div>
        <div className="flex  pl-3 text-gray-500  mt-3">
            My Payment Option
        </div>
        <div className=" text-xl font-semibold  mt-3">
             My Orders
        </div>
        <div className="flex  pl-3 text-gray-500  mt-3">
            My Returns
        </div>
        <div className="flex  pl-3 text-gray-500  mt-3">
            My Cancelletion
        </div>
        <div className=" text-xl font-semibold  mt-3">
             My WishList
        </div>
      



        </div>
        <div className="col-md  shadow-md   p-3 ">
        <div className="text-red-500 mt-3">
            Edit your profile
        </div>
        <div className="flex flex-wrap  mt-3">
        <div className="">
        <div className="">First Name</div>
        <div className=" w-64  h-7">
        <input type = "text" className="h-full w-full bg-gray-100 "/>

        </div>

        </div>
        <div className=" ml-6 ">
        <div className="">Last Name</div>
        <div className="w-64 h-7">
        <input type = "text" className="h-full w-full bg-gray-100 "/>

        </div>

        </div>
        <div className="  ">
        <div className="">Email</div>
        <div className="w-64 h-7">
        <input type = "text" className="h-full w-full bg-gray-100 "/>

        </div>

        </div>
        <div className="ml-6">
        <div className="">Adress</div>
        <div className="w-64 h-7">
        <input type = "text" className="h-full w-full bg-gray-100 "/>

        </div>

        </div>
        

        </div>
        <div className="mt-3">password changes</div>
        <div className="mt-3 w-full h-9">
            <input type = "password" placeholder="Current password" className="h-full w-full bg-gray-100 pl-3"/>
        </div>
        <div className="mt-3 w-full h-9">
            <input type = "password" placeholder="New password" className="h-full w-full bg-gray-100 pl-3"/>
        </div>
        <div className="mt-3 w-full h-9">
            <input type = "password" placeholder="Conform New password" className="h-full w-full bg-gray-100 pl-3"/>
        </div>
        <div className=" flex justify-end mt-3">
        <div className="flex items-center">Cancel</div>
        <div className="">
            <button className="bg-red-500  text-white w-32 h-7  rounded-sm ml-3">Save Changes</button>
        </div>

        </div>

        </div>
      </div>
        </div>

        </div>
      


        </>
    )
}
export default Dashboard;