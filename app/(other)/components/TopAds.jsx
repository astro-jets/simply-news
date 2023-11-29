"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const TopAds = () => {
    return ( 
        <div className="h-24 md:h-32 w-full bg-black">
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
        className="relative h-[339px] md:h-full overflow-hidden" // Set initial height using Tailwind classes
        >
            <div className="w-full h-24 flex items-center justify-center bg-red-800 text-white">
            Slide 1
            </div>
            <div className="w-full h-24 flex items-center justify-center text-white">
            Slide 2
            </div>
            <div className="w-full h-24 flex items-center justify-center text-white">
            Slide 3
            </div>
            </Carousel>
        </div>
     );
}
 
export default TopAds;