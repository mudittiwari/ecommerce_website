import logo from '../src/assets/logo.png';
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import group from './assets/Group.png';
import 'flowbite';
import Product_page_comp from './Product_page_comp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { makeStyles } from '@material-ui/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '../node_modules/@material-ui/icons/ExpandMore';
import Navbar from './Navbar';
function Product_page() {
    const [index, changeindex] = useState(0);
    const [related_prods, changerelatedprods] = useState([]);
    const [related_prodskey, changerelatedprodskey] = useState(Math.random());
    const navigate = useNavigate();
    const { state } = useLocation();
    const [wishlist, changewishlist] = useState([]);
    const [cart, changecart] = useState([]);
    const [data, changedata] = useState(state);
    const ref = useRef(null);
    const useStyles = makeStyles({
        summary: {
            backgroundColor: 'black',
            color: 'white'
        },
    }
    );
    const classes = useStyles();
    // if(data.wishlist)
    // {
    //     changewishlist(data.wishlist);
    // }
    useEffect(async () => {
        if (JSON.parse(localStorage.getItem('user')).wishlist) {
            changewishlist(JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist))
        }
        if (JSON.parse(localStorage.getItem('user')).cart) {
            changecart(JSON.parse(JSON.parse(localStorage.getItem('user')).cart))
        }
        await axios.get("https://infinite-falls-68793.herokuapp.com/products").then((res) => {
            let arr = res.data;
            let temp_arr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].category_name == data.category_name && arr[i].id != data.id)
                    temp_arr.push(arr[i]);
            }
            changerelatedprods(temp_arr);
            changerelatedprodskey(Math.random());
        }).catch((err) => {
            console.log(err);
        });
    }, [data]);
    // console.log(data);
    return (
        <>
            <LoadingBar style={{ 'backgroundColor': '#FF007A', 'zIndex': 10 }} ref={ref} />
            <Navbar />
            <div className='w-full flex flex-col mt-20 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40'>
                {/* <div className='flex justify-center w-100'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <div className='w-full md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col flex justify-evenly mt-10'>
                    <div className='md:w-2/5 lg:w:2/5 xl:w-2/5 2xl:w-2/5 w-full flex flex-col'>
                        <img className='hidden md:block lg:block xl:block 2xl:block' src={JSON.parse(data.photos)[index]} width="300px" style={{ 'width': '300px', 'height': '300px' }} alt="" />
                        <img className='w-full block md:hidden lg:hidden xl:hidden 2xl:hidden' src={JSON.parse(data.photos)[index]} alt="" />
                        <div className='flex mt-3 px-3'>
                            {JSON.parse(data.photos).map((element, index) => {
                                return <div className='w-10 mx-1 cursor-pointer'>
                                    <img style={{ 'width': '80px', 'height': '80px' }} onClick={(e) => { e.preventDefault(); changeindex(index) }} src={element} alt="" />
                                </div>;
                            })}
                        </div>
                    </div>
                    <div className='md:w-2/5 md:px-0 lg:px-0 xl:px-0 2xl:px-0 px-4 lg:w:2/5 xl:w-2/5 2xl:w-2/5 w-full pt-5 '>
                        <h1 className='text-2xl'>{data.product_name}</h1>
                        <h1>{data.brand}</h1>
                        <h1 className='text-xl mt-5'>Rs. {data.price}</h1>
                        <div className='flex '><h1 className='text-sm'>Delivery Days:</h1><h1 className='ml-1 text-sm'>{data.delivery_days}</h1></div>
                        <div className='w-3/4 mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 flex md:justify-around lg:justify-around xl:justify-around 2xl:justify-around justify-center mt-5'>
                            <button onClick={async (e) => {
                                e.preventDefault();
                                if (!localStorage.getItem('user')) {
                                    navigate("/login");
                                    return;
                                }
                                if (wishlist.indexOf(data.id) == -1) {
                                    ref.current.continuousStart(0);
                                    let new_wishlist = [];
                                    new_wishlist.push(...wishlist);
                                    new_wishlist.push(data.id);
                                    changewishlist(new_wishlist);
                                    console.log(wishlist);
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

                                            localStorage.setItem('user', JSON.stringify(res.data));
                                            // ref.current.complete();
                                        }).catch((err) => {
                                            console.log(err);
                                            // ref.current.complete();
                                        })
                                    ref.current.complete();
                                }
                            }} className='px-8 mx-3 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Wishlist</button>
                            <button onClick={async (e) => {
                                e.preventDefault();
                                if (!localStorage.getItem('user')) {
                                    navigate("/login");
                                    return;
                                }
                                if (cart.indexOf(data.id) == -1) {
                                    ref.current.continuousStart(0);
                                    let new_cart = [];
                                    new_cart.push(...cart);
                                    new_cart.push(data.id);
                                    changecart(new_cart);
                                    // console.log(new_cart);
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
                                }
                            }} className='px-8 mx-3 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Cart</button>
                        </div>
                        <div className='mt-7'>
                            <h1 className='text-lg mb-2'>Product Details</h1>
                            <p className='text-xs break-words'>{data.desc}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4 my-6 flex-col'>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>Product Use</h1>
                        <p className='text-xs'>{data.product_use}</p>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>Special Features</h1>
                        <p className='text-xs'>{data.special_features}</p>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>About Brand</h1>
                        <p className='text-xs'>{data.about_brand}</p>
                    </div>
                </div>

                <div className='w-full md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4'>
                    <h1 className='text-xl mb-3'>Rating & Review</h1>
                    <div className='flex w-full my-5'>
                        <div className='w-20 h-20 bg-white rounded-lg'>mudittiwrai</div>
                        <div className='px-5'>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, id veritatis harum reprehenderit doloremque blanditiis voluptate placeat tenetur nostrum aperiam earum doloribus necessitatibus sit nobis unde magnam, maxime, distinctio optio enim! Labore atque animi est incidunt! Vel eius tempore possimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus aliquam soluta illo voluptatem, iure nobis similique velit eius neque eligendi nemo accusamus esse cumque eveniet dignissimos? Pariatur culpa accusamus aspernatur rem distinctio dicta repudiandae, ad amet atque cupiditate consequuntur?</p>
                        </div>
                    </div>
                    <div className='flex w-full my-5'>
                        <div className='w-20 h-20 bg-white rounded-lg'>mudittiwrai</div>
                        <div className='px-5'>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, id veritatis harum reprehenderit doloremque blanditiis voluptate placeat tenetur nostrum aperiam earum doloribus necessitatibus sit nobis unde magnam, maxime, distinctio optio enim! Labore atque animi est incidunt! Vel eius tempore possimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus aliquam soluta illo voluptatem, iure nobis similique velit eius neque eligendi nemo accusamus esse cumque eveniet dignissimos? Pariatur culpa accusamus aspernatur rem distinctio dicta repudiandae, ad amet atque cupiditate consequuntur?</p>
                        </div>
                    </div>

                </div>


                <div className='w-full md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4 mt-6'>
                    <h1 className='text-xl mb-5'>FAQ</h1>


                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon className={classes.summary} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon className={classes.summary} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >FAQ TWO</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </div>


                <div className='w-full md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4 mt-10'>
                    <h1 className='text-xl mb-3'>Payment Method Available</h1>
                    <h1 className='text-xs mb-3'>Cash On Delivery</h1>
                </div>
                <div className='w-full md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4 mt-7'>
                    <h1 className='text-xl mb-5'>Services</h1>
                    <div className='flex w-full justify-around'>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                    </div>
                </div>

                <div className='w-full md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4 mt-12'>
                    <h1 className='text-xl mb-5 text-center'>Related Products</h1>
                    <div className='flex justify-around sm:hidden md:hidden xl:hidden 2xl:hidden'>
                        <OwlCarousel key={related_prodskey} items={2} margin={20} className="owl-theme" autoplay={true}>

                            {related_prods.map((element, index) => {
                                // console.log(element.id);
                                return <div onClick={(e) => {
                                    e.preventDefault();
                                    // navigate("/product_page", { state: element });
                                    changedata(element);

                                }} className='w-full cursor-pointer h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                    <img className="w-4/5" style={{ 'width': '300px', 'height': '300px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                    <h6 className='font-bold text-black'>{element.product_name}</h6>
                                    <h6 className='text-black text-center'>{element.brand}</h6>
                                    <h6 className='text-black text-center'>Rs {element.price}</h6>
                                </div>
                            })}

                        </OwlCarousel>

                    </div>
                    <div className='hidden sm:hidden md:hidden xl:block 2xl:block'>
                        <div className='flex justify-around'>
                            <OwlCarousel key={related_prodskey} margin={20} items={4} className="owl-theme" autoplay={true}>

                                {related_prods.map((element, index) => {
                                    // console.log(element.id);
                                    return <div onClick={(e) => {
                                        e.preventDefault();
                                        changedata(element);

                                    }} className='w-full cursor-pointer h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                        <img className="w-4/5" style={{ 'width': '300px', 'height': '300px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                        <h6 className='font-bold text-black'>{element.product_name}</h6>
                                        <h6 className='text-black text-center'>{element.brand}</h6>
                                        <h6 className='text-black text-center'>Rs {element.price}</h6>
                                    </div>
                                })}

                            </OwlCarousel>

                        </div>
                    </div>
                    <div className='hidden sm:block md:block'>
                        <div className='flex justify-around'>
                            <OwlCarousel key={related_prodskey} margin={20} items={3} className="owl-theme" autoplay={true}>

                                {related_prods.map((element, index) => {
                                    // console.log(element.id);
                                    return <div onClick={(e) => {
                                        // console.log("mudittiwari")
                                        e.preventDefault();
                                        changedata(element);

                                    }} className='w-full cursor-pointer h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                                        <img className="w-4/5" style={{ 'width': '300px', 'height': '300px' }} src={JSON.parse(element.photos)[0]} alt="" />
                                        <h6 className='font-bold text-black'>{element.product_name}</h6>
                                        <h6 className='text-black text-center'>{element.brand}</h6>
                                        <h6 className='text-black text-center'>Rs {element.price}</h6>
                                    </div>
                                })}

                            </OwlCarousel>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product_page;