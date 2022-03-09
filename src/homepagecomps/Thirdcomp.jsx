import React from "react";
import homepagethirdcomp from '../assets/homepagethirdcomp.png';
function Thirdcomp()
{
    return (
        <>
            <div className="w-5/12 h-max px-5 py-14 bg-white rounded-lg flex">
                <img className="w-2/5" src={homepagethirdcomp} alt="" />
                <div className="flex flex-col items-center justify-around mx-5">
                    <h6 className="font-bold text-xl text-black my-2">Lorem Ipusm</h6>
                    <p className="text-black text-xs font-bold my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eum omnis, explicabo at ipsa fugit?</p>
                    <button className="bg-pink-900 w-24 rounded border-0 px-2 py-1 my-2">shop now</button>
                </div>
            </div>
        </>
    );
}
export default Thirdcomp;