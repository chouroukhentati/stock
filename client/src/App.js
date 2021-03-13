import React from 'react';
//import './App.css';


import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import ClientLayout from '../src/components/Client/ClientLayout'
import ClientRoutes from  '../src/components/Client/ClientRoutes'
import AdminLayout from '../src/components/Admin/AdminLayout'
import AdminRoutes from '../src/components/Admin/AdminRoutes'
import PrivateRoute from '../src/components/Admin/PrivateRoute';


function App() {
  return (
    <>
  <Router>
    <Route path='/' render={(props)=><ClientLayout><ClientRoutes {...props}/></ClientLayout>}/>
    <PrivateRoute path='/admin' render ={(props)=><AdminLayout><AdminRoutes  {...props}/></AdminLayout>}/>
  </Router>
    </>
  );
}

export default App;
