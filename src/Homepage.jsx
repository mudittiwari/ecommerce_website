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
import axios from 'axios';
function Homepage() {
    const [sectionone, changeone] = useState([]);
    const [sectiontwo, changetwo] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
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
        prod_array=[];
        arr=[];
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
    }, [])
    return (
        <>
            <Navbar />
            <div className='w-full flex flex-col my-6'>
                <div>

                    <div id="default-carousel" data-carousel="slide" class="relative">

                        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 lg:h-96 xl:h-96 2xl:h-96">

                            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0" data-carousel-item="active">
                                <img src={homepagebg} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>

                            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full" data-carousel-item="">
                                <img src={homepagebg} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>

                            <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                                <img src={homepagebg} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>

                            <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                                <img src={homepagebg} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>

                            <div class="duration-1000 ease-in-out absolute inset-0 transition-all transform -translate-x-full" data-carousel-item="">
                                <img src={homepagebg} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>
                        </div>
                        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span class="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="hidden">Next</span>
                            </span>
                        </button>



                    </div>

                </div>
                <div className='my-6 text-center'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    
                    
                    {/* {sectionone.length} */}
                    <div className='flex flex-wrap justify-center'>
                        {sectionone.map((element, index) => {
                            return <Firstcomp data={element}  />
                                
                            
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
                            return <Firstcomp data={element}  />
                                
                            
                        })}
                    </div>
                </div>

                <div className='my-6 py-6 text-center bg-white'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Secondcomp />

                    </div>
                </div>

                <div className='my-6 text-center'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Thirdcomp />
                        <Thirdcomp />

                    </div>
                    <div className='flex justify-around mt-6'>
                        <Thirdcomp />
                        <Thirdcomp />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;