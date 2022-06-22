import React, { useState } from "react";
import order from '../src/assets/order.png';
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import Arrowicon from '../node_modules/@material-ui/icons/ArrowForward';
function Orderconfirmedcomp(props) {
    const navigate = useNavigate();
    const ref = useRef(null);
    const [reviewsinput,changereviewsinput]=useState([]);
    const [products, changeproducts] = useState([]);
    useEffect(async () => {
        if (props.order) {
            let arr = [];
            let temp=[];
            for (let index = 0; index < JSON.parse(props.order.products).length; index++) {
                const element = JSON.parse(props.order.products)[index]
                temp.push('');
                // console.log(element);
                await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                    arr.push(res.data);
                    // changeone(arr);
                }).catch((err) => {
                    console.log(err);
                });

            }
            changeproducts(arr);
            changereviewsinput(temp);
        }
        else {
            navigate('/')
        }
    }, []);
    return (
        <>
            <div className="flex flex-col w-full">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className="mt-3 w-full">

                    {products.map((element, index) => {
                        return <div key={index}> <div className="w-full px-5 py-5 flex rounded" >
                            <img className="mr-2" src={JSON.parse(element.photos)[0]} style={{ 'height': "120px", 'width': '120px' }} alt="" />
                            <div className=" pt-1 ml-2 flex flex-col justify-between" style={{ 'height': "120px" }}>
                                <div>
                                    <h1 className=" text-white font-semibold text-sm">{element.product_name}</h1>
                                    <h1 className=" text-white font-normal text-sm">{element.brand}</h1>
                                    <h1 className=" text-white font-normal text-sm">Rs. {element.price}</h1>
                                    {props.order.status == "delivered"?
                                    <div className=' flex justify-between items-center h-max w-max' >
                                       
                                        <input onChange={(e) => {
                                            let temp=[];
                                            temp.push(...reviewsinput);
                                            temp[index]=e.target.value;
                                            changereviewsinput(temp);
                                        }} value={reviewsinput[index]} id='searchinput' type="text" placeholder='Add Review' className=' bg-transparent border-0 p-0 w-36 text-white' />
                                        <span onClick={async(e) => {
                                            ref.current.continuousStart();
                                            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element.id}`).then(async(res)=>{
                                                let reviews=[];
                                                
                                                if(res.data.reviews)
                                                {
                                                    reviews=JSON.parse(res.data.reviews);
                                                    reviews.push({'user':JSON.parse(localStorage.getItem('user')).email,'review':reviewsinput[index]});
                                                }
                                                else
                                                {
                                                    reviews.push({'user':JSON.parse(localStorage.getItem('user')).email,'review':reviewsinput[index]});
                                                }
                                                await axios.put(`https://infinite-falls-68793.herokuapp.com/products/${element.id}`,{
                                                    'reviews':JSON.stringify(reviews)
                                                    // 'reviews':null
                                                },{
                                                    headers: {
                                                        Authorization:
                                                            `Bearer ${localStorage.getItem('jwt')}`,
                                                    },
                                                }).then((res)=>{
                                                    console.log(res);
                                                }).catch((err)=>{
                                                    console.log(err);
                                                })
                                            }).catch((err)=>{
                                                console.log(err);
                                            })
                                            let temp=[];
                                            temp.push(...reviewsinput);
                                            temp[index]="";
                                            changereviewsinput(temp);
                                            ref.current.complete();
                                        }}><Arrowicon className="mr-10 text-white cursor-pointer" /></span>
                                    </div>:<h1></h1>}
                                </div>
                                <div className="flex h-max w-max">
                                    <h1 className=" text-white font-semibold text-xs">Delivery Days: </h1>
                                    <h1 className=" text-white font-normal text-xs ml-1">{element.delivery_days}</h1>
                                </div>
                            </div>

                        </div>
                            <hr className="mx-10" />
                        </div>
                    })}


                </div>
                {props.order.status == "not delivered" ?
                    <div className="mt-10 mb-6 flex w-full justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-row">
                        <button className="px-5 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-2 my-2 w-max  bg-white text-black font-semibold mx-5 rounded" onClick={async (e) => {
                            e.preventDefault();
                            ref.current.continuousStart(0);
                            await axios.delete(`https://infinite-falls-68793.herokuapp.com/orders/${props.order.id}`, {
                                headers: {
                                    Authorization:
                                        `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }).then((res) => {
                                navigate('/');
                            }).catch((err) => {
                                console.log(err);
                            })
                        }}>Cancel Order</button>
                        <button className="px-5 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-2 my-2 w-max bg-white text-black font-semibold mx-5 rounded">Track Order</button>
                    </div> : <h1></h1>}
            </div>
        </>
    );
}

export default Orderconfirmedcomp;