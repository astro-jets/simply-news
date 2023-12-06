import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const Videos = () => {
    return ( 
        <div class="bg-gray-100 dark:bg-[#111] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Latest Videos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Video Card */}
      <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          {/* 16:9 aspect ratio (h:w = 9:16) */}
          <iframe
            src="https://www.youtube.com/embed/EkCUWBuTP2g"
            title="Doing Business in Malawi"
            frameborder="0"
            className="absolute top-0 left-0 w-full h-full max-h-[315px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          {/* 16:9 aspect ratio (h:w = 9:16) */}
          <iframe
            src="https://www.youtube.com/embed/HNTro5dTjx4"
            title="Mining in Malawi"
            frameborder="0"
            className="absolute top-0 left-0 w-full h-full max-h-[315px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden w-full">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          {/* 16:9 aspect ratio (h:w = 9:16) */}
          <iframe
            src="https://www.youtube.com/embed/NsSZlWb7FPk"
            title="Mining in Malawi"
            frameborder="0"
            className="absolute top-0 left-0 w-full h-full max-h-[315px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

  </div>
</div>

     );
}
 
export default Videos;