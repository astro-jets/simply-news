import Story from "@/app/(other)/components/Story";


const id = async ({ params }) => {
    const id = params.id;
    const rootLink = process.env.ROOT_LINK;
    const response = await fetch(`${rootLink}/api/blogs/single/?id=${id}`,
    {
        cache:'no-cache'
    });
    const story = await response.json();
    
    return ( 
        <>
            <Story story={story}/>
        </>
     );
}
 
export default id;