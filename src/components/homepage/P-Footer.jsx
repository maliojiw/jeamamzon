import React from "react";
import 'boxicons'
export default function Footer() {

    return (

        <div id="FooterSection" className="w-full h-[400px] bg-[#C1DCDC]">
            <div className="pt-[48px] pl-[96px] flex gap-[600px]">
                <div>
                    <p className="font-semibold text-xl">Jaemazon</p>
                    <div className="mt-[42px] text-gray-500 text-xl">
                        <p>We help you find</p>
                        <p>your dream plants</p>
                    </div>
                    <div className="mt-[30px] flex gap-[24px]">
                        <div className="bg-[#C1DCDC] border-2 border-gray-500 rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <box-icon name='twitter' type='logo' color='#6b7280 ' className='w-[20px] h-[20px]'></box-icon>
                        </div>
                        <div className="bg-[#C1DCDC] border-2 border-gray-500 rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <box-icon type='logo' name='facebook' color='#6b7280' className='w-[20px] h-[20px]'></box-icon>
                        </div>
                        <div className="bg-[#C1DCDC] border-2 border-gray-500 rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <box-icon name='instagram-alt' type='logo' color='#6b7280' className='w-[20px] h-[20px]'></box-icon>
                        </div>
                    </div>
                    <p className="mt-[78px]">2023 all Right Reserved Term of use Jaemazon</p>
                </div>

                <div className="flex space-x-[48px] pr-[96px]">
                    <div className="column-1">
                        <div className="space-y-[24px]">
                            <p className="font-extrabold">Information</p>
                            <div className=" text-gray-500 space-y-[24px]">
                                <p>About</p>
                                <p>Product</p>
                                <p>Blog</p>
                            </div>

                        </div>
                    </div>
                    <div className="column-2">
                        <div className="space-y-[24px]">
                            <p className="font-extrabold">Company</p>
                            <div className=" text-gray-500 space-y-[24px]">
                                <p>Community</p>
                                <p>Career</p>
                                <p>Our Story</p>
                            </div>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="space-y-[24px]">
                            <p className="font-extrabold">Contact</p>
                            <div className=" text-gray-500 space-y-[24px]">
                                <p>Getting started</p>
                                <p>Pricing</p>
                                <p>Resources</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}