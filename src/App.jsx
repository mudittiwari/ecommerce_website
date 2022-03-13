import React from 'react';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footermain from './Footermain';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './Products';
import Product_page from './Product_page';
function App()
{
    return( 
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                {/* <Route exact path="/ztechwebsite/" element={<Homepage/>}/> */}
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/product_page" element={<Product_page/>}/>
            </Routes>
            <Footermain/>
        </BrowserRouter>
    </>
    );
}

export default App;