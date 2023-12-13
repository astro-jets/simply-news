import Stories from "../../components/Stories";

const Category = async ({ params }) => {
    const category = params.category;
    
    const response = await fetch(`http://localhost:3000/api/blogs/category/?category=${category}`,
    {
        cache:'no-cache'
    });
    const stories = await response.json();
    
    return ( 
        <Stories stories={stories.data}/>
     );
}
 
export default Category;