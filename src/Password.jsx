import React from "react";
import logo from '../src/assets/logo.png';
function Password() {
    return (
        <>
            <div className="w-full">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="flex justify-center flex-col items-center mt-20">
                    <h1 className="font-semibold text-lg text-center mt-5">PASSWORD</h1>
                    <input className="mt-10 rounded-xl w-72 py-1" type="text" placeholder="Password" />
                    <button className="text-white text-lg font-semibold mt-5">Continue</button>
                </div>

                <div className="flex justify-center mt-14 mb-14">
                    <button className="text-xs">
                        Forgot Password?
                    </button>
                </div>

               
            </div>
        </>
    );
}

export default Password;