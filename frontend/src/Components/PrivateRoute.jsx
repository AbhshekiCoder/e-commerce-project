import React from 'react'
import {Navigate, Outlet } from 'react-router-dom';
 const PrivateRoute = function(){
    const profile = localStorage.getItem("user_id");
    profile?"":alert("please signin first")
    return  profile?<Outlet/>:<Navigate to = "/"/>
 }
 export default PrivateRoute;
