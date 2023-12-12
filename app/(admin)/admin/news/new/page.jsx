"use client"

import { registerNewBlog } from "@/services/Blogs";
import { useState } from "react";

// Initial state
const initialFormData = {
    title:'',
    category:'',
    story:''
}

const newPost = () => {
    const [formData, setFormData] = useState(initialFormData);
    

    async function handleSubmit(){
        const data = await registerNewBlog(formData);
        console.log(data);
    }
    
    return ( 
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
            <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Create new Post
            </h1>
            </div>

            <div className="mt-12">
            {/* Form */}
            <form>
                <div className="grid gap-4 lg:gap-6">
                    <div>
                        <label for="title" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Blog Title</label>
                        <input type="text" name="title" id="title" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    title:e.target.value
                                })
                            }}
                            value={FormData.title}
                        />
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                            <label for="blog-image" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Blog Image</label>
                            <input type="file" name="blog-image" id="blog-image" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                        </div>

                        <div>
                            <label for="category" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Blog Category</label>
                            <input type="text" name="category" id="category" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    category:e.target.value
                                })
                            }}
                            value={FormData.category}
                            />
                        </div>
                    </div>
                    {/* End Grid */}

                    <div>
                        <label for="story" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Story</label>
                        <textarea id="story" name="story" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    story:e.target.value
                                })
                            }}
                            value={FormData.story}
                        ></textarea>
                    </div>

                </div>
                {/* End Grid */}

                <div className="mt-6 grid">
                    <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={handleSubmit}
                    >Post Blog</button>
                </div>
            </form>
            {/* End Form */}
            </div>
        </div>
        </div>
     );
}
 
export default newPost;