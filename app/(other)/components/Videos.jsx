import { FaPlayCircle } from "react-icons/fa";

const Videos = () => {
    return ( 
        <div class="bg-gray-100 dark:bg-[#111] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Latest Videos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Video Card */}
      <div class="flex flex-col bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden h-96">
        <div class="relative h-[80%] overflow-hidden">
          <img class="w-full h-full object-cover" src="/v1.jpg" alt="Video Thumbnail"/>
          <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2">
            <FaPlayCircle size={40} color="#fff"/>
          </button>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">2023 Marketing Trends</h3>
          <p class="text-sm text-gray-600 dark:text-red-600">Published on June 23, 2023</p>
        </div>
      </div>
      
      <div class="flex flex-col bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden h-96">
        <div class="relative h-[80%] overflow-hidden">
          <img class="w-full h-full object-cover" src="/v2.jpg" alt="Video Thumbnail"/>
          <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2">
            <FaPlayCircle size={40} color="#fff"/>
          </button>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">2023 Marketing Trends</h3>
          <p class="text-sm text-gray-600 dark:text-red-600">Published on June 23, 2023</p>
        </div>
      </div>

      <div class="flex flex-col bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden h-96">
        <div class="relative h-[80%] overflow-hidden">
          <img class="w-full h-full object-cover" src="/v4.jpg" alt="Video Thumbnail"/>
          <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2">
            <FaPlayCircle size={40} color="#fff"/>
          </button>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">2023 Marketing Trends</h3>
          <p class="text-sm text-gray-600 dark:text-red-600">Published on June 23, 2023</p>
        </div>
      </div>

      <div class="flex flex-col bg-white dark:bg-[#333] rounded-lg shadow-lg overflow-hidden h-96">
        <div class="relative h-[80%] overflow-hidden">
          <img class="w-full h-full object-cover" src="/v3.jpg" alt="Video Thumbnail"/>
          <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2">
            <FaPlayCircle size={40} color="#fff"/>
          </button>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">2023 Marketing Trends</h3>
          <p class="text-sm text-gray-600 dark:text-red-600">Published on June 23, 2023</p>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default Videos;