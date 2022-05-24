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

            }} className='cursor-pointer sm:w-2/5 md:w-2/5 lg:w-3/12 xl:w-3/12 2xl:w-3/12 w-1/3 h-max bg-white p-3 mx-6 my-6 rounded-lg'>
                    <img className='object-fill' style={{'width':'250px','height':'250px'}} src={JSON.parse(props.data.photos)[0]} alt="" />
                   <h6 className='font-bold text-black'>{props.data.product_name}</h6>
                   <h6 className='text-black text-center'>{props.data.category_name}</h6>
                   <h6 className='text-black text-center'>Rs {props.data.price}</h6>
                </div>
        </>
    );
    }
    
}

export default Firstcomp;