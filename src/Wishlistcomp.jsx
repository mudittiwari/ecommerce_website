import React, { useEffect, useState } from "react";
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import { useRef } from "react";
function Wishlistcomp(props) {
    const [cart, changecart] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const ref = useRef(null);
    useEffect(() => {
        if (user.cart)
            changecart(JSON.parse(user.cart));
    }, []);
    return (
        <>
            <div className="sm:w-max md:w-max lg:w-max xl:w-max 2xl:w-max w-2/5 mx-5" key={props.key}>
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className="p-6 w-full" style={{ 'backgroundColor': 'rgba(196, 196, 196, 1)' }}>
                    <img src={JSON.parse(props.data.photos)[0]} style={{'height':"200px",'width':'200px'}} alt="" />
                    <h1 className="text-black text-center font-bold">{props.data.product_name}</h1>
                    <h1 className="text-black text-center text-xs">{props.data.brand}</h1>
                    <h1 className="text-black text-center mt-2 font-bold">Rs {props.data.price}</h1>
                    <div className="text-center mt-4">
                        <button onClick={async (e) => {
                            e.preventDefault();
                            ref.current.continuousStart(0);
                            let new_cart = [];
                            new_cart.push(...cart);
                            new_cart.push(props.data.id);
                            changecart(new_cart);
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

                                    localStorage.setItem('user', JSON.stringify(res.data));
                                    // ref.current.complete();
                                }).catch((err) => {
                                    console.log(err);
                                    // ref.current.complete();
                                })
                            ref.current.complete();
                        }} className="px-4 py-1 bg-white text-black text-xs font-semibold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Wishlistcomp;