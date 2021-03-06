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
        // console.log(localStorage.getItem('user'));
        // localStorage.removeItem('user');
        // localStorage.removeItem('jwt');
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
                    <button className="text-white text-base mt-5 px-10 py-1 rounded-md" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }} onClick={async(e)=>{
                        e.preventDefault();
                        if(email.indexOf('@')==-1 || email.indexOf('.com')==-1)
                            alert("please enter a valid email");
                        if(email.length==0)
                            alert("please enter email address");
                        if(password.length==0)
                            alert("please enter password");
                        if(password.length<8)
                            alert("please enter a valid password");
                        ref.current.continuousStart(0);
                        await axios.post("https://infinite-falls-68793.herokuapp.com/auth/local/",{
                            "identifier":email,
                            "password":password
                        }).then((res)=>{

                            console.log(res);
                            ref.current.complete();
                            localStorage.setItem('user', JSON.stringify(res.data.user));
                            localStorage.setItem('jwt',res.data.jwt);
                            navigate("/");
                        }).catch((err)=>{
                            // navigate("/confirmemail")
                            if(err.response.data.message[0].messages[0].id=="Auth.form.error.confirmed")
                            {
                                navigate("/confirmemail",{state:{email:email}})
                            }
                            else
                            {
                                alert("invalid credentials");
                            }
                            ref.current.complete();
                        });
                    }}>Continue</button>
                </div>
                <div className="flex justify-center mt-5 mb-5">
                    <button className="text-white text-xs mt-2 px-10 py-1 rounded-md" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }} onClick={async(e)=>{
                        e.preventDefault();
                        if(!email)
                            alert("please enter a email");
                        else
                        {
                            ref.current.continuousStart(0);
                            await axios.post("https://infinite-falls-68793.herokuapp.com/auth/forgot-password",{
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
                
            </div>
        </>
    );
}

export default Login;