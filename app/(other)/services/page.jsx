"use client"

import { useEffect } from 'react';
import { BsNewspaper } from 'react-icons/bs'; 
import { LiaChessSolid, LiaPenAltSolid  } from "react-icons/lia";

const Service = () => {
  useEffect(()=>{
    import('preline')
  },[])
  return (
    <section className="px-4 md:p-0 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Here is what we offer
              </p>
              {/* <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="News Coverage"
            details="We provide up-to-the-minute coverage of corporate developments, mining, energy, financial markets, technological innovations, and industry trends, offering a comprehensive overview of the African business landscape."
            icon={
              <BsNewspaper size={50} className='text-black dark:text-white'/>
            }
          />
          <ServiceCard
            title="In-Depth Analysis"
            details="Our team of experienced analysts goes beyond the headlines, providing in-depth insights, interviews, and features that offer a nuanced understanding of the forces shaping the corporate world."
            icon={
              <LiaChessSolid size={40} className='text-black dark:text-white'/>
            }
          />
          <ServiceCard
            title="Sector-Specific Reports"
            details="We specialize in delivering sector-specific reports, offering a granular view of industries ranging from finance and technology to agriculture and energy."
            icon={
              <LiaPenAltSolid size={40} className='text-black dark:text-white'/>
            }
          />
          <ServiceCard
            title="Media Solutions"
            details="Beyond news, we offer a suite of media-related services including Public Relations (PR), Advertising, Content Development and Creation, Documentaries, and more. Our experienced team ensures that your corporate message reaches the right audience through various multimedia channels."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
                  fill="white"
                />
                <path
                  d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <div className="text-black dark:text-white mb-9 rounded-[20px] bg-white  p-10 shadow-2 hover:shadow-lg dark:bg-[#1d1d1d] md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
