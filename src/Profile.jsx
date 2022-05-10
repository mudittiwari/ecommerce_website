import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile_comp() {
    return (
        <>
            <div className="flex flex-col w-full px-5 py-10 items-center justify-center">
                <h1 className="font-semibold text-xl text-center my-6">My Profile</h1>
                <input type="text" placeholder="Name" className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="tel" placeholder="Mobile no." className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="email" placeholder="Email" className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="text" placeholder="Female" className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="number" placeholder="Age" className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <input type="tel" placeholder="Alternate mobile no." className="w-3/4 rounded-lg py-1 my-2" style={{ 'backgroundColor': 'rgba(236, 232, 232, 1)' }} />
                <button className="px-3 py-1 rounded" style={{
                    'backgroundColor': 'rgba(196, 196, 196, 1)'
                }}>Edit</button>
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
                <p className="rounded  px-8 py-4 text-black" style={{'backgroundColor':'rgba(236, 232, 232, 1)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam iure rerum eum cum tempora, maxime doloribus sed et illo corporis illum quis assumenda ipsam reiciendis nobis blanditiis, iusto laudantium. Ullam, a impedit commodi amet accusamus porro doloribus libero. Dolores quas quis obcaecati explicabo molestiae, temporibus alias aperiam nemo incidunt.</p>
                </div>
        </>
    );
}


function Profile() {
    const navigate=useNavigate();
    const [bg, changebg] = useState(['transparent', 'white', 'transparent', 'transparent', 'transparent', 'transparent']);
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/4 h-max py-10 px-5 flex flex-col rounded-md" style={{ 'backgroundColor': 'rgba(186, 182, 182, 1)' }}>
                    <div className="flex items-center">
                        <div className="flex">
                            <div className="w-20 h-20 rounded-full bg-white"></div>
                        </div>
                        <div className="flex flex-col mx-4">
                            <h1 className="text-lg text-black font-semibold">bhawna jangir</h1>
                            <h1 className="text-sm text-black">+91-9413321221</h1>
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