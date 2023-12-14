import Stories from "../../components/Stories";

const Category = async ({ params }) => {
    const category = params.category;
    const rootLink = process.env.ROOT_LINK;
    const response = await fetch(`${rootLink}/api/blogs/category/?category=${category}`,
    {
        cache:'no-cache'
    });
    const stories = await response.json();
    console.log("Stories by category => ",stories)
    
    return ( 
        <>
            <Stories stories={stories}/>
        </>
     );
}
 
export default Category;