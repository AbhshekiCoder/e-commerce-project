import React from 'react'
import { Link } from 'react-router-dom';

function Contact(){
    return(
        <>
        <div className=' mt-16'>
        <div className=' max-w-screen-lg border m-auto bg-white p-3'>
        <nav aria-label="breadcrumb ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to = "/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>
<div className='row mt-5 p-3'>
    <div className='col-md contact-detail '>
    <div className=' ' >
    <div className='flex items-center '>
    <div> <i class="fa-solid fa-phone rounded-circle p-3 bg-red-400 text-white flex justify-center items-center"></i></div>
  
    <div className=' font-semibold mt-3  mb-3 text-md ml-4'>Call to us</div>
    </div>
    <div className='mt-3'>We are available 24/7, 7 days a week.</div>
    <div className='mt-3'>Phone: +8801611112222</div>

    </div>
    <div className='mt-3'>
    <div className='flex items-center '>
    <div> <i class="fa-regular fa-envelope rounded-circle p-3 bg-red-400 text-white flex justify-center items-center"></i></div>
  
    <div className=' font-semibold mt-3 mb-3 text-md ml-4'>Write to us</div>
    </div>
    <div className='mt-3'>Fill out our form and we will contact you within 24 hours.</div>
    <div className='mt-3'>Emails: customer@exclusive.com</div>
    <div className='mt-3'>Emails: support@exclusive.com</div>

    </div>
    
  
    

    </div>
    <div className='col-md'>
    <form className='flex flex-wrap contact-form p-3'>
    <div className=' w-44'>
    <input className='w-full h-9 border bg-gray-100' placeholder='your name'></input>

    </div>
    <div className='w-44'>
    <input className='w-full h-9 border-none bg-gray-100'  placeholder='your email'></input>

    </div>
    <div className='w-44'>
    <input className='w-full h-9 border-none bg-gray-100' placeholder='your phone'></input>

    </div>
    <div className='w-full border detail'>
    <input className='w-full h-full border-none bg-gray-100' placeholder='your Message'></input>

    </div>

    </form>

    </div>
</div>
        </div>
       

        </div>



        </>
    )

}
export default Contact;