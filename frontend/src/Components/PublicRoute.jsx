import React from 'react'
import { Outlet, Navigate} from 'react-router-dom';
 const PublicRoute = ()=>{
   const profile1 = localStorage.getItem("user_id");
    return <Outlet/>;

 }
 export default PublicRoute;