import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import SignIn from '../login.js/SignIn';
import Login from'../login.js/login'



const ClientRoutes = ({match}) => {
    return (<div>
 
   
    <Route path="/signin" component={SignIn}/>
    
    <Route path="/login" component={Login}/>
   
 </div>
   
    
    
    );

}
 
export default withRouter (ClientRoutes);


 