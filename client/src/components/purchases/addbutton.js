import Axios from 'axios';
import React,{useState} from 'react';
import {Modal,Button,Form}from 'react-bootstrap'
   
/* const isAuth=()=>{
  let token =localStorage.getItem('token')
  if(!token){
return false 
  }else {return true}
}  */ 

function AddButton(props) {
  const [show, setShow] = useState(false);

  const [productname,setname]=useState('')
  
  const [productnumberBought,setnumberBought]=useState('')

  const [productboughtFrom,setboughtFrom]=useState('')
 
  const [productdateBought,setdateBought]=useState('')
 
  const [productcostPrice,setcostPrice]= useState('')
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
          
          
          
  const Addbutton=()=>{
    Axios.post('http://localhost:3500/api/purchases',{name:productname,numberBought:productnumberBought,
    boughtFrom:productboughtFrom,dateBought:productdateBought,costPrice:productcostPrice}).then(res=>alert ('add'))  
    }
          
          
          
          
  
        
          
          
       
    return (
      <>

        <div> <button
         id="buttonaddperson" onClick={handleShow}>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
         <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
         <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
       </svg>Add 
       
         </button></div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Purchases</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name"  onChange={(e)=>setname(e.target.value)} />
    
  </Form.Group>

  <Form.Group >
    <Form.Label>numberBought</Form.Label>
    <Form.Control type="text" placeholder="numberBought" onChange={(e)=>setnumberBought(e.target.value)}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>boughtFrom</Form.Label>
    <Form.Control type="text" placeholder="boughtFrom" onChange={(e)=>setboughtFrom(e.target.value)}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>dateBought</Form.Label>
    <Form.Control type="text" placeholder="dateBought" onChange={(e)=>setdateBought(e.target.value)}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>costPrice</Form.Label>
    <Form.Control type="text" placeholder="costPrice" onChange={(e)=>setcostPrice(e.target.value)}/>
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Addbutton}>
              save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default AddButton