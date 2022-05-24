import React, { useEffect, useRef, useState } from "react";
import logo from '../src/assets/logo.png';
import homepagefirstcomp from '../src/assets/homepagefirstcomp.png';
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
function Cart() {
    var temp_price = 0;
    var temp_discount = 0;
    const [price, changeprice] = useState(0);
    const [discount, changediscount] = useState(0);
    const [coupon, changecoupon] = useState(0);
    // var coupon=0;
    var conven_fee = 0;
    const ref = useRef(null);
    const [cart, changecart] = useState(JSON.parse(JSON.parse(localStorage.getItem('user')).cart));
    const [cartelem, changecartelem] = useState([]);
    // cartelem.findIndex()
    // if (JSON.parse(localStorage.getItem('user')).cart) {
    //     changecart();
    // }
    async function placeorder()
    {
        ref.current.continuousStart(0);
        let products=[];
        for (let index = 0; index < cartelem.length; index++) {
            products.push(cartelem[index].id);
        }
        await axios.post("https://infinite-falls-68793.herokuapp.com/orders",{
            "user_email":JSON.parse(localStorage.getItem('user')).email,
            "address":JSON.parse(localStorage.getItem('user')).address,
            "date":"not provided",
            "products":JSON.stringify(products),
            "total_amount":price,
        }, {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then((res)=>{
            console.log(res);

        }).catch((err)=>{
            console.log(err);
        });
        ref.current.complete();
    }
    useEffect(async () => {
        temp_price = 0;
        temp_discount = 0;
        ref.current.continuousStart(0);
        let temp_arr = [];
        // temp_arr.find
        await axios.get("https://infinite-falls-68793.herokuapp.com/products").then((res) => {
            for (const item in res.data) {
                // console.log(res.data[item].id);
                if (cart.indexOf(res.data[item].id) != -1) {
                    temp_price += res.data[item].price;
                    temp_discount += res.data[item].discount;

                    // price+=res.data[item].actual_price;
                    // discount+=res.data[item].discount;
                    temp_arr.push(res.data[item]);
                }

                // console.log(cart);
            }
            changeprice(temp_price);
            changediscount(temp_discount);
            // console.log(temp_arr);
            changecartelem(temp_arr);
        }).catch((err) => {
            console.log(err);
        })
        ref.current.complete();
        // console.log(cartelem);
    }, [cart]);
    return (
        <>
            <div className="w-full md:block lg:block xl:block 2xl:block hidden">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                {/* <div className="w-full flex justify-center py-10 ">
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <div className="flex items-center w-full justify-center pt-0 pb-10 px-4">
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Cart</h1>
                    <hr className="h-0 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Address</h1>
                    <hr className="h-1 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Payment</h1>
                    <hr className="h-1 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm text-center lg:text-sm xl:text-sm 2xl:text-sm">Order Successfully</h1>
                </div>
                <div className="w-4/5 flex mx-auto items-end my-10">
                    <div className="w-3/5 px-10 py-10" style={{ 'backgroundColor': '#C4C4C4', 'height': "600px" }}>
                        <div className="w-full flex">
                            <div className="w-max"><h1 className=" text-black font-semibold text-base">Delivered To:</h1></div>
                            <div className="w-80 ml-2 flex flex-col items-end"><h1 className=" text-black text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias dolorem nam tempore facere nesciunt voluptatibus laborum ullam unde itaque ex similique voluptas consequuntur natus veniam, at, provident explicabo facilis molestiae.</h1>

                            </div>
                        </div>
                        <h1 className=" text-black font-semibold text-base mt-2">{cartelem.length} items</h1>
                        <div className="mt-3 h-60 w-full overflow-auto">

                            {cartelem.map((element, index) => {
                                return <div className="w-full px-5 py-5 flex rounded">
                                    <img src={JSON.parse(element.photos)[0]} style={{ 'height': "120px", 'width': '120px' }} alt="" />
                                    <div className=" pt-1 ml-2 flex flex-col justify-between" style={{ 'height': "120px" }}>
                                        <div>
                                            <h1 className=" text-black font-semibold text-sm">{element.product_name}</h1>
                                            <h1 className=" text-black font-normal text-sm">{element.brand}</h1>
                                            <div className="flex mt-2">
                                                <h1 className=" text-black font-normal text-xs">Quantity: 1</h1>
                                                <h1 className=" text-black font-normal text-xs ml-10">Rs. {element.price}</h1>
                                            </div>
                                        </div>
                                        <div className="flex h-max w-max">
                                            <h1 className=" text-black font-semibold text-xs">Delivery Days: </h1>
                                            <h1 className=" text-black font-normal text-xs ml-1">{element.delivery_days}</h1>
                                        </div>
                                    </div>
                                    <button className="w-max mt-2 bg-transparent rounded px-4 text-sm py-0 text-black border-black border-2 h-max ml-auto" onClick={async (e) => {
                                        e.preventDefault();
                                        let new_cart = [];
                                        ref.current.continuousStart();
                                        new_cart.push(...cart);
                                        new_cart.splice(new_cart.indexOf(element.id), 1);
                                        // console.log(JSON.stringify(new_cart));
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
                                                // console.log(res.data);
                                                // changecart()
                                                localStorage.setItem('user', JSON.stringify(res.data));
                                                changecart(JSON.parse(res.data.cart));
                                                // ref.current.complete();
                                            }).catch((err) => {
                                                console.log(err);
                                                // ref.current.complete();
                                            })
                                        ref.current.complete();
                                    }}>delete</button>
                                </div>
                            })}


                        </div>
                        <button className="w-full mt-10 bg-transparent rounded px-4 text-sm py-1 text-black border-black border-2 h-max ml-auto">Add More Products</button>
                    </div>
                    <div className="w-2/5 px-10 py-10" style={{ 'backgroundColor': "#F2F1F1", 'height': '550px' }}>
                        <div className="h-1 bg-black w-3/5 mx-auto"></div>
                        <div className="w-max pt-10"><h1 className=" text-black text-base">{cartelem.length} Items</h1></div>
                        <hr className="w-full mt-3 mx-auto bg-black" style={{ 'height': '2px' }} />
                        <div className="w-full pt-0">
                            <h1 className=" text-black text-base mt-5">Coupons</h1>
                            <input type="text" className=" w-max mt-2 rounded bg-transparent" style={{ 'border': '1px solid black' }} placeholder="Apply Coupon" />
                        </div>
                        <hr className="w-full mt-6 mx-auto bg-black" style={{ 'height': '2px' }} />
                        <h1 className=" text-black text-base font-medium mt-5">Payment Details</h1>
                        <div className="w-full p-4">
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-2">MRP</h1>
                                <h1 className=" text-black text-base mt-2">Rs. {price}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Discount</h1>
                                <h1 className=" text-black text-base mt-1">Rs. {discount}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Coupon</h1>
                                <h1 className=" text-black text-base mt-1">Rs. 0</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Convenienes Fee</h1>
                                <h1 className=" text-black text-base mt-1">Rs. 100</h1>
                            </div>
                            <hr className="w-full mt-4 mx-auto bg-black" style={{ 'height': '1.5px' }} />
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-2">Total</h1>
                                <h1 className=" text-black text-base mt-2">Rs.</h1>
                            </div>
                            <div className="text-center mt-3">
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    placeorder();
                                }} className="w-max mt-2 font-semibold bg-transparent px-10 text-sm py-1 text-black h-max mx-auto" style={{ 'backgroundColor': "#C4C4C4" }}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="w-full md:hidden lg:hidden xl:hidden 2xl:hidden block">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                {/* <div className="w-full flex justify-center py-10 ">
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <div className="flex items-center w-full justify-center pt-0 pb-10 px-4">
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Cart</h1>
                    <hr className="h-0 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Address</h1>
                    <hr className="h-1 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">Payment</h1>
                    <hr className="h-1 mx-5 w-32" />
                    <h1 className="text-white sm:text-sm text-xs md:text-sm text-center lg:text-sm xl:text-sm 2xl:text-sm">Order Successfully</h1>
                </div>
                <div className="w-11/12 flex-col  flex mx-auto items-end my-10">
                    <div className="w-full h-max px-7 py-10" style={{ 'backgroundColor': '#C4C4C4', 'height': "600px" }}>
                        <div className="w-full flex">
                            <div className="w-max"><h1 className=" text-black font-semibold text-base">Delivered To:</h1></div>
                            <div className="w-max ml-2 flex flex-col items-end"><h1 className=" text-black text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias dolorem nam tempore facere nesciunt voluptatibus laborum ullam unde itaque ex similique voluptas consequuntur natus veniam, at, provident explicabo facilis molestiae.</h1>

                            </div>
                        </div>
                        <h1 className=" text-black font-semibold text-base mt-2">{cartelem.length} items</h1>
                        <div className="mt-3 h-60 w-full overflow-auto">

                            {cartelem.map((element, index) => {
                                return <div className="w-full px-5 py-5 flex rounded">
                                    <img src={JSON.parse(element.photos)[0]} style={{ 'height': "120px", 'width': '120px' }} alt="" />
                                    <div className=" pt-1 ml-2 flex flex-col justify-between" style={{ 'height': "120px" }}>
                                        <div>
                                            <h1 className=" text-black font-semibold text-sm">{element.product_name}</h1>
                                            <h1 className=" text-black font-normal text-sm">{element.brand}</h1>
                                            <div className="flex mt-2">
                                                <h1 className=" text-black font-normal text-xs">Quantity: 1</h1>
                                                <h1 className=" text-black font-normal text-xs ml-10">Rs. {element.price}</h1>
                                            </div>
                                        </div>
                                        <div className="flex h-max w-max">
                                            <h1 className=" text-black font-semibold text-xs">Delivery Days: </h1>
                                            <h1 className=" text-black font-normal text-xs ml-1">{element.delivery_days}</h1>
                                        </div>
                                    </div>
                                    <button className="w-max mt-2 bg-transparent rounded px-4 text-sm py-0 text-black border-black border-2 h-max ml-auto" onClick={async (e) => {
                                        e.preventDefault();
                                        let new_cart = [];
                                        ref.current.continuousStart();
                                        new_cart.push(...cart);
                                        new_cart.splice(new_cart.indexOf(element.id), 1);
                                        // console.log(JSON.stringify(new_cart));
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
                                                // console.log(res.data);
                                                // changecart()
                                                localStorage.setItem('user', JSON.stringify(res.data));
                                                changecart(JSON.parse(res.data.cart));
                                                // ref.current.complete();
                                            }).catch((err) => {
                                                console.log(err);
                                                // ref.current.complete();
                                            })
                                        ref.current.complete();
                                    }}>delete</button>
                                </div>
                            })}


                        </div>
                        <button className="w-full mt-10 bg-transparent rounded px-4 text-sm py-1 text-black border-black border-2 h-max ml-auto">Add More Products</button>
                    </div>
                    <div className="w-full px-10 py-10" style={{ 'backgroundColor': "#F2F1F1", 'height': '550px' }}>
                        <div className="h-1 bg-black w-3/5 mx-auto"></div>
                        <div className="w-max pt-10"><h1 className=" text-black text-base">{cartelem.length} Items</h1></div>
                        <hr className="w-full mt-3 mx-auto bg-black" style={{ 'height': '2px' }} />
                        <div className="w-full pt-0">
                            <h1 className=" text-black text-base mt-5">Coupons</h1>
                            <input type="text" className=" w-max mt-2 rounded bg-transparent" style={{ 'border': '1px solid black' }} placeholder="Apply Coupon" />
                        </div>
                        <hr className="w-full mt-6 mx-auto bg-black" style={{ 'height': '2px' }} />
                        <h1 className=" text-black text-base font-medium mt-5">Payment Details</h1>
                        <div className="w-full p-4">
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-2">MRP</h1>
                                <h1 className=" text-black text-base mt-2">Rs. {price}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Discount</h1>
                                <h1 className=" text-black text-base mt-1">Rs. {discount}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Coupon</h1>
                                <h1 className=" text-black text-base mt-1">Rs. 0</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-1">Convenienes Fee</h1>
                                <h1 className=" text-black text-base mt-1">Rs. 100</h1>
                            </div>
                            <hr className="w-full mt-4 mx-auto bg-black" style={{ 'height': '1.5px' }} />
                            <div className="flex justify-between">
                                <h1 className=" text-black text-base mt-2">Total</h1>
                                <h1 className=" text-black text-base mt-2">Rs.</h1>
                            </div>
                            <div className="text-center mt-3">
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    placeorder();
                                }} className="w-max mt-2 font-semibold bg-transparent px-10 text-sm py-1 text-black h-max mx-auto" style={{ 'backgroundColor': "#C4C4C4" }}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;