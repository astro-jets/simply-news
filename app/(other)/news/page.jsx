'use client';
import { useEffect } from "react";

import Stories from "../components/Stories";

const News = () => {
    useEffect(() => {import('preline')}, []);
    return (             
        <Stories/>
     );
}
 
export default News;