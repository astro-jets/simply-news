// Import necessary modules
import Image from 'next/image';
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
          className="relative w-full h-full h-max-[70vh] overflow-hidden" // Set initial height using Tailwind classes
        >
            <Image src={'/escom.jpg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/kfc.jpg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad.png'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/vega.jpg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
         
         
         
         

          
        </Carousel>
        <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Advertisment
        </span>
      </div>
  );
}
 
export default Ads;