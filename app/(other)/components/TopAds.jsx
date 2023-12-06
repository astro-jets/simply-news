"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const TopAds = () => {
    return ( 
        <div className="max-h-[339px] md:h-full w-full bg-black m-0">
            <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000} // Set autoplay interval to 5 seconds
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={false}
        centerSlidePercentage={100}
        showThumbs={false}
        className="relative max-h-[339px] md:h-full overflow-hidden m-0" // Set initial height using Tailwind classes
        >
            <div className="w-full h-full flex items-center justify-center text-white">
                <img src="/ta1.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className="w-full h-full flex items-center justify-center text-white">
                <img src="/ta2.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            </Carousel>
        </div>
     );
}
 
export default TopAds;