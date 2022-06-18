
import logo from '../src/assets/logo.png';
import '../src/css/navbar.css';
import 'flowbite';
import { Link, useNavigate } from 'react-router-dom';
import 'tw-elements';
import { useEffect, useState } from 'react';
import menu from '../node_modules/@material-ui/icons/Menu';
import hamburger from '../src/assets/hamburger.png';
import { Badge } from '@material-ui/core';
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [height, changeheight] = useState(0);
    const [toshow, changetoshow] = useState(0);
    const [cartlen, changecartlen] = useState(0);
    const [wishlistlen, changewishlistlen] = useState(0);
    const [wishlistkey, changewishlistkey] = useState(Math.random());
    const [cartkey, changecartkey] = useState(Math.random());
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user')) {
            if (JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist)) {
                let len = JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist).length;
                // console.log(len);
                changewishlistlen(len);
                changewishlistkey(Math.random());
            }
            if (JSON.parse(JSON.parse(localStorage.getItem('user')).cart)) {
                // console.log("mudittiwari");
                let len = JSON.parse(JSON.parse(localStorage.getItem('user')).cart).length;
                changecartlen(len);
                changecartkey(Math.random());
            }
            changetoshow(1);
        }
        else
            changetoshow(0);
        // console.log(cartlen);
    }, [localStorage.getItem('user')])
    return (
        <>
            {localStorage.getItem('user') ?
                <div>
                    <div className="bg-black z-50 sm:flex md:flex lg:flex xl:flex 2xl:flex w-screen hidden flex-col fixed top-0 pb-3">
                        <div className='flex justify-center my-5'>
                            <img className='cursor-pointer' src={logo} onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }} height="400px" width="400px" alt="" />
                        </div>
                        {toshow ?
                            <ul className='flex w-full justify-center'>
                                <li className='mx-4 nav_li capitalize'><Link to="/">Home</Link></li>
                                {cartlen==0?<li className='nav_li capitalize mx-4'><Link to="/cart">Cart</Link></li>:
                                <Badge className='ml-4 mr-8' badgeContent={cartlen} color="secondary"><li className='nav_li capitalize'><Link to="/cart">Cart</Link></li></Badge>}
                                {wishlistlen==0?<li className='nav_li capitalize mx-4'><Link to="/wishlist">Wishlist</Link></li>:<Badge className='ml-4 mr-8' badgeContent={wishlistlen} color="secondary"><li className='nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li></Badge>}
                                <li className='mx-4 nav_li capitalize'><Link to="/orders">Orders</Link></li>
                                <li className='mx-4 nav_li capitalize'><Link to='/notifications'>Notifications</Link></li>
                                
                                <li className='mx-4 nav_li capitalize'><Link to='/products'>Products</Link></li>
                                <li className='mx-4 nav_li capitalize'><Link to='/profile'>Profile</Link></li>
                            </ul> : <ul className='flex w-full justify-center'>

                                <li className='mx-4 nav_li capitalize'><Link to='/login'>Login</Link></li>
                            </ul>}

                    </div>



                    <nav className="bg-black fixed top-0 w-screen z-50 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-wrap items-center justify-between px-2 pt-3 pb-3">
                        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                <img src={logo} height="150px" width="150px" alt="" />
                                <img src={hamburger} width="50px"
                                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => {
                                        setNavbarOpen(!navbarOpen);
                                        if (navbarOpen) {
                                            document.body.style.overflow = "visible"
                                            changeheight("0px");
                                        }
                                        else {
                                            document.body.style.overflow = "hidden"
                                            changeheight("100vh");
                                        }
                                    }}
                                />

                            </div>
                            <div style={{ "height": height, "transition": 'height 1s' }}
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (navbarOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-danger"
                            >
                                <div className='flex justify-center my-5' >

                                </div>

                                <ul className='flex flex-col w-full justify-center items-center'>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='my-1 text-center mx-4 nav_li capitalize'><Link to="/">Home</Link></li>
                                    {cartlen==0?<li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='mx-4 nav_li capitalize'><Link to="/cart">Cart</Link></li>:
                                    <Badge className='flex justify-center w-max mt-3' badgeContent={cartlen} color="secondary"><li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='mx-4 nav_li capitalize'><Link to="/cart">Cart</Link></li></Badge>}
                                    {wishlistlen==0?<li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li>:
                                    <Badge className='flex justify-center w-max mt-3' badgeContent={wishlistlen} color="secondary"><li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li></Badge>}

                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='my-1 text-center mx-4 nav_li capitalize'><Link to="/orders">Orders</Link></li>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='my-1 text-center mx-4 nav_li capitalize'><Link to='/notifications'>Notifications</Link></li>
                                    
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='my-1 text-center mx-4 nav_li capitalize'><Link to='/products'>Products</Link></li>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        document.body.style.overflow = "visible"
                                    }} className='my-1 text-center mx-4 nav_li capitalize'><Link to='/profile'>Profile</Link></li>
                                </ul>

                            </div>
                            {/* <div className='flex justify-center w-full mt-2'>
                        <input type="text" placeholder='Search' className='w-3/4 my-6 rounded-3xl' style={{ 'backgroundColor': 'rgba(196, 196, 196, 1)' }} />
                    </div> */}
                        </div>
                    </nav> </div> : <h1></h1>}










        </>
    );
}
export default Navbar;




// import React from "react";

// export default function Navbar({ fixed }) {
//     const [navbarOpen, setNavbarOpen] = React.useState(false);
//     return (
//         <>

//         </>
//     );
// }