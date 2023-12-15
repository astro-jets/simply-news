import Stories from "../../components/Stories";

const Category = async ({ params }) => {
    const category = params.category;
    const rootLink = process.env.ROOT_LINK;
    const response = await fetch(`${rootLink}/api/blogs/category/?category=${category}`,
    {
        next:{revalidate:1}
    });
    const stories = await response.json();
    
    return ( 
        <>
            <Stories stories={stories}/>
        </>
     );
}
 
export default Category;