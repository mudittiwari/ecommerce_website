import React from "react";
import logo from '../src/assets/logo.png';
import Orderconfirmedcomp from "./orderconfirmedcomp";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
function Orderconfirmed() {
    const location=useLocation();
    return (
        <>
            <div className="w-full mb-12 mt-20 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40">
                <Navbar />
                {/* <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <h1 className="text-center text-xl font-semibold my-6">ORDER DETAILS</h1>

                <div className="px-6">
                <Orderconfirmedcomp order={location.state} />
                </div>
            </div>
        </>
    );
}

export default Orderconfirmed;