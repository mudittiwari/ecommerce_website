import React from 'react';
import homepagebg from '../src/assets/homepagebg.png';
import Firstcomp from './homepagecomps/Firstcomp';
import Slidercomp from './homepagecomps/Slidercomp';
import '../src/css/homepage.css';
function Homepage() {
    return (
        <>
            <div className='w-full flex flex-col my-6'>
                <div>
                    <img src={homepagebg} alt="" />
                </div>
                <div className='my-6 text-center'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Firstcomp />
                        <Firstcomp />
                        <Firstcomp />
                        
                    </div>
                    <div className='flex justify-around mt-6'>
                        <Firstcomp />
                        <Firstcomp />
                        <Firstcomp />
                        
                    </div>
                </div>

                <div className='my-6'>
                    <Slidercomp/>
                </div>



                <div className='my-6 text-center'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Firstcomp />
                        <Firstcomp />
                        <Firstcomp />
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;