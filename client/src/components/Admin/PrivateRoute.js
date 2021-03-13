import React from 'react'
import { Redirect, Route } from 'react-router-dom'
const isAuth=()=>{
   let token =sessionStorage.getItem('token')
   if(!token){
return false 
   }else {return true}
}

const PrivateRoute=({render:Component,...rest})=>{
 
return (<Route {...rest} render={(props)=>(isAuth())?<Component {...props}/>:<Redirect to ='/'/>}/>)
}
export default PrivateRoute
