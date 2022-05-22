import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import logo from '../src/assets/logo.png';
function Login() {
    const [email,changeemail]=useState();
    const ref = useRef(null);
    const [password,changepassword]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            navigate("/");
        }
    },[])
    return (
        <>
            <div className="w-full">
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <h1 className="font-semibold text-lg text-center mt-5">LOG IN / SIGN UP</h1>
                    <input value={email} onChange={((e)=>{
                        changeemail(e.target.value);
                    })} className="mt-10 rounded-xl w-72 py-1 text-black" type="email" placeholder="Email" />
                    <input value={password} onChange={(e)=>{
                        changepassword(e.target.value);
                    }} className="mt-10 rounded-xl w-72 py-1 text-black" type="password" placeholder="Password" />
                    <button className="text-white text-lg font-semibold mt-5" onClick={async(e)=>{
                        e.preventDefault();
                        ref.current.continuousStart(0);
                        await axios.post("https://infinite-falls-68793.herokuapp.com/auth/local/",{
                            "identifier":email,
                            "password":password
                        }).then((res)=>{
                            // console.log(res);
                            ref.current.complete();
                            localStorage.setItem('user', JSON.stringify(res.data.user));
                            localStorage.setItem('jwt',res.data.jwt);
                            navigate("/");
                        }).catch((err)=>{
                            console.log(err);
                            ref.current.complete();
                        });
                    }}>Continue</button>
                </div>
                <div className="flex justify-center mt-5 mb-5">
                    <button className="text-xs" onClick={async(e)=>{
                        e.preventDefault();
                        if(!email)
                            alert("please enter a email");
                        else
                        {
                            ref.current.continuousStart(0);
                            await axios.post("http://localhost:1337/auth/forgot-password",{
                                "email":email
                            }).then((res)=>{
                                console.log(res);
                            }).catch((err)=>{
                                console.log(err);
                            });
                            ref.current.complete();
                        }
                    }}>
                        Forgot Password
                    </button>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-sm text-center mt-14">Don't Have an Account</h1>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        navigate("/createaccount");
                    }} className="text-white text-base mt-2 px-20 py-1 rounded-md" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>CREATE ACCOUNT</button>
                </div>

                <div className="flex justify-center mt-20 mb-5">
                    <button className="text-xs">
                        Terms & Privacy Policy
                    </button>
                </div>
                <div className="flex justify-center mt-20 mb-5">
                    <button className="text-xs" onClick={(e)=>{
                        e.preventDefault();
                        navigate("/Admin_Panel");
                    }}>
                        Admin Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;