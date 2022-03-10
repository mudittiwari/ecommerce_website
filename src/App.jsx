import React from 'react';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footermain from './Footermain';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './Products';
function App()
{
    return( 
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                {/* <Route exact path="/ztechwebsite/" element={<Homepage/>}/> */}
                <Route exact path="/products" element={<Products/>}/>
            </Routes>
            <Footermain/>
        </BrowserRouter>
    </>
    );
}

export default App;