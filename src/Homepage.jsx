import React, { useState } from 'react';
import homepagebg from '../src/assets/homepagebg.png';
import Firstcomp from './homepagecomps/Firstcomp';
import Slidercomp from './homepagecomps/Slidercomp';
import '../src/css/homepage.css';
import Secondcomp from './homepagecomps/Secondcomp';
import Thirdcomp from './homepagecomps/Thirdcomp';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import LoadingBar from "react-top-loading-bar";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';
import Search from '../node_modules/@material-ui/icons/Search';
import userEvent from '@testing-library/user-event';
import RemoveIcon from '../node_modules/@material-ui/icons/CloseOutlined';
function Homepage() {
    // username usestate
    const [username, setUsername] = useState('');

    const ref = useRef(null);
    const inputref = useRef(null);
    var user = null;
    const [searchitems, changesearchitems] = useState([]);
    const [searchitemkey, changesearchitemkey] = useState(Math.random());
    const [search, changesearch] = useState('');
    const navigate = useNavigate();
    const [searchstate, changesearchstate] = useState("none");
    const [sectionone, changeone] = useState([]);
    const [sectiontwo, changetwo] = useState([]);
    const [sectionthree, changethree] = useState([]);
    const [sectionfour, changefour] = useState([]);
    const [sectionthreekey, changethreekey] = useState(Math.random());


    useEffect(async () => {
        // localStorage.removeItem('user');
        if (localStorage.getItem('user'))
            user = JSON.parse(localStorage.getItem('user'))
        // console.log(user);
        ref.current.continuousStart(0);
        var prod_array = [];
        await axios.get("https://infinite-falls-68793.herokuapp.com/homepage-sectionone").then((res) => {
            // console.log(res.data.products);
            prod_array = JSON.parse(res.data.products);
        }).catch((err) => {
            console.log(err);
        });
        console.log(prod_array);
        let arr = [];
        for (let index = 0; index < prod_array.length; index++) {
            const element = prod_array[index];

            // console.log(element);
            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                arr.push(res.data);
                // changeone(arr);
            }).catch((err) => {
                console.log(err);
            });

        }
        changeone(arr);
        prod_array = [];
        arr = [];
        await axios.get("https://infinite-falls-68793.herokuapp.com/homepage-sectiontwo").then((res) => {
            // console.log(res.data.products);
            prod_array = JSON.parse(res.data.products);
        }).catch((err) => {
            console.log(err);
        });
        // console.log(prod_array);
        for (let index = 0; index < prod_array.length; index++) {
            const element = prod_array[index];

            // console.log(element);
            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                arr.push(res.data);
                // changeone(arr);
            }).catch((err) => {
                console.log(err);
            });

        }
        changetwo(arr);
        prod_array = [];
        arr = [];
        await axios.get("https://infinite-falls-68793.herokuapp.com/homepage-sectionthree").then((res) => {
            // console.log(res.data.products);
            prod_array = JSON.parse(res.data.products);
        }).catch((err) => {
            console.log(err);
        });
        // console.log(prod_array);
        for (let index = 0; index < prod_array.length; index++) {
            const element = prod_array[index];

            // console.log(element);
            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                arr.push(res.data);
                // changeone(arr);
            }).catch((err) => {
                console.log(err);
            });

        }
        changethree(arr);
        changethreekey(Math.random());
        prod_array = [];
        arr = [];
        await axios.get("https://infinite-falls-68793.herokuapp.com/homepage-sectionfour").then((res) => {
            // console.log(res.data.products);
            prod_array = JSON.parse(res.data.products);
        }).catch((err) => {
            console.log(err);
        });
        // console.log(prod_array);
        for (let index = 0; index < prod_array.length; index++) {
            const element = prod_array[index];

            // console.log(element);
            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/${element}`).then((res) => {
                arr.push(res.data);
                // changeone(arr);
            }).catch((err) => {
                console.log(err);
            });

        }
        changefour(arr);
        ref.current.complete();


    }, [])
    async function changesearchitems_(e) {
        if (e.length == 0) {
            changesearchitems([]);
            changesearchitemkey(Math.random());
        }
        else {
            var items;
            await axios.get(`https://infinite-falls-68793.herokuapp.com/products/`, {
                params: {
                    "product_name_contains": e
                }
            }).then((res) => {
                items = res.data;
                console.log(res);
            }).catch((err) => {
                console.log(err);
            }
            );
            changesearchitems(items);
            changesearchitemkey(Math.random());
        }
    }
    return (
        <>





           
                <div className='relative'>
                    <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                    <Navbar />
                    <div className='mt-20 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40 flex mx-auto justify-between pl-1 pr-2 items-center h-max' style={{ 'backgroundColor': 'rgb(196, 196, 196)', 'width': '300px' }}>
                        <div>
                            <input autoComplete='off' onFocus={(e) => {
                                e.preventDefault();
                                changesearchstate("block");
                            }} value={search} onChange={(e) => {
                                changesearch(e.target.value);
                                changesearchitems_(e.target.value);
                            }} id='searchinput' type="text" placeholder='Search' className='rounded-3xl bg-transparent border-0 ' style={{ 'width': '250px' }} />
                            {searchstate == "block" ? <span onClick={(e) => {
                                e.preventDefault();
                                // navigate('/products', { state: { 'prodname': search } })
                                changesearchstate("none");
                            }}><RemoveIcon className="ml-1 cursor-pointer" style={{ 'color': 'rgb(255, 0, 122)' }} /></span> : <span onClick={(e) => {
                                e.preventDefault();
                                // navigate('/products', { state: { 'prodname': search } })
                                changesearchstate("none");
                            }}><Search className="ml-1" style={{ 'color': 'rgb(255, 0, 122)' }} /></span>}</div>
                    </div>
                    {true ?
                        <div key={searchitemkey} className='flex absolute  bg-black flex-col mx-auto z-40 max-h-52 overflow-auto' style={{ 'width': '300px', 'left': '50%', 'transform': 'translate(-49.9%,0)', 'display': `${searchstate}`, 'backgroundColor': 'rgb(196, 196, 196)' }}>
                            {search.length != 0 ? searchitems.map((item, index) => {
                                return (
                                    <div><h1 onClick={(e) => {
                                        console.log("mudit")
                                        e.preventDefault();
                                        navigate('/products', { state: { 'prodname': item.product_name } })
                                    }} className='text-black px-2 my-2 cursor-pointer'>{item.product_name}</h1>{index != searchitems.length - 1 ? <hr className=' bg-black border-0' style={{ 'height': '1px' }}></hr> : null}</div>
                                );
                            }) : <div className='text-black mb-1 px-2' style={{ 'display': `${searchstate}` }}>No results found</div>}
                        </div> : null}
                    <div className='w-full flex flex-col mb-6 mt-6'>
                        <div id='mainslider'>

                            <Carousel navButtonsAlwaysVisible="true" indicators="false" animation='slide' duration="800">

                                <Item />
                                <Item />
                                <Item />

                            </Carousel>

                        </div>
                        <div className='my-6 text-center'>
                            <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>


                            {/* {sectionone.length} */}
                            <div className='flex flex-wrap justify-center'>
                                {sectionone.map((element, index) => {
                                    return <Firstcomp data={element} />


                                })}
                            </div>
                        </div>

                        <div className='my-6'>
                            <Slidercomp />
                        </div>



                        <div className='my-6 text-center'>
                            <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                            <div className='flex flex-wrap justify-center'>
                                {sectiontwo.map((element, index) => {
                                    return <Firstcomp data={element} />
                                })}
                            </div>
                        </div>

                        <div className='my-6 py-6 text-center bg-white'>
                            <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                            <div className='flex justify-around sm:hidden md:hidden xl:hidden 2xl:hidden'>
                                <OwlCarousel key={sectionthreekey} items={2} className="owl-theme" autoplay={true}>

                                    {sectionthree.map((element, index) => {
                                        // console.log(element.id);
                                        return <div onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/product_page", { state: element });

                                        }} className='w-full cursor-pointer h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                            <img className="w-4/5" style={{ 'width': '250px', 'height': '250px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                            <h6 className='font-bold text-black'>{element.product_name}</h6>
                                            <h6 className='text-black text-center'>{element.brand}</h6>
                                            <h6 className='text-black text-center'>Rs {element.price}</h6>
                                        </div>
                                    })}

                                </OwlCarousel>

                            </div>
                            <div className='hidden lg:block xl:block 2xl:block'>
                                <div className='flex justify-around'>
                                    <OwlCarousel key={sectionthreekey} items={4} className="owl-theme" autoplay={true}>

                                        {sectionthree.map((element, index) => {
                                            // console.log(element.id);
                                            return <div onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/product_page", { state: element });

                                            }} className='w-full cursor-pointer h-max bg-white p-4 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                                <img className="w-4/5" style={{ 'width': '250px', 'height': '250px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                                <h6 className='font-bold text-black'>{element.product_name}</h6>
                                                <h6 className='text-black text-center'>{element.brand}</h6>
                                                <h6 className='text-black text-center'>Rs {element.price}</h6>
                                            </div>
                                        })}

                                    </OwlCarousel>

                                </div>
                            </div>
                            <div className='hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
                                <div className='flex justify-around'>
                                    <OwlCarousel key={sectionthreekey} items={3} className="owl-theme" autoplay={true}>

                                        {sectionthree.map((element, index) => {
                                            // console.log(element.id);
                                            return <div onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/product_page", { state: element });

                                            }} className='w-full cursor-pointer h-max bg-white p-4 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                                <img className="w-4/5" style={{ 'width': '250px', 'height': '250px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                                <h6 className='font-bold text-black'>{element.product_name}</h6>
                                                <h6 className='text-black text-center'>{element.brand}</h6>
                                                <h6 className='text-black text-center'>Rs {element.price}</h6>
                                            </div>
                                        })}

                                    </OwlCarousel>

                                </div>
                            </div>
                        </div>

                        <div className='my-6 text-center'>
                            <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                            <div className='flex flex-wrap justify-center'>
                                {sectionfour.map((element, index) => {
                                    return <Thirdcomp data={element} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

function Item() {
    return (
        // <Paper style={{'borderRadius':'0px !important'}}>
        <div>
            <img src={homepagebg} className="w-full" alt="..." />
        </div>
        // </Paper>
    )
}
export default Homepage;