'use client';
import Image from "next/image";
import { useEffect } from "react";
import { BsHouse } from "react-icons/bs";
const Story = ({story}) => {
    useEffect(()=>{import('preline')},[]) 
    
    return ( 
    <div className="w-full mx-auto my-10 px-4 ">
        {
            !story?
            <div className=" w-ful flex flex-col items-center space-y-6 mb-8">
                <h1 className="text-3xl text-black dark:text-white text-center w-full mt-16">No stories found!</h1>
                <a href="/" className="text-white bg-red-700 p-4 w-5/6 md:w-1/3 space-x-4 rounded-lg flex items-center justify-center">
                <BsHouse color="#fff" size={20}/>
                <p>Back Home</p>
                </a>
            </div>
            :
            <article className="w-full py-6 shadow-md">
            
                {/* Author information */}
                <div className="mb-4 flex items-center">
                    <Image
                        src={"/bester.jpg"}
                        alt="Author Avatar"
                        width={60}
                        height={60}
                        className="rounded-full h-[60px] mr-4 border-red-700 border-[2px]"
                    />
                    <div>
                        <h1 className="text-red-800 font-semibold">Bester Kayaye</h1>
                        <p className="text-white">Editor</p>
                    </div>
                </div>
                
                <p className="dark:text-white mb-12 text-sm">
                    published on
                    <span className="text-red-600"> november 11, 2023</span>
                </p>

                <div className="relative w-full h-[50vh] md:h-[80vh] mb-4 rounded-md overflow-hidden">
                    <Image
                        src={story.image}
                        alt="Blog Post Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-4">{story.title}</h1>
                

                {/* Blog post content */}
                <div className="prose">
                <p>
                    {story.story}
                </p>
                {/* Add more content as needed */}
                </div>
            </article>
        }
    </div>
    );
}
 
export default Story;