import React from "react";
import logo from '../src/assets/logo.png';
import Orders_returns_comp from "./Orders_returns_comp";

function Orders_returns() {
    return (
        <>
            <div className="w-full px-6 mb-10">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <h1 className="text-xl font-semibold my-6">Orders & Returns</h1>
                <div>
                    <Orders_returns_comp />
                    <hr className="w-11/12 text-white my-10" />
                    <Orders_returns_comp />
                </div>
            </div>
        </>
    );
}

export default Orders_returns;