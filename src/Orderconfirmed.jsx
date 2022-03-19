import React from "react";
import logo from '../src/assets/logo.png';
import Orderconfirmedcomp from "./orderconfirmedcomp";
function Orderconfirmed() {
    return (
        <>
            <div className="w-full mb-12">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <h1 className="text-center text-xl font-semibold my-6">ORDER CONFIRMED</h1>

                <div className="px-6">
                <Orderconfirmedcomp />
                </div>
            </div>
        </>
    );
}

export default Orderconfirmed;