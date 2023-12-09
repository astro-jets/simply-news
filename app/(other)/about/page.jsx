"use client";
import('preline')
import Image from "next/image";
import Faqs from "../components/Faqs";
// import { useEffect } from "react";

const about = () => {
    // useEffect(() => {import('preline')}, []);
    return ( 
        <div className="h-full">
            {/* Mission Statement */}
            <section className="flex items-center bg-stone-100 h-full font-poppins dark:bg-[#111]">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto h-full space-y-5 lg:py-6 md:px-6">
                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            About us
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Get to know us, take a look at we do.
                        </p>
                        {/* <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div className="flex-1 h-2 bg-red-700">
                            </div>
                            <div className="flex-1 h-2 bg-red-600">
                            </div>
                            <div className="flex-1 h-2 bg-red-700">
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image width={500} height={500} src="/bg.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Mission
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                To be the leading online news publication that captures the pulse of corporate landscapes across the African continent. We are committed to delivering accurate, timely, and insightful news that empowers businesses, fosters informed decision-making, and catalyzes economic growth.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Vision
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Our vision is to create a dynamic platform that not only reports news but also serves as a catalyst for positive change in the corporate world. We aspire to be the go-to source for business leaders, entrepreneurs, and professionals seeking comprehensive and reliable information to navigate the intricacies of the African business terrain.
                            </p>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image width={500} height={500} src="/bg.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                        </div>
                    </div>

                    <Faqs/>
                </div>
            </section>
        </div>
     );
}
 
export default about;