import React from "react";
import logo from '../src/assets/logo.png';
import homepagefirstcomp from './assets/homepagefirstcomp.png';

function Notifications() {
    return (
        <>
            <div className="w-full flex flex-col md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-4">
                {/* <div className='flex justify-center my-5'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                <h1 className="text-lg font-bold">Notifications</h1>
                <p className="text-xs my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore dolores iure, porro alias vero voluptate dolorem inventore, quisquam, est possimus consequatur officia excepturi eum eligendi accusantium praesentium voluptatibus! Placeat voluptatibus accusantium aliquid non eum explicabo minus ad possimus doloremque Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis vero error nihil voluptatum ipsum rerum magnam pariatur alias exercitationem minima consectetur accusantium repellendus, voluptatibus ipsam veritatis ab, sunt aliquid laboriosam delectus autem veniam facere debitis. Debitis veritatis dolores eaque quasi.</p>
                <div className="flex justify-around w-full">
                    <img src={homepagefirstcomp} height="100px" width="100px" alt="" />
                    <p className="text-xs mx-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi provident inventore necessitatibus veritatis impedit aspernatur architecto dignissimos fugit, numquam neque beatae voluptatem obcaecati repellat voluptatum ex nostrum blanditiis! Dolores soluta, animi libero, ad esse vero, architecto repellendus repellat totam cum distinctio quod consequuntur saepe quasi. Nisi at voluptatibus quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere. Ipsum cupiditate earum quasi voluptas inventore laboriosam in nemo, possimus facilis quas, vitae ducimus vero debitis at modi architecto sunt perferendis aperiam explicabo animi illum voluptate. Voluptatem amet doloribus libero saepe a, tempore temporibus. Harum explicabo quis neque numquam. Quam.</p>
                </div>
            </div>
        </>
    );
}

export default Notifications;