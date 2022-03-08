import React from 'react';
import homepagefirstcomp from '../assets/homepagefirstcomp.png'
function Firstcomp()
{
    return (
        <>
            <div className='w-3/12 h-max bg-white p-3 rounded-lg'>
                    <img className='object-fill' src={homepagefirstcomp} alt="" />
                   <h6 className='font-bold text-black'>Product Name</h6>
                   <h6 className='text-black text-center'>Company Name</h6>
                   <h6 className='text-black text-center'>Rs 200</h6>
                </div>
        </>
    );
}

export default Firstcomp;