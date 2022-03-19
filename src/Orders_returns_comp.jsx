import React from "react";
import order from '../src/assets/order.png';
function Orders_returns_comp() {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex">
                    <img src={order} width="150px" height="150px" alt="" />
                    <div className="ml-5">
                        <h1 className="text-white">Product Name</h1>
                        <h1 className="text-white text-sm">Company Name</h1>
                        <h1 className="text-white text-sm mt-2">Quantity</h1>
                        <h1 className="text-white text-sm mt-5">Exchange and return is upto date</h1>
                    </div>
                </div>

                
            </div   >
        </>
    );
}

export default Orders_returns_comp;