import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../src/assets/logo.png';
import Wishlistcomp from "./Wishlistcomp";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import Navbar from "./Navbar";
function Wishlist() {
    const ref = useRef(null);
    const [user,changeuser] = useState(JSON.parse(localStorage.getItem('user')));
    const [wishlist, changewishlist] = useState([]);
    const [key,changekey]=useState(Math.random());
    useEffect(async () => {
        if (JSON.parse(localStorage.getItem('user')).wishlist && JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist).length!=0) {
        //    console.log(JSON.parse(user.wishlist).length);
            // if(user.wishlist.length==0)
            // {
            //     console.log("mudit")
            //     changebardisplay('none');
            // }
            ref.current.continuousStart(0);
            let arr = [];
            let wish_list =JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist);
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
        else
        {
            changewishlist([]);
        }
        
        
    }, [key])
    return (
        <>
            <div className="w-100 md:mt-5 sm:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 mt-0 mb-24">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                
                <Navbar />
                {/* <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <h1 className='font-bold text-2xl mx-6 mt-10' style={{ 'color': '#FF007A' }}>Wishlist</h1>
                <h1 className='text-lg mb-6 mx-6'>{wishlist.length} Items</h1>
                <div className="flex flex-wrap justify-center">
                    {wishlist.map((element, index) => {
                        // console.log(element);
                        return <Wishlistcomp key={index} data={element} controller={changekey} changeuser={changeuser} />
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