import { useEffect, useState } from 'react';
import axios from 'axios';
import bg1 from './pictures/bg1.jpg';
import bg2 from './pictures/bg2.jpg';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css/pagination';

import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import Cards from './elements/Cards';
import './App.css'

import Content from './elements/Content';
import Profile from './elements/Profile';
function Main({productdata, data, image, cards}){
  
 
  
 
    return(
   
        <>
        
     
      
      <div className = "cursol-container row">
      <div className = "col-3  text-black font-semibold border-r-2 border-gray-400 max-md:w-full max-md:border-r-0">
      <div className=' font-semibold flex  max-md:mt-1 max-md:font-normal'>
        Woman Fashion 
      </div>
      <div className='font-semibold flex max-md:mt-1 max-md:font-normal'>
        Man's Fashion 
      </div>
      <div className=' font-semibold max-md:mt-1 max-md:font-normal'>
       Electronics
      </div>
      <div className=' font-semibold max-md:font-normal'>
       Home & Lifestyle
      </div>
      <div className=' font-semibold max-md:font-normal'>
        Sports and Outdoor
      </div>
      <div className='font-semibold max-md:font-normal'>
       Boys And Toys
      </div>
      <div className='max-md:font-normal'>
       Grocery And Toys
      </div>
     

      

      </div>
      <div className = "col-md  ">
      <Swiper className='swiper  ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
            <SwiperSlide className='swiper-slide '><img src = {bg1} className='w-full'/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg2} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            
      </Swiper>

      </div>
      
      
       
          
      </div>
   
     <Content deals = {data} image = {image} cards = {cards} />
    
       </>
        
       
    )
}
export default Main;