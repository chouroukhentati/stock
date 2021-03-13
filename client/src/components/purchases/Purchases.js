import React, { useEffect,useState,Component } from "react";

import Axios from 'axios';
import {Table}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddButton from "./addbutton"

/* const Purchases = props => {
  const { loadUser, user, purchases, getPurchases, isAuthenticated, authLoading } = props;
  useEffect(() => {
    loadUser();
    getPurchases();
  }, [] );
  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      props.history.push("/");
    }
  }, [props.history, isAuthenticated, authLoading]);
  if (authLoading || purchases === null) {
    return (
      <>
        <h2 style={{ textAlign: "center", margin: "3rem auto 0 auto" }}>
          Loading...
        </h2>
        <Spinner />
      </>
    );
  } else { */
    const Purchases = (props) => {
     
      const [purchases,setPurchases]= useState([])
      /*const [productname,setname]=useState('')
      const [name,setnames]= useState([])
      const [productnumberBought,setnumberBought]=useState('')
      const [numberBought,setnumberBoughts]= useState([])
      const [productboughtFrom,setboughtFrom]=useState('')
      const [boughtFrom,setboughtFroms]= useState([])
      const [productdateBought,setdateBought]=useState('')
      const [dateBought,setdateBoughts]= useState([])
      const [productcostPrice,setcostPrice]= useState('')
      const [costPrice,setcostPrices]= useState([])*/
     
      const user = JSON.parse(sessionStorage.getItem('data'));
      console.log(user)
      const token = user.data.id; /*take only token and save in token variable*/

      useEffect(() => {
        const fetshData=async()=>{
          try{
          const result= await Axios.get('http://localhost:3500/api/purchases',{ headers: {"Authorization" : `Bearer ${token}`} })
          setPurchases(result.data)
          
  
         
          }
          catch(er){
          console.log(er)
          }
  
        }
         
         fetshData()
  
        return 
        
      },[purchases]) 
      


     
  //     useEffect(() => {
  //         Axios.get('http://localhost:4000/FindRoom').then(res=>setTypes(res.data))
        
  //     }, [])
  //     useEffect(() => {
  //         Axios.get('http://localhost:4000/FindRoom').then(res=>setCategorys(res.data))
        
  //     }, [])
  //     useEffect(() => {
  //         Axios.get('http://localhost:4000/FindRoom').then(res=>setPrixs(res.data))
        
  //     }, [])
  //     useEffect(() => {
  //     Axios.get('http://localhost:4000/FindRoom').then(res=>setDescriptions(res.data))
        
  // }, [])
     /*const AddPurchases=()=>{
         console.log('hello')
        
          let fromdata= new FormData()
         
          fromdata.append('name',productname)
          fromdata.append('numberBought',productnumberBought)
          fromdata.append('boughtFrom',productboughtFrom)
          fromdata.append('dateBought',productdateBought)
          fromdata.append('costPrice',productcostPrice)
          Axios.post("http://localhost:3500/api/purchases",fromdata).then(res=>{setPurchases ([...purchases,res.data])})  
     } */
    return (
      <div> 
     

     
     
     
     
     
     
     
     
     <div>
     
     <AddButton/>
     
     
     
     
            
       
     </div>      
     
            <Table striped bordered hover variant="light"  >
       <thead>
         <tr>
           <th>#</th>
           
           <th>name</th>
           <th>numberBought</th>
           <th>BoughtFrom</th>
           <th>dateBought</th>
           <th>costPrice</th>
          
         </tr>
       </thead>
       <tbody>
       {purchases.map((el,i)=><tr>
      <td>{i+1}</td>
     
     
     
    
      
      <td><p>{el.name}</p></td>
      
    
   
      <td ><p>{el.numberBought}</p></td>
      
    
   
   <td >  <p>{el.dateBought}</p></td>
   
   <td >  <p>{el.dateBought}</p></td>
   
   <td ><p>{el.costPrix}</p></td>

   
 </tr>)}
  </tbody>
</Table>
     
     </div>)
     
       }
       

export default Purchases;
