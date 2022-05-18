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
function Product_page() {
    const navigate=useNavigate()
    const {state}=useLocation();
    const [wishlist,changewishlist]=useState([]);
    const [cart,changecart]=useState([]);
    const [data,changedata]=useState(state);
    const ref=useRef(null);
    // if(data.wishlist)
    // {
    //     changewishlist(data.wishlist);
    // }
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('user')).wishlist)
        {
            changewishlist(JSON.parse(JSON.parse(localStorage.getItem('user')).wishlist))
        }
        if(JSON.parse(localStorage.getItem('user')).cart)
        {
            changecart(JSON.parse(JSON.parse(localStorage.getItem('user')).cart))
        }
    },[]);
    // console.log(data);
    return (
        <>
        <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <div className='w-full flex flex-col my-6'>
                <div className='flex justify-center w-100'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className='w-full flex justify-evenly mt-10'>
                    <div className='w-2/5'>
                        <img src={JSON.parse(data.photos)[0]} width="300px" alt="" />
                    </div>
                    <div className='w-2/5 pt-5 '>
                        <h1 className='text-2xl'>{data.product_name}</h1>
                        <h1>{data.brand}</h1>
                        <h1 className='text-xl mt-5'>Rs. {data.price}</h1>
                        <div className='flex '><h1 className='text-sm'>Delivery Days:</h1><h1 className='ml-1 text-sm'>{data.delivery_days}</h1></div>
                        <div className='w-3/4 flex justify-around mt-5'>
                            <button onClick={async(e)=>{
                                e.preventDefault();
                                if(!localStorage.getItem('user'))
                                {
                                    navigate("/login");
                                    return;
                                }
                                ref.current.continuousStart(0);
                                let new_wishlist=[];
                                new_wishlist.push(...wishlist);
                                new_wishlist.push(data.id);
                                changewishlist(new_wishlist);
                                console.log(wishlist);
                                await axios.put(`https://infinite-falls-68793.herokuapp.com/users/me`, 
                            {
                                "wishlist":JSON.stringify(new_wishlist)
                            },
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }).then((res) => {
                                console.log(res.data);
                                
                                localStorage.setItem('user',JSON.stringify(res.data));
                                // ref.current.complete();
                            }).catch((err) => {
                                console.log(err);
                                // ref.current.complete();
                            })
                            ref.current.complete();
                            }} className='px-8 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Wishlist</button>
                            <button onClick={async(e)=>{
                                e.preventDefault();
                                if(!localStorage.getItem('user'))
                                {
                                    navigate("/login");
                                    return;
                                }
                                ref.current.continuousStart(0);
                                let new_cart=[];
                                new_cart.push(...cart);
                                new_cart.push(data.id);
                                changecart(new_cart);
                                // console.log(new_cart);
                                await axios.put(`https://infinite-falls-68793.herokuapp.com/users/me`, 
                            {
                                "cart":JSON.stringify(new_cart)
                            },
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }).then((res) => {
                                console.log(res.data);
                                
                                localStorage.setItem('user',JSON.stringify(res.data));
                                // ref.current.complete();
                            }).catch((err) => {
                                console.log(err);
                                // ref.current.complete();
                            })
                            ref.current.complete();
                            }} className='px-8 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Cart</button>
                        </div>
                        <div className='mt-7'>
                            <h1 className='text-lg mb-2'>Product Details</h1>
                            <p className='text-xs'>{data.desc}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex px-10 my-6 flex-col'>
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

                <div className='w-full px-10'>
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


                <div className='w-full px-10 mt-6'>
                    <h1 className='text-xl mb-5'>FAQ</h1>


                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-white border border-b-0 border-gray-200" style={{ 'backgroundColor': 'black' }} data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <span className='text-white'>what is this website</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700" style={{ 'transition': '1s' }}>
                                <p className="mb-2 text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus ab blanditiis. Quia tenetur, enim nesciunt, voluptates quaerat ratione quidem asperiores ea error praesentium, maiores aperiam in qui veniam. Quas?</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-white border border-b-0 border-gray-200" style={{ 'backgroundColor': 'black' }} data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                <span className='text-white'>what is this website</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus ab blanditiis. Quia tenetur, enim nesciunt, voluptates quaerat ratione quidem asperiores ea error praesentium, maiores aperiam in qui veniam. Quas?</p>
                            </div>
                        </div>

                    </div>


                </div>


                <div className='w-full px-10 mt-10'>
                    <h1 className='text-xl mb-3'>Payment Method Available</h1>
                    <h1 className='text-xs mb-3'>Cash On Delivery</h1>
                </div>
                <div className='w-full px-10 mt-7'>
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

                <div className='w-full px-10 mt-12'>
                    <h1 className='text-xl mb-5 text-center'>Related Products</h1>
                    <div className='w-full flex'>
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="no" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product_page;