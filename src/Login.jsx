import React from "react";
import logo from '../src/assets/logo.png';
function Login() {
    return (
        <>
            <div className="w-full">
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <h1 className="font-semibold text-lg text-center mt-5">LOG IN / SIGN UP</h1>
                    <input className="mt-10 rounded-xl w-72 py-1" type="tel" placeholder="Mobile no." />
                    <button className="text-white text-lg font-semibold mt-5">Continue</button>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-sm text-center mt-14">Don't Have an Account</h1>
                    <button className="text-white text-base mt-2 px-20 py-1 rounded-md" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>CREATE ACCOUNT</button>
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

export default Login;