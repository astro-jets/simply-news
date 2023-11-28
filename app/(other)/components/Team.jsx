import Image from "next/image";

const Team = () => {
    return ( 
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */ }
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our leadership</h2>
        </div>
        {/* End Title */ }

        {/* Team Members Grid*/ }
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <Image height={500} width={500} className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/bester.jpg" alt="Image Description"/>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Bester Kayaye
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Founder / CEO
              </p>
            </div>
          </div>
          {/* End Col */ }

          <div className="text-center">
            <Image height={500} width={500} className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/alex.jpg" alt="Image Description"/>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Alex Charlie
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                News Director
              </p>
            </div>
          </div>
          {/* End Col */ }

          <div className="text-center">
            <Image height={500} width={500} className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/chikondi.jpeg" alt="Image Description"/>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Chikondi Galeta
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Head of Marketing
              </p>
            </div>
          </div>
          {/* End Col */ }

          
          <div className="text-center">
            <Image height={500} width={500} className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/tamara.jpeg" alt="Image Description"/>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Tamara Zingale
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Accountant
              </p>
            </div>
          </div>
          {/* End Col */ }

          <div className="text-center">
            <Image height={500} width={500} className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/kelvin.jpg" alt="Image Description"/>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Kelvin Bapu
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                I.T Support
              </p>
            </div>
          </div>
          {/* End Col */ }
        </div>
        {/* Team Members End Grid */ }
      </div>
     );
}
 
export default Team;