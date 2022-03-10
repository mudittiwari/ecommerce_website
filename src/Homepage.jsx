import React from 'react';
import homepagebg from '../src/assets/homepagebg.png';
import Firstcomp from './homepagecomps/Firstcomp';
import Slidercomp from './homepagecomps/Slidercomp';
import '../src/css/homepage.css';
import Secondcomp from './homepagecomps/Secondcomp';
import Thirdcomp from './homepagecomps/Thirdcomp';
import Navbar from './Navbar';
function Homepage() {
    return (
        <>
            <Navbar />
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

                <div className='my-6 py-6 text-center bg-white'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Secondcomp border="yes"/>
                        
                        <Secondcomp border="yes"/>
                        <Secondcomp border="yes"/>
                        <Secondcomp border="no"/>
                        
                    </div>
                </div>

                <div className='my-6 text-center'>
                    <h1 className='font-bold text-2xl mb-6' style={{ 'color': '#FF007A' }}>Heading</h1>
                    <div className='flex justify-around'>
                        <Thirdcomp/>
                        <Thirdcomp/>
                        
                    </div>
                    <div className='flex justify-around mt-6'>
                        <Thirdcomp/>
                        <Thirdcomp/>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;