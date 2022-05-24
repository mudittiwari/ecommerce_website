import React from "react";
import footer from '../src/assets/footer.png';
import logocart from '../src/assets/logocart.png';
function Footermain() {
    return (
        <>
            <div className="relative" style={{'bottom':'-170px'}}>
                <img className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden" style={{'height':'500px','width':'100vw'}} src={footer} alt="" />
                <img className="sm:block md:block lg:block xl:block 2xl:block hidden" style={{'height':'350px','width':'100vw'}} src={footer} alt="" />
                <div className="w-full h-full flex" style={{ 'position': 'absolute', 'top': '0px' }}>
                    <div className="mt-20 flex w-full justify-around px-4">
                        <div className="w-1/4 h-full flex-col px-5 py-4 sm:block md:block lg:block xl:block 2xl:block hidden ">
                            <div className="flex items-center">
                                <img height="60px" width="60px" src={logocart} alt="" />
                                <h6 className="text-xl font-bold text-black" style={{ 'color': '#FF007A' }}>Web Name</h6>
                            </div>
                            <div>
                                <p className="text-xs text-black px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus distinctio.</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-full flex flex-col items-center px-5 py-4">
                            <h6 className="text-xl font-bold w-max my-2" style={{ 'color': '#FF007A' }}>Quick Links</h6>
                            <ul>
                                <li className="text-sm text-black w-max my-2">Wishlist</li>
                                <li className="text-sm text-black w-max my-2">Cart</li>
                                <li className="text-sm text-black w-max my-2">Orders</li>
                                <li className="text-sm text-black w-max my-2">Notifications</li>
                                <li className="text-sm text-black w-max my-2">Profile</li>
                                <li className="text-sm text-black w-max my-2">Help</li>

                            </ul>
                        </div>
                        <div className="w-1/2 pl-5 flex flex-col px-5 py-4">
                            <div className=" mr-6">
                                <h6 className="text-xl font-bold w-max my-2 mb-4" style={{ 'color': '#FF007A' }}>Address</h6>
                                <p className="text-xs text-black ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa reprehenderit placeat nemo harum inventore dolore doloribus adipisci officiis quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis molestiae omnis cum odit unde pariatur qui magnam ex mollitia!</p>
                            </div>
                            <div>
                                <h6 className="text-xl font-bold w-max mt-5" style={{ 'color': '#FF007A' }}>Email</h6>
                                <p className="text-xs text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footermain;