// "use client";   
import Stories from "../../components/Stories";

const Category = ({ params }) => {
    const category = params.category;

    return ( 
        <Stories category={category}/>
     );
}
 
export default Category;