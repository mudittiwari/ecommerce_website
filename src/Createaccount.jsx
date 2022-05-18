import axios from "axios";
import React, { useState } from "react";
import logo from '../src/assets/logo.png';
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Createaccount() {
    const ref = useRef(null);
    const navigate=useNavigate();
    const [email,changeemail]=useState();
    const [password,changepassword]=useState();
    const [confirmpass,changeconfirmpass]=useState();
    const [mobile,changemobile]=useState();
    const [altmob,changealtmob]=useState();
    const [address,changeaddress]=useState();
    const [age,changeage]=useState();
    const [gender,changegender]=useState();
    const [name,changename]=useState();
    return (
        <>
            <div className="w-full flex justify-center flex-col items-center mb-16">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="w-11/12 bg-white h-max py-6 px-20">
                    <h1 className="text-xl text-black text-center font-semibold mb-14">CREATE ACCOUNT</h1>
                    <input value={name} onChange={((e)=>{
                        changename(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="text" placeholder="Full Name" />
                    <input value={email} onChange={((e)=>{
                        changeemail(e.target.value);
                    })} className="w-full text-black  border-t-0 border-x-0 my-3" type="email" placeholder="Email" />
                    <input value={password} onChange={((e)=>{
                        changepassword(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="tel" placeholder="password" />
                    <input value={confirmpass} onChange={((e)=>{
                        changeconfirmpass(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="tel" placeholder="confirm password" />
                    
                    <input value={mobile} onChange={((e)=>{
                        changemobile(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="tel" placeholder="Mobile no." />
                    <input onChange={((e)=>{
                        changeaddress(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="text" placeholder="Address" />
                    <div className="flex justify-around my-3">
                        <div onChange={(e)=>{
                            changegender(e.target.value);
                        }}>
                        <input className="mx-0" type="radio" name="gender" value="male"/><span className="text-black mx-3">Male</span>
                        {/* <div className="mx-5 w-0 h-0"></div> */}
                        <input className="ml-40" type="radio" name="gender" value="female" /><span className="text-black mx-3">Female</span>
                        </div>
                        
                    </div>
                    <input value={age} onChange={((e)=>{
                        changeage(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="number" placeholder="Age" />
                    <input value={altmob} onChange={((e)=>{
                        changealtmob(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="tel" placeholder="Alternative Mobile no." />
                    <div className="text-center my-10">
                    <button className="px-6 py-1" style={{'backgroundColor':'rgba(255, 0, 122, 1)'}}
                    onClick={(async(e)=>{
                        e.preventDefault();
                        ref.current.continuousStart(0);
                        await axios.post("https://infinite-falls-68793.herokuapp.com/auth/local/register",{
                            "username":email,
                            "email":email,
                            "password":password,
                            "fullname":name,
                            "gender":gender,
                            "age":age,
                            "address":address,
                            "mobile":mobile,
                            "altmob":altmob,
                            "wishlist":JSON.stringify([]),
                            "cart":JSON.stringify([])
                        }).then((res)=>{
                            ref.current.complete();
                            localStorage.setItem('user', JSON.stringify(res.data.user));
                            localStorage.setItem('jwt',res.data.jwt);
                            // console.log(res.data.user);
                            navigate("/login");
                            
                        }).catch((err)=>{
                            ref.current.complete(0);
                            console.log(err);
                        });
                    })}>Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Createaccount;