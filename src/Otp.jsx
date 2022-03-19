import React from "react";
import logo from '../src/assets/logo.png';
function Otp() {
    return (
        <>
            <div className="w-full">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="flex justify-center flex-col items-center my-20">
                    <h1 className="font-semibold text-lg text-center mt-5">OTP</h1>
                    <div className="flex">
                    <input className="mt-2 rounded w-10 py-1" type="tel" />
                    <input className="mt-2 rounded w-10 py-1 ml-2" type="tel" />
                    <input className="mt-2 rounded w-10 py-1 ml-2" type="tel" />
                    <input className="mt-2 rounded w-10 py-1 ml-2" type="tel" />
                    </div>
                    <button className="text-white text-lg font-semibold mt-5">Continue</button>
                </div>

               

                <div className="flex justify-center mt-20 mb-5">
                    <button className="text-xs">
                        Terms & Privacy Policy
                    </button>
                </div>
            </div>
        </>
    );
}

export default Otp;