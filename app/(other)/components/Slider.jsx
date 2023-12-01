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
      className="relative h-[50vh] md:h-[70vh] overflow-hidden" // Set initial height using Tailwind classes
    >
      <div className='w-full h-full md:h-[70vh]'>
        <img src="/2.png" alt="Image 1" className="w-full h-full object-cover md:object-top" />
        <p className="legend relative text-center text-white bg-gray-900  p-2">New chapter for silver strikers</p>
      </div>

      <div className='w-full h-full md:h-[70vh]'>
        <Image width={500} height={500} src="/palliative.jpg" alt="Image 2" className="w-full h-full object-cover md:object-top" />
        <p className="legend text-center text-white bg-gray-900  p-2">Palliative care matters</p>
      </div>
      
      <div className='w-full h-full md:h-[70vh]'>
        <Image width={500} height={500} src="/4.png" alt="Image 2" className="w-full h-full object-cover md:object-top" />
        <p className="legend text-center text-white bg-gray-900  p-2">Bullets win agian</p>
      </div>
    </Carousel>
  );
}

export default Slider;
