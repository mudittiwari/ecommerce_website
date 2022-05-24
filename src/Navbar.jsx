
import logo from '../src/assets/logo.png';
import '../src/css/navbar.css';
import 'flowbite';
import { Link } from 'react-router-dom';
import 'tw-elements';
import { useState } from 'react';
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex w-full hidden flex-col">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="400px" width="400px" alt="" />
                </div>
                {localStorage.getItem('user') ?
                    <ul className='flex w-full justify-center'>
                        <li className='mx-4 nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li>
                        <li className='mx-4 nav_li capitalize'><Link to="/cart">Cart</Link></li>
                        <li className='mx-4 nav_li capitalize'><Link to="/orders">Orders</Link></li>
                        <li className='mx-4 nav_li capitalize'><Link to='/notifications'>Notifications</Link></li>
                        <li className='mx-4 nav_li capitalize'><Link to='/profile'>Profile</Link></li>
                        <li className='mx-4 nav_li capitalize'><Link to='/products'>products</Link></li>
                    </ul> : <ul className='flex w-full justify-center'>

                        <li className='mx-4 nav_li capitalize'><Link to='/login'>Login</Link></li>
                    </ul>}
                
            </div>



            <nav className=" mb-10 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden relative flex flex-wrap items-center justify-between px-2 pt-3 pb-0">
                <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src={logo} height="150px" width="150px" alt="" />
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center transition-all" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <div className='flex justify-center my-5'>

                        </div>
                        {localStorage.getItem('user') ?
                            <ul className='flex flex-col w-full justify-center'>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to="/cart">Cart</Link></li>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to="/orders">Orders</Link></li>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to='/notifications'>Notifications</Link></li>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to='/profile'>Profile</Link></li>
                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to='/products'>products</Link></li>
                            </ul> : <ul className='flex w-full justify-center'>

                                <li className='my-1 text-center mx-4 nav_li capitalize'><Link to='/login'>Login</Link></li>
                            </ul>}

                    </div>
                    {/* <div className='flex justify-center w-full mt-2'>
                        <input type="text" placeholder='Search' className='w-3/4 my-6 rounded-3xl' style={{ 'backgroundColor': 'rgba(196, 196, 196, 1)' }} />
                    </div> */}
                </div>
            </nav>










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