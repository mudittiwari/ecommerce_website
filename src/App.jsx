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
import Admin_panel from './Admin_panel';
import AdminLogin from './AdminLogin';
import Editproduct from './Admin_comps/Editproduct';
import Homepagecomp from './Admin_comps/Homepagecomp';
import Cart from './Cart';
import Forgotpassword from './Forgotpassword';
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
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/forgot-password/:code" element={<Forgotpassword/>}/>
                <Route exact path="/notifications" element={<Notifications/>}/>
                <Route exact path="/product_page" element={<Product_page/>}/>
                <Route exact path="/Admin_Panel" element={<AdminLogin/>}/>
                <Route exact path="/Admin_dashboard" element={<Admin_panel/>}/>
                <Route exact path="/Admin_dashboard/products/editproduct" element={<Editproduct/>}/>
                <Route exact path="/Admin_dashboard/products/homepagecomp" element={<Homepagecomp/>}/>
            </Routes>
            <Footermain/>
        </BrowserRouter>
    </>
    );
}

export default App;