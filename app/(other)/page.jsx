// 'use client'
// import { useEffect, useState } from "react";
// import clientPromise from "@/lib/mongodb";

import clientPromise from "@/lib/mongodb";

// Components
// import Stories from './components/Stories';
// import AnnouncementBanner  from './components/AnnoucementBanner';
// import ContactForm from './components/ContactForm';
// import Slider from './components/Slider';
// import Ads from "./components/Ads";
// import Videos from "./components/Videos";

export default async function Home() {
  // const [restaurants,setRestaurants] = useState([]);
  // useEffect(() => {
  //   const loadPreline = async () => {
  //     await import('preline');
  //     await import('@preline/carousel');
  //   };
  //   loadPreline();

  //   (async()=>{
  //     const results = await fetch('http://localhost:3000/api/list')
  //     const resJson = await results.json();
  //     setRestaurants(resJson);
  //   })

// }, []);

  const rootLink = process.env.ROOT_LINK;
  let restaurants;
  const response = await fetch(`${rootLink}/api/list`,{cache:'no-cache'});
  if (!response.ok) {
    console.log(await response.text());
  } else {
      restaurants = await response.json();
  }
  return (
      restaurants?
      // <>
      //   <div className="flex flex-col md:space-x-2 md:flex-row h-full m-0">
      //     <div className="md:w-3/4 ">
      //       <Slider/>
      //     </div>
      //     <div className="md:w-2/4 h-[70vh] hidden md:flex">
      //       <Ads />
      //     </div>
      //   </div>
      //   <Stories/>
      //   <AnnouncementBanner />
      //   <Videos/>
      //   <ContactForm/>
      // </>
      <div className="grid">
        {
          restaurants.map((r)=>(
            <div className="card" key={r._id}>
              <div className="my-16">
                <h2>{r.name}</h2>
                <p className="text-white" >{r.cuisine}</p>
              </div>
            </div>
          ))
        }
      </div>
      :null
  )
}

// export async function getServerSideProps(context){
//   try{
//     await clientPromise;
//     return{
//       props:{isConnected:true},
//     }
//   }catch(e){
//     console.log(e);
//     return{
//       props:{isConnected:false},
//     }
//   }
// }
