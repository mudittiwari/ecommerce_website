import axios from "axios";
import React, { useState } from "react";
import logo from '../src/assets/logo.png';
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Createaccount() {
    const ref = useRef(null);
    const navigate = useNavigate();
    const [email, changeemail] = useState('');
    const [password, changepassword] = useState('');
    const [confirmpass, changeconfirmpass] = useState('');
    const [mobile, changemobile] = useState();
    const [altmob, changealtmob] = useState();
    const [address, changeaddress] = useState('');
    const [age, changeage] = useState('');
    const [gender, changegender] = useState(null);
    const [name, changename] = useState('');
    return (
        <>
            <div className="w-full flex justify-center flex-col items-center mb-16">
                <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className="w-11/12 bg-white h-max py-6 px-6 sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
                    <h1 className="text-xl text-black text-center font-semibold mb-14">CREATE ACCOUNT</h1>
                    <input value={name} onChange={((e) => {
                        changename(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="text" placeholder="Full Name" />
                    <input value={email} onChange={((e) => {
                        changeemail(e.target.value);
                    })} className="w-full text-black  border-t-0 border-x-0 my-3" type="email" placeholder="Email" />
                    <input value={password} onChange={((e) => {
                        changepassword(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="password" placeholder="password" />
                    <input value={confirmpass} onChange={((e) => {
                        changeconfirmpass(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="password" placeholder="confirm password" />

                    <input value={mobile} onChange={((e) => {
                        changemobile(e.target.value);
                    })} className="w-full text-black border-t-0 border-x-0 my-3" type="tel" placeholder="Mobile no." />
                    <input onChange={((e) => {
                        changeaddress(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="text" placeholder="Address" />
                    <div className="flex justify-around my-3">
                        <div onChange={(e) => {
                            changegender(e.target.value);
                        }}>
                            <input className="mx-0" type="radio" name="gender" value="male" /><span className="text-black mx-3">Male</span>
                            {/* <div className="mx-5 w-0 h-0"></div> */}
                            <input className="sm:ml-40 md:ml-40 lg:ml-40 xl:ml-40 2xl:ml-40 ml-10" type="radio" name="gender" value="female" /><span className="text-black mx-3">Female</span>
                        </div>

                    </div>
                    <input value={age} onChange={((e) => {
                        changeage(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="date" placeholder="Date of Birth" />
                    <input value={altmob} onChange={((e) => {
                        changealtmob(e.target.value);
                    })} className="w-full border-t-0 text-black border-x-0 my-3" type="tel" placeholder="Alternative Mobile no." />
                    <div className="text-center my-10">
                        <button className="px-6 py-1" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}
                            onClick={(async (e) => {
                                e.preventDefault();
                                // console.log(age.toString());
                                if (name.length < 8)
                                    alert("please enter your full name");
                                else if (email.indexOf('@') == -1 || email.indexOf('.com') == -1)
                                    alert("please enter a valid email");
                                else if (email.length == 0)
                                    alert("please enter email address");
                                else if (password.length < 8)
                                    alert("password must be 8 characters long");
                                else if (password != confirmpass)
                                    alert("password and confirm password doesnot match");
                                else if (mobile.length != 10)
                                    alert("please enter a valid mobile number");
                                else if (address.length < 10)
                                    alert("please enter a valid address");
                                else if (gender == null)
                                    alert("please enter your gender");
                                else if (age.length == 0)
                                    alert("please enter your date of birth")
                                else if (altmob == mobile)
                                    alert("please enter a different alternate mobile number");
                                else if (altmob.length != 10)
                                    alert("please enter a valid alternate mobile number");
                                else {
                                    console.log(email);
                                    ref.current.continuousStart(0);
                                    await axios.post("http://localhost:1337/auth/local/register", {
                                        "username": email.trim(),
                                        "email": email.trim(),
                                        "password": password.trim(),
                                        "fullname": name.trim(),
                                        "gender": gender.trim(),
                                        "age": age.trim(),
                                        "address": address.trim(),
                                        "mobile": mobile,
                                        "altmob": altmob,
                                        
                                        "wishlist": JSON.stringify([]),
                                        "cart": JSON.stringify([])
                                    }).then((res) => {
                                        ref.current.complete();
                                        // localStorage.setItem('user', JSON.stringify(res.data.user));
                                        // localStorage.setItem('jwt',res.data.jwt);
                                        // console.log(res.data.user);
                                        navigate("/login");

                                    }).catch((err) => {
                                        if(err.response.data.message[0].messages[0].id=="Auth.form.error.email.taken")
                                        {
                                            alert("this email address is already registered");
                                        }
                                        ref.current.complete(0);
                                        console.log(err);
                                    });
                                }
                            })}>Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Createaccount;