import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../products/Products';
import Purchases from '../purchases/Purchases';
import Sales from '../sales/Sales';
import Suppliers from'../suppliers/Suppliers'

const AdminRoutes = ({match}) => {
    return (<>
    <Route path={`${match.path}/products`} component={Products}/>
    <Route path={`${match.path}/purchases`} component={Purchases}/>
    <Route path={`${match.path}/sales`} component={Sales}/>
    <Route path={`${match.path}/suppliers`} component={Suppliers}/>
    

    </>  );
}
 
export default AdminRoutes;