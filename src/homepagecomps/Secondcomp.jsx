import React from "react";
import homepagefirstcomp from '../assets/homepagefirstcomp.png';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';    
function Secondcomp() {
        return (
            <>
                <OwlCarousel items={4} className="owl-theme" margin={40} autoplay={true}>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                <div className='w-full h-max bg-white p-3 flex flex-col items-center' style={{ 'borderRight': '2px solid #FF007A' }}>
                    <img className="w-4/5" src={homepagefirstcomp} alt="" />
                    <h6 className='font-bold text-black'>Product Name</h6>
                    <h6 className='text-black text-center'>Company Name</h6>
                    <h6 className='text-black text-center'>Rs 200</h6>
                </div>
                </OwlCarousel>
            </>
        );
    }
export default Secondcomp;