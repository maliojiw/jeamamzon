import React from "react";
import "boxicons";
export default function Banner() {
    return (
        <section id="Section-1" className="SectionBanner h-[1792px]">
            <div id="Banner" className="Card w-[1248] h-[512px] bg-[#C1DCDC] m-[96px] rounded-2xl">
                <div className="pl-[48px] pt-[65px]">
                    <p className="font-extrabold text-7xl">Buy your</p>
                    <p className="font-extrabold text-7xl">dream plants</p>
                </div>
                <div className="flex gap-2 ml-[48px] mt-[42px]">
                    <div className="font-bold text-2xl">
                        <p>50+</p>
                        <p>plant species</p>
                    </div>
                    <div className="w-[0.5px] h-[51px] bg-black mx-[47px]"></div>
                    <div className="font-bold text-2xl">
                        <p>100+</p>
                        <p>plant species</p>
                    </div>
                </div>
                <div class="relative ml-[48px] mt-[55px] w-[448px]">
                    <input
                        class="h-[65px] w-[448px] rounded-2xl pl-[50px] font-semibold text-gray-500"
                    />
                    <box-icon
                        name='search-alt'
                        class="absolute top-[50%] transform -translate-y-1/2 left-[400px]"
                    ></box-icon>
                </div>
                <div className="flex justify-end absolute right-[230.5px] bottom-[-64.5px]">
                    <div className="w-[305px] h-[300px] bg-black rounded-full"></div>
                </div>
                <div className="flex justify-end absolute right-[230.5px] bottom-[-64.5px]">
                    <div className="w-[235px] h-[100px] bg-black rounded-3xl"></div>
                </div>
                <div className="flex justify-end absolute right-[230.5px] bottom-[-64.5px]">
                    <div className="w-[130px] h-[205px] bg-black rounded-3xl"></div>
                </div>
            </div>

            <div id="Best Selling Plants" className="flex flex-row pt-[96px] pr-[30px]">
                <div className="w-[256px] h-[264px] ml-[56px] flex flex-col justify-between">
                    <div className="flex flex-col text-3xl font-bold">
                        <p className="text-black">Best Selling</p>
                        <p className="text-black">Plants</p>
                    </div>
                    <div className="mt-[33px] flex flex-col">
                        <p className="font-medium text-gray-500">
                            Easiest way to <br /> healthy life by buying <br /> your favorite plants
                        </p>
                        <button className="bg-[#C1DCDC] w-[168px] h-[51px] mt-[29px] rounded-2xl font-bold">See more &rarr;</button>
                    </div>
                </div>
                <div className="flex gap-[48px]">
                    <div className="w-[299px] h-[436px] flex flex-col justify-between">
                        <div id="box1" className="w-[299px] h-[363px] bg-gray-300 flex">
                            <img src="#"></img>
                        </div>
                        <div className="w-[128px] h-[61px] flex flex-col">
                            <div className="font-semibold ">
                                <p>Natural Plant</p>
                                <p>1400</p>
                            </div>
                        </div>
                    </div>
                    <div id="box2" className="w-[299px] h-[436px] flex flex-col justify-between">
                        <div className="w-[299px] h-[363px] bg-gray-300 flex">
                            <img src="#"></img>
                        </div>
                        <div className="w-[128px] h-[61px] flex flex-col">
                            <div className="font-semibold ">
                                <p>Natural Plant</p>
                                <p>1400</p>
                            </div>
                        </div>
                    </div>
                    <div id="box3" className="w-[299px] h-[436px] flex flex-col justify-between">
                        <div className="w-[299px] h-[363px] bg-gray-300 flex">
                            <img src="#"></img>
                        </div>
                        <div className="w-[128px] h-[61px] flex flex-col">
                            <div className="font-semibold ">
                                <p>Natural Plant</p>
                                <p>1400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about-us" className="p-4 pt-[114px]">
                <div className="flex flex-col">
                    <div className="text-center">
                        <p className="text-4xl font-bold ">About Us</p>
                        <p className="text-sm pt-[32px]">Order now and appreciate the beauty of nature</p>
                    </div>
                </div>


                <div id="boxcontainer" className="flex justify-center mt-[100px]">

                    <div className="flex space-x-[47px]">
                        <div id="box1" className="w-[350px] h-[213px] flex flex-col justify-center items-center">
                            <div id="icon" className="relative bg-[#C1DCDC] w-[96px] h-[96px] rounded-full flex justify-center items-center mb-4">
                                <box-icon className='absolute' type='solid' name='leaf' size='lg'></box-icon>
                            </div>
                            <div id="text" className="text-center space-y-2">
                                <p className="font-extrabold text-lg">Large Assortment</p>
                                <p className="text-gray-500 font-semibold">we offer many different types of products with fewer variations in each category.</p>
                            </div>
                        </div>

                        <div id="box2" className="w-[350px] h-[213px] flex flex-col justify-center items-center">
                            <div id="icon" className="relative bg-[#C1DCDC] w-[96px] h-[96px] rounded-full flex justify-center items-center mb-4">
                                <box-icon className='absolute' type='solid' name='leaf' size='lg'></box-icon>
                            </div>
                            <div id="text" className="text-center space-y-2">
                                <p className="font-extrabold text-lg">Large Assortment</p>
                                <p className="text-gray-500 font-semibold">we offer many different types of products with fewer variations in each category.</p>
                            </div>
                        </div>

                        <div id="box3" className="w-[350px] h-[213px] flex flex-col justify-center items-center">
                            <div id="icon" className="relative bg-[#C1DCDC] w-[96px] h-[96px] rounded-full flex justify-center items-center mb-4">
                                <box-icon className='absolute' type='solid' name='leaf' size='lg'></box-icon>
                            </div>
                            <div id="text" className="text-center space-y-2">
                                <p className="font-extrabold text-lg">Large Assortment</p>
                                <p className="text-gray-500 font-semibold">we offer many different types of products with fewer variations in each category.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}