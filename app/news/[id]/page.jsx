"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

const BlogPost = () => {
    useEffect(()=>{import("preline")},[])
  return (
    <div className="w-full mx-auto my-10 px-4 ">
      <article className="w-full py-6 shadow-md">
      
        {/* Author information */}
        <div className="mb-4 flex items-center">
          <Image
            src="/team9.jpg"
            alt="Author Avatar"
            width={48}
            height={48}
            className="rounded-full mr-4"
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
        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
          <Image
            src="/malemia.jpg"
            alt="Blog Post Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-4">Youth mkaking a change</h1>
        

        {/* Blog post content */}
        <div className="prose">
          <p>
          Youth Making a Change is a transformative initiative driven by the passion and dedication of young individuals in the medical field. With a commitment to making a positive impact, our team works tirelessly to address healthcare challenges and contribute to the betterment of society. Through collaborative efforts and innovative approaches, we strive to improve access to healthcare, raise awareness about critical issues, and empower the youth to be catalysts for change.
          Our mission is rooted in the belief that every individual, regardless of their background, deserves quality healthcare. We actively engage in community outreach, organize educational programs, and collaborate with healthcare professionals to create sustainable solutions. By fostering a culture of empathy, collaboration, and continuous learning, Medical Youth Making a Change aims to inspire the next generation of medical leaders dedicated to making a lasting difference in the world.
          Join us on this journey as we work towards a healthier and more equitable future, driven by the passion and commitment of the youth making a change!</p>
          {/* Add more content as needed */}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
