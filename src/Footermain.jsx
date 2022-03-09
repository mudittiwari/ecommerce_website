import React from "react";
import footer from '../src/assets/footer.png';
import logocart from '../src/assets/logocart.png';
function Footermain() {
    return (
        <>
            <div className="relative">
                <img src={footer} alt="" />
                <div className="w-full h-full flex" style={{ 'position': 'absolute', 'top': '0px' }}>
                    <div className="w-1/4 h-full flex flex-col justify-center px-5 py-4">
                        <div className="flex items-center">
                            <img height="60px" width="60px" src={logocart} alt="" />
                            <h6 className="text-xl font-bold text-black">Web Name</h6>
                        </div>
                        <div>
                            <p className="text-xs text-black px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus distinctio.</p>
                        </div>
                    </div>
                    <div className="w-1/4 h-full flex flex-col items-center justify-center px-5 py-4">
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
                    <div className="w-1/2 pl-5 flex flex-col justify-start" style={{'paddingTop':'60px'}}>
                        <div className="my-6 mr-6">
                            <h6 className="text-xl font-bold w-max my-2" style={{ 'color': '#FF007A' }}>Address</h6>
                            <p className="text-xs text-black ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa reprehenderit placeat nemo harum inventore dolore doloribus adipisci officiis quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis molestiae omnis cum odit unde pariatur qui magnam ex mollitia!</p>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold w-max my-2" style={{ 'color': '#FF007A' }}>Email</h6>
                            <p className="text-xs text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footermain;