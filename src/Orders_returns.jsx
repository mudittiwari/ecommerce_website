import React, { useEffect, useRef, useState } from "react";
import logo from '../src/assets/logo.png';
import Orders_returns_comp from "./Orders_returns_comp";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
function Orders_returns() {
    const ref=useRef(null);
    const [orders,changeorders]=useState([]);
    var orders_=[];
    var products_=[];
    const [products,changeproducts]=useState([]);
    const [ordered_prods,changeorderedprods]=useState([]);
    useEffect(async()=>{
        ref.current.continuousStart(0);
        const temp_list=[];
        await axios.get("https://infinite-falls-68793.herokuapp.com/orders",{
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then((res)=>{
            // console.log(res);
            orders_=res.data;
            changeorders(res.data);
        }).catch((err)=>{
            console.log(err);
        });
        await axios.get("https://infinite-falls-68793.herokuapp.com/products",{
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then((res)=>{
            changeproducts(res.data);
            products_=res.data;
        }).catch((err)=>{
            console.log(err);
        });
        // console.log(orders_);
        for (let index = 0; index < orders_.length; index++) {
            const element = orders_[index];
            // console.log(element.user_email);
            if(element.user_email==JSON.parse(localStorage.getItem('user')).email)
            {
                for (let index = 0; index < products_.length; index++) {
                    const element_ = products_[index];
                    // console.log(JSON.parse(element.products));
                    if(JSON.parse(element.products).indexOf(element_.id)!=-1)
                    {   
                        console.log("mudit")
                        let total_price=element.total_amount;
                        temp_list.push({total_price,...element_});
                    }
                }
            }
            
        }
        changeorderedprods(temp_list);
        // console.log(temp_list);
        ref.current.complete();
    },[])

    return (
        <>
            <div className="w-full px-6 mb-10">
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <h1 className="text-xl font-semibold my-6">Orders & Returns</h1>
                <div>
                    {ordered_prods.map((element,index)=>{
                        if(index==0)
                            return <Orders_returns_comp product={element} key={index} />
                        return <div><hr className="w-11/12 text-white my-10" /><Orders_returns_comp product={element} key={index} /></div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Orders_returns;