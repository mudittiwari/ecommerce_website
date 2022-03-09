import React from "react";
import homepagefirstcomp from '../assets/homepagefirstcomp.png'
function Secondcomp(props) {
    if (props.border == "yes") {
        return (
            <>
                <div className='w-3/12 h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className='w-3/12 h-max bg-white p-3 flex flex-col items-center'>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
            </>
        );
    }
}
export default Secondcomp;