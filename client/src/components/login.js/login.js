import React,{Component} from 'react'
import Axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class login extends Component {

constructor(props){

    super(props);
    this.state={
email:"",
password:"",
username:"",
    }

}



login=()=>{
Axios.post('http://localhost:3500/api/auth',{email:this.state.email,
password:this.state.password,username:this.state.username})
.then(res=>{ console.log(res.data.token);sessionStorage.setItem('token',res.data.token)
alert(res.data.message)})
.catch(er=>console.log(er))




}





render () {  
return( 
<Form>
  <Form.Group controlId="formBasicEmail"></Form.Group>
  <Form.Label>Email</Form.Label>
  <h1>  </h1>

<input type = 'text' placeholder='Email' onChange={(e)=> this.setState({email:e.target.value})}

/>
<input type = 'text' placeholder='username' onChange={(e)=> this.setState({username:e.target.value})}

/>

    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
<input type = 'password' placeholder='password' onChange={(e)=> this.setState({password:e.target.value})}

/>

  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={this.login} variant="primary" type="submit">
    Submit
  </Button>

</Form>



);
}
}
export default login;

