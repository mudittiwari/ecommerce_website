import React from "react";
import homepagefirstcomp from './assets/homepagefirstcomp.png'
function Wishlistcomp()
{
    return (
        <>
            <div className="p-6 w-max" style={{'backgroundColor':'rgba(196, 196, 196, 1)'}}>
                <img src={homepagefirstcomp} height="200px" width="200px" alt="" />
                <h1 className="text-black text-center font-bold">Product Name</h1>
                <h1 className="text-black text-center text-xs">Company Name</h1>
                <h1 className="text-black text-center mt-2 font-bold">Rs 0.00</h1>
                <div className="text-center mt-4">
                <button className="px-4 py-1 bg-white text-black text-xs font-semibold">Add to Cart</button>
                </div>
            </div>
        </>
    );
}


export default Wishlistcomp;