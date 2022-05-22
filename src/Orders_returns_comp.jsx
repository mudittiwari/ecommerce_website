import React from "react";
import order from '../src/assets/order.png';
import { useNavigate } from "react-router-dom";
function Orders_returns_comp(props) {
    const navigate=useNavigate();
    return (
        <>
            <div className="flex flex-col w-full" onClick={(e)=>{
                e.preventDefault();
                navigate("/product_page",{state:props.product});

            }}>
                <div className="flex">

                    <img src={JSON.parse(props.product.photos)[0]} style={{
                        'width': '200px',
                        'height': '200px',
                    }} alt="" />
                    <div className="ml-5 mt-2">
                        <h1 className="text-white">{props.product.product_name}</h1>
                        <h1 className="text-white text-sm">{props.product.brand}</h1>
                        <h1 className="text-white text-sm mt-2">Quantity: 1</h1>
                        <h1 className="text-white text-sm mt-2">Total Amount: {props.product.total_amount}</h1>
                        <h1 className="text-white text-sm mt-5">Exchange and return is upto date</h1>

                    </div>
                </div>


            </div   >
        </>
    );
}

export default Orders_returns_comp;