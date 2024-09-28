import React from "react";
import 'boxicons';
export default function Categories_cp() {

    return (

        <div id="CategoriesSection" className="h-[1024px] flex flex-col items-center relative"> {/*container should be main parent */}
            <div className="w-[262px] h-[87px] flex flex-col items-center justify-center justify-between text-center"> {/*other div should be inharit with parent dont hard code px !!!!!!!!! */}
                <p className="font-bold text-2xl">Categories</p>{/*pick one justify-center or justify-between*/}
                <p>find what are you looking for</p>
            </div>

            <div className="mt-[95px] h-[841px] w-full bg-[#C1DCDC] flex justify-center">

                <div id="boxcontainer" className="flex space-x-[94px]">

                    <div id="box1" className="mt-[45px] w-[352px] h-[692px] absolute left-5 top-[93px]">
                        <div className="w-[352px] h-[512px] bg-gray-600">
                            <img src="#"></img>
                        </div>
                        <div className="w-[352px] h-[27px] text-center space-y-3 mt-[21px]">
                            <p className="font-extrabold text-xl">Plant Accessories</p>
                        </div>
                    </div>

                    <div id="box2" className="mt-[45px] w-[352px] h-[692px] relative right-[40px]">
                        <div className="w-[352px] h-[512px] bg-gray-600">
                            <img src="#"></img>
                        </div>
                        <div className="w-[352px] h-[27px] text-center mt-[21px] space-y-2">
                            <p className="font-extrabold text-xl">Plant Accessories</p>
                            <p className="text-gray-500">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="w-[147px] h-[51px] bg-white rounded-2xl font-semibold text-lg">Explore &rarr;</button>
                        </div>
                    </div>

                    <div id="box3" className="mt-[45px] w-[352px] h-[692px] absolute right-5 top-[93px]">
                        <div className="w-[352px] h-[512px] bg-gray-600">
                            <img src="#"></img>
                        </div>
                        <div className="w-[352px] h-[27px] text-center mt-[21px]">
                            <p className="font-extrabold text-xl">Plant Accessories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

