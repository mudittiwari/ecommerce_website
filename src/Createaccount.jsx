import React from "react";
import logo from '../src/assets/logo.png';

function Createaccount() {
    return (
        <>
            <div className="w-full flex justify-center flex-col items-center mb-16">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="w-11/12 bg-white h-max py-6 px-20">
                    <h1 className="text-xl text-black text-center font-semibold mb-14">CREATE ACCOUNT</h1>
                    <input className="w-full border-t-0 border-x-0 my-3" type="text" placeholder="Full Name" />
                    <input className="w-full border-t-0 border-x-0 my-3" type="tel" placeholder="Mobile no." />
                    <input className="w-full border-t-0 border-x-0 my-3" type="email" placeholder="Email" />
                    <input className="w-full border-t-0 border-x-0 my-3" type="text" placeholder="Address" />
                    <div className="flex justify-around my-3">
                        <div>
                        <input type="radio" /><span className="text-black mx-3">Male</span>
                        </div>
                        <div>
                        <input type="radio" /><span className="text-black mx-3">Female</span>
                        </div>
                    </div>
                    <input className="w-full border-t-0 border-x-0 my-3" type="tel" placeholder="Age" />
                    <input className="w-full border-t-0 border-x-0 my-3" type="tel" placeholder="Alternative Mobile no." />
                    <div className="text-center my-10">
                    <button className="px-6 py-1" style={{'backgroundColor':'rgba(255, 0, 122, 1)'}}>Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Createaccount;