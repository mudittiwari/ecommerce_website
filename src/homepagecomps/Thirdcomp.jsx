import React from "react";
import { useNavigate } from "react-router-dom";
import homepagethirdcomp from '../assets/homepagethirdcomp.png';
function Thirdcomp(props)
{
    const navigate=useNavigate();
    return (
        <>
            <div onClick={(e)=>{
                e.preventDefault();
                navigate("/product_page",{state:props.data});

            }} className="w-3/4 h-max px-5 mx-8 sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 my-4 py-14 bg-white rounded-lg flex justify-center">
                <div className="w-2/5" ><img className="object-fill" style={{'width':'250px','height':'250px'}} src={JSON.parse(props.data.photos)[0]} alt="" /></div>
                <div className="flex flex-col items-center justify-around mx-5 w-3/5">
                    <h6 className="font-bold text-xl text-black my-2">{props.data.product_name}</h6>
                    <p className="text-black text-xs font-bold my-2 w-full break-words">{props.data.desc}</p>
                    <button className="bg-pink-900 w-24 rounded border-0 px-2 py-1 my-2">shop now</button>
                </div>
            </div>
        </>
    );
}
export default Thirdcomp;