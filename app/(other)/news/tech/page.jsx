"use client";
import Image from "next/image";
import Ads from "../../components/Ads";

const Tech = ({params}) => {
    const category = params.category;
    return ( 
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Science & Tech News</h2>
        </div>

        <div className="w-full flex justify-center overflow-hidden">
          <div className="flex flex-wrap justify-between mb-4 w-full md:w-1/2 md:mt-4">
            <a href="/news/agriculture" className="scale-75 md:scale-100 dark:text-white bg-gray-700 hover:text-white p-3 rounded-md">Agriculture</a>
            <a href="/news/business" className="scale-75 md:scale-100 dark:text-white bg-gray-700 hover:text-white p-3 rounded-md">Business</a>
            <a href="/news/tech" className="scale-75 md:scale-100 dark:text-white bg-red-700 hover:text-white p-3 rounded-md">Tech</a>
            <a href="/news/enviroment" className="scale-75 md:scale-100 dark:text-white bg-gray-700 hover:text-white p-3 rounded-md">Enviroment</a>
          </div>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="/news/12345">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image 
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
              src="/tech.jpg" 
              alt="Image Description"
                height={500}
                width={500}
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Tech
              </span>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-white text-md">Mphatso Mtogolo</h1>
                <span className="text-red-700 text-sm">12 Nov 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Cyber Securit
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Cyber security is essential in today's dynamic business landscape
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          <Ads/>

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="/news/12345">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image 
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
              src="/tech.png" 
              alt="Image Description"
                height={500}
                width={500}
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Tech
              </span>
            </div>

            <div className="mt-7">
            <div className="flex items-center justify-between mb-1">
                <h1 className="text-white text-md">Mphatso Mtogolo</h1>
                <span className="text-red-700 text-sm">12 Nov 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Agriculture Technology
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="/news/12345">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image 
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
              src="/tech2.jpeg" 
              alt="Image Description"
                height={500}
                width={500}
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Tech
              </span>
            </div>

            <div className="mt-7">
            <div className="flex items-center justify-between mb-1">
                <h1 className="text-white text-md">Mphatso Mtogolo</h1>
                <span className="text-red-700 text-sm">12 Nov 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Going Driverless
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Driverless cars are the future reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="/news/12345">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image 
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
              src="/tech.jpeg" 
              alt="Image Description"
                height={500}
                width={500}
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Tech
              </span>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between mb-1">
                  <h1 className="text-white text-md">Mphatso Mtogolo</h1>
                  <span className="text-red-700 text-sm">12 Nov 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Tech 4 Enviroment T4E
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('/curved2.jpg')]" href="/news/12345">
            <div className="w-full h-full bg-[#00000094] group relative flex flex-col">
              <div className="flex-auto p-4 md:p-6">
                <h3 className="text-xl text-white/[.9] group-hover:text-white">
                  <span className="font-bold">Advertise with us</span>
                  <p className='my-8'>Book a spot on our website to reach out to potential customers. We have 8,340 vistors a day.</p>
                </h3>
              </div>
              <div className="pt-0 p-4 md:p-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                  Visit the site
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" strokelinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
     );
}
 
export default Tech;