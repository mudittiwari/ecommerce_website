import React, { useEffect, useState } from "react";
import logo from '../src/assets/logo.png';
import Orders_returns_comp from "./Orders_returns_comp";
import axios from "axios";
function Orders_returns() {
    const [orders,changeorders]=useState([]);
    const [products,changeproducts]=useState([]);
    const [ordered_prods,changeorderedprods]=useState([]);
    useEffect(async()=>{
        const temp_list=[];
        await axios.get("https://infinite-falls-68793.herokuapp.com/orders").then((res)=>{
            changeorders(res.data);
        }).catch((err)=>{
            console.log(err);
        });
        await axios.get("https://infinite-falls-68793.herokuapp.com/products").then((res)=>{
            changeproducts(res.data);
        }).catch((err)=>{
            console.log(err);
        });
        for (let index = 0; index < orders.length; index++) {
            const element = orders[index];
            if(element.user_email==JSON.parse(localStorage.getItem('user')).email)
            {
                for (let index = 0; index < products.length; index++) {
                    const element_ = products[index];
                    if(element.product==element_.id)
                    {   
                        temp_list.push(element_);
                    }
                    
                }
            }
            
        }
    })

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