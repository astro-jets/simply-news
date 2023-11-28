// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const Ads = () => {
    return (
      <div className="relative rounded-xl overflow-hidden">
        <Carousel
          showArrows={true}
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
            <img src="escom.jpg" alt="Image 1" className="w-full h-full object-cover" />
            <img src="kfc.jpg" alt="Image 2" className="w-full h-full object-cover" />
            <img src="vega.jpg" alt="Image 2" className="w-full h-full object-cover" />
            <img src="ad.png" alt="Image 2" className="w-full h-full object-cover" />

          
        </Carousel>
        <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Advertisment
        </span>
      </div>
  );
}
 
export default Ads;