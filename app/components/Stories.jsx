import Image from "next/image";
const Stories = () => {
    return ( 
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Stories</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with the latest stories.</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image 
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
              src="/4.png" 
              alt="Image Description"
                height={500}
                width={500}
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Sports
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Big Bullets win Big.
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image height={500}
                width={500} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/palliative.jpg" alt="Image Description"/>
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Sponsored
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Palliative Care Matters
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Mlambe Health and Social Trust, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image height={500}
                width={500} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/malemia.jpg" alt="Image Description"/>
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Sponsored
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Youth Devoted for Change
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image height={500}
                width={500} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/khuda.webp" alt="Image Description"/>
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Sports
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Khuda Drama Again
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image height={500}
                width={500} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform 
              duration-500 ease-in-out rounded-xl" src="/2.png" alt="Image Description"/>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                New Chapter for Silver
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-red-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('/curved2.jpg')]" href="#">
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
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
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
 
export default Stories;