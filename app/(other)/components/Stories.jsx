'use client';

import Image from "next/image";
import Ads from "./Ads";
import { useEffect } from "react";
import { BsHouse } from "react-icons/bs";


const Stories = ({stories}) => { 
    useEffect(()=>{import('preline')},[]) 
    return ( 
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Latest News</h2>
        </div>

        <div className="w-full flex justify-center overflow-hidden">
          <div className="flex flex-wrap justify-between mb-4 w-full md:w-1/2 md:mt-4">
            <a href="/news/agriculture" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Agriculture</a>
            <a href="/news/business" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Business</a>
            <a href="/news/tech" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Tech</a>
            <a href="/news/enviroment" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Enviroment</a>
          </div>
        </div>
        {!stories || !stories.length ?
          <div className=" w-ful flex flex-col items-center space-y-6 mb-8">
            <h1 className="text-3xl text-black dark:text-white text-center w-full mt-16">No stories found!</h1>
            <a href="/" className="text-white bg-red-700 p-4 w-5/6 md:w-1/3 space-x-4 rounded-lg flex items-center justify-center">
              <BsHouse color="#fff" size={20}/>
              <p>Back Home</p>
            </a>
          </div>
          :null
        }
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            stories && stories.length ?
                stories.map(s=>
                    <a className="group rounded-xl overflow-hidden" key={s._id} href={`/news/${s._id}`}>
                      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                          <Image 
                            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
                            src={s.image}
                            alt="Image Description"
                            layout="fill"
                          />
                          <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                          {s.category}
                          </span>
                      </div>

                      <div className="mt-7">
                          <div className="flex items-center justify-between mb-1">
                          <h1 className="text-white text-md">Mphatso</h1>
                          <span className="text-red-700 text-sm">12 Nov 2023</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                          {s.title}
                          </h3>
                          <p className="mt-3 text-gray-800 dark:text-gray-200">
                          {s.story}
                          </p>
                          <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                          Read more
                          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                          </svg>
                          </p>
                      </div>
                    </a>
                )
            : null
          }
          {stories && stories.length ? <Ads/> : null}
        </div>
      </div>
    );
}
 
export default Stories;