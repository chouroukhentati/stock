import React from 'react';

import { Route, withRouter } from 'react-router-dom';
const ClientLayout = (props) => {
    return ( <div  style={{marginTop:'0px'}}>
    {props.children}
 
    
    </div> );
}
 
export default ClientLayout;