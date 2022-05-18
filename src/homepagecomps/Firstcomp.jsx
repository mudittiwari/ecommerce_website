import React from 'react';
import homepagefirstcomp from '../assets/homepagefirstcomp.png';
import { useNavigate } from 'react-router-dom';
import Product_page from '../Product_page';
function Firstcomp(props)
{
    const navigate=useNavigate();
    if(props.data)
    {
        // console.log(props.data.photos);
    return (
        <>
            <div onClick={(e)=>{
                e.preventDefault();
                navigate("/product_page",{state:props.data});

            }} className='cursor-pointer w-3/12 h-max bg-white p-3 mx-6 my-6 rounded-lg'>
                    <img className='object-fill' src={JSON.parse(props.data.photos)[0]} alt="" />
                   <h6 className='font-bold text-black'>{props.data.product_name}</h6>
                   <h6 className='text-black text-center'>{props.data.category_name}</h6>
                   <h6 className='text-black text-center'>Rs {props.data.price}</h6>
                </div>
        </>
    );
    }
    return  <div className='w-3/12 h-max bg-white p-3 mx-6 my-6 rounded-lg'>
    <img className='object-fill' src={homepagefirstcomp} alt="" />
   <h6 className='font-bold text-black'></h6>
   <h6 className='text-black text-center'>Company Name</h6>
   <h6 className='text-black text-center'>Rs 200</h6>
</div>
}

export default Firstcomp;