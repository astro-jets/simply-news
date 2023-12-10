export const registerNewBlog = async(formData)=>{
    try{
        const response = await fetch("/api/blogs/new",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData)
        });

        const finalData = response.json();
        return finalData;
    }
    catch(err){
        console.log(`Error registering blog ${err.message}`);
    }
}