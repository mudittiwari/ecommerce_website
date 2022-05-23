import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from "axios";
import { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
function Forgotpassword()
{
    const {code}=useParams();
    // console.log(code);
    const ref=useRef(null);
    const navigate=useNavigate();
    const [password,changepassword]=useState('');
    const [confirmpassword,changeconfirmpassword]=useState('');
    return (
        <div>
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <div className="flex justify-center flex-col items-center">
                    <h1 className="font-semibold text-lg text-center mt-5">Forgot Password</h1>
                    <input value={password} onChange={((e)=>{
                        changepassword(e.target.value);
                    })} className="mt-10 rounded-xl w-72 py-1 text-black" type="text" placeholder="password" />
                    <input value={confirmpassword} onChange={(e)=>{
                        changeconfirmpassword(e.target.value);
                    }} className="mt-10 rounded-xl w-72 py-1 text-black" type="text" placeholder="Confirm Password" />
                    <button className="text-white text-lg font-semibold mt-5" onClick={async(e)=>{
                        e.preventDefault();
                        ref.current.continuousStart(0);
                        await axios.post("https://infinite-falls-68793.herokuapp.com/auth/reset-password/",{
                            "code":code,
                            "password":password,
                            "passwordConfirmation":confirmpassword
                        }).then((res)=>{
                            console.log(res);
                            ref.current.complete();
                            localStorage.setItem('user', JSON.stringify(res.data.user));
                            localStorage.setItem('jwt',res.data.jwt);
                            navigate("/");
                        }).catch((err)=>{
                            console.log(err);
                            // ref.current.complete();
                        });
                    }}>Continue</button>
                </div>
        </div>
    );
}

export default Forgotpassword;