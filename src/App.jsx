import React from 'react';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footermain from './Footermain';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './Products';
import Product_page from './Product_page';
import Login from './Login';
import Wishlist from './Wishlist';
import Otp from './Otp';
import Password from './Password';
import Createaccount from './Createaccount';
import Orderconfirmed from './Orderconfirmed';
import Orders_returns from './Orders_returns';
import Profile from './Profile';
import Notifications from './Notifications';
function App()
{
    return( 
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/otp" element={<Otp/>}/>
                <Route exact path="/password" element={<Password/>}/>
                <Route exact path="/createaccount" element={<Createaccount/>}/>
                <Route exact path="/orderconfirmed" element={<Orderconfirmed/>}/>
                <Route exact path="/orders" element={<Orders_returns/>}/>
                <Route exact path="/wishlist" element={<Wishlist/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/notifications" element={<Notifications/>}/>
                <Route exact path="/product_page" element={<Product_page/>}/>
            </Routes>
            <Footermain/>
        </BrowserRouter>
    </>
    );
}

export default App;