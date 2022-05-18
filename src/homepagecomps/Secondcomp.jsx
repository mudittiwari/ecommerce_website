import React from "react";
import homepagefirstcomp from '../assets/homepagefirstcomp.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Secondcomp(props) {
    return (
        <>
            <OwlCarousel items={4} className="owl-theme" margin={40} autoplay={true}>
                
                {props.data.map((element,index)=>{
                    return <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={JSON.parse(element.photos)[0]} alt="" />
                    <h6 className='font-bold text-black'>{element.product_name}</h6>
                    <h6 className='text-black text-center'>{element.brand}</h6>
                    <h6 className='text-black text-center'>Rs {element.price}</h6>
                </div>
                })}
                
            </OwlCarousel>
        </>
    );
}
export default Secondcomp;