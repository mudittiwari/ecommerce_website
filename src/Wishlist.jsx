import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../src/assets/logo.png';
import Wishlistcomp from "./Wishlistcomp";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
function Wishlist() {
    const ref = useRef(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const [wishlist, changewishlist] = useState([]);
    useEffect(async () => {
        if (user.wishlist) {
            ref.current.continuousStart(0);
            let arr = [];
            let wish_list = JSON.parse(user.wishlist);
            for (let index = 0; index < wish_list.length; index++) {
                const element = wish_list[index];
                await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                    arr.push(res.data);
                }).catch((err) => {
                    console.log(err);
                });
            }
            changewishlist(arr);
            ref.current.complete();
            // console.log(wishlist);
        }
    }, [])
    return (
        <>
            <div className="w-100 mt-5 mb-24">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                {/* <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <h1 className='font-bold text-2xl mx-6' style={{ 'color': '#FF007A' }}>Wishlist</h1>
                <h1 className='text-lg mb-6 mx-6'>{wishlist.length} Items</h1>
                <div className="flex flex-wrap justify-center">
                    {wishlist.map((element, index) => {
                        // console.log(element);
                        return <Wishlistcomp key={index} data={element} />
                    })}
                    {/* <Wishlistcomp />
                    <Wishlistcomp />
                    <Wishlistcomp /> */}
                </div>
            </div>
        </>
    );
}

export default Wishlist;