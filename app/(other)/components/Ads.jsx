"use client"
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
            <Image src={'/ad.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad2.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad3.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad4.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad5.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad6.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad7.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad8.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad9.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad10.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad11.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
            <Image src={'/ad12.jpeg'} layout='responsive' width={500} height={500} alt='malemia' className='w-full max-h-[70vh]'/>
         
         
         
         

          
        </Carousel>
      </div>
  );
}
 
export default Ads;