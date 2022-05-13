import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Profile_comp() {
    const ref = useRef(null);
    const [disabled, turndisabled] = useState(true);
    const [name, changename] = useState(JSON.parse(localStorage.getItem('user')).fullname);
    const [mobile, changemobile] = useState(JSON.parse(localStorage.getItem('user')).mobile);
    const [email, changeemail] = useState(JSON.parse(localStorage.getItem('user')).email);
    const [gender, changegender] = useState(JSON.parse(localStorage.getItem('user')).gender);
    const [age, changeage] = useState(JSON.parse(localStorage.getItem('user')).age);
    const [altmob, changealtmob] = useState(JSON.parse(localStorage.getItem('user')).altmob);
    const [status, changestatus] = useState("edit");
    const [statuskey, changestatuskey] = useState(Math.random());
    const [reload,changereload]=useState(false);
    useEffect(()=>{
        turndisabled(true);
        changestatus("edit");
    },[reload]);
    return (
        <>
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <div className="flex flex-col w-full px-5 py-10 items-center justify-center">
                <h1 className="font-semibold text-xl text-center my-6">My Profile</h1>
                <input type="text" value={name} onChange={(e) => {
                    changename(e.target.value);
                }} disabled={disabled} placeholder="Name" className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="tel" onChange={(e) => {
                    changemobile(e.target.value);
                }} value={mobile} disabled={disabled} placeholder="Mobile no." className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="email" onChange={(e) => {
                    changeemail(e.target.value);
                }} value={email} disabled={disabled} placeholder="Email" className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="text" onChange={(e) => {
                    changegender(e.target.value);
                }} value={gender} disabled={disabled} placeholder="Female" className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="number" onChange={(e) => {
                    changeage(e.target.value);
                }} value={age} disabled={disabled} placeholder="Age" className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="tel" onChange={(e) => {
                    changealtmob(e.target.value);
                }} value={altmob} disabled={disabled} placeholder="Alternate mobile no." className="w-3/4 text-black rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <button key={statuskey} className="px-3 py-1 rounded" style={{
                    'backgroundColor': 'rgba(196, 196, 196, 1)'
                }} onClick={async (e) => {
                    e.preventDefault();
                    if (status == "edit") {
                        turndisabled(false);
                        changestatus("submit");
                    }
                    else {
                        ref.current.continuousStart(0);
                        await axios.put(`https://infinite-falls-68793.herokuapp.com/users/me`, 
                            {
                                "username": email,
                                "email": email,
                                // "password": password,
                                "fullname": name,
                                "gender": gender,
                                "age": age,
                                // "address": address,
                                "mobile": mobile,
                                "altmob": altmob
                            },
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }).then((res) => {
                                console.log(res.data);
                                changestatuskey(Math.random());
                                changereload(true);
                                localStorage.setItem('user',JSON.stringify(res.data));
                                ref.current.complete();
                            }).catch((err) => {
                                console.log(err);
                                ref.current.complete();
                            })
                    }
                }}>{status}</button>
            </div>
        </>
    );
}

function Coupons_comp() {
    return (
        <>
            <div className="flex px-5 py-16 w-full flex-col">
                <div className="flex justify-around w-full my-3">
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                </div>
                <div className="flex justify-around w-full my-3">
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                    <div className="w-40 h-40 rounded-md bg-white"></div>
                </div>
            </div>
        </>
    );
}

function Address_comp() {
    return (
        <>
            <div className="flex flex-col w-full px-5 py-10 items-center justify-center">
                <h1 className="font-semibold text-xl text-center my-6">Address</h1>
                <p className="rounded  px-8 py-4 text-black" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam iure rerum eum cum tempora, maxime doloribus sed et illo corporis illum quis assumenda ipsam reiciendis nobis blanditiis, iusto laudantium. Ullam, a impedit commodi amet accusamus porro doloribus libero. Dolores quas quis obcaecati explicabo molestiae, temporibus alias aperiam nemo incidunt.</p>
            </div>
        </>
    );
}


function Profile() {
    const navigate = useNavigate();
    const [bg, changebg] = useState(['transparent', 'white', 'transparent', 'transparent', 'transparent', 'transparent']);
    return (
        <>
            <div className="w-full flex">
                {/* <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} /> */}
                <div className="w-1/4 h-max py-10 px-5 flex flex-col rounded-md" style={{ 'backgroundColor': 'rgba(186, 182, 182, 1)' }}>
                    <div className="flex items-center">
                        <div className="flex">
                            <div className="w-20 h-20 rounded-full bg-white"></div>
                        </div>
                        <div className="flex flex-col mx-4">
                            <h1 className="text-lg text-black font-semibold">{JSON.parse(localStorage.getItem('user')).fullname}</h1>
                            <h1 className="text-sm text-black">+91-{JSON.parse(localStorage.getItem('user')).mobile}</h1>
                        </div>

                    </div>
                    <hr className="bg-transparent border-black w-4/5 my-6" />



                    <ul className="flex flex-col items-end">
                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[0]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {
                                changebg(['white', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'])
                            }}>Coupons</button>
                        </li>

                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[1]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {
                                changebg(['transparent', 'white', 'transparent', 'transparent', 'transparent', 'transparent'])
                            }}>Profile</button>
                        </li>

                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[2]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {
                                changebg(['transparent', 'transparent', 'white', 'transparent', 'transparent', 'transparent'])
                            }}>Address</button>
                        </li>
                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[3]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {

                                changebg(['transparent', 'transparent', 'transparent', 'white', 'transparent', 'transparent']);
                                localStorage.removeItem('user');
                                localStorage.removeItem('jwt');
                                navigate("/login");

                            }}>Logout</button>
                        </li>
                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[4]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {
                                changebg(['transparent', 'transparent', 'transparent', 'transparent', 'white', 'transparent'])
                            }}>Change Password</button>
                        </li>
                        <li className="w-56 py-2 px-2 rounded" style={{ 'backgroundColor': `${bg[5]}`, 'position': 'relative', 'left': '56px' }}>
                            <button className="text-black font-semibold w-full text-left" onClick={() => {
                                changebg(['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'white'])
                            }}>Terms & Privacy Policy</button>
                        </li>

                    </ul>
                </div>

                <div className="w-3/4">
                    {
                        bg[0] == 'white' ? <Coupons_comp /> : (bg[1] == 'white' ? <Profile_comp /> : <Address_comp />)
                    }
                </div>
            </div>
        </>
    );
}
export default Profile;