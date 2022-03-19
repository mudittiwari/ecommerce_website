import React from "react";
import logo from '../src/assets/logo.png';
import Wishlistcomp from "./Wishlistcomp";
function Wishlist() {
    return (
        <>
            <div className="w-100 mt-5 mb-24">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <h1 className='font-bold text-2xl mx-6' style={{ 'color': '#FF007A' }}>Wishlist</h1>
                <h1 className='text-lg mb-6 mx-6'>10 Items</h1>
                <div className="flex justify-around">
                    <Wishlistcomp />
                    <Wishlistcomp />
                    <Wishlistcomp />
                </div>
            </div>
        </>
    );
}

export default Wishlist;