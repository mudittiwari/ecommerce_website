import React, { useEffect, useRef, useState } from "react";
import logo from '../src/assets/logo.png';
import Orders_returns_comp from "./Orders_returns_comp";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Navbar";
import axios from "axios";
function Orders_returns() {
    const ref=useRef(null);
    const [orders,changeorders]=useState([]);
    useEffect(async()=>{
        await axios.get("https://infinite-falls-68793.herokuapp.com/orders",{params:{'user_email_eq':JSON.parse(localStorage.getItem('user')).email},headers: {
            Authorization:
                `Bearer ${localStorage.getItem('jwt')}`,
        }}).then((res)=>{
            // console.log(res);
            changeorders(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <div className="w-full px-6 mb-10 mt-20 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40">
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <Navbar />
                
                <h1 className="text-xl font-semibold my-6 mx-auto w-max">Orders & Returns</h1>
                <div>
                    {orders.map((element,index)=>{
                        if(index==0)
                            return <Orders_returns_comp order={element} key={index} />
                        return <div><hr className="w-11/12 text-white my-10" /><Orders_returns_comp order={element} key={index} /></div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Orders_returns;