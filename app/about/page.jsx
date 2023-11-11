"use client";
import('preline')
// import { useEffect } from "react";
import Team from "../components/Team";

const about = () => {
    // useEffect(() => {import('preline')}, []);
    return ( 
        <>
        <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-[#111] mt-12">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
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
                        <img src="bg.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <h2
                            className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                            We are providing a better facility
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            At Cooperate News Africa, our mission is to serve as a leading source of insightful and unbiased media content that empowers and connects individuals across the African continent. Committed to journalistic excellence, we aim to provide timely, credible news coverage that showcases the diversity of Africa's stories, achievements, and challenges.
                            Driven by a vision of positive transformation, we pledge to uphold the highest standards of ethics, fostering a sense of community and understanding. Cooperate News Africa seeks to be the trusted bridge connecting people, ideas, and opportunities, contributing to a narrative that reflects the dynamic and vibrant spirit of Africa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Team/>
        </>
     );
}
 
export default about;