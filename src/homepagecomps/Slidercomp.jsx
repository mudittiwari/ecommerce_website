import React from "react";
import 'flowbite';
import slidercomp from '../assets/sliderimage.png';
function Slidercomp() {
    return (
        <>
            {/* <div id="carouselExampleIndicators" className="carousel slide  relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                        <img
                            src={slidercomp}
                            className="block w-full"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src={slidercomp}
                            className="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src={slidercomp}
                            className="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>

            </div> */}




            <div id="indicators-carousel" class="relative" data-carousel="static">

                <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 lg:h-96 xl:h-96 2xl:h-96">

                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={slidercomp} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={slidercomp} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={slidercomp} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={slidercomp} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={slidercomp} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                </div>

                <div class="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
                    <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-black " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-black " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-black " aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-black " aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>


            </div>

        </>
    );
}
export default Slidercomp;