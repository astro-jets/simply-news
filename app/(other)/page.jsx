import HomePage from "./components/HomePage";

export default async function Home() {
  const rootLink = process.env.ROOT_LINK;
  let blogs;
  const response = await fetch(`${rootLink}/api/list`,{cache:'no-cache'});
  if (!response.ok) {
    console.log(await response.text());
  } else {
      blogs = await response.json();
  }
  return (
    <HomePage latestStories={blogs} />  
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
