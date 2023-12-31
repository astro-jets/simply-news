"use client"
// Import necessary modules
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Your Next.js component
function Slider() {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Set autoplay interval to 5 seconds
      stopOnHover={true}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={false}
      centerMode={false}
      centerSlidePercentage={100}
      showThumbs={false}
      className="relative h-full max-h-[50vh] md:max-h-[70vh] overflow-hidden" // Set initial height using Tailwind classes
    >
      <div className='w-full h-full md:h-[70vh]'>
        <img src="/2.png" alt="Image 1" className="w-full h-full object-cover md:object-top" />
        <p className="legend relative">
          <span className='text-white absolute bottom-0 left-0 p-2'>New chapter for silver strikers</span>
        </p>
      </div>

      <div className='w-full h-full md:h-[70vh]'>
        <Image width={500} height={500} src="/palliative.jpg" alt="Image 2" className="w-full h-full object-cover md:object-top" />
        <p className="legend relative">
          <span className='text-white absolute bottom-0 left-0 p-2'>Palliative care matters</span>
        </p>
      </div>
      
      <div className='w-full h-full md:h-[70vh]'>
        <Image width={500} height={500} src="/4.png" alt="Image 2" className="w-full h-full object-cover md:object-top" />
        <p className="legend relative">
          <span className='text-white absolute bottom-0 left-0 p-2'>Bullets Win again</span>
        </p>
      </div>
    </Carousel>
  );
}

export default Slider;
