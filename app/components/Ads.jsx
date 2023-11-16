const Ads = () => {
    return ( 
        <div data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true}' className="relative">
            <div className="hs-carousel relative overflow-hidden w-full bg-blue-300 h-[350px] rounded-lg p-0">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/kfc.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/escom.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/ad.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="h-full relative">
                        <img src="/malemia.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Ads;