const something = () => {
    return ( 
        
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
            {/* Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                <img className="rounded-xl" src="/team1.jpg" alt="Image Description"/>
                </div>
                {/* End Col */}

                <div className="col-span-3">
                <img className="rounded-xl" src="/team2.jpg" alt="Image Description"/>
                </div>
                {/* End Col */}

                <div className="col-span-5">
                <img className="rounded-xl" src="/team3.jpg" alt="Image Description"/>
                </div>
                {/* End Col */}
            </div>
            {/* End Grid */}
            </div>
            {/* End Col */}

            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Our team strives to give you the latest news
                </h2>
                <p className="text-gray-500">
                    Stay in line with the latest news accross the continent with the leading African news company.
                </p>
                </div>
                {/* End Title */}

                {/* List */}
                <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-red-50 text-red-600 dark:bg-red-800/30 dark:text-red-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {/* End Solid Check */}

                    <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Original Contnet</span> – more creativity
                    </span>
                </li>

                <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-red-50 text-red-600 dark:bg-red-800/30 dark:text-red-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {/* End Solid Check */}

                    <span className="text-sm sm:text-base text-gray-500 font-bold">
                    Spot on Advertisment
                    </span>
                </li>

                <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-red-50 text-red-600 dark:bg-red-800/30 dark:text-red-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {/* End Solid Check */}

                    <span className="text-sm sm:text-base text-gray-500 font-bold">
                    Wide Audience Reach
                    </span>
                </li>

                </ul>
                {/* End List */}
            </div>
            </div>
            {/* End Col */}
        </div>
        {/* End Grid */}
        </div>
     );
}
 
export default something;