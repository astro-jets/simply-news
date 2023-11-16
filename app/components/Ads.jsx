const Ads = () => {
    return ( 
        <div data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true}' className="relative">
            <div className="hs-carousel relative overflow-hidden w-full bg-blue-300 h-[350px] rounded-lg p-0">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/4.png" alt="" className="w-full h-full object-cover" />
                        <span className="bottom-4 absolute text-center bg-[#111111b2] text-2xl md:text-4xl w-full h-12 transition duration-700 text-white">
                            Bullets win it again.
                        </span>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/palliative.jpg" alt="" className="w-full h-full object-cover" />
                        <span className="bottom-4 absolute text-center bg-[#111111b2] text-2xl md:text-4xl w-full h-12 transition duration-700 text-white">
                            New hope for Palliative Care.
                        </span>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/malemia.jpg" alt="" className="w-full h-full object-cover" />
                        <span className="bottom-4 absolute text-center bg-[#111111b2] text-2xl md:text-4xl w-full h-12 transition duration-700 text-white">
                            Youth doing it Big.
                        </span>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/malemia.jpg" alt="" className="w-full h-full object-cover" />
                        <span className="bottom-4 absolute text-center bg-[#111111b2] text-2xl md:text-4xl w-full h-12 transition duration-700 text-white">
                            Youth doing it Big.
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Ads;