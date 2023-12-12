export const registerNewBlog = async(formData)=>{
    try{
        const response = await fetch("/api/blogs/new",{
            method:"POST",
            headers:{"content-type":"application/json"},
            cache:'no-store',
            body:JSON.stringify(formData)
        });

        const finalData = response.json();
        return finalData;
    }
    catch(err){
        console.log(`Error registering blog ${err.message}`);
    }
}

export const getBlogByCategory = async(category)=>{
    try{
        const response = await fetch(`http://localhost:3000/api/blogs/category/?category=${category}`,
        { 
            method:"GET",
            cache:"no-store"
        });
        const blogs = await response.json();
        console.log(blogs)
        return blogs;
    }
    catch(err){
        console.log("Error fetching blogs",err.message)
    }
}