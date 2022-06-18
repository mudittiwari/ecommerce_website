import React, { useEffect, useState } from "react";
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import { useRef } from "react";
import DeleteIcon from '../node_modules/@material-ui/icons/CloseOutlined';
function Wishlistcomp(props) {
    const ref = useRef(null);
    return (
        <>
            <div className="sm:w-max md:w-max lg:w-max xl:w-max 2xl:w-max w-2/5 mx-3 my-4 relative" key={props.key}>
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className="p-6 w-full rounded-lg" style={{ 'backgroundColor': 'rgba(196, 196, 196, 1)' }}>
                    <img src={JSON.parse(props.data.photos)[0]} style={{ 'height': "200px", 'width': '200px' }} alt="" />
                    <h1 className="text-black text-center font-bold">{props.data.product_name}</h1>
                    <h1 className="text-black text-center text-xs">{props.data.brand}</h1>
                    <h1 className="text-black text-center mt-2 font-bold">Rs {props.data.price}</h1>
                    <div className="text-center mt-4">
                        <button onClick={async (e) => {
                            // console.log(cart);
                            e.preventDefault();

                            let new_cart = [];
                            let crt = JSON.parse(localStorage.getItem('user')).cart;
                            if (crt) {
                                crt = JSON.parse(crt);
                            }
                            else {
                                crt = [];
                            }
                            if (crt.indexOf(props.data.id) == -1) {
                                ref.current.continuousStart(0);
                                new_cart.push(...crt);
                                new_cart.push(props.data.id);
                                // changecart(new_cart);
                                console.log(new_cart);
                                await axios.put(`https://infinite-falls-68793.herokuapp.com/users/me`,
                                    {
                                        "cart": JSON.stringify(new_cart)
                                    },
                                    {
                                        headers: {
                                            Authorization:
                                                `Bearer ${localStorage.getItem('jwt')}`,
                                        },
                                    }).then((res) => {
                                        console.log(res.data);
                                        // changekey(Math.random());
                                        // changecart(JSON.parse(res.data.cart));
                                        localStorage.setItem('user', JSON.stringify(res.data));
                                        // ref.current.complete();
                                    }).catch((err) => {
                                        console.log(err);
                                        // ref.current.complete();
                                    })
                                ref.current.complete();
                            }
                        }} className="px-4 py-1 bg-white text-black text-xs font-semibold rounded-md">Add to Cart</button>
                    </div>
                    <div className="bg-white cursor-pointer rounded-full w-max h-max m-1" style={{ 'position': 'absolute', 'top': '5px', 'right': '5px' }}>
                        <DeleteIcon className="text-black" onClick={async (e) => {
                            e.preventDefault();
                            ref.current.continuousStart(0);
                            let current_wishlist = JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist);
                            // console.log(current_wishlist)
                            let new_wishlist = [];
                            for (let index = 0; index < current_wishlist.length; index++) {
                                const element = current_wishlist[index];
                                if (element != props.data.id) {
                                    new_wishlist.push(element);
                                }
                            }
                            await axios.put(`https://infinite-falls-68793.herokuapp.com/users/me`,
                                {
                                    "wishlist": JSON.stringify(new_wishlist)
                                },
                                {
                                    headers: {
                                        Authorization:
                                            `Bearer ${localStorage.getItem('jwt')}`,
                                    },
                                }).then((res) => {
                                    console.log(res.data);
                                    // changecart()
                                    localStorage.setItem('user', JSON.stringify(res.data));

                                    props.controller(Math.random());
                                    props.changeuser(res.data);
                                    // changecart(JSON.parse(res.data.cart));
                                    // ref.current.complete();
                                }).catch((err) => {

                                    console.log(err);

                                })
                            ref.current.complete();
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Wishlistcomp;