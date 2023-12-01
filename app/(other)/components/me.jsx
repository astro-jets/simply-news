const medium = () => {
    return ( 
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="thumbnail.jpg" alt="Blog Thumbnail"/>
            <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                <img className="w-10 h-10 rounded-full mr-4" src="avatar.jpg" alt="Avatar"/>
                <div>
                    <p className="text-gray-700 text-sm">Date</p>
                </div>
                </div>
                <div className="font-bold text-xl mb-2">Blog Title</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis ac nisl bibendum malesuada.
                </p>
            </div>
        </div>
     );
}
 
export default medium;