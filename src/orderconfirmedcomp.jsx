import React from "react";
import order from '../src/assets/order.png';
function Orderconfirmedcomp() {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex">
                    <img src={order} width="150px" height="150px" alt="" />
                    <div className="ml-5">
                        <h1 className="text-white">Product Name</h1>
                        <h1 className="text-white text-sm">Company Name</h1>
                        <h1 className="text-white text-sm mt-2">Quantity</h1>
                        <h1 className="text-white text-sm">Rs 0.00</h1>
                        <h1 className="text-white text-xs mt-4">Delivery Date</h1>
                    </div>
                </div>

                <div className="mt-10 mb-6 flex w-full justify-center">
                    <button className="px-16 py-2 bg-white text-black font-semibold mx-5 rounded">Cancel Order</button>
                    <button className="px-16 py-2 bg-white text-black font-semibold mx-5 rounded">Track Order</button>
                </div>
            </div>
        </>
    );
}

export default Orderconfirmedcomp;